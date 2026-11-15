// The ITclanBD tournament from the Word document, stored as a read-only history entry.
import { makeBracket } from './logic.js';

const PLAYERS = ['Oli', 'Himel', 'Mahabub', 'Hadi', 'Tayef', 'Ridoy', 'Shaikat', 'Mashud', 'Sani', 'Joy', 'Sayem', 'Mosaraf'];
const pid = (n) => 'd_' + n.toLowerCase();

const TEAMS = { A: ['Oli', 'Himel'], B: ['Mahabub', 'Hadi'], C: ['Tayef', 'Ridoy'], D: ['Shaikat', 'Mashud'], E: ['Sani', 'Joy'], F: ['Sayem', 'Mosaraf'] };

// [team1, team2, [[score1, score2, (winner if scores are level)], ...]]
const M = [
  ['A', 'B', [[20, 20, 2], [20, 15], [16, 20]]],
  ['C', 'D', [[16, 20], [20, 18], [13, 20]]],
  ['E', 'F', [[20, 16], [20, 14], [20, 11]]],
  ['A', 'C', [[20, 20, 2], [15, 20], [20, 10]]],
  ['B', 'E', [[20, 19], [20, 15], [18, 20]]],
  ['D', 'F', [[20, 8], [20, 13], [20, 7]]],
  ['A', 'D', [[20, 13], [20, 9], [20, 10]]],
  ['B', 'F', [[20, 7], [20, 1], [20, 7]]],
  ['C', 'E', [[14, 20], [13, 20], [20, 17]]],
  ['A', 'E', [[20, 20, 2], [18, 20], [20, 18]]],
  ['B', 'D', [[9, 20], [20, 16], [20, 12]]],
  ['C', 'F', [[20, 7], [20, 9], [20, 9]]],
  ['A', 'F', [[20, 8], [20, 15], [20, 14]]],
  ['B', 'C', [[20, 20, 1], [20, 17], [19, 20]]],
  ['D', 'E', [[20, 18], [14, 20], [20, 13]]],
];

const tid = (k) => 'dt_' + k;

export const SEED_ID = 'seed-itclanbd-1';

export const SEED_ENTRY = {
  id: SEED_ID,
  title: 'ITclanBD Indoor Table Tennis Tournament',
  date: 'From Word document',
  champion: null,
  members: '',
  runnerUp: '',
  teams: 6,
  format: 'League',
  note: 'Group stage complete · Semi-Finals (B vs D, E vs A) and Final not played yet',
  snapshot: {
    version: 1,
    settings: { format: 'league', teamSize: 2, gamesPerMatch: 3, playAll: true, groupSize: 3, advancePerGroup: 2, qualifiers: 4 },
    players: PLAYERS.map((n) => ({ id: pid(n), name: n })),
    teams: Object.entries(TEAMS).map(([k, ps]) => ({ id: tid(k), name: `Team ${k}`, playerIds: ps.map(pid), group: null })),
    draft: [],
    stage: 'knockout',
    matches: M.map(([a, b, games], i) => ({ id: 'dm_' + (i + 1), group: null, round: 1, t1: tid(a), t2: tid(b), all: true, games })),
    bracket: makeBracket([tid('B'), tid('E'), tid('A'), tid('D')], 3, true),
  },
};
