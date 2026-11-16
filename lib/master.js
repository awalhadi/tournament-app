// Master password for editing scores that are already saved.
// The password lives ONLY in the server env (MASTER_PASSWORD). Never prefix it with NEXT_PUBLIC_.
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
