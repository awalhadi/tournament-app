// Pure tournament logic: no DOM here, so it can be unit-tested in Node.

export const letters = (i) => String.fromCharCode(65 + i);

export function rand(n) {
  const u = new Uint32Array(1);
  crypto.getRandomValues(u);
  return u[0] % n;
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rand(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const uid = (p) => p + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-3);

/** Balanced group capacities: 7 teams, size 3 -> [3,2,2] (never leaves a lone team). */
export function groupCaps(n, size) {
  if (n <= 0) return [];
  const g = Math.max(1, Math.ceil(n / Math.max(2, size)));
  const base = Math.floor(n / g);
  const rem = n % g;
  return Array.from({ length: g }, (_, i) => base + (i < rem ? 1 : 0));
}

export const pow2floor = (n) => {
  let p = 1;
  while (p * 2 <= n) p *= 2;
  return p;
};

/* ---------------- names ---------------- */

export function playerName(state, id) {
  return state.players.find((p) => p.id === id)?.name ?? '?';
}

export function teamName(state, team) {
  if (!team) return 'TBD';
  if (team.name) return team.name;
  const n = team.playerIds.map((id) => playerName(state, id)).join(' + ');
  return n || 'Empty team';
}

export const getTeam = (state, id) => state.teams.find((t) => t.id === id);

/* ---------------- custom (manual) team & group management ---------------- */

/** Players who are in no team and not in the current draft. */
export function unassignedPlayers(state) {
  const used = new Set(state.teams.flatMap((t) => t.playerIds));
  return state.players.filter((p) => !used.has(p.id) && !state.draft.includes(p.id));
}

/** null when `playerIds` can form a team (optionally ignoring the team being edited), else an error message. */
export function canFormTeam(state, playerIds, ignoreTeamId = null) {
  const size = state.settings.teamSize;
  if (new Set(playerIds).size !== playerIds.length) return 'A player is picked twice';
  if (playerIds.length !== size) return `A team needs exactly ${size} player${size === 1 ? '' : 's'}`;
  for (const id of playerIds) {
    if (!state.players.some((p) => p.id === id)) return 'Unknown player';
    if (state.draft.includes(id)) return `${playerName(state, id)} is in the spin draft`;
    const other = state.teams.find((t) => t.id !== ignoreTeamId && t.playerIds.includes(id));
    if (other) return `${playerName(state, id)} is already in ${teamName(state, other)}`;
  }
  return null;
}

/** Group letters available in custom mode (same count the spinner would use). */
export function customGroupNames(state) {
  return groupCaps(state.teams.length, state.settings.groupSize).map((_, i) => letters(i));
}

/** Soft warnings for the manual group board: [{group, msg}]. Starting is still blocked by A.start for < 2. */
export function groupWarnings(state) {
  const out = [];
  const max = Math.max(2, state.settings.groupSize);
  for (const g of customGroupNames(state)) {
    const n = state.teams.filter((t) => t.group === g).length;
    if (n < 2) out.push({ group: g, msg: `Group ${g} needs at least 2 teams` });
    else if (n > max) out.push({ group: g, msg: `Group ${g} has ${n} teams (usual max ${max})` });
  }
  return out;
}

/* ---------------- rules / settings ---------------- */

export const RULE_DEFAULTS = {
  gamesPerMatch: 3,
  knockoutGames: 3,
  playAll: true, // play & count every game even after the match is decided (ITclanBD)
  allowDraw: false, // group matches may end level (only when all games are played)
  pointsPerGame: 20, // a game is played to this many points
  winByTwo: false, // deuce: must lead by 2 once the target is reached (ITTF: true, to 11)
  checkScores: true, // warn when a score does not follow the game rules
  pointSystem: 'games', // 'games' = game wins are the table points | 'match' = points per match result
  pointPreset: 'games', // which preset is selected in the UI (games | w3 | w2 | ittf | custom)
  ptsWin: 2,
  ptsDraw: 1,
  ptsLoss: 0,
  tiebreak: 'classic', // classic | ittf | gamediff
};

/** Table point presets (match based). */
export const POINT_PRESETS = {
  games: { label: 'Game wins = points (ITclanBD)', system: 'games' },
  w3: { label: 'Win 3 · Draw 1 · Loss 0', system: 'match', ptsWin: 3, ptsDraw: 1, ptsLoss: 0 },
  w2: { label: 'Win 2 · Draw 1 · Loss 0', system: 'match', ptsWin: 2, ptsDraw: 1, ptsLoss: 0 },
  ittf: { label: 'Win 2 · Loss 1 (ITTF team events)', system: 'match', ptsWin: 2, ptsDraw: 1.5, ptsLoss: 1 },
  custom: { label: 'Custom…', system: 'match' },
};

export const TIEBREAKS = {
  classic: {
    label: 'ITclanBD · points → match wins → head-to-head → point difference',
    text: 'Table points, then match wins, then head-to-head wins between the tied teams, then point difference, then points scored.',
  },
  ittf: {
    label: 'ITTF · head-to-head ratios (matches → games → points)',
    text: 'Among tied teams only: points from their mutual matches, then match win/loss ratio, then game ratio, then points ratio (repeated for any teams still level), then overall game and point difference.',
  },
  gamediff: {
    label: 'Game difference → point difference',
    text: 'Table points, then overall game difference (won − lost), then overall point difference, then points scored. Head-to-head is not used.',
  },
};

export const ruleCfg = (settings = {}) => ({ ...RULE_DEFAULTS, ...(settings || {}) });

/** Which preset the current settings correspond to. */
export function presetOf(settings) {
  const c = ruleCfg(settings);
  if (c.pointSystem === 'games') return 'games';
  for (const k of ['w3', 'w2', 'ittf']) {
    const q = POINT_PRESETS[k];
    if (q.ptsWin === c.ptsWin && q.ptsDraw === c.ptsDraw && q.ptsLoss === c.ptsLoss) return k;
  }
  return 'custom';
}

/** Does a recorded game score follow the game rules? Returns a message, or null when fine. */
export function scoreIssue(a, b, cfg) {
  const c = ruleCfg(cfg);
  if (!Number.isInteger(a) || !Number.isInteger(b) || a === b) return null;
  const hi = Math.max(a, b), lo = Math.min(a, b), T = c.pointsPerGame;
  const ok = c.winByTwo ? (hi === T && lo <= T - 2) || (hi > T && hi - lo === 2) : hi === T && lo < T;
  if (ok) return null;
  return c.winByTwo ? `A game is played to ${T} and must be won by 2 (e.g. ${T}–${T - 2}, ${T + 1}–${T - 1})` : `A game is played to ${T} points (the winner has exactly ${T})`;
}

export const scoreIssues = (games, cfg) => (ruleCfg(cfg).checkScores ? games.map(([a, b, ow]) => (ow ? null : scoreIssue(a, b, cfg))) : games.map(() => null));

/* ---------------- match evaluation ---------------- */

const isScore = (v) => Number.isInteger(v) && v >= 0;

/**
 * games: [[a,b], ...] (null = empty). A tied game is invalid (no draws).
 * all=true  : every game is played and counted (ITclanBD rule); match is decided once all are entered.
 * all=false : best-of-N, games after the match is decided are ignored ("skipped").
 * draw=true : with all=true, equal game wins end the match as a draw (group stage only).
 */
export function evalMatch(games, all = false, draw = false) {
  const need = Math.floor(games.length / 2) + 1;
  let w1 = 0, w2 = 0, pf1 = 0, pf2 = 0;
  let winner = null;
  const states = games.map(([a, b, ow]) => {
    if (winner && !all) return 'skipped';
    if (a == null && b == null) return 'empty';
    if (!isScore(a) || !isScore(b)) return 'partial';
    if (a === b && ow !== 1 && ow !== 2) return 'tie'; // ow = recorded game winner for imported 20-20 style results
    const g1 = a === b ? ow === 1 : a > b;
    pf1 += a;
    pf2 += b;
    if (g1) w1++;
    else w2++;
    if (!all) {
      if (w1 >= need) winner = 1;
      else if (w2 >= need) winner = 2;
    }
    return g1 ? 'w1' : 'w2';
  });
  let isDraw = false;
  let level = false;
  if (all && states.every((s) => s === 'w1' || s === 'w2')) {
    if (w1 === w2) {
      if (draw) isDraw = true;
      else level = true; // level but draws are off → not finished
    } else winner = w1 > w2 ? 1 : 2;
  }
  const started = states.some((s) => s !== 'empty' && s !== 'skipped');
  return { w1, w2, pf1, pf2, winner, done: winner !== null || isDraw, draw: isDraw, level, states, started, need };
}

/* ---------------- standings ---------------- */

const ratio = (a, b) => (b === 0 ? (a === 0 ? 0 : Infinity) : a / b);

export function computeStandings(teamIds, matches, settings) {
  const c = ruleCfg(settings);
  const S = {};
  teamIds.forEach((id) => (S[id] = { id, p: 0, w: 0, d: 0, l: 0, gw: 0, gl: 0, pf: 0, pa: 0, pts: 0, h2h: 0 }));
  const done = [];
  for (const m of matches) {
    if (!S[m.t1] || !S[m.t2]) continue;
    const r = evalMatch(m.games, m.all, m.draw);
    if (!r.done) continue;
    done.push({ m, r });
    const a = S[m.t1], b = S[m.t2];
    a.p++; b.p++;
    a.gw += r.w1; a.gl += r.w2; b.gw += r.w2; b.gl += r.w1;
    a.pf += r.pf1; a.pa += r.pf2; b.pf += r.pf2; b.pa += r.pf1;
    if (r.draw) { a.d++; b.d++; }
    else if (r.winner === 1) { a.w++; b.l++; }
    else { b.w++; a.l++; }
  }
  const points = (r) => (c.pointSystem === 'games' ? r.gw : r.w * c.ptsWin + r.d * c.ptsDraw + r.l * c.ptsLoss);
  const rows = Object.values(S);
  rows.forEach((r) => { r.diff = r.pf - r.pa; r.gd = r.gw - r.gl; r.pts = points(r); });

  /** Mini-league among `cl` only (results between those teams). */
  const mini = (cl) => {
    const ids = new Set(cl.map((r) => r.id));
    const M = {};
    cl.forEach((r) => (M[r.id] = { w: 0, d: 0, l: 0, gw: 0, gl: 0, pf: 0, pa: 0 }));
    for (const { m, r } of done) {
      if (!ids.has(m.t1) || !ids.has(m.t2)) continue;
      const a = M[m.t1], b = M[m.t2];
      a.gw += r.w1; a.gl += r.w2; b.gw += r.w2; b.gl += r.w1;
      a.pf += r.pf1; a.pa += r.pf2; b.pf += r.pf2; b.pa += r.pf1;
      if (r.draw) { a.d++; b.d++; } else if (r.winner === 1) { a.w++; b.l++; } else { b.w++; a.l++; }
    }
    for (const id of ids) {
      const x = M[id];
      x.pts = c.pointSystem === 'games' ? x.gw : x.w * c.ptsWin + x.d * c.ptsDraw + x.l * c.ptsLoss;
    }
    return M;
  };

  const group = (list, keyFn) => {
    const out = [];
    for (const r of list) {
      const k = keyFn(r);
      const last = out[out.length - 1];
      if (last && last.k === k) last.items.push(r); else out.push({ k, items: [r] });
    }
    return out.map((g) => g.items);
  };

  // ITTF: only the tied teams' mutual results; repeat for teams that are still level
  const ittf = (cl) => {
    if (cl.length < 2) return cl;
    const M = mini(cl);
    const key = (r) => [M[r.id].pts, ratio(M[r.id].w, M[r.id].l), ratio(M[r.id].gw, M[r.id].gl), ratio(M[r.id].pf, M[r.id].pa)];
    const cmp = (x, y) => { const a = key(x), b = key(y); for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return b[i] > a[i] ? 1 : -1; return 0; };
    const sorted = [...cl].sort(cmp);
    const groups = group(sorted, (r) => key(r).join('|'));
    if (groups.length === 1) return [...cl].sort((x, y) => y.gd - x.gd || y.diff - x.diff || y.pf - x.pf);
    return groups.flatMap((g) => (g.length < cl.length ? ittf(g) : g));
  };

  rows.sort((x, y) => y.pts - x.pts || (c.tiebreak === 'classic' ? y.w - x.w : 0));
  const out = [];
  const sameLevel = (a, b) => a.pts === b.pts && (c.tiebreak !== 'classic' || a.w === b.w);
  let i = 0;
  while (i < rows.length) {
    let j = i;
    while (j < rows.length && sameLevel(rows[j], rows[i])) j++;
    let cl = rows.slice(i, j);
    if (cl.length > 1) {
      if (c.tiebreak === 'ittf') cl = ittf(cl);
      else if (c.tiebreak === 'gamediff') cl.sort((x, y) => y.gd - x.gd || y.diff - x.diff || y.pf - x.pf);
      else {
        const M = mini(cl);
        cl.forEach((r) => (r.h2h = M[r.id].w));
        cl.sort((x, y) => y.h2h - x.h2h || y.diff - x.diff || y.pf - x.pf);
      }
    }
    out.push(...cl);
    i = j;
  }
  out.forEach((r, k) => (r.rank = k + 1));
  return out;
}

/* ---------------- fixtures ---------------- */

/** Circle method. Returns rounds of [a,b] pairs. */
export function roundRobin(ids) {
  const list = [...ids];
  if (list.length % 2) list.push(null);
  const n = list.length;
  const rounds = [];
  for (let r = 0; r < n - 1; r++) {
    const pairs = [];
    for (let i = 0; i < n / 2; i++) {
      const a = list[i], b = list[n - 1 - i];
      if (a && b) pairs.push(r % 2 ? [b, a] : [a, b]);
    }
    rounds.push(pairs);
    list.splice(1, 0, list.pop());
  }
  return rounds;
}

export const emptyGames = (n) => Array.from({ length: n }, () => [null, null]);

export function buildGroupMatches(state) {
  const n = state.settings.gamesPerMatch;
  const groups = groupsOf(state);
  const perGroup = groups.map((g) => ({ g, rounds: roundRobin(g.teamIds) }));
  const maxR = Math.max(...perGroup.map((x) => x.rounds.length), 0);
  const out = [];
  for (let r = 0; r < maxR; r++) {
    for (const { g, rounds } of perGroup) {
      for (const [t1, t2] of rounds[r] || []) {
        out.push({ id: uid('m'), group: g.name, round: r + 1, t1, t2, all: !!state.settings.playAll || n % 2 === 0, draw: !!state.settings.allowDraw, games: emptyGames(n) });
      }
    }
  }
  return out;
}

/** [{name:'A'|null, teamIds:[]}] ; league format => one unnamed group. */
export function groupsOf(state) {
  if (state.settings.format === 'groups') {
    const map = new Map();
    for (const t of state.teams) {
      if (!t.group) continue;
      if (!map.has(t.group)) map.set(t.group, []);
      map.get(t.group).push(t.id);
    }
    return [...map.keys()].sort().map((name) => ({ name, teamIds: map.get(name) }));
  }
  return [{ name: null, teamIds: state.teams.map((t) => t.id) }];
}

/* ---------------- qualification & knockout ---------------- */

/** Ordered seeds (best first) that would qualify right now. */
export function qualifiedSeeds(state) {
  const s = state.settings;
  const groups = groupsOf(state);
  let list = [];
  if (s.format === 'groups') {
    for (const g of groups) {
      const st = computeStandings(g.teamIds, state.matches, s);
      st.slice(0, s.advancePerGroup).forEach((r) => list.push({ ...r, gr: r.rank }));
    }
    list.sort((a, b) => a.gr - b.gr || b.pts - a.pts || b.w - a.w || b.diff - a.diff || b.pf - a.pf);
  } else {
    list = computeStandings(groups[0].teamIds, state.matches, s).slice(0, s.qualifiers).map((r) => ({ ...r, gr: r.rank }));
  }
  const size = Math.max(2, pow2floor(Math.min(list.length, 16)));
  return list.slice(0, size).map((r) => r.id);
}

export function seedOrder(n) {
  let o = [1];
  while (o.length < n) {
    const m = o.length * 2 + 1;
    o = o.flatMap((x) => [x, m - x]);
  }
  return o;
}

export function roundName(size, r) {
  const left = size / 2 ** r;
  if (left === 2) return 'Final';
  if (left === 4) return 'Semi-Final';
  if (left === 8) return 'Quarter-Final';
  return `Round of ${left}`;
}

export function makeBracket(seeds, gamesPerMatch, all = false) {
  const size = seeds.length;
  const rounds = [];
  for (let r = 0, cnt = size / 2; cnt >= 1; r++, cnt /= 2) {
    rounds.push(Array.from({ length: cnt }, (_, i) => ({ id: `k${r}_${i}`, games: emptyGames(gamesPerMatch) })));
  }
  return { size, seeds, all, rounds };
}

/** Attach participants/winners to every bracket match. */
export function resolveBracket(b) {
  const order = seedOrder(b.size);
  const res = [];
  b.rounds.forEach((round, r) => {
    res.push(
      round.map((m, i) => {
        let t1, t2;
        if (r === 0) {
          t1 = b.seeds[order[2 * i] - 1];
          t2 = b.seeds[order[2 * i + 1] - 1];
        } else {
          t1 = res[r - 1][2 * i].winner;
          t2 = res[r - 1][2 * i + 1].winner;
        }
        const ev = evalMatch(m.games, b.all);
        const winner = t1 && t2 && ev.done ? (ev.winner === 1 ? t1 : t2) : null;
        return { ...m, r, i, t1: t1 || null, t2: t2 || null, ev, winner, ready: !!(t1 && t2) };
      })
    );
  });
  return res;
}

export function clearDownstream(b, r, i) {
  if (r + 1 >= b.rounds.length) return;
  const nxt = b.rounds[r + 1][i >> 1];
  nxt.games = nxt.games.map(() => [null, null]);
  clearDownstream(b, r + 1, i >> 1);
}

export function championOf(state) {
  if (!state.bracket) return null;
  const res = resolveBracket(state.bracket);
  const fin = res[res.length - 1][0];
  if (!fin.winner) return null;
  return { champion: fin.winner, runnerUp: fin.winner === fin.t1 ? fin.t2 : fin.t1 };
}

export function groupProgress(state) {
  const total = state.matches.length;
  const done = state.matches.filter((m) => evalMatch(m.games, m.all, m.draw).done).length;
  return { total, done, complete: total > 0 && done === total };
}
