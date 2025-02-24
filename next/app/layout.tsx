import { Locale, i18n } from '@/i18n.config';
import type { Viewport } from 'next';

import './globals.css';

import { SlugProvider } from './context/SlugContext';

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
      <body>
        <SlugProvider>{children}</SlugProvider>
      </body>
    </html>
  );
}
