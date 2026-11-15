'use client';
import { useRef, useState } from 'react';
import * as L from '../lib/logic';
import WheelCanvas from './WheelCanvas';
import { Art, Avatars, Icon, members } from './ui';
import RulesSummary from './RulesSummary';

export default function Setup({ S, ui, A }) {
  const locked = S.stage !== 'setup';
  const s = S.settings;
  const c = L.ruleCfg(s);
  const isGroups = s.format === 'groups';
  const mode = isGroups ? ui.mode : 'players';
  const wheelRef = useRef(null);
  const angleRef = useRef(0);
  const [spinning, setSpinning] = useState(false);
  const stopRef = useRef(false);
  const [auto, setAuto] = useState(false);

  const inTeam = new Set(S.teams.flatMap((t) => t.playerIds));
  const poolPlayers = S.players.filter((p) => !inTeam.has(p.id) && !S.draft.includes(p.id));
  const poolTeams = S.teams.filter((t) => !t.group);
  const items = (mode === 'players' ? poolPlayers : poolTeams).map((x) => ({
    id: x.id,
    label: mode === 'players' ? x.name : L.teamName(S, x),
  }));

  const caps = L.groupCaps(S.teams.length, s.groupSize);
  const counts = caps.map((_, gi) => S.teams.filter((t) => t.group === L.letters(gi)).length);
  const gi = counts.findIndex((c, i) => c < caps[i]);

  const openGroups = caps.filter((c, i) => counts[i] < c).length;
  const determined =
    mode === 'players'
      ? poolPlayers.length > 0 && S.draft.length + poolPlayers.length === s.teamSize
      : poolTeams.length > 0 && openGroups === 1;

  async function spin() {
    if (spinning || !items.length) return;
    if (determined) return A.settle(mode);
    setSpinning(true);
    const idx = await wheelRef.current.spin();
    setSpinning(false);
    if (idx >= 0) A.pick(mode, items[idx]);
  }

  /** Spins the wheel one pick at a time (animated) until nobody is left. */
  async function autoSpin() {
    if (spinning || !items.length) return;
    if (determined) return A.settle(mode);
    stopRef.current = false;
    setSpinning(true);
    setAuto(true);
    try {
      while (!stopRef.current && wheelRef.current && wheelRef.current.items().length) {
        const list = wheelRef.current.items();
        const idx = await wheelRef.current.spin(true);
        if (idx < 0) break;
        A.pick(mode, list[idx]);
        await new Promise((r) => setTimeout(r, 1000)); // show the pick, let the wheel rebuild
      }
    } finally {
      setSpinning(false);
      setAuto(false);
    }
  }

  const select = (key, vals, labels) => (
    <select className="input" value={s[key]} disabled={locked} onChange={(e) => A.setting(key, Number(e.target.value))}>
      {vals.map((x, i) => (<option key={x} value={x}>{labels ? labels[i] : x}</option>))}
    </select>
  );

  const TeamCard = ({ t }) => (
    <div className="team">
      {!locked && (
        <div className="tools">
          <button className="btn icon-btn" title="Rename" onClick={() => A.renameTeam(t.id)}><Icon name="pencil" size={13} /></button>
          <button className="btn icon-btn danger" title="Delete team" onClick={() => A.delTeam(t.id)}><Icon name="trash" size={13} /></button>
        </div>
      )}
      <Avatars S={S} team={t} />
      <div className="tn">{L.teamName(S, t)}</div>
      <div className="tm">
        {t.name ? members(S, t) : `${t.playerIds.length} player${t.playerIds.length === 1 ? '' : 's'}`}
        {t.locked ? ' · default' : ''}
      </div>
    </div>
  );

  const groupNames = [...new Set(S.teams.map((t) => t.group).filter(Boolean))].sort();
  const matchesCount = S.teams.length > 1 ? (S.teams.length * (S.teams.length - 1)) / 2 : 0;

  return (
    <div className="grid cols-2">
      <div className="stack">
        {locked ? (
          <div className="note">
            <Icon name="info" size={18} />
            <div>The tournament is running, so teams and rules are locked. Use <b>New</b> (top right) to start a fresh one — only <b>Sayem + Mosaraf</b> stays as a team (all players are kept).</div>
          </div>
        ) : (
          <>
            <section className="cta">
              <div className="big"><Art name="paddle" size={38} /></div>
              <div className="sp">
                <h3>Ready to play?</h3>
                <div className="sub">
                  {S.teams.length} team{S.teams.length === 1 ? "" : "s"} · {isGroups ? 'grouped round-robin' : `${matchesCount} league matches`} · {s.gamesPerMatch} games per match
                </div>
              </div>
              <button className="btn primary lg" onClick={A.start}><Icon name="play" />Start Tournament</button>
            </section>

            <section className="card wheel-card">
              <div className="card-h">
                <h2><Art name="wheel" size={30} />Lucky Spinner</h2>
                {isGroups && (
                  <div className="seg modes">
                    <button className={mode === 'players' ? 'on' : ''} onClick={() => A.setMode('players')}><Icon name="users" size={15} />Players <span className="arr">→</span> Teams</button>
                    <button className={mode === 'teams' ? 'on' : ''} onClick={() => A.setMode('teams')}><Icon name="layers" size={15} />Teams <span className="arr">→</span> Groups</button>
                  </div>
                )}
              </div>
              <WheelCanvas ref={wheelRef} items={items} angleRef={angleRef} />
              <div className="row" style={{ justifyContent: 'center' }}>
                <button className="btn gold lg" disabled={!items.length || spinning} onClick={spin}>
                  {determined ? <><Icon name="check" size={19} />COMPLETE</> : <><Icon name="zap" size={19} />SPIN</>}
                </button>
                {auto ? (
                  <button className="btn lg danger" onClick={() => (stopRef.current = true)}><Icon name="x" />Stop</button>
                ) : (
                  <button className="btn lg" disabled={!items.length || spinning} onClick={autoSpin}>
                    <Icon name="shuffle" />Auto {mode === 'players' ? 'draw all' : 'group all'}
                  </button>
                )}
              </div>
              {determined && !spinning && (
                <div className="hint">
                  {mode === 'players'
                    ? <>Only <b>{poolPlayers.length + S.draft.length}</b> left — they form the last team, <b>no spin needed</b>.</>
                    : <>Only one group left — remaining teams go there, <b>no spin needed</b>.</>}
                </div>
              )}
              {mode === 'players' && !determined && (
                <div className="hint">{poolPlayers.length} player{poolPlayers.length === 1 ? '' : 's'} waiting · manage the list in the <b>Players</b> tab</div>
              )}
              {ui.lastPick && (<div className="picked" key={ui.lastPick}><Icon name="sparkles" size={17} /> <b>{ui.lastPick}</b></div>)}
              {mode === 'players' ? (
                <>
                  <div className="sub" style={{ marginTop: 16 }}>Next team drafting · {S.draft.length}/{s.teamSize} picked</div>
                  <div className="draft">
                    {Array.from({ length: s.teamSize }, (_, i) => {
                      const id = S.draft[i];
                      return (<div key={i} className={`slot ${id ? 'f' : ''}`}>{id ? L.playerName(S, id) : 'Player ' + (i + 1)}</div>);
                    })}
                  </div>
                  {S.draft.length > 0 && (
                    <div className="row" style={{ justifyContent: 'center', marginTop: 8 }}>
                      <button className="btn sm" onClick={A.finishDraft}><Icon name="check" size={14} />Make team with {S.draft.length}</button>
                      <button className="btn sm ghost" onClick={A.clearDraft}><Icon name="reset" size={14} />Undo picks</button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="sub" style={{ marginTop: 16 }}>
                    {gi >= 0 ? (<>Next spin goes to <b style={{ color: 'var(--em)' }}>Group {L.letters(gi)}</b> · {counts[gi]}/{caps[gi]} filled</>) : 'All teams are grouped 🎉'}
                  </div>
                  <div className="row" style={{ justifyContent: 'center', marginTop: 8 }}>
                    <button className="btn sm ghost" onClick={A.clearGroups}><Icon name="reset" size={14} />Clear groups</button>
                  </div>
                </>
              )}
            </section>
          </>
        )}
      </div>

      <div className="stack">
        <section className="card">
          <div className="card-h"><h2><Art name="users" size={30} />Teams <span className="badge em">{S.teams.length}</span></h2></div>
          {!S.teams.length ? (
            <div className="empty">No teams yet — spin the wheel to build some</div>
          ) : isGroups ? (
            <>
              {groupNames.map((g) => (
                <div key={g}>
                  <div className="group-h"><span className="gl">{g}</span>Group {g}</div>
                  <div className="teams-grid">{S.teams.filter((t) => t.group === g).map((t) => <TeamCard key={t.id} t={t} />)}</div>
                </div>
              ))}
              {S.teams.some((t) => !t.group) && (
                <>
                  <div className="group-h"><span className="gl" style={{ background: 'rgba(255,255,255,.1)', color: 'var(--muted)' }}>?</span>Not grouped yet</div>
                  <div className="teams-grid">{S.teams.filter((t) => !t.group).map((t) => <TeamCard key={t.id} t={t} />)}</div>
                </>
              )}
            </>
          ) : (
            <div className="teams-grid">{S.teams.map((t) => <TeamCard key={t.id} t={t} />)}</div>
          )}
        </section>

        <section className="card">
          <div className="card-h">
            <h2><Art name="sliders" size={30} />Tournament Rules</h2>
            {locked && <span className="badge gold"><Icon name="lock" size={12} />Format locked · scoring rules editable</span>}
          </div>

          <div className="rs-title">Format</div>
          <div className="field" style={{ marginBottom: 14 }}>
            <div className="seg">
              <button className={!isGroups ? 'on' : ''} disabled={locked} onClick={() => A.setFormat('league')}>League · all vs all</button>
              <button className={isGroups ? 'on' : ''} disabled={locked} onClick={() => A.setFormat('groups')}>Groups</button>
            </div>
          </div>
          <div className="settings">
            <div className="field"><label>Players per team</label>{select('teamSize', [1, 2, 3, 4])}</div>
            {isGroups ? (
              <>
                <div className="field"><label>Teams per group</label>{select('groupSize', [2, 3, 4, 5, 6])}</div>
                <div className="field"><label>Qualify per group</label>{select('advancePerGroup', [1, 2, 3, 4])}</div>
              </>
            ) : (
              <div className="field">
                <label>Qualify for knockout</label>
                {select('qualifiers', [2, 4, 8], ['Top 2 (Final)', 'Top 4 (Semi-Finals)', 'Top 8 (Quarter-Finals)'])}
              </div>
            )}
          </div>

          <div className="rs-title">Match &amp; game</div>
          <div className="settings">
            <div className="field"><label>Games per group match</label>{select('gamesPerMatch', [1, 2, 3, 4, 5, 6, 7])}</div>
            <div className="field">
              <label>Games per knockout match</label>
              <select className="input" value={s.knockoutGames} disabled={!!S.bracket} onChange={(e) => A.setting('knockoutGames', Number(e.target.value))}>
                {[1, 3, 5, 7].map((x) => (<option key={x} value={x}>Best of {x}</option>))}
              </select>
            </div>
            <div className="field" style={{ gridColumn: '1 / -1' }}>
              <label>Points per game (a game is played to…)</label>
              <div className="row">
                <input
                  key={c.pointsPerGame}
                  className="input"
                  style={{ width: 96 }}
                  type="number"
                  min="1"
                  max="99"
                  defaultValue={c.pointsPerGame}
                  onBlur={(e) => { const n = parseInt(e.target.value, 10); if (n >= 1 && n <= 99) A.setting('pointsPerGame', n); else e.target.value = c.pointsPerGame; }}
                  onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
                />
                {[11, 15, 20, 21].map((n) => (
                  <button key={n} className={`pill ${c.pointsPerGame === n ? 'on' : ''}`} onClick={() => A.setting('pointsPerGame', n)}>{n}</button>
                ))}
                <span className="sub">11 = ITTF standard</span>
              </div>
            </div>
          </div>
          <div className="tgl-list">
            <label className="toggle"><input type="checkbox" checked={!!c.winByTwo} onChange={(e) => A.setting('winByTwo', e.target.checked)} />Win by 2 points (deuce) <span className="sub">e.g. 11–9, 12–10 · ITTF rule</span></label>
            <label className="toggle"><input type="checkbox" checked={!!c.checkScores} onChange={(e) => A.setting('checkScores', e.target.checked)} />Warn me when a score breaks the game rules</label>
            <label className="toggle"><input type="checkbox" checked={!!s.playAll} disabled={locked} onChange={(e) => A.setting('playAll', e.target.checked)} />Play &amp; count all games in every match <span className="sub">(ITclanBD rule)</span></label>
            <label className="toggle"><input type="checkbox" checked={!!c.allowDraw} disabled={locked} onChange={(e) => A.setting('allowDraw', e.target.checked)} />Allow draws in group matches <span className="sub">needs an even number of games, e.g. 2 or 4</span></label>
          </div>

          <div className="rs-title">Group table points</div>
          <div className="field">
            <select
              className="input"
              value={c.pointPreset || L.presetOf(s)}
              onChange={(e) => {
                const k = e.target.value, q = L.POINT_PRESETS[k];
                if (k === 'games') A.setMany({ pointPreset: k, pointSystem: 'games' });
                else if (k === 'custom') A.setMany({ pointPreset: k, pointSystem: 'match' });
                else A.setMany({ pointPreset: k, pointSystem: 'match', ptsWin: q.ptsWin, ptsDraw: q.ptsDraw, ptsLoss: q.ptsLoss });
              }}
            >
              {Object.entries(L.POINT_PRESETS).map(([k, q]) => (<option key={k} value={k}>{q.label}</option>))}
            </select>
          </div>
          {(c.pointPreset || L.presetOf(s)) !== 'games' && (
            <div className="pts-row">
              {[['ptsWin', 'Win'], ['ptsDraw', 'Draw'], ['ptsLoss', 'Loss']].map(([k, label]) => (
                <div className="field" key={k}>
                  <label>{label}</label>
                  <input
                    key={c[k]}
                    className="input"
                    type="number"
                    step="0.5"
                    min="0"
                    max="20"
                    disabled={(c.pointPreset || L.presetOf(s)) !== 'custom'}
                    defaultValue={c[k]}
                    onBlur={(e) => { const n = parseFloat(e.target.value); if (n >= 0 && n <= 20) A.setting(k, n); else e.target.value = c[k]; }}
                    onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="rs-title">If teams are level on points</div>
          <div className="field">
            <select className="input" value={c.tiebreak} onChange={(e) => A.setting('tiebreak', e.target.value)}>
              {Object.entries(L.TIEBREAKS).map(([k, q]) => (<option key={k} value={k}>{q.label}</option>))}
            </select>
            <div className="sub" style={{ marginTop: 8 }}>{L.TIEBREAKS[c.tiebreak]?.text}</div>
          </div>
        </section>

        <RulesSummary settings={s} title="Current rules in one look" />
      </div>
    </div>
  );
}
