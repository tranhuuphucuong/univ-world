import { i18n } from '@/i18n.config';
import { PhotoSphere } from './PhotoSphere';

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale: locale }));
}

export default async function Page() {
  return <PhotoSphere />;
}
