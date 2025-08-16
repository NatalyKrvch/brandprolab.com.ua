import '@/styles/globals.css';

import type { Metadata } from 'next';

import { MODAL_ROOT_ID } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'BrandProLab',
  description:
    'BrandProLab — особистий бренд Вікторії Захарової, карʼєрної консультантки в IT. Допомагає IT-фахівцям знайти роботу та впевнено пройти шлях до нової карʼєрної цілі.',
  icons: '/favicon.png',
  alternates: {
    canonical: 'https://brandprolab.com.ua',
  },
  keywords: [
    'карʼєра в IT',
    'пошук роботи в IT',
    'карʼєрний консультант',
    'Вікторія Захарова',
    'BrandProLab',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
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
        url: 'https://brandprolab.com.ua/og-image.jpg',
        width: 1200,
        height: 630,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Вікторія Захарова',
              jobTitle: "Кар'єрна консультантка в IT",
              description:
                'Допомагає IT-спеціалістам знайти роботу в українських та міжнародних компаніях',
              image: 'https://brandprolab.com.ua/og-image.jpg',
              url: 'https://brandprolab.com.ua',
              sameAs: [
                'https://www.linkedin.com/in/zakharovaviktoriia/',
                'https://t.me/Zakharovavika',
              ],
            }),
          }}
        />
      </head>

      <body>
        {children}
        <div id={MODAL_ROOT_ID} />
      </body>
    </html>
  );
}
