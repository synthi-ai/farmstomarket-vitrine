import type { Metadata } from 'next';
import PrivacyPage from '@/components/privacy/PrivacyPage';
import { pageMetadata } from '@/lib/seo';
import { isLanguage } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata({
    lang,
    path: '/privacy',
    title: 'Privacy Policy',
    description:
      'How FarmsToMarket collects, uses and protects your personal data on our website and mobile applications.',
    robots: { index: true, follow: true },
  });
}

export default function Page() {
  return <PrivacyPage />;
}
