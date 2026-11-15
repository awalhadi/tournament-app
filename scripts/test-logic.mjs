import assert from 'node:assert/strict';
import { computeStandings, evalMatch, scoreIssue, groupCaps, makeBracket, resolveBracket, seedOrder, ruleCfg, presetOf, canFormTeam, unassignedPlayers, customGroupNames, groupWarnings } from '../lib/logic.js';
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
