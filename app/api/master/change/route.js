import { NextResponse } from 'next/server';
import { adminEnabled, adminSecretOk, clearFailures, isLocked, recordFailure, validateNewPassword } from '../../../../lib/master';
import { setMasterPassword, verifyMaster } from '../../../../lib/masterStore';
import { COOKIE } from '../../../../lib/session';

export const dynamic = 'force-dynamic';

const slow = () => new Promise((r) => setTimeout(r, 700)); // slows down guessing
const json = (body, status) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

// Change the master password. Layers: site login (proxy.js) -> secret URL value -> CURRENT master password.
export async function POST(req) {
  if (!adminEnabled()) return json({ ok: false, error: 'not_found' }, 404); // feature disabled
  let body = {};
  try { body = await req.json(); } catch {}
  const key = req.cookies.get(COOKIE)?.value || req.headers.get('x-forwarded-for') || 'anon';

  if (isLocked(key)) return json({ ok: false, error: 'too_many_attempts' }, 429);
  if (!adminSecretOk(body.secret)) {
    recordFailure(key);
    await slow();
    return json({ ok: false, error: 'not_found' }, 404);
  }

  const current = String(body.current || '');
  const c = await verifyMaster(current);
  if (!c.ok) {
    if (c.status === 403) { recordFailure(key); await slow(); }
    return json({ ok: false, error: c.status === 403 ? 'current_password_invalid' : c.error }, c.status);
  }

  const bad = validateNewPassword(body.next, body.confirm, current);
  if (bad) return json({ ok: false, error: bad }, 400);

  try {
    await setMasterPassword(body.next);
  } catch (e) {
    console.error('master password save failed', e?.message); // never log the passwords
    return json({ ok: false, error: 'cannot_save' }, 500); // the old password stays valid
  }
  clearFailures(key);
  console.log(JSON.stringify({ event: 'master_password_changed', at: new Date().toISOString() }));
  return json({ ok: true }, 200);
}
