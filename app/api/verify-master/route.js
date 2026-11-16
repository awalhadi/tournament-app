import { NextResponse } from 'next/server';
import { checkMaster, clearFailures, isLocked, recordFailure } from '../../../lib/master';
import { COOKIE } from '../../../lib/session';

export const dynamic = 'force-dynamic';

// Lets the UI check the master password BEFORE applying a score edit (the site login still applies via proxy.js).
export async function POST(req) {
  const key = req.cookies.get(COOKIE)?.value || req.headers.get('x-forwarded-for') || 'anon';
  if (isLocked(key)) return NextResponse.json({ ok: false, error: 'too_many_attempts' }, { status: 429 });
  let body = {};
  try { body = await req.json(); } catch {}
  const c = checkMaster(String(body.password || ''));
  if (!c.ok) {
    if (c.status === 403) { recordFailure(key); await new Promise((r) => setTimeout(r, 700)); }
    return NextResponse.json({ ok: false, error: c.error }, { status: c.status });
  }
  clearFailures(key);
  return NextResponse.json({ ok: true });
}
