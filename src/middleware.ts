import { type NextRequest, NextResponse } from 'next/server';

import { generateNonce } from './utils';

export function middleware(req: NextRequest) {
  const nonce = generateNonce();
  const url = req.nextUrl;

  if (url.pathname.startsWith('/studio')) {
    const auth = req.headers.get('authorization');
    const need = new NextResponse('Потрібна авторизація', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Studio"' },
    });

    if (!auth) return need;

    const [, b64] = auth.split(' ');
    const [user, pass] = atob(b64 || '').split(':');

    if (user !== process.env.STUDIO_USER || pass !== process.env.STUDIO_PASS) {
      return need;
    }
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-nonce', nonce);

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}'`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' https://cdn.sanity.io data: blob:`,
    `font-src 'self'`,
    `connect-src 'self' https://*.sanity.io https://*.youtube.com`,
    `frame-src https://www.youtube.com`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `object-src 'none'`,
  ].join('; ');

  res.headers.set('Content-Security-Policy', csp);
  return res;
}

export const config = { matcher: '/:path*' };
