'use client';
import { useState } from 'react';
import * as L from '../lib/logic';
import { Art, Avatars, Icon } from './ui';

/** Manual team + group management (Setup tab, "Custom" assignment mode). */
export default function CustomManager({ S, A }) {
  const s = S.settings;
  const isGroups = s.format === 'groups';
  const [editId, setEditId] = useState(null); // team being edited, or null = building a new one
  const [sel, setSel] = useState([]);
  const [name, setName] = useState('');

  const editing = editId ? L.getTeam(S, editId) : null;
  // while editing, the team's own players are selectable too
  const pool = [...L.unassignedPlayers(S), ...(editing ? editing.playerIds.map((id) => S.players.find((p) => p.id === id)).filter(Boolean) : [])];
  const err = sel.length === s.teamSize ? L.canFormTeam(S, sel, editId) : null;
  const ready = sel.length === s.teamSize && !err;

  const reset = () => { setEditId(null); setSel([]); setName(''); };
  const toggle = (id) => setSel((x) => (x.includes(id) ? x.filter((y) => y !== id) : x.length < s.teamSize ? [...x, id] : x));
  const submit = () => {
    if (!ready) return;
    const ok = editId ? A.updateTeam(editId, { name, playerIds: sel }) : A.createTeam(sel, name);
    if (ok) reset();
  };
  const startEdit = (t) => { setEditId(t.id); setSel([...t.playerIds]); setName(t.name || ''); };

  const groups = L.customGroupNames(S);
  const warns = L.groupWarnings(S);

  return (
    <section className="card custom-card">
      <div className="card-h"><h2><Art name="users" size={30} />Custom Teams{isGroups ? ' & Groups' : ''}</h2></div>

      <div className="rs-title">{editing ? `Edit team · ${L.teamName(S, editing)}` : 'Build a team'}</div>
      {!pool.length ? (
        <div className="empty">No free players — add some in the <b>Players</b> tab{S.draft.length ? ' (or clear the spin draft)' : ''}</div>
      ) : (
        <div className="pick-list">
          {pool.map((p) => (
            <label key={p.id} className={`pick ${sel.includes(p.id) ? 'on' : ''}`}>
              <input type="checkbox" checked={sel.includes(p.id)} onChange={() => toggle(p.id)} />
              {p.name}
            </label>
          ))}
        </div>
      )}
      <div className="row" style={{ marginTop: 10 }}>
        <input className="input" style={{ flex: 1, minWidth: 140 }} placeholder="Team name (optional)" value={name} maxLength={40} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && submit()} />
        <button className="btn primary" disabled={!ready} onClick={submit}><Icon name="check" size={15} />{editing ? 'Save team' : 'Create team'}</button>
        {editing && <button className="btn ghost" onClick={reset}>Cancel</button>}
      </div>
      <div className="sub" style={{ marginTop: 8 }}>{sel.length}/{s.teamSize} players selected{err ? <> · <span style={{ color: 'var(--danger, #f87171)' }}>{err}</span></> : ''}</div>

      <div className="rs-title" style={{ marginTop: 18 }}>Teams</div>
      {!S.teams.length ? (
        <div className="empty">No teams yet</div>
      ) : (
        <div className="cm-list">
          {S.teams.map((t) => (
            <div key={t.id} className={`cm-row ${editId === t.id ? 'on' : ''}`}>
              <Avatars S={S} team={t} />
              <div className="cm-name">
                <b>{L.teamName(S, t)}</b>
                {t.name && <small>{t.playerIds.map((id) => L.playerName(S, id)).join(' + ')}</small>}
                {t.locked && <small>default team</small>}
              </div>
              {isGroups && (
                <select className="input cm-sel" value={t.group || ''} onChange={(e) => A.assignGroup(t.id, e.target.value || null)} title="Group">
                  <option value="">No group</option>
                  {groups.map((g) => (<option key={g} value={g}>Group {g}</option>))}
                </select>
              )}
              {!t.locked && <button className="btn icon-btn" title="Edit team" onClick={() => startEdit(t)}><Icon name="pencil" size={13} /></button>}
              <button className="btn icon-btn danger" title="Delete team" onClick={() => { if (editId === t.id) reset(); A.delTeam(t.id); }}><Icon name="trash" size={13} /></button>
            </div>
          ))}
        </div>
      )}

      {isGroups && S.teams.length > 0 && (
        <>
          <div className="rs-title" style={{ marginTop: 18 }}>Group board</div>
          <div className="gboard">
            {[...groups, null].map((g) => {
              const list = S.teams.filter((t) => (g ? t.group === g : !t.group));
              return (
                <div key={g || 'none'} className="gcol">
                  <div className="group-h"><span className="gl" style={g ? undefined : { background: 'rgba(255,255,255,.1)', color: 'var(--muted)' }}>{g || '?'}</span>{g ? `Group ${g}` : 'Unassigned'} <span className="sub">· {list.length}</span></div>
                  {list.map((t) => (<div key={t.id} className="gteam">{L.teamName(S, t)}</div>))}
                  {!list.length && <div className="sub">empty</div>}
                </div>
              );
            })}
          </div>
          {warns.map((w) => (<div key={w.group} className="hint">{w.msg}</div>))}
        </>
      )}
    </section>
  );
}
