import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { transporterData } from '@/data/transporterData';

export const metadata: Metadata = {
  title: 'For Transporters - FarmsToMarket | Fill Your Trucks & Get Paid Instantly',
  description:
    'Join Africa\'s largest agricultural transport network. Accept deliveries, optimize routes and receive automatic payments.',
};

export default function TransporterPage() {
  return <PersonaPageTemplate data={transporterData} />;
}
