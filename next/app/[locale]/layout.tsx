import React from 'react';

import { generateMetadataObject } from '@/lib/shared/metadata';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { CartProvider } from '@/context/cart-context';
import { i18n } from '@/i18n.config';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { cn } from '@/lib/utils';
import { ViewTransitions } from 'next-view-transitions';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

// Default Global SEO for pages without them
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const pageData = await fetchContentType(
    'global',
    `&filters[locale][$eq]=${locale}&populate=seo.metaImage`,
    true,
  );

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // const pageData = await fetchContentType(
  //   'global',
  //   `filters[locale][$eq]=${locale}`,
  //   true,
  // );

  return (
    <html lang={locale}>
      <ViewTransitions>
        <CartProvider>
          <body
            className={cn(
              inter.className,
              'h-full w-full bg-white antialiased',
            )}
          >
            {/* <Navbar data={pageData?.navbar} locale={locale} /> */}
            {children}
            {/* <Footer data={pageData?.footer} locale={locale} /> */}
          </body>
        </CartProvider>
      </ViewTransitions>
    </html>
  );
}
