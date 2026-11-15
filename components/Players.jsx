'use client';
import { useState } from 'react';
import * as L from '../lib/logic';
import { Art, Icon } from './ui';

const AV = ['#34d399', '#22d3ee', '#818cf8', '#c084fc', '#f472b6', '#fbbf24', '#fb7185', '#2dd4bf'];

export default function Players({ S, A }) {
  const [names, setNames] = useState('');
  const locked = S.stage !== 'setup';
  const teamOf = new Map();
  S.teams.forEach((t) => t.playerIds.forEach((id) => teamOf.set(id, t)));
  const inTeams = S.players.filter((p) => teamOf.has(p.id)).length;

  function add() {
    if (A.addPlayers(names)) setNames('');
  }

  return (
    <div className="stack">
      <section className="card">
        <div className="card-h">
          <h2><Art name="person" size={30} />Players</h2>
          <div className="row">
            <span className="badge">{S.players.length} total</span>
            <span className="badge em">{inTeams} in teams</span>
            <span className="badge gold">{S.players.length - inTeams} available</span>
          </div>
        </div>
        <div className="row">
          <input
            className="input sp"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && add()}
            placeholder="Add players — separate names with comma (e.g. Rafi, Nabil)"
            autoComplete="off"
          />
          <button className="btn primary" onClick={add}><Icon name="plus" />Add</button>
        </div>
        <div className="sub" style={{ marginTop: 10 }}>
          This list stays even after a tournament reset. Players who are not in a team yet are the ones the spinner will pick from.
        </div>
      </section>

      <section className="players-grid">
        {S.players.map((p, i) => {
          const t = teamOf.get(p.id);
          return (
            <div className="pl" key={p.id}>
              <i className="pl-av" style={{ background: AV[i % AV.length] }}>{p.name[0]?.toUpperCase()}</i>
              <div className="pl-i">
                <b>{p.name}</b>
                <small className={t ? 'in' : ''}>{t ? L.teamName(S, t) : 'Available for draw'}</small>
              </div>
              {!locked && (
                <button className="btn icon-btn ghost" title="Remove player" onClick={() => A.delPlayer(p.id)}>
                  <Icon name="trash" size={15} />
                </button>
              )}
            </div>
          );
        })}
        {!S.players.length && <div className="empty">No players yet</div>}
      </section>
    </div>
  );
}
