import { notFound } from 'next/navigation';
import MasterChange from '../../../components/MasterChange';
import { adminSecretOk } from '../../../lib/master';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Master password — ITclan TT Arena', robots: { index: false, follow: false }, referrer: 'no-referrer' };

// Secret URL: /master/<MASTER_ADMIN_PATH>. Wrong or unset secret = a normal 404 (feature invisible).
export default async function Page({ params }) {
  const { secret } = await params;
  if (!adminSecretOk(secret)) notFound();
  return <MasterChange secret={secret} />;
}
