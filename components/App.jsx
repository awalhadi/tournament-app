'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as L from '../lib/logic';
import { exportJSON, freshState, load, loadRemote, onDenied, onSync, save, setMaster, validate } from '../lib/store';
import { Art, ArtDefs, Icon, Logo, members, tn } from './ui';
import Setup from './Setup';
import Players from './Players';
import { Bracket, Fixtures } from './Matches';
import { Standings } from './Standings';
import History from './History';
import MasterPrompt from './MasterPrompt';

const fresh = (d, history) => ({ ...freshState(d.settings, history, d.players), seeded: true });

/** Freeze a whole tournament (teams, scores, standings source, bracket) for the History tab. */
function makeEntry(d) {
  const ch = L.championOf(d);
  const { history, ...snap } = structuredClone(d);
  const kind = d.settings.format === 'groups' ? 'Groups' : 'League';
  return {
    id: L.uid('h'),
    title: `${d.teams.length}-team ${kind.toLowerCase()} tournament`,
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    champion: ch ? tn(d, ch.champion) : null,
    members: ch ? members(d, L.getTeam(d, ch.champion)) : '',
    runnerUp: ch ? tn(d, ch.runnerUp) : '',
    teams: d.teams.length,
    format: kind,
    note: ch ? '' : d.stage === 'group' ? 'Reset during the group stage' : 'Reset before the final',
    snapshot: snap,
  };
}

const tabFor = (S) => (S.stage === 'setup' ? 'setup' : S.stage === 'group' ? 'fixtures' : 'bracket');

const UNLOCK_MS = 5 * 60 * 1000;

/** Normalise raw input to null | integer 0..99. */
function parseScore(raw) {
  let val = raw === '' ? null : parseInt(raw, 10);
  if (Number.isNaN(val)) val = null;
  if (val !== null) val = Math.max(0, Math.min(99, val));
  return val;
}

/** Write one score into a (cloned) state; a changed knockout winner clears the rounds after it. */
function applyScore(d, id, ko, g, s, val) {
  if (ko) {
    const before = L.resolveBracket(d.bracket).flat().find((m) => m.id === id);
    d.bracket.rounds[before.r][before.i].games[g][s] = val;
    const after = L.resolveBracket(d.bracket)[before.r][before.i];
    if (after.winner !== before.winner) L.clearDownstream(d.bracket, before.r, before.i);
  } else {
    d.matches.find((m) => m.id === id).games[g][s] = val;
  }
}

export default function App() {
  const [S, setS] = useState(null);
  const Sref = useRef(null);
  const [ui, setUi] = useState({ tab: 'setup', mode: 'players', filter: 'all', lastPick: null, histView: null, histTab: 'standings' });
  const [toasts, setToasts] = useState([]);
  const [modal, setModal] = useState(null);
  const [pwPrompt, setPwPrompt] = useState(null);
  const unlocked = useRef(new Map()); // match id -> unlock expiry (memory only)
  const fileRef = useRef(null);

  // load persisted JSON once on the client
  const [sync, setSync] = useState('pending');
  useEffect(() => {
    onSync(setSync);
    let alive = true;
    (async () => {
      const remote = await loadRemote();
      if (!alive) return;
      const s = remote.data || load();
      Sref.current = s;
      setS(s);
      setUi((u) => ({ ...u, tab: tabFor(s) }));
      setSync(remote.status);
      save(s); // persist (also adds the seeded document tournament on first run)
    })();
    // when you come back to this tab/window, pull the latest saved data (another device may have changed it)
    const refresh = async () => {
      if (document.visibilityState !== 'visible') return;
      const remote = await loadRemote();
      if (!alive || !remote.data) return;
      if (JSON.stringify(remote.data) !== JSON.stringify(Sref.current)) {
        Sref.current = remote.data;
        setS(remote.data);
      }
      setSync(remote.status);
    };
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('focus', refresh);
    return () => {
      alive = false;
      document.removeEventListener('visibilitychange', refresh);
      window.removeEventListener('focus', refresh);
    };
  }, []);

  const patchUi = useCallback((p) => setUi((u) => ({ ...u, ...p })), []);

  /** Clone → mutate → persist → render. */
  const mutate = useCallback((fn) => {
    const d = structuredClone(Sref.current);
    fn(d);
    Sref.current = d;
    save(d);
    setS(d);
  }, []);

  const replace = useCallback((d) => {
    Sref.current = d;
    save(d);
    setS(d);
  }, []);

  const toast = useCallback((msg, type = '') => {
    const id = Math.random();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);

  const ask = useCallback(
    (opts) => new Promise((resolve) => setModal({ ...opts, resolve })),
    []
  );
  const closeModal = (v) => {
    modal?.resolve(v);
    setModal(null);
  };

  // The server refused a score edit (missing/expired master password): drop the local change, show the saved data.
  useEffect(() => {
    onDenied(async (code) => {
      toast(code === 'too_many_attempts' ? 'Too many wrong attempts. Try again later.' : 'Change refused: master password required', 'err');
      const remote = await loadRemote();
      if (remote.data) {
        Sref.current = remote.data;
        setS(remote.data);
        save(remote.data);
      }
    });
  }, [toast]);

  /** Always asks for the master password (verified on the server). Resolves true once unlocked, false if cancelled. */
  const requireMaster = useCallback(
    async (opts) => {
      const pw = await new Promise((resolve) => setPwPrompt({ ...opts, resolve }));
      setPwPrompt(null);
      if (!pw) return false;
      setMaster(pw, UNLOCK_MS); // kept in memory so the debounced save can send it
      return true;
    },
    []
  );

  const A = useMemo(() => {
    // Team list changed. Spin mode: regroup from scratch. Custom mode: keep deliberate manual
    // placements, only drop those pointing at a group letter that no longer exists.
    const regroup = (d) => {
      if (d.settings.assignMode !== 'custom') return d.teams.forEach((x) => (x.group = null));
      const valid = new Set(L.customGroupNames(d));
      d.teams.forEach((x) => { if (x.group && !valid.has(x.group)) x.group = null; });
    };
    const makeTeam = (d, ids, name = '') => {
      const t = { id: L.uid('t'), name, playerIds: [...ids], group: null };
      d.teams.push(t);
      regroup(d);
      return t;
    };
    // When only one outcome is left, finish it without another spin.
    const settlePlayers = (d) => {
      const inTeam = new Set(d.teams.flatMap((t) => t.playerIds));
      const rest = d.players.filter((p) => !inTeam.has(p.id) && !d.draft.includes(p.id)).map((p) => p.id);
      if (rest.length && d.draft.length + rest.length === d.settings.teamSize) {
        const t = makeTeam(d, [...d.draft, ...rest]);
        d.draft = [];
        return L.teamName(d, t);
      }
      return null;
    };
    const settleGroups = (d) => {
      const caps = L.groupCaps(d.teams.length, d.settings.groupSize);
      const open = caps.map((c, i) => i).filter((i) => d.teams.filter((t) => t.group === L.letters(i)).length < caps[i]);
      const left = d.teams.filter((t) => !t.group);
      if (open.length === 1 && left.length) {
        left.forEach((t) => (t.group = L.letters(open[0])));
        return { g: L.letters(open[0]), n: left.length };
      }
      return null;
    };
    const go = (tab) => {
      patchUi(tab === 'history' ? { tab, histView: null } : { tab });
      window.scrollTo({ top: 0 });
    };

    return {
      setTab: go,
      setFilter: (filter) => patchUi({ filter }),
      setMode: (mode) => patchUi({ mode, lastPick: null }),

      setFormat: (format) =>
        mutate((d) => {
          if (d.stage !== 'setup') return;
          d.settings.format = format;
          d.teams.forEach((t) => (t.group = null));
        }),
      // calculation/validation settings can change any time; structural ones only before the tournament starts
      setMany: (patch) =>
        mutate((d) => {
          const live = ['pointsPerGame', 'winByTwo', 'checkScores', 'pointSystem', 'ptsWin', 'ptsDraw', 'ptsLoss', 'tiebreak'];
          for (const [k, v] of Object.entries(patch)) {
            const allowed = live.includes(k) || (k === 'knockoutGames' && !d.bracket) || d.stage === 'setup';
            if (allowed) d.settings[k] = v;
          }
        }),
      setting: (key, val) => {
        mutate((d) => {
          const live = ['pointsPerGame', 'winByTwo', 'checkScores', 'pointSystem', 'ptsWin', 'ptsDraw', 'ptsLoss', 'tiebreak'];
          if (d.stage !== 'setup' && !live.includes(key) && !(key === 'knockoutGames' && !d.bracket)) return;
          d.settings[key] = val;
          if (key === 'groupSize' || key === 'qualifiers') d.teams.forEach((t) => (t.group = null));
          if (key === 'teamSize' && d.draft.length >= val) {
            makeTeam(d, d.draft);
            d.draft = [];
          }
        });
      },

      addPlayers: (text) => {
        const list = text.split(/[,\n]+/).map((x) => x.trim()).filter(Boolean);
        const cur = Sref.current.players;
        const fresh = [];
        for (const n of list) {
          if (cur.some((p) => p.name.toLowerCase() === n.toLowerCase())) continue;
          if (fresh.some((p) => p.name.toLowerCase() === n.toLowerCase())) continue;
          fresh.push({ id: L.uid('p'), name: n });
        }
        if (!fresh.length) {
          toast(list.length ? 'Those players already exist' : 'Type at least one name', 'err');
          return false;
        }
        mutate((d) => d.players.push(...fresh));
        toast(`${fresh.length} player${fresh.length > 1 ? 's' : ''} added`);
        return true;
      },
      delPlayer: (id) =>
        mutate((d) => {
          d.players = d.players.filter((p) => p.id !== id);
          d.draft = d.draft.filter((x) => x !== id);
          d.teams.forEach((t) => (t.playerIds = t.playerIds.filter((x) => x !== id)));
          d.teams = d.teams.filter((t) => t.playerIds.length);
          regroup(d);
        }),

      pick: (mode, item) => {
        let msg = '';
        mutate((d) => {
          if (mode === 'players') {
            d.draft.push(item.id);
            msg = `${item.label} joined the draft!`;
            if (d.draft.length >= d.settings.teamSize) {
              const t = makeTeam(d, d.draft);
              msg = `${item.label} completes → ${L.teamName(d, t)}`;
              d.draft = [];
            }
            const auto = settlePlayers(d);
            if (auto) msg += ` · last players auto-paired → ${auto}`;
          } else {
            const caps = L.groupCaps(d.teams.length, d.settings.groupSize);
            const counts = caps.map((_, gi) => d.teams.filter((t) => t.group === L.letters(gi)).length);
            const gi = counts.findIndex((c, i) => c < caps[i]);
            L.getTeam(d, item.id).group = L.letters(gi);
            msg = `${item.label} → Group ${L.letters(gi)}`;
            const auto = settleGroups(d);
            if (auto) msg += ` · remaining ${auto.n} team${auto.n > 1 ? 's' : ''} auto-placed in Group ${auto.g}`;
          }
        });
        patchUi({ lastPick: msg });
      },
      settle: (mode) => {
        let msg = '';
        mutate((d) => {
          if (mode === 'players') {
            const t = settlePlayers(d);
            if (t) msg = `Last players paired automatically → ${t}`;
          } else {
            const r = settleGroups(d);
            if (r) msg = `Remaining ${r.n} team${r.n > 1 ? 's' : ''} placed in Group ${r.g} automatically`;
          }
        });
        if (msg) patchUi({ lastPick: msg });
      },
      autoDraw: () => {
        mutate((d) => {
          const inTeam = new Set(d.teams.flatMap((t) => t.playerIds));
          const pool = d.players.filter((p) => !inTeam.has(p.id) && !d.draft.includes(p.id)).map((p) => p.id);
          const all = L.shuffle([...d.draft, ...pool]);
          const size = d.settings.teamSize;
          d.draft = [];
          while (all.length >= size) makeTeam(d, all.splice(0, size));
          d.draft = all;
        });
        patchUi({ lastPick: 'Teams drawn at random!' });
      },
      finishDraft: () =>
        mutate((d) => {
          if (d.draft.length) {
            makeTeam(d, d.draft);
            d.draft = [];
          }
        }),
      clearDraft: () => {
        mutate((d) => (d.draft = []));
        patchUi({ lastPick: null });
      },
      delTeam: (id) =>
        mutate((d) => {
          d.teams = d.teams.filter((t) => t.id !== id);
          regroup(d);
        }),

      /* ---- custom (manual) mode ---- */
      setAssignMode: (mode) =>
        mutate((d) => {
          if (d.stage !== 'setup') return;
          d.settings.assignMode = mode === 'custom' ? 'custom' : 'spin';
          d.draft = []; // an unfinished spin draft doesn't carry across modes
        }),
      createTeam: (playerIds, name) => {
        const err = L.canFormTeam(Sref.current, playerIds);
        if (Sref.current.stage !== 'setup') return false;
        if (err) { toast(err, 'err'); return false; }
        mutate((d) => makeTeam(d, playerIds, (name || '').trim()));
        return true;
      },
      updateTeam: (id, { name, playerIds }) => {
        const cur = Sref.current;
        const t = L.getTeam(cur, id);
        if (cur.stage !== 'setup' || !t || t.locked) return false;
        const err = L.canFormTeam(cur, playerIds, id);
        if (err) { toast(err, 'err'); return false; }
        mutate((d) => {
          const x = L.getTeam(d, id);
          x.name = (name || '').trim();
          x.playerIds = [...playerIds];
        });
        return true;
      },
      assignGroup: (teamId, letter) =>
        mutate((d) => {
          const t = L.getTeam(d, teamId);
          if (d.stage !== 'setup' || !t) return;
          t.group = letter && L.customGroupNames(d).includes(letter) ? letter : null;
        }),
      renameTeam: (id) => {
        const t = L.getTeam(Sref.current, id);
        const v = window.prompt('Team name (leave empty to use player names)', t.name || '');
        if (v === null) return;
        mutate((d) => (L.getTeam(d, id).name = v.trim()));
      },
      autoGroups: () => {
        mutate((d) => {
          const caps = L.groupCaps(d.teams.length, d.settings.groupSize);
          let gi = 0, c = 0;
          for (const t of L.shuffle(d.teams)) {
            if (c >= caps[gi]) { gi++; c = 0; }
            L.getTeam(d, t.id).group = L.letters(gi);
            c++;
          }
        });
        patchUi({ lastPick: 'Groups drawn at random!' });
      },
      clearGroups: () => {
        mutate((d) => d.teams.forEach((t) => (t.group = null)));
        patchUi({ lastPick: null });
      },

      start: () => {
        const d = Sref.current;
        if (d.teams.length < 2) return toast('You need at least 2 teams', 'err');
        if (d.draft.length) return toast('Finish the team being drafted first (Make team / Undo picks)', 'err');
        if (d.settings.format === 'groups') {
          if (d.teams.some((t) => !t.group)) return toast('Put every team in a group first (spin or auto-group)', 'err');
          if (L.groupsOf(d).some((g) => g.teamIds.length < 2)) return toast('Every group needs at least 2 teams', 'err');
        }
        let count = 0;
        mutate((x) => {
          x.matches = L.buildGroupMatches(x);
          x.bracket = null;
          x.stage = 'group';
          count = x.matches.length;
        });
        patchUi({ tab: 'fixtures', filter: 'all' });
        window.scrollTo({ top: 0 });
        toast(`${count} matches generated`);
      },
      startKO: () => {
        mutate((d) => {
          const seeds = L.qualifiedSeeds(d);
          d.bracket = L.makeBracket(seeds, d.settings.knockoutGames || 3, d.settings.playAll);
          d.stage = 'knockout';
        });
        go('bracket');
      },
      backToGroups: async () => {
        const ok = await ask({ title: 'Edit group results?', text: 'The knockout bracket and its scores will be removed. Group results stay.', ok: 'Remove bracket', danger: true });
        if (!ok) return;
        mutate((d) => { d.bracket = null; d.stage = 'group'; });
        go('fixtures');
      },
      setScore: (id, ko, g, s, raw) => {
        const val = parseScore(raw);
        mutate((d) => applyScore(d, id, ko, g, s, val));
      },
      // Entry point for score inputs. First entry is free; changing/clearing a saved score needs the master password.
      commitScore: async (id, ko, g, s, raw) => {
        const val = parseScore(raw);
        const cur = Sref.current;
        const sim = structuredClone(cur);
        try { applyScore(sim, id, ko, g, s, val); } catch { return; }
        const edited = L.findScoreEdits(cur, sim); // same rule the server enforces
        if (!edited.length) return mutate((d) => applyScore(d, id, ko, g, s, val));
        if (!edited.every((m) => (unlocked.current.get(m) || 0) > Date.now())) {
          const also = edited.filter((m) => m !== id).length;
          const ok = await requireMaster({ warn: also ? 'Changing this result also clears the dependent knockout scores.' : '' });
          if (!ok) return; // cancelled → cell falls back to the saved value
          edited.forEach((m) => unlocked.current.set(m, Date.now() + UNLOCK_MS));
          toast('Unlocked for 5 minutes');
        }
        mutate((d) => applyScore(d, id, ko, g, s, val));
      },
      finish: async () => {
        const d = Sref.current;
        if (!L.championOf(d)) return;
        if (!(await requireMaster({ title: 'Finish tournament', text: 'This saves the tournament to History and resets teams and scores. Enter the master password to continue.' }))) return;
        replace(fresh(d, [...d.history, makeEntry(d)]));
        patchUi({ tab: 'history', histView: null, lastPick: null });
        toast('Saved to History! Teams reset — all players kept');
      },
      reset: async () => {
        const ok = await ask({
          title: 'Start a new tournament?',
          text: 'The current tournament is saved to the History tab first (if it was started).\nThen only the default team Sayem + Mosaraf stays. Your player list is kept.',
          ok: 'Reset',
          danger: true,
        });
        if (!ok) return;
        const d = Sref.current;
        const started = d.stage !== 'setup';
        if (started && !(await requireMaster({ title: 'Reset tournament data', text: 'This archives the current tournament to History and clears teams and scores. Enter the master password to continue.' }))) return;
        replace(fresh(d, started ? [...d.history, makeEntry(d)] : d.history));
        patchUi({ tab: 'setup', lastPick: null });
        toast(started ? 'Saved to History & reset' : 'Reset complete');
      },
      openHist: (id) => patchUi({ histView: id, histTab: 'standings' }),
      closeHist: () => patchUi({ histView: null }),
      setHistTab: (histTab) => patchUi({ histTab }),
      delHist: async (id) => {
        const ok = await ask({ title: 'Delete this tournament?', text: 'Its saved teams, scores and bracket will be removed permanently.', ok: 'Delete', danger: true });
        if (!ok) return;
        if (!(await requireMaster({ title: 'Delete saved tournament', text: 'This permanently removes the saved results. Enter the master password to continue.' }))) return;
        mutate((d) => (d.history = d.history.filter((h) => h.id !== id)));
      },
      logout: async () => {
        try { await fetch('/api/logout', { method: 'POST' }); } catch {}
        window.location.assign('/login');
      },
      exportData: () => {
        exportJSON(Sref.current);
        toast('JSON downloaded');
      },
      importFile: async (file) => {
        try {
          const data = validate(JSON.parse(await file.text()));
          const ok = await ask({ title: 'Load this file?', text: 'It will replace the current tournament data.', ok: 'Load' });
          if (!ok) return;
          if (L.needsMaster(L.findProtectedChanges(Sref.current, data)) && !(await requireMaster({ title: 'Replace tournament data', text: 'This file replaces saved scores, stage or History. Enter the master password to continue.' }))) return;
          replace(data);
          patchUi({ tab: tabFor(data) });
          toast('Data loaded');
        } catch {
          toast('Invalid JSON file', 'err');
        }
      },
    };
  }, [mutate, replace, patchUi, toast, ask, requireMaster]);

  if (!S) return null;

  const champ = L.championOf(S);
  const cur = champ ? 3 : S.stage === 'setup' ? 0 : S.stage === 'group' ? 1 : 2;
  const steps = ['Team Setup', 'Group Stage', 'Knockout', 'Champion'];
  const tabs = [
    ['setup', 'users', 'Teams'],
    ['players', 'person', 'Players'],
    ['fixtures', 'paddle', 'Matches'],
    ['standings', 'chart', 'Standings'],
    ['bracket', 'bracket', 'Knockout'],
    ['history', 'medal', 'History'],
  ];

  return (
    <>
      <ArtDefs />
      <div className="bg-orb o1" />
      <div className="bg-orb o2" />
      <header className="top">
        <div className="wrap top-in">
          <div className="brand">
            <Logo />
            <div><b>ITclan TT Arena</b><small>Table Tennis Manager</small></div>
          </div>
          <div className="top-actions">
            <span className={`sync ${sync}`} title={sync === 'cloud' ? 'Saved in the cloud (same data on every device)' : sync === 'file' ? 'Saved in project file data/tournament.json' : sync === 'browser' ? 'Server file storage unavailable — saved in this browser only' : 'Saving…'}>
              <i />{sync === 'cloud' ? 'Saved to cloud' : sync === 'file' ? 'Saved to file' : sync === 'browser' ? 'Browser only' : 'Saving…'}
            </span>
            <button className="btn" onClick={A.exportData} title="Download all data as JSON"><Icon name="download" /><span>Export</span></button>
            <button className="btn" onClick={() => fileRef.current.click()} title="Load a JSON backup"><Icon name="upload" /><span>Import</span></button>
            <button className="btn danger" onClick={A.reset} title="Reset to default"><Icon name="reset" /><span>New</span></button>
            <button className="btn" onClick={A.logout} title="Sign out"><Icon name="logout" /><span>Logout</span></button>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div className="stepper">
          {steps.map((n, i) => (
            <div key={n} className={`step ${i === cur ? 'on' : i < cur ? 'done' : ''}`}>
              <i>{i < cur ? <Icon name="check" size={14} /> : i + 1}</i>{n}
            </div>
          ))}
        </div>
        <nav className="tabs">
          {tabs.map(([k, ic, n]) => (
            <button key={k} className={`tab ${ui.tab === k ? 'on' : ''}`} onClick={() => A.setTab(k)}>
              <Art name={ic} size={22} />{n}
            </button>
          ))}
        </nav>

        <main>
          {ui.tab === 'setup' && <Setup S={S} ui={ui} A={A} />}
          {ui.tab === 'players' && <Players S={S} A={A} />}
          {ui.tab === 'fixtures' && <Fixtures S={S} ui={ui} A={A} />}
          {ui.tab === 'standings' && <Standings S={S} />}
          {ui.tab === 'bracket' && <Bracket S={S} A={A} />}
          {ui.tab === 'history' && <History S={S} ui={ui} A={A} />}
          <footer className="foot">Your data is saved automatically · use Export for a backup copy</footer>
        </main>
      </div>

      <div className="toasts">
        {toasts.map((t) => (<div key={t.id} className={`toast ${t.type}`}>{t.msg}</div>))}
      </div>

      {pwPrompt && <MasterPrompt title={pwPrompt.title} text={pwPrompt.text} warn={pwPrompt.warn} onDone={(pw) => pwPrompt.resolve(pw)} />}

      {modal && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && closeModal(false)}>
          <div className="modal-c">
            <h3>{modal.title}</h3>
            <p>{modal.text}</p>
            <div className="row">
              <button className="btn" onClick={() => closeModal(false)}>Cancel</button>
              <button className={`btn ${modal.danger ? 'danger' : 'primary'}`} onClick={() => closeModal(true)}>{modal.ok || 'Confirm'}</button>
            </div>
          </div>
        </div>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        hidden
        onChange={(e) => {
          const f = e.target.files[0];
          e.target.value = '';
          if (f) A.importFile(f);
        }}
      />
    </>
  );
}
