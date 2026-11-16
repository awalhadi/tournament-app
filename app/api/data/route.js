import { promises as fs } from 'fs';
import path from 'path';
import { get, put } from '@vercel/blob';
import { findScoreEdits } from '../../../lib/logic.js';
import { MASTER_HEADER, checkMaster, clearFailures, isLocked, recordFailure } from '../../../lib/master.js';
import { COOKIE } from '../../../lib/session.js';

export const dynamic = 'force-dynamic';

// Storage:
//  - Vercel Blob (when BLOB_READ_WRITE_TOKEN is set) is the source of truth → same data locally and live.
//  - data/tournament.json is also written when the filesystem is writable (local backup inside the project)
//    and is the fallback when no Blob store is configured.
const FILE = process.env.DATA_FILE || path.join(process.cwd(), 'data', 'tournament.json');
const BLOB_PATH = 'tournament.json';
const hasBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN;

async function readFile() {
  try {
    return JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch (e) {
    if (e.code === 'ENOENT') return null;
    throw e;
  }
}

async function writeFile(data) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = FILE + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(data, null, 2));
  await fs.rename(tmp, FILE); // atomic
}

async function readBlob() {
  const r = await get(BLOB_PATH, { access: 'private', useCache: false });
  if (!r || r.statusCode !== 200) return null;
  return JSON.parse(await new Response(r.stream).text());
}

export async function GET() {
  try {
    if (hasBlob()) {
      const fromBlob = await readBlob();
      if (fromBlob) return Response.json({ ok: true, data: fromBlob, store: 'blob' });
      // nothing in the cloud yet → use the local project file (it gets uploaded on the next save)
      return Response.json({ ok: true, data: await readFile().catch(() => null), store: 'blob' });
    }
    return Response.json({ ok: true, data: await readFile(), store: 'file' });
  } catch (e) {
    return Response.json({ ok: false, data: null }, { status: 500 });
  }
}

export async function PUT(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (!data || !Array.isArray(data.teams) || !Array.isArray(data.players)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Changing or clearing a score that is already saved needs the master password (enforced here,
  // so it cannot be bypassed by calling this endpoint directly). First entries stay free.
  let prev;
  try {
    prev = hasBlob() ? (await readBlob()) || (await readFile()) : await readFile();
  } catch {
    return Response.json({ ok: false, error: 'cannot_verify_existing_data' }, { status: 500 }); // fail closed
  }
  if (findScoreEdits(prev, data).length) {
    const key = req.cookies?.get(COOKIE)?.value || req.headers.get('x-forwarded-for') || 'anon';
    if (isLocked(key)) return Response.json({ ok: false, error: 'too_many_attempts' }, { status: 429 });
    const provided = req.headers.get(MASTER_HEADER);
    const c = checkMaster(provided);
    if (!c.ok) {
      if (provided) { recordFailure(key); await new Promise((r) => setTimeout(r, 700)); }
      return Response.json({ ok: false, error: c.error }, { status: c.status });
    }
    clearFailures(key);
  }

  let saved = false;
  let store = null;
  if (hasBlob()) {
    try {
      await put(BLOB_PATH, JSON.stringify(data), {
        access: 'private',
        allowOverwrite: true,
        addRandomSuffix: false,
        contentType: 'application/json',
      });
      saved = true;
      store = 'blob';
    } catch (e) {
      console.error('blob write failed', e?.message);
    }
  }
  try {
    await writeFile(data); // local backup (fails silently on read-only hosts like Vercel)
    if (!saved) { saved = true; store = 'file'; }
  } catch {}
  return Response.json({ ok: saved, store }, { status: saved ? 200 : 500 });
}
