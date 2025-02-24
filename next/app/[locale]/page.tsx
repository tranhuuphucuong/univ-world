import { Hero } from '@/components/dynamic-zone/hero';
import { i18n } from '@/i18n.config';

export const dynamicParams = false;
export async function generateStaticParams() {
  const params = i18n.locales.map((locale) => ({ locale: locale }));
  console.log('params: ', params);
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <Hero
      heading="Demos"
      sub_heading="demos sub heading"
      CTAs={[
        {
          text: 'photo sphere',
          URL: '/photo-sphere',
          id: '1',
        },
      ]}
      locale={locale}
    />
  );
}
