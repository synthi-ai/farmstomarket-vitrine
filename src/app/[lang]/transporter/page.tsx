import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { transporterData } from '@/data/transporterData';
import { pageMetadata } from '@/lib/seo';
import { isLanguage } from '@/i18n/routing';

const DESCRIPTION =
  'Find agricultural loads, plan optimised routes and receive automatic payment on every confirmed delivery.';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata({
    lang,
    path: '/transporter',
    title: 'For Transporters - Fill Your Trucks & Get Paid',
    description: DESCRIPTION,
    ogTitle: 'Farms to Market for Transporters - Fill Your Trucks & Get Paid',
    twitterTitle: 'Farms to Market for Transporters',
    image: { url: '/farmers/6.jpeg', width: 1200, height: 630, alt: 'Farms to Market for Transporters' },
  });
}

export default function TransporterPage() {
  return <PersonaPageTemplate data={transporterData} />;
}
