// State + persistence. All data is one JSON document (no database).
// Stored in this browser's localStorage and exportable/importable as a .json file.

import { SEED_ENTRY, SEED_ID } from './seed.js';
import { RULE_DEFAULTS } from './logic.js';

const KEY = 'itclan-tt-v1';

export const DEFAULT_PLAYERS = [
  { id: 'p_sayem', name: 'Sayem' },
  { id: 'p_mosaraf', name: 'Mosaraf' },
];

export const DEFAULT_SETTINGS = {
  format: 'league', // 'league' (everyone vs everyone) | 'groups'
  assignMode: 'spin', // how teams/groups are made: 'spin' (default wheel) | 'custom' (manual)
  teamSize: 2,
  groupSize: 3,
  advancePerGroup: 2,
  qualifiers: 4,
  ...RULE_DEFAULTS, // games, points per game, draws, table points, tie-break…
};

/** The one state a brand-new / freshly reset tournament starts from. */
export function freshState(settings = DEFAULT_SETTINGS, history = [], keepPlayers = []) {
  // Player roster survives a reset; the default players are always present.
  const players = [...DEFAULT_PLAYERS.map((p) => ({ ...p }))];
  for (const p of keepPlayers) if (!players.some((x) => x.id === p.id)) players.push({ ...p });
  return {
    version: 1,
    settings: { ...settings },
    players,
    teams: [{ id: 't_default', name: '', playerIds: DEFAULT_PLAYERS.map((p) => p.id), group: null, locked: true }],
    draft: [],
    stage: 'setup', // setup | group | knockout
    matches: [],
    bracket: null,
    history,
  };
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return validate(JSON.parse(raw));
  } catch (e) {
    console.warn('Could not load saved data', e);
  }
  return validate(freshState());
}

// 'file' = saved in project data/tournament.json, 'browser' = only this browser, 'pending'
let syncCb = () => {};
export const onSync = (cb) => (syncCb = cb);
let timer = null;

export function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save', e);
  }
  syncCb('pending');
  clearTimeout(timer);
  timer = setTimeout(() => pushRemote(state), 250);
}

// Master password for editing saved scores. Kept in memory only (never localStorage) and expires.
let master = { pw: null, until: 0 };
export function setMaster(pw, ms = 5 * 60 * 1000) {
  master = { pw, until: Date.now() + ms };
}
const activeMaster = () => (master.pw && Date.now() < master.until ? master.pw : null);

let deniedCb = () => {};
export const onDenied = (cb) => (deniedCb = cb);

async function pushRemote(state) {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const pw = activeMaster();
    if (pw) headers['x-master-password'] = pw;
    const r = await fetch('/api/data', { method: 'PUT', headers, body: JSON.stringify(state) });
    if (r.status === 401) return window.location.assign('/login');
    if (r.status === 403 || r.status === 429 || r.status === 503) {
      // server refused a score edit → discard the local change and re-sync from the server
      const j = await r.json().catch(() => ({}));
      syncCb('browser');
      return deniedCb(j.error || 'denied');
    }
    const j = await r.json().catch(() => ({}));
    syncCb(r.ok ? (j.store === 'blob' ? 'cloud' : 'file') : 'browser');
  } catch {
    syncCb('browser');
  }
}

/** Project file is the source of truth; returns null if unavailable/empty. */
export async function loadRemote() {
  try {
    const r = await fetch('/api/data', { cache: 'no-store' });
    if (r.status === 401) { window.location.assign('/login'); return { status: 'browser', data: null }; }
    if (!r.ok) return { status: 'browser', data: null };
    const j = await r.json();
    return { status: j.store === 'blob' ? 'cloud' : 'file', data: j.data ? validate(j.data) : null };
  } catch {
    return { status: 'browser', data: null };
  }
}

export function validate(s) {
  if (!s || typeof s !== 'object' || !Array.isArray(s.players) || !Array.isArray(s.teams) || !Array.isArray(s.matches)) {
    throw new Error('Invalid tournament file');
  }
  const base = freshState();
  const out = {
    ...base,
    ...s,
    settings: { ...DEFAULT_SETTINGS, ...(s.settings || {}) },
    draft: Array.isArray(s.draft) ? s.draft : [],
    history: Array.isArray(s.history) ? s.history : [],
  };
  if (out.settings.assignMode !== 'custom') out.settings.assignMode = 'spin';
  // add the tournament from the Word document once (user can delete it afterwards)
  if (!out.seeded) {
    if (!out.history.some((h) => h.id === SEED_ID)) out.history = [SEED_ENTRY, ...out.history];
    out.seeded = true;
  }
  return out;
}

export function exportJSON(state) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `tt-tournament-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
