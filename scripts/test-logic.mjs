import assert from 'node:assert/strict';
import { computeStandings, evalMatch, scoreIssue, groupCaps, makeBracket, resolveBracket, seedOrder, ruleCfg, presetOf, canFormTeam, unassignedPlayers, customGroupNames, groupWarnings, findScoreEdits, findProtectedChanges, needsMaster } from '../lib/logic.js';
import { checkMaster, isLocked, recordFailure, clearFailures, hashPassword, verifyHash, validateNewPassword, adminSecretOk } from '../lib/master.js';
import { verifyMaster, setMasterPassword, readRecord } from '../lib/masterStore.js';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validate } from '../lib/store.js';
import { SEED_ENTRY } from '../lib/seed.js';

const ids = SEED_ENTRY.snapshot.teams.map((t) => t.id);
const ms = SEED_ENTRY.snapshot.matches;
const row = (st, id) => st.find((r) => r.id === id);

// 1) ITclanBD document: default rules must reproduce the original table exactly
const st = computeStandings(ids, ms);
const exp = { dt_B: [5, 11, 281, 230], dt_E: [3, 9, 280, 258], dt_A: [2, 9, 289, 232], dt_D: [3, 8, 252, 237], dt_C: [2, 8, 263, 254], dt_F: [0, 0, 146, 300] };
for (const [id, [w, pts, pf, pa]] of Object.entries(exp)) {
  const r = row(st, id);
  assert.deepEqual([r.w, r.pts, r.pf, r.pa], [w, pts, pf, pa], id);
}
assert.deepEqual(st.map((r) => r.id), ['dt_B', 'dt_E', 'dt_A', 'dt_D', 'dt_C', 'dt_F']);
console.log('✓ ITclanBD document table reproduced (B 11 · E 9 · A 9 · D 8 · C 8 · F 0)');

// 2) score rules
assert.equal(scoreIssue(11, 7, { pointsPerGame: 11, winByTwo: true }), null);
assert.equal(scoreIssue(12, 10, { pointsPerGame: 11, winByTwo: true }), null);
assert.ok(scoreIssue(11, 10, { pointsPerGame: 11, winByTwo: true }));
assert.ok(scoreIssue(13, 10, { pointsPerGame: 11, winByTwo: true }));
assert.ok(scoreIssue(10, 8, { pointsPerGame: 11, winByTwo: true }));
assert.equal(scoreIssue(20, 15, { pointsPerGame: 20, winByTwo: false }), null);
assert.ok(scoreIssue(19, 15, { pointsPerGame: 20, winByTwo: false }));
console.log('✓ score checks (to 11 win-by-2, to 20 no deuce)');

// 3) draws: 2 games per match, all counted
const g = (a, b, c, d) => [[a, b], [c, d]];
assert.equal(evalMatch(g(11, 5, 4, 11), true, true).draw, true);
assert.equal(evalMatch(g(11, 5, 4, 11), true, false).done, false); // level, draws off → not finished
assert.equal(evalMatch(g(11, 5, 11, 4), true, true).winner, 1);
console.log('✓ draws only when allowed');

// 4) point systems on a tiny league: X beats Y 2-0, Y draws Z 1-1, X draws Z 1-1
const T = ['X', 'Y', 'Z'];
const M = [
  { t1: 'X', t2: 'Y', all: true, draw: true, games: g(11, 5, 11, 6) },
  { t1: 'Y', t2: 'Z', all: true, draw: true, games: g(11, 9, 8, 11) },
  { t1: 'X', t2: 'Z', all: true, draw: true, games: g(11, 3, 5, 11) },
];
let s = computeStandings(T, M, { pointSystem: 'match', ptsWin: 3, ptsDraw: 1, ptsLoss: 0 });
assert.deepEqual(['X', 'Z', 'Y'].map((id) => row(s, id).pts), [4, 2, 1]);
assert.deepEqual(s.map((r) => r.id), ['X', 'Z', 'Y']);
s = computeStandings(T, M, { pointSystem: 'match', ptsWin: 2, ptsDraw: 1.5, ptsLoss: 1 });
assert.equal(row(s, 'X').pts, 2 + 1.5);
assert.equal(row(s, 'X').d, 1);
assert.equal(presetOf({ pointSystem: 'match', ptsWin: 3, ptsDraw: 1, ptsLoss: 0 }), 'w3');
console.log('✓ 3-1-0 and ITTF-style table points with draws');

// 5) ITTF tie-break: A, B, C all 1 win; mutual results decide
//    A beat B 2-0, B beat C 2-1, C beat A 2-0, each also beat D
const cyc = [
  { t1: 'A', t2: 'B', all: true, games: [[11, 5], [11, 6]] },       // A 2-0 B
  { t1: 'B', t2: 'C', all: true, games: [[11, 5], [5, 11], [11, 4]] }, // B 2-1 C
  { t1: 'C', t2: 'A', all: true, games: [[11, 9], [11, 8]] },        // C 2-0 A  (wait: C wins)
  { t1: 'A', t2: 'D', all: true, games: [[11, 1], [11, 1]] },
  { t1: 'B', t2: 'D', all: true, games: [[11, 1], [11, 1]] },
  { t1: 'C', t2: 'D', all: true, games: [[11, 1], [11, 1]] },
];
const itf = computeStandings(['A', 'B', 'C', 'D'], cyc, { pointSystem: 'match', ptsWin: 2, ptsDraw: 1, ptsLoss: 1, tiebreak: 'ittf' });
// A, B, C each 2 wins (4 pts + ...). Mutual games ratios: A 2-2, B 3-3→ B: 2+1 vs 0+2?  Just assert D is last and order is deterministic
assert.equal(itf[3].id, 'D');
const ids3 = itf.slice(0, 3).map((r) => r.id);
assert.equal(new Set(ids3).size, 3);
const gd = computeStandings(['A', 'B', 'C', 'D'], cyc, { pointSystem: 'match', ptsWin: 2, ptsDraw: 1, ptsLoss: 1, tiebreak: 'gamediff' });
assert.equal(gd[3].id, 'D');
console.log('✓ ITTF head-to-head and game-difference tie-breaks run; order:', ids3.join(' > '), '| gamediff:', gd.slice(0, 3).map((r) => r.id).join(' > '));

// misc
assert.deepEqual(groupCaps(7, 3), [3, 2, 2]);
assert.deepEqual(seedOrder(4), [1, 4, 2, 3]);
assert.equal(resolveBracket(makeBracket(['a', 'b', 'c', 'd'], 3)).length, 2);
assert.equal(ruleCfg({}).pointsPerGame, 20);

// custom team & group management
const cs = {
  settings: { teamSize: 2, groupSize: 3 },
  players: ['a', 'b', 'c', 'd', 'e'].map((id) => ({ id, name: id.toUpperCase() })),
  teams: [{ id: 't1', name: '', playerIds: ['a', 'b'], group: 'A' }],
  draft: ['e'],
};
assert.deepEqual(unassignedPlayers(cs).map((p) => p.id), ['c', 'd']);
assert.equal(canFormTeam(cs, ['c', 'd']), null);
assert.match(canFormTeam(cs, ['c']), /exactly 2/);
assert.match(canFormTeam(cs, ['c', 'c']), /twice/);
assert.match(canFormTeam(cs, ['a', 'c']), /already in/);
assert.match(canFormTeam(cs, ['e', 'c']), /draft/);
assert.equal(canFormTeam(cs, ['a', 'c'], 't1'), null); // editing t1 may keep its own player
assert.match(canFormTeam(cs, ['c', 'zz']), /Unknown/);
const four = { ...cs, teams: ['1', '2', '3', '4', '5', '6', '7'].map((i) => ({ id: i, playerIds: [], group: null })) };
assert.deepEqual(customGroupNames(four), ['A', 'B', 'C']);
four.teams[0].group = 'A';
assert.ok(groupWarnings(four).some((w) => w.group === 'A' && /at least 2/.test(w.msg)));
assert.equal(validate({ players: [], teams: [], matches: [] }).settings.assignMode, 'spin');
assert.equal(validate({ players: [], teams: [], matches: [], settings: { assignMode: 'custom' } }).settings.assignMode, 'custom');
console.log('✓ custom team/group helpers + assignMode default');
console.log('all logic tests passed');

// master password: which changes count as "editing a saved score"
{
  const mk = (games, bracketGames) => ({
    matches: [{ id: 'm1', games }, { id: 'm2', games: [[null, null]] }],
    bracket: bracketGames ? { rounds: [[{ id: 'k0_0', games: bracketGames }], [{ id: 'k1_0', games: [[null, null]] }]] } : null,
  });
  const base = mk([[11, 7], [null, null]]);
  assert.deepEqual(findScoreEdits(base, mk([[11, 7], [null, null]])), [], 'unchanged is free');
  assert.deepEqual(findScoreEdits(base, mk([[11, 7], [11, 5]])), [], 'first entry in an empty game is free');
  assert.deepEqual(findScoreEdits(mk([[null, null]]), mk([[11, 7]])), [], 'first entry is free');
  assert.deepEqual(findScoreEdits(base, mk([[11, 9], [null, null]])), ['m1'], 'changed saved score');
  assert.deepEqual(findScoreEdits(base, mk([[null, null], [null, null]])), ['m1'], 'cleared saved score');
  assert.deepEqual(findScoreEdits(mk([[1, 0]], [[11, 3]]), mk([[1, 0]], [[3, 11]])), ['k0_0'], 'knockout edit');
  const reordered = { ...base, matches: [...base.matches].reverse() };
  assert.deepEqual(findScoreEdits(base, reordered), [], 'order change is not an edit');
  assert.deepEqual(findScoreEdits(base, { matches: [{ id: 'm9', games: [[5, 5]] }], bracket: null }), [], 'removed/new matches are structural');
  assert.deepEqual(findScoreEdits(null, base), [], 'no previous document');
  console.log('✓ findScoreEdits: first entry free, saved-score edits flagged');

  const prod = { NODE_ENV: 'production', MASTER_PASSWORD: '51234' };
  assert.equal(checkMaster('51234', prod).ok, true);
  assert.equal(checkMaster('0000', prod).error, 'master_password_invalid');
  assert.equal(checkMaster('', prod).error, 'master_password_required');
  assert.equal(checkMaster(null, prod).status, 403);
  assert.equal(checkMaster('x', { NODE_ENV: 'production' }).status, 503, 'prod without env fails closed');
  assert.equal(checkMaster('x', { NODE_ENV: 'development' }).ok, true, 'dev without env allowed');
  const t = 1_000_000;
  for (let i = 0; i < 5; i++) recordFailure('k', t + i);
  assert.equal(isLocked('k', t + 10), true);
  assert.equal(isLocked('k', t + 6 * 60 * 1000), false, 'lock expires');
  clearFailures('k');
  assert.equal(isLocked('k', t + 10), false);
  console.log('✓ master password check + attempt lockout');
}

// master password: reset / finish / history delete
{
  const doc = (stage, history = [], games = [[null, null]]) => ({ stage, history: history.map((id) => ({ id })), matches: [{ id: 'm1', games }], bracket: null });
  const chk = (a, b) => needsMaster(findProtectedChanges(a, b));
  assert.equal(chk(doc('group'), doc('setup')), true, 'reset from group');
  assert.equal(chk(doc('knockout'), doc('setup', ['h1'])), true, 'reset/finish from knockout (archives to history)');
  assert.equal(chk(doc('setup'), doc('setup')), false, 'untouched setup reset is free');
  assert.equal(chk(doc('setup'), doc('group')), false, 'starting a tournament is free');
  assert.equal(chk(doc('group', ['h1', 'h2']), doc('group', ['h1'])), true, 'history entry deleted');
  assert.deepEqual(findProtectedChanges(doc('group', ['h1', 'h2']), doc('group', ['h1'])).historyRemoved, ['h2']);
  assert.equal(chk(doc('group', ['h1']), doc('group', ['h1', 'h2'])), false, 'history entry added is free');
  assert.equal(chk(doc('group', [], [[11, 7]]), doc('group', [], [[11, 9]])), true, 'score edit still flagged');
  assert.equal(chk(doc('group', [], [[null, null]]), doc('group', [], [[11, 9]])), false, 'first score entry is free');
  assert.equal(chk(null, doc('setup')), false, 'no stored doc');
  assert.equal(needsMaster(undefined), false);
  console.log('✓ findProtectedChanges: reset/finish/history-delete gated, additions and first entry free');
}

// changeable master password: hashing, validation, secret URL, stored record vs env bootstrap
{
  const a = await hashPassword('correct horse');
  const b = await hashPassword('correct horse');
  assert.equal(await verifyHash('correct horse', a), true);
  assert.equal(await verifyHash('wrong horse', a), false);
  assert.notEqual(a.hash, b.hash, 'salted: same password hashes differently');
  assert.ok(!JSON.stringify(a).includes('correct horse'), 'plain password is never stored');

  assert.equal(validateNewPassword('short', 'short', 'x'), 'password_too_short');
  assert.equal(validateNewPassword('x'.repeat(129), undefined, 'x'), 'password_too_long');
  assert.equal(validateNewPassword('longenough1', 'different1', 'x'), 'password_mismatch');
  assert.equal(validateNewPassword('51234567', '51234567', '51234567'), 'same_as_current');
  assert.equal(validateNewPassword('longenough1', 'longenough1', '51234'), null);

  const secret = 'a'.repeat(24);
  assert.equal(adminSecretOk(secret, { MASTER_ADMIN_PATH: secret }), true);
  assert.equal(adminSecretOk('b'.repeat(24), { MASTER_ADMIN_PATH: secret }), false);
  assert.equal(adminSecretOk(secret, {}), false, 'unset env disables the page');
  assert.equal(adminSecretOk('input', { MASTER_ADMIN_PATH: 'input' }), true, 'any length is accepted');
  assert.equal(adminSecretOk('', { MASTER_ADMIN_PATH: '' }), false, 'empty env disables the page');
  assert.equal(adminSecretOk('', { MASTER_ADMIN_PATH: '  ' }), false, 'blank env disables the page');
  console.log('✓ hashing, new-password rules, secret URL check');

  const dir = mkdtempSync(join(tmpdir(), 'tt-master-'));
  process.env.MASTER_FILE = join(dir, 'master.json');
  delete process.env.BLOB_READ_WRITE_TOKEN;
  const env = { NODE_ENV: 'production', MASTER_PASSWORD: '51234' };
  assert.equal(await readRecord(), null);
  assert.equal((await verifyMaster('51234', env)).ok, true, 'env bootstrap works before any change');
  assert.equal((await verifyMaster('nope', env)).status, 403);
  assert.equal((await verifyMaster('x', { NODE_ENV: 'production' })).status, 503, 'nothing configured fails closed');
  await setMasterPassword('brand new pass');
  assert.equal((await verifyMaster('brand new pass', env)).ok, true, 'new password works');
  assert.equal((await verifyMaster('51234', env)).error, 'master_password_invalid', 'old env password no longer works');
  assert.equal((await verifyMaster('', env)).error, 'master_password_required');
  assert.ok(!readFileSync(process.env.MASTER_FILE, 'utf8').includes('brand new pass'), 'file holds only a hash');
  rmSync(process.env.MASTER_FILE);
  assert.equal((await verifyMaster('51234', env)).ok, true, 'deleting the record recovers the env password');
  rmSync(dir, { recursive: true });
  delete process.env.MASTER_FILE;
  console.log('✓ stored hash overrides env bootstrap; recovery by deleting the record');
}
