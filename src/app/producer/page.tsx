import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { producerData } from '@/data/producerData';

export const metadata: Metadata = {
  title: 'For Producers - FarmsToMarket | Sell Your Harvest at the Best Price',
  description:
    'List your crops, negotiate directly with buyers and get paid instantly. Join 50,000+ producers selling smarter on FarmsToMarket.',
};

export default function ProducerPage() {
  return <PersonaPageTemplate data={producerData} />;
}
