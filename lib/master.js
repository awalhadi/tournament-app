// Master password for editing scores that are already saved.
// The password lives ONLY in the server env (MASTER_PASSWORD). Never prefix it with NEXT_PUBLIC_.
import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { safeEqual } from './session.js';

export const MASTER_HEADER = 'x-master-password';

/**
 * Decide whether a request may change saved scores.
 * Returns { ok: true } or { ok: false, status, error }.
 *  - env not configured: fail closed in production (503), allow in dev so local work isn't blocked.
 */
export function checkMaster(provided, env = process.env) {
  const expected = env.MASTER_PASSWORD;
  if (!expected) {
    if (env.NODE_ENV === 'production') return { ok: false, status: 503, error: 'master_password_not_configured' };
    return { ok: true, devBypass: true };
  }
  if (!provided) return { ok: false, status: 403, error: 'master_password_required' };
  return safeEqual(String(provided), expected) ? { ok: true } : { ok: false, status: 403, error: 'master_password_invalid' };
}

// Best-effort brute-force guard. In-memory, so on serverless it only holds per warm instance;
// it slows guessing but is not a hard guarantee.
const MAX_FAILS = 5;
const WINDOW_MS = 5 * 60 * 1000;
const fails = new Map(); // key -> number[] (timestamps)

const recent = (key, now) => (fails.get(key) || []).filter((t) => now - t < WINDOW_MS);

export function isLocked(key, now = Date.now()) {
  return recent(key, now).length >= MAX_FAILS;
}

export function recordFailure(key, now = Date.now()) {
  const list = [...recent(key, now), now];
  fails.set(key, list);
  if (fails.size > 500) for (const [k, v] of fails) if (!v.some((t) => now - t < WINDOW_MS)) fails.delete(k);
}

export function clearFailures(key) {
  fails.delete(key);
}

// ---------- stored (hashed) master password ----------
const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64 };
const scryptAsync = (pw, salt, { N, r, p, keylen }) =>
  new Promise((res, rej) => scrypt(pw, salt, keylen, { N, r, p }, (e, k) => (e ? rej(e) : res(k))));

/** Salted scrypt hash record. The plain password is never stored. */
export async function hashPassword(pw) {
  const salt = randomBytes(16);
  const key = await scryptAsync(String(pw), salt, SCRYPT);
  return { v: 1, salt: salt.toString('base64'), hash: key.toString('base64'), params: SCRYPT, updatedAt: new Date().toISOString() };
}

export async function verifyHash(pw, rec) {
  try {
    const expected = Buffer.from(rec.hash, 'base64');
    const key = await scryptAsync(String(pw), Buffer.from(rec.salt, 'base64'), rec.params || SCRYPT);
    return key.length === expected.length && timingSafeEqual(key, expected);
  } catch {
    return false;
  }
}

export const MIN_LEN = 8;
export const MAX_LEN = 128;

/** Returns null when OK, otherwise an error code. */
export function validateNewPassword(next, confirm, current) {
  if (typeof next !== 'string' || next.length < MIN_LEN) return 'password_too_short';
  if (next.length > MAX_LEN) return 'password_too_long';
  if (confirm !== undefined && next !== confirm) return 'password_mismatch';
  if (next === current) return 'same_as_current';
  return null;
}

/** The secret URL segment lives only in env. Unset or empty = feature disabled. */
const adminPath = (env) => String(env.MASTER_ADMIN_PATH ?? '').trim();
export function adminSecretOk(provided, env = process.env) {
  const expected = adminPath(env);
  if (!expected) return false;
  return safeEqual(String(provided || ''), expected);
}
export const adminEnabled = (env = process.env) => !!adminPath(env);
