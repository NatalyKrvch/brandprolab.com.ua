import '@/styles/globals.css';

import type { Metadata } from 'next';

import { MODAL_ROOT_ID } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'BrandProLab',
  description: '', // TODO: add description
  icons: '/favicon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        {children}
        <div id={MODAL_ROOT_ID} />
      </body>
    </html>
  );
}
