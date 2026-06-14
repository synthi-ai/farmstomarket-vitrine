import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { agrobankData } from '@/data/agrobankData';

export const metadata: Metadata = {
  title: 'AgroBank - Banking Built for African Agriculture',
  description:
    'Digital wallets, instant payments, commodity trading and micro-loans financial services designed for farmers, buyers and transporters.',
  alternates: {
    canonical: 'https://farmstomarket.io/agrobank',
  },
  openGraph: {
    title: 'AgroBank by Farms to Market - Banking for African Agriculture',
    description: 'Digital wallets, instant payments, commodity trading and micro-loans for farmers, buyers and transporters.',
    url: 'https://farmstomarket.io/agrobank',
    images: [{ url: '/images/home2.png', width: 1200, height: 630, alt: 'AgroBank by Farms to Market' }],
  },
  twitter: {
    title: 'AgroBank - Banking Built for African Agriculture',
    description: 'Digital wallets, instant payments, commodity trading and micro-loans for the agricultural sector.',
  },
};

export default function AgroBankPage() {
  return <PersonaPageTemplate data={agrobankData} />;
}
