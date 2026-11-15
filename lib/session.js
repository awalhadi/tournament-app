// Cookie session (signed with HMAC-SHA256). Works in both the proxy and route handlers.
export const COOKIE = 'tt_session';
const DAYS = 30;
const enc = new TextEncoder();

const secret = () => process.env.AUTH_SECRET || `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}:tt-arena`;

async function hmac(msg) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret()), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function safeEqual(a, b) {
  a = String(a); b = String(b);
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export const authConfigured = () => !!(process.env.BASIC_AUTH_USER && process.env.BASIC_AUTH_PASSWORD);

export async function createToken() {
  const exp = String(Date.now() + DAYS * 864e5);
  return `${exp}.${await hmac(exp)}`;
}

export async function verifyToken(token) {
  if (!token) return false;
  const [exp, sig] = token.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return safeEqual(sig, await hmac(exp));
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: DAYS * 86400,
};
