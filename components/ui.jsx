'use client';
import { P } from '../lib/icons';
import { GRADIENTS, artMarkup } from '../lib/art';
import * as L from '../lib/logic';

export function Icon({ name, size = 18, className = '' }) {
  return (
    <svg
      className={`ic ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: P[name] || '' }}
    />
  );
}

export function ArtDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs dangerouslySetInnerHTML={{ __html: GRADIENTS }} />
    </svg>
  );
}

/** Full-colour illustrated icon. */
export function Art({ name, size = 24, className = '', style }) {
  return (
    <svg
      className={`art ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      style={style}
      dangerouslySetInnerHTML={{ __html: artMarkup(name) }}
    />
  );
}

export function Logo() {
  return <Art name="paddle" size={40} />;
}

export const pad = (n) => String(n).padStart(2, '0');
export const tn = (S, id) => L.teamName(S, L.getTeam(S, id));
export const members = (S, t) => (t ? t.playerIds.map((id) => L.playerName(S, id)).join(', ') : '');
const AV = ['#34d399', '#22d3ee', '#818cf8', '#c084fc', '#f472b6', '#fbbf24', '#fb7185', '#2dd4bf'];

export function Avatars({ S, team }) {
  return (
    <div className="av">
      {team.playerIds.map((id) => {
        const i = Math.max(0, S.players.findIndex((p) => p.id === id));
        return (
          <i key={id} style={{ background: AV[i % AV.length] }}>
            {(L.playerName(S, id)[0] || '?').toUpperCase()}
          </i>
        );
      })}
    </div>
  );
}

export function Empty({ icon, title, children }) {
  return (
    <div className="empty card">
      <Art name={icon} size={52} />
      <h3 style={{ margin: '10px 0 4px', color: 'var(--text)' }}>{title}</h3>
      {children}
    </div>
  );
}
