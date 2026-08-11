import type { Metadata } from 'next';
import ProducerPage from '@/components/ProducerPage';

export const metadata: Metadata = {
  title: 'For Producers - Sell Your Harvest at the Best Price',
  description:
    'List your crops, negotiate directly with buyers and get paid instantly. Join 50,000+ producers selling smarter on FarmsToMarket.',
  alternates: {
    canonical: 'https://farmstomarket.io/producer',
  },
  openGraph: {
    title: 'Farms to Market for Producers - Sell Your Harvest at the Best Price',
    description:
      'List your crops, negotiate directly with buyers and get paid instantly. AI-powered fair pricing for 50,000+ producers.',
    url: 'https://farmstomarket.io/producer',
    images: [{ url: '/farmers/farms2.jpeg', width: 1200, height: 630, alt: 'Farms to Market for Producers' }],
  },
  twitter: {
    title: 'Farms to Market for Producers - Sell Smarter',
    description: 'List crops, negotiate directly, get paid instantly. Join 50,000+ producers on FarmsToMarket.',
  },
};

export default function Page() {
  return <ProducerPage />;
}
