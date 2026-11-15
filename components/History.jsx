'use client';
import { Art, Empty, Icon } from './ui';
import { Standings } from './Standings';
import { Bracket, Fixtures } from './Matches';

export default function History({ S, ui, A }) {
  const open = ui.histView && S.history.find((h) => h.id === ui.histView);

  if (open) {
    const V = { ...open.snapshot, history: [] };
    const tabs = [['standings', 'chart', 'Standings'], ['matches', 'paddle', 'Matches'], ...(V.bracket ? [['bracket', 'bracket', 'Knockout']] : [])];
    const t = tabs.some(([k]) => k === ui.histTab) ? ui.histTab : 'standings';
    return (
      <>
        <div className="row" style={{ marginBottom: 18 }}>
          <button className="btn" onClick={A.closeHist}>← All tournaments</button>
          <div className="sp" />
          <span className="badge">{open.teams} teams</span>
          <span className="badge">{open.format}</span>
          <span className="sub">{open.date}</span>
        </div>
        <section className="card" style={{ marginBottom: 20 }}>
          <div className="row">
            <Art name={open.champion ? 'trophy' : 'paddle'} size={44} />
            <div className="sp">
              <h2 style={{ fontSize: 18 }}>{open.title}</h2>
              <div className="sub">
                {open.champion ? <>Champion: <b style={{ color: 'var(--gold)' }}>{open.champion}</b> · {open.members}</> : open.note || 'No champion recorded'}
              </div>
            </div>
          </div>
        </section>
        <div className="filters">
          {tabs.map(([k, ic, n]) => (
            <button key={k} className={`pill ${t === k ? 'on' : ''}`} onClick={() => A.setHistTab(k)}>{n}</button>
          ))}
          <span className="badge gold" style={{ marginLeft: 'auto' }}><Icon name="lock" size={12} />Read only</span>
        </div>
        {t === 'standings' && <Standings S={V} />}
        {t === 'matches' && <Fixtures S={V} ui={ui} A={A} readOnly />}
        {t === 'bracket' && <Bracket S={V} A={A} readOnly />}
      </>
    );
  }

  const list = [...S.history].reverse();
  return (
    <section className="card">
      <div className="card-h">
        <h2><Art name="medal" size={30} />Past Tournaments <span className="badge">{list.length}</span></h2>
      </div>
      {list.length ? (
        <div className="hist">
          {list.map((e) => (
            <div className="hist-i click" key={e.id || e.date + e.champion} onClick={() => e.snapshot && A.openHist(e.id)}>
              <div className="tro"><Art name={e.champion ? 'trophy' : 'paddle'} size={30} /></div>
              <div className="sp">
                <b>{e.title || e.champion}</b>
                <div className="sub">
                  {e.champion ? <>Champion: <b style={{ color: 'var(--gold)' }}>{e.champion}</b> · {e.members} · Runner-up: {e.runnerUp || '—'}</> : e.note || ''}
                </div>
              </div>
              <span className="badge">{e.teams} teams</span>
              <span className="badge">{e.format}</span>
              <span className="sub">{e.date}</span>
              {e.snapshot && <button className="btn sm primary" onClick={(ev) => { ev.stopPropagation(); A.openHist(e.id); }}>View</button>}
              <button className="btn sm icon-btn danger" title="Delete" onClick={(ev) => { ev.stopPropagation(); A.delHist(e.id); }}><Icon name="trash" size={14} /></button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">Finished and reset tournaments are saved here, with all teams, scores, standings and bracket.</div>
      )}
    </section>
  );
}
