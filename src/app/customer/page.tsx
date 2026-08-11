import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { customerData } from '@/data/customerData';

export const metadata: Metadata = {
  title: 'For Buyers - Source Quality Produce Directly from Farms',
  description:
    'Browse verified farms, negotiate transparently and pay securely with full traceability from field to delivery.',
  alternates: {
    canonical: 'https://farmstomarket.io/customer',
  },
  openGraph: {
    title: 'Farms to Market for Buyers - Quality Produce Direct from Farms',
    description: 'Browse verified farms, negotiate transparently and pay securely with full traceability from field to delivery.',
    url: 'https://farmstomarket.io/customer',
    images: [{ url: '/farmers/cassava.jpeg', width: 1200, height: 630, alt: 'Farms to Market for Buyers' }],
  },
  twitter: {
    title: 'Farms to Market for Buyers - Direct from Farms',
    description: 'Browse verified farms, negotiate transparently, pay securely with full traceability.',
  },
};

export default function CustomerPage() {
  return <PersonaPageTemplate data={customerData} />;
}
