// Server-only storage for the master password record (a salted hash, never the password itself).
// Kept in its own object next to the tournament data so GET /api/data can never expose it and a
// tournament PUT can never overwrite it.
import { promises as fs } from 'fs';
import path from 'path';
import { get, put } from '@vercel/blob';
import { checkMaster, hashPassword, verifyHash } from './master.js';

const BLOB_PATH = 'master.json';
const hasBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN;
const FILE = () =>
  process.env.MASTER_FILE ||
  path.join(process.env.DATA_FILE ? path.dirname(process.env.DATA_FILE) : path.join(process.cwd(), 'data'), 'master.json');

/** null = no record saved yet. Throws on a real read error (callers must fail closed, never fall back to env). */
export async function readRecord() {
  if (hasBlob()) {
    const r = await get(BLOB_PATH, { access: 'private', useCache: false });
    if (!r || r.statusCode !== 200) return null;
    return JSON.parse(await new Response(r.stream).text());
  }
  try {
    return JSON.parse(await fs.readFile(FILE(), 'utf8'));
  } catch (e) {
    if (e.code === 'ENOENT') return null;
    throw e;
  }
}

export async function writeRecord(rec) {
  if (hasBlob()) {
    await put(BLOB_PATH, JSON.stringify(rec), { access: 'private', allowOverwrite: true, addRandomSuffix: false, contentType: 'application/json' });
    return;
  }
  const file = FILE();
  await fs.mkdir(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(rec, null, 2), { mode: 0o600 });
  await fs.rename(tmp, file); // atomic: a failed write never leaves a half-written password
}

/** Stored hash wins; env MASTER_PASSWORD is only the bootstrap until the first change. */
export async function verifyMaster(provided, env = process.env) {
  let rec;
  try {
    rec = await readRecord();
  } catch {
    return { ok: false, status: 503, error: 'master_password_unavailable' }; // fail closed
  }
  if (!rec) return checkMaster(provided, env);
  if (!provided) return { ok: false, status: 403, error: 'master_password_required' };
  return (await verifyHash(String(provided), rec)) ? { ok: true } : { ok: false, status: 403, error: 'master_password_invalid' };
}

export async function setMasterPassword(next) {
  await writeRecord(await hashPassword(next));
}
