'use client';
import { useEffect, useRef, useState } from 'react';

/** Asks for the master password and verifies it on the server before resolving. */
export default function MasterPrompt({ title, text, warn, onDone }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const ref = useRef(null);
  useEffect(() => ref.current?.focus(), []);

  const submit = async (e) => {
    e.preventDefault();
    if (busy) return;
    if (!pw) return setErr('Enter the master password.');
    setBusy(true);
    setErr('');
    try {
      const r = await fetch('/api/verify-master', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: pw }) });
      if (r.status === 401) return window.location.assign('/login');
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) return onDone(pw);
      setErr(
        j.error === 'too_many_attempts' ? 'Too many wrong attempts. Try again in a few minutes.'
        : j.error === 'master_password_not_configured' ? 'Master password is not configured on the server.'
        : 'Wrong master password.'
      );
      setPw('');
      ref.current?.focus();
    } catch {
      setErr('Could not reach the server. Check your connection.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onDone(null)} onKeyDown={(e) => e.key === 'Escape' && onDone(null)}>
      <form className="modal-c" onSubmit={submit} autoComplete="off">
        <h3>{title || 'Master password required'}</h3>
        <p>{text || 'This score is already saved. Enter the master password to change it.'}{warn ? `\n\n${warn}` : ''}</p>
        <div className="field">
          <label htmlFor="master-pw">Master password</label>
          <input id="master-pw" ref={ref} className="input" type="password" autoComplete="off" value={pw} onChange={(e) => setPw(e.target.value)} aria-invalid={!!err} />
          {err && <div className="verdict err" role="alert" style={{ marginTop: 8 }}>{err}</div>}
        </div>
        <div className="row" style={{ marginTop: 16 }}>
          <button type="button" className="btn" onClick={() => onDone(null)}>Cancel</button>
          <button type="submit" className="btn primary" disabled={busy}>{busy ? 'Checking…' : 'Unlock & save'}</button>
        </div>
      </form>
    </div>
  );
}
