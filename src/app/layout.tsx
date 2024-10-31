import { Inter } from 'next/font/google';

import Noscript from '@/components/layouts/Noscript/Noscript';
import { createMeta } from '@/helpers/meta';

import type { Metadata } from 'next';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { ...createMeta() };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" prefix="og: http://ogp.me/ns#">
      <body className={inter.className}>
        <Noscript />
        {children}
      </body>
    </html>
  );
}
