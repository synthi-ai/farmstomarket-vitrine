import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { customerData } from '@/data/customerData';
import { pageMetadata } from '@/lib/seo';
import { isLanguage } from '@/i18n/routing';

const DESCRIPTION =
  'Browse verified farms, negotiate transparently and pay securely with escrow protection and full traceability from field to delivery.';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata({
    lang,
    path: '/customer',
    title: 'For Buyers - Source Quality Produce Directly from Farms',
    description: DESCRIPTION,
    ogTitle: 'Farms to Market for Buyers - Quality Produce Direct from Farms',
    twitterTitle: 'Farms to Market for Buyers - Direct from Farms',
    image: { url: '/farmers/cassava.jpeg', width: 1200, height: 630, alt: 'Farms to Market for Buyers' },
  });
}

export default function CustomerPage() {
  return <PersonaPageTemplate data={customerData} />;
}
