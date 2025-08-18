import '@/styles/globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { headers } from 'next/headers';

import { MODAL_ROOT_ID, PERSON_LD } from '@/lib/constants';
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '@/styles/constants';

const mariupol = localFont({
  src: [
    { path: './fonts/Mariupol-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Mariupol-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Mariupol-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mariupol',
  display: 'swap',
  preload: true,
});

const mariupolSymbols = localFont({
  src: [
    { path: './fonts/Mariupol-Symbols.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-mariupol-symbols',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'BrandProLab',
  description:
    'BrandProLab — особистий бренд Вікторії Захарової, карʼєрної консультантки в IT. Допомагає IT-фахівцям знайти роботу та впевнено пройти шлях до нової карʼєрної цілі.',
  icons: '/favicon.png',
  alternates: { canonical: 'https://brandprolab.com.ua' },
  keywords: [
    'карʼєра в IT',
    'пошук роботи в IT',
    'карʼєрний консультант',
    'Вікторія Захарова',
    'BrandProLab',
  ],
  robots: { index: true, follow: true, nocache: false },
  authors: [{ name: 'Вікторія Захарова' }],
  openGraph: {
    title: 'BrandProLab',
    description: 'Карʼєрна підтримка для IT-фахівців від Вікторії Захарової.',
    url: 'https://brandprolab.com.ua',
    siteName: 'BrandProLab',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://brandprolab.com.ua/og-image.png',
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: 'BrandProLab OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandProLab',
    description: 'Карʼєрна підтримка для IT-фахівців від Вікторії Захарової.',
    images: ['https://brandprolab.com.ua/og-image.jpg'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const hdrs = await headers();
  const nonce = hdrs.get('x-nonce') || undefined;

  return (
    <html
      lang="uk"
      className={`${mariupol.variable} ${mariupolSymbols.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }}
        />
      </head>

      <body>
        {children}
        <div id={MODAL_ROOT_ID} />
      </body>
    </html>
  );
}
