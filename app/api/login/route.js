import { NextResponse } from 'next/server';
import { COOKIE, authConfigured, cookieOptions, createToken, safeEqual } from '../../../lib/session';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  if (!authConfigured()) return NextResponse.json({ ok: false, error: 'Auth is not configured on the server' }, { status: 503 });
  let body = {};
  try { body = await req.json(); } catch {}
  const okUser = safeEqual(String(body.username || '').trim(), process.env.BASIC_AUTH_USER);
  const okPass = safeEqual(String(body.password || ''), process.env.BASIC_AUTH_PASSWORD);
  if (!(okUser && okPass)) {
    await new Promise((r) => setTimeout(r, 700)); // slow down guessing
    return NextResponse.json({ ok: false, error: 'Wrong username or password' }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, await createToken(), cookieOptions);
  return res;
}
