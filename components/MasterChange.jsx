'use client';
import { useState } from 'react';
import { Art, ArtDefs, Icon } from './ui';

const MESSAGES = {
  current_password_invalid: 'The current master password is wrong.',
  too_many_attempts: 'Too many wrong attempts. Try again in a few minutes.',
  password_too_short: 'The new password must be at least 8 characters.',
  password_too_long: 'The new password is too long (max 128 characters).',
  password_mismatch: 'The new password and its confirmation do not match.',
  same_as_current: 'The new password must be different from the current one.',
  cannot_save: 'Could not save the new password on the server. The old one is still active.',
  master_password_unavailable: 'Could not read the stored password. Try again.',
  not_found: 'This page is no longer valid.',
};

export default function MasterChange({ secret }) {
  const [f, setF] = useState({ current: '', next: '', confirm: '' });
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (busy) return;
    setError('');
    if (f.next.length < 8) return setError(MESSAGES.password_too_short);
    if (f.next !== f.confirm) return setError(MESSAGES.password_mismatch);
    setBusy(true);
    try {
      const r = await fetch('/api/master/change', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ secret, ...f }) });
      if (r.status === 401) return window.location.assign('/login');
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setF({ current: '', next: '', confirm: '' });
        setDone(true);
      } else {
        setError(MESSAGES[j.error] || 'Could not change the password.');
      }
    } catch {
      setError('Network error — please try again');
    }
    setBusy(false);
  }

  const type = show ? 'text' : 'password';
  const field = (k, label, ac) => (
    <label className="lf">
      <span>{label}</span>
      <div className="lf-in">
        <Icon name="lock" size={18} />
        <input type={type} value={f[k]} onChange={set(k)} autoComplete={ac} required placeholder={label} />
      </div>
    </label>
  );

  return (
    <div className="login-page">
      <ArtDefs />
      <div className="bg-orb o1" />
      <div className="bg-orb o2" />
      <form className="login-card" onSubmit={submit} autoComplete="off">
        <div className="login-logo"><Art name="trophy" size={58} /></div>
        <h1>Master password</h1>
        <p className="login-sub">Confirm the current password, then choose a new one.</p>
        {done ? (
          <div className="login-err" style={{ color: 'var(--em)', background: 'rgba(16, 185, 129, .12)', borderColor: 'rgba(16, 185, 129, .45)' }} role="status">
            <Icon name="info" size={16} />Master password changed. It is active on all devices now.
          </div>
        ) : (
          <>
            {field('current', 'Current master password', 'off')}
            {field('next', 'New master password (min 8 characters)', 'new-password')}
            {field('confirm', 'Confirm new password', 'new-password')}
            <label className="toggle" style={{ marginBottom: 12 }}>
              <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} /> Show passwords
            </label>
            {error && <div className="login-err" role="alert"><Icon name="info" size={16} />{error}</div>}
            <button className="btn primary lg login-btn" disabled={busy}>{busy ? 'Saving…' : 'Change master password'}</button>
          </>
        )}
        <div className="login-foot">Private page · do not share this link</div>
      </form>
    </div>
  );
}
