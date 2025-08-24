import { type NextRequest, NextResponse } from 'next/server';

import { generateNonce } from './utils';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const isStudio = url.pathname.startsWith('/studio');

  if (isStudio) {
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

  const nonce = generateNonce();
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-nonce', nonce);

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  const base = [
    `default-src 'self'`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' https://cdn.sanity.io data: blob:`,
    `font-src 'self'`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `object-src 'none'`,
  ];

  const siteOnly = [
    `script-src 'self' 'nonce-${nonce}'`,
    `connect-src 'self' https://*.sanity.io wss://*.sanity.io https://*.youtube.com https://*.ytimg.com`,
    `frame-src https://www.youtube.com https://www.youtube-nocookie.com`,
  ];

  const studioOnly = [
    `script-src 'self' 'unsafe-inline'`,
    `connect-src 'self' https://*.sanity.io wss://*.sanity.io`,
    `worker-src 'self' blob:`,
    `img-src 'self' https://cdn.sanity.io https://lh3.googleusercontent.com https://secure.gravatar.com data: blob:`,
  ];

  const csp = [...base, ...(isStudio ? studioOnly : siteOnly)].join('; ');
  res.headers.set('Content-Security-Policy', csp);

  return res;
}

export const config = { matcher: '/:path*' };
