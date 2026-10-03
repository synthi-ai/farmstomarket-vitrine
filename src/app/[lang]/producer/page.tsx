import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { producerData } from '@/data/producerData';
import { pageMetadata } from '@/lib/seo';
import { isLanguage } from '@/i18n/routing';

const DESCRIPTION =
  'List your crops, negotiate directly with verified buyers and get paid instantly. AI-powered fair pricing with escrow-protected payments for producers.';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata({
    lang,
    path: '/producer',
    title: 'For Producers - Sell Your Harvest at the Best Price',
    description: DESCRIPTION,
    ogTitle: 'Farms to Market for Producers - Sell Your Harvest at the Best Price',
    twitterTitle: 'Farms to Market for Producers - Sell Smarter',
    image: { url: '/farmers/farms2.jpeg', width: 1200, height: 630, alt: 'Farms to Market for Producers' },
  });
}

export default function ProducerPage() {
  return <PersonaPageTemplate data={producerData} />;
}
