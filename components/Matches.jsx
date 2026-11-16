'use client';
import { useMemo, useRef, useState } from 'react';
import * as L from '../lib/logic';
import { Art, Icon, Empty, members, pad, tn } from './ui';

export function infoMap(S) {
  const m = new Map();
  S.matches.forEach((x) => m.set(x.id, { ...x, ev: L.evalMatch(x.games, x.all, x.draw), ready: true }));
  if (S.bracket) L.resolveBracket(S.bracket).flat().forEach((x) => m.set(x.id, { ...x, all: S.bracket.all }));
  return m;
}

/** Score input. Keeps a local draft and commits on blur/Enter, so a multi-digit score is one save. */
function ScoreCell({ className, stored, disabled, label, onCommit }) {
  const [draft, setDraft] = useState(null);
  const skip = useRef(false);
  const saved = stored != null;
  const commit = () => {
    if (skip.current) { skip.current = false; return setDraft(null); }
    if (draft === null) return;
    Promise.resolve(onCommit(draft)).finally(() => setDraft(null));
  };
  return (
    <input
      className={className + (saved && !disabled ? ' saved' : '')}
      type="number"
      inputMode="numeric"
      min="0"
      max="99"
      disabled={disabled}
      value={draft !== null ? draft : stored ?? ''}
      title={saved && !disabled ? 'Saved score – master password required to change it' : undefined}
      aria-label={label}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.currentTarget.blur();
        else if (e.key === 'Escape') { skip.current = true; e.currentTarget.blur(); }
      }}
    />
  );
}

export function MatchCard({ S, info, ko, label, badge, onScore, readOnly }) {
  const { t1, t2, ev, ready, games } = info;
  const n = games.length;
  const teams = [t1, t2];
  const w = ev.done ? tn(S, ev.winner === 1 ? t1 : t2) : '';
  const hasTie = ev.states.includes('tie');
  const issues = L.scoreIssues(games, S.settings);
  const firstIssue = issues.findIndex((x) => x);
  const statusCls = ev.draw ? 'gold' : ev.done ? 'em' : ev.started ? 'live' : '';
  const statusTxt = ev.draw ? 'Draw' : ev.done ? 'Completed' : ev.started ? 'In progress' : ready ? 'Upcoming' : 'Waiting';

  const cell = (g, s) => {
    const st = ev.states[g];
    const cls = ['sc'];
    if ((st === 'w1' && s === 0) || (st === 'w2' && s === 1)) cls.push('w');
    if ((st === 'w1' && s === 1) || (st === 'w2' && s === 0)) cls.push('l');
    if (st === 'tie') cls.push('bad');
    else if (issues[g]) cls.push('warn');
    if (st === 'skipped') cls.push('skip');
    return (
      <ScoreCell
        key={`${g}-${s}`}
        className={cls.join(' ')}
        stored={games[g][s]}
        disabled={!ready || readOnly}
        label={`Game ${g + 1} score`}
        onCommit={(raw) => onScore(info.id, ko, g, s, raw)}
      />
    );
  };

  return (
    <article className={`match ${ev.done ? 'done' : ''} ${ready ? '' : 'locked'}`}>
      <div className="match-h">
        <span className="num">{label}</span>
        {badge && <span className="badge vio">{badge}</span>}
        <span className="sp" />
        <span className={`badge ${statusCls}`}>{statusTxt}</span>
      </div>
      <div className="board" style={{ '--g': n }}>
        <div />
        {games.map((_, i) => (
          <div className="hd" key={i}>G{i + 1}</div>
        ))}
        <div className="hd">WON</div>
        {[1, 2].map((side) => {
          const t = teams[side - 1] ? L.getTeam(S, teams[side - 1]) : null;
          const win = ev.done && ev.winner === side;
          return [
            <div className={`tn ${win ? 'win' : ''}`} key={`n${side}`}>
              <b>
                <Art name={win ? 'crown' : 'ball'} size={18} />
                <span>{t ? L.teamName(S, t) : 'TBD'}</span>
              </b>
              <small>{t ? members(S, t) : 'Waiting for result'}</small>
            </div>,
            games.map((_, g) => cell(g, side - 1)),
            <div className={`gw ${win ? 'win' : ''}`} key={`w${side}`}>{side === 1 ? ev.w1 : ev.w2}</div>,
          ];
        })}
      </div>
      {hasTie ? (
        <div className="verdict err">A game can’t end level — one side must win each game.</div>
      ) : ev.draw ? (
        <div className="verdict ok"><Icon name="check" size={15} /> Match drawn {ev.w1}–{ev.w2}</div>
      ) : ev.level ? (
        <div className="verdict err">Level {ev.w1}–{ev.w2} — draws are off. Enable “Allow draws” or use an odd number of games.</div>
      ) : ev.done ? (
        <div className="verdict ok">
          <Art name="trophy" size={18} /> {w} wins {Math.max(ev.w1, ev.w2)}–{Math.min(ev.w1, ev.w2)}
        </div>
      ) : !ready ? (
        <div className="verdict">Waiting for the previous round to finish.</div>
      ) : (
        <div className="verdict">Enter the score of each game (e.g. 21 – 17).</div>
      )}
      {!hasTie && firstIssue >= 0 && (
        <div className="verdict warn"><Icon name="info" size={15} /> Game {firstIssue + 1}: {issues[firstIssue]}</div>
      )}
    </article>
  );
}

export function KoCta({ S, A }) {
  const pg = L.groupProgress(S);
  if (S.stage === 'group' && pg.complete) {
    const seeds = L.qualifiedSeeds(S);
    return (
      <section className="cta">
        <div className="big"><Art name="trophy" size={40} /></div>
        <div className="sp">
          <h3>Group stage complete!</h3>
          <div className="sub">
            Qualified:{' '}
            {seeds.map((id, i) => (
              <span key={id}><b>{i + 1}.</b> {tn(S, id)} &nbsp; </span>
            ))}
          </div>
        </div>
        <button className="btn gold lg" onClick={A.startKO}>
          <Icon name="swords" /> Start {seeds.length === 2 ? 'Final' : 'Knockout'}
        </button>
      </section>
    );
  }
  if (S.stage === 'knockout') {
    return (
      <section className="cta">
        <div className="big"><Art name="bracket" size={40} /></div>
        <div className="sp">
          <h3>Knockout stage is live</h3>
          <div className="sub">Group results are locked while the bracket is running.</div>
        </div>
        <button className="btn primary" onClick={() => A.setTab('bracket')}>
          Open bracket <Icon name="arrow" size={16} />
        </button>
      </section>
    );
  }
  return null;
}

export function Fixtures({ S, ui, A, readOnly }) {
  const map = useMemo(() => infoMap(S), [S]);
  if (S.stage === 'setup') {
    return (
      <Empty icon="paddle" title="No matches yet">
        Build your teams, then press <b>Start Tournament</b> to generate the fixtures automatically.
        <div style={{ marginTop: 16 }}>
          <button className="btn primary" onClick={() => A.setTab('setup')}>Go to Teams</button>
        </div>
      </Empty>
    );
  }
  const groups = [...new Set(S.matches.map((m) => m.group).filter(Boolean))];
  const f = ui.filter;
  const idx = new Map(S.matches.map((m, i) => [m.id, i + 1]));
  const list = S.matches.filter((m) => {
    const d = map.get(m.id).ev.done;
    if (f === 'all') return true;
    if (f === 'pending') return !d;
    if (f === 'done') return d;
    return m.group === f;
  });
  const pg = L.groupProgress(S);
  return (
    <>
      {!readOnly && <KoCta S={S} A={A} />}
      <section className="card" style={{ marginBottom: 18 }}>
        <div className="card-h">
          <h2><Art name="paddle" size={30} />Group Stage Fixtures</h2>
          <span className="sub">{pg.done} / {pg.total} matches played</span>
        </div>
        <div className="prog"><i style={{ width: `${pg.total ? (pg.done / pg.total) * 100 : 0}%` }} /></div>
      </section>
      <div className="filters">
        {['all', ...groups, 'pending', 'done'].map((k) => (
          <button key={k} className={`pill ${f === k ? 'on' : ''}`} onClick={() => A.setFilter(k)}>
            {k === 'all' ? 'All' : k === 'pending' ? 'Pending' : k === 'done' ? 'Completed' : 'Group ' + k}
          </button>
        ))}
      </div>
      <div className="matches">
        {list.length ? (
          list.map((m) => (
            <MatchCard key={m.id} S={S} info={map.get(m.id)} ko={false} label={'Match ' + pad(idx.get(m.id))} badge={m.group ? `Group ${m.group}` : null} onScore={A.commitScore} readOnly={readOnly} />
          ))
        ) : (
          <div className="empty">Nothing here</div>
        )}
      </div>
    </>
  );
}

const COLORS = ['#fbbf24', '#10b981', '#22d3ee', '#f472b6', '#818cf8'];

function Confetti() {
  const bits = useMemo(
    () => Array.from({ length: 46 }, () => ({ l: Math.random() * 100, c: COLORS[Math.floor(Math.random() * 5)], d: 2.4 + Math.random() * 3, w: Math.random() * 3 })),
    []
  );
  return (
    <div className="confetti">
      {bits.map((b, i) => (
        <i key={i} style={{ left: `${b.l}%`, background: b.c, animationDuration: `${b.d}s`, animationDelay: `${b.w}s` }} />
      ))}
    </div>
  );
}

export function Bracket({ S, A, readOnly }) {
  const map = useMemo(() => infoMap(S), [S]);
  const pg = L.groupProgress(S);
  if (!S.bracket) {
    if (S.stage === 'setup')
      return <Empty icon="bracket" title="Knockout bracket">Appears after the group stage is finished.</Empty>;
    return (
      <>
        <KoCta S={S} A={A} />
        <Empty icon="bracket" title="Group stage in progress">
          {pg.done} of {pg.total} matches played. The bracket is generated automatically from the standings.
        </Empty>
      </>
    );
  }
  const res = L.resolveBracket(S.bracket);
  const ch = L.championOf(S);
  return (
    <>
      {ch && (
        <section className="champ">
          <Confetti />
          <div className="tro"><Art name="trophy" size={58} /></div>
          <div className="sub" style={{ letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 800 }}>Tournament Champion</div>
          <h2>{tn(S, ch.champion)}</h2>
          <div className="sub">{members(S, L.getTeam(S, ch.champion))} &nbsp;·&nbsp; Runner-up: {tn(S, ch.runnerUp)}</div>
          <div className="row">
            {!readOnly && <button className="btn gold lg" onClick={A.finish}><Icon name="check" />Save to history &amp; start new</button>}
          </div>
        </section>
      )}
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ fontSize: 17 }}><Art name="bracket" size={30} /> Knockout Bracket</h2>
        <span className="sp" />
        {!ch && !readOnly && <button className="btn sm" onClick={A.backToGroups}><Icon name="reset" size={14} />Edit group results</button>}
      </div>
      <div className="bracket">
        {res.map((round, r) => {
          const name = L.roundName(S.bracket.size, r);
          return (
            <div className="round" key={r}>
              <div className="round-h">{name}</div>
              {round.map((m) => (
                <MatchCard key={m.id} S={S} info={map.get(m.id)} ko label={round.length > 1 ? `${name} ${m.i + 1}` : name} onScore={A.commitScore} readOnly={readOnly} />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
