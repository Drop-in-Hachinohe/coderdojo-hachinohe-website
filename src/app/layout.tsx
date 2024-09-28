import { Inter } from 'next/font/google';

import Noscript from '@/components/layouts/Noscript/Noscript';
import TheHeader from '@/components/layouts/TheHeader/TheHeader';
import TheFooter from '@/components/layouts/TheFooter/TheFooter';
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
        <TheHeader />
        <div className="max-sm:pt-[54px]">{children}</div>
        <TheFooter />
      </body>
    </html>
  );
}
