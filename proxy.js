import { NextResponse } from 'next/server';
import { COOKIE, authConfigured, verifyToken } from './lib/session';

// Protects the whole site with a login page (cookie session).
// Credentials come from env: BASIC_AUTH_USER / BASIC_AUTH_PASSWORD (optional AUTH_SECRET).
const PUBLIC = ['/login', '/api/login', '/api/logout'];

export async function proxy(req) {
  const { pathname } = req.nextUrl;

  if (!authConfigured()) {
    // Fail closed in production so the site is never accidentally public.
    if (process.env.NODE_ENV === 'production') {
      return new NextResponse('Server auth is not configured (set BASIC_AUTH_USER and BASIC_AUTH_PASSWORD).', { status: 503 });
    }
    return NextResponse.next();
  }

  const ok = await verifyToken(req.cookies.get(COOKIE)?.value);

  if (PUBLIC.includes(pathname)) {
    if (ok && pathname === '/login') return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.next();
  }
  if (ok) return NextResponse.next();

  if (pathname.startsWith('/api/')) return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
