import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const expected = process.env.SANITY_REVALIDATE_SECRET || '';
  const got = req.headers.get('x-webhook-secret') || '';

  if (!expected || got !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidateTag('all-data');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
