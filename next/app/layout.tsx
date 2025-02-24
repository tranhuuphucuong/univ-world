import { Locale, i18n } from '@/i18n.config';
import type { Viewport } from 'next';

import './globals.css';

import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { SlugProvider } from './context/SlugContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#06b6d4' },
    { media: '(prefers-color-scheme: dark)', color: '#06b6d4' },
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={cn(inter.className, 'h-full w-full bg-white antialiased')}
      >
        <SlugProvider>{children}</SlugProvider>
      </body>
    </html>
  );
}
