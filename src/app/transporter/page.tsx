import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { transporterData } from '@/data/transporterData';

export const metadata: Metadata = {
  title: 'For Transporters - Fill Your Trucks & Get Paid Instantly',
  description:
    'Join Africa\'s largest agricultural transport network. Accept deliveries, optimize routes and receive automatic payments.',
  alternates: {
    canonical: 'https://farmstomarket.io/transporter',
  },
  openGraph: {
    title: 'Farms to Market for Transporters - Fill Your Trucks & Get Paid',
    description: 'Join Africa\'s largest agricultural transport network. Accept deliveries, optimize routes, receive automatic payments.',
    url: 'https://farmstomarket.io/transporter',
    images: [{ url: '/images/home2.png', width: 1200, height: 630, alt: 'Farms to Market for Transporters' }],
  },
  twitter: {
    title: 'Farms to Market for Transporters',
    description: 'Africa\'s largest agricultural transport network. Accept deliveries, optimize routes, get paid instantly.',
  },
};

export default function TransporterPage() {
  return <PersonaPageTemplate data={transporterData} />;
}
