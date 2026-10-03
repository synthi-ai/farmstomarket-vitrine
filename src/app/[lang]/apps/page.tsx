import type { Metadata } from 'next';
import AppsPage from '@/components/apps/AppsPage';
import { pageMetadata } from '@/lib/seo';
import { isLanguage } from '@/i18n/routing';

const DESCRIPTION =
  'Download the Farms to Market apps: buy and sell agricultural products, track deliveries and pay securely. Available on Google Play and the App Store.';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata({
    lang,
    path: '/apps',
    title: 'Download the Apps - Farms to Market on Mobile',
    description: DESCRIPTION,
    ogTitle: 'Get the Farms to Market Apps',
    image: { url: '/Mockups/mockup 11.png', width: 1200, height: 630, alt: 'Farms to Market mobile apps' },
  });
}

export default function Page() {
  return <AppsPage />;
}
