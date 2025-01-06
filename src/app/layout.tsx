import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BrandProLab',
  description: '', // TODO: add description
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
      </body>
    </html>
  );
}
