'use client';
import { useState } from 'react';
import { Art, ArtDefs, Icon } from './ui';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      const r = await fetch('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        window.location.assign('/');
        return;
      }
      setError(j.error || 'Could not sign in');
    } catch {
      setError('Network error — please try again');
    }
    setBusy(false);
  }

  return (
    <div className="login-page">
      <ArtDefs />
      <div className="bg-orb o1" />
      <div className="bg-orb o2" />
      <div className="login-float f1"><Art name="trophy" size={78} /></div>
      <div className="login-float f2"><Art name="wheel" size={64} /></div>
      <div className="login-float f3"><Art name="medal" size={58} /></div>
      <div className="login-float f4"><Art name="ball" size={44} /></div>

      <form className="login-card" onSubmit={submit}>
        <div className="login-logo"><Art name="paddle" size={58} /></div>
        <h1>ITclan TT Arena</h1>
        <p className="login-sub">Table tennis tournament manager</p>

        <label className="lf">
          <span>Username</span>
          <div className="lf-in">
            <Icon name="user" size={18} />
            <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" autoFocus required placeholder="Enter username" />
          </div>
        </label>

        <label className="lf">
          <span>Password</span>
          <div className="lf-in">
            <Icon name="lock" size={18} />
            <input
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              placeholder="Enter password"
            />
            <button type="button" className="eye" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide password' : 'Show password'}>
              <Icon name={show ? 'eyeOff' : 'eye'} size={18} />
            </button>
          </div>
        </label>

        {error && <div className="login-err"><Icon name="info" size={16} />{error}</div>}

        <button className="btn primary lg login-btn" disabled={busy}>
          {busy ? 'Signing in…' : <>Sign in <Icon name="arrow" size={18} /></>}
        </button>
        <div className="login-foot">Private tournament area · authorised users only</div>
      </form>
    </div>
  );
}
