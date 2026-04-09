import type { Metadata } from 'next';
import AboutPage from '@/components/about/AboutPage';

export const metadata: Metadata = {
  title: 'About - Transforming African Agriculture with AI',
  description:
    'Learn about FarmsToMarket — our mission, AI modules, team and journey building the leading agricultural marketplace platform in Africa.',
  alternates: {
    canonical: 'https://farmstomarket.io/about',
  },
  openGraph: {
    title: 'About Farms to Market - Transforming African Agriculture with AI',
    description: 'Our mission, AI-powered modules, leadership team and the journey building Africa\'s leading agricultural marketplace.',
    url: 'https://farmstomarket.io/about',
    images: [{ url: '/images/home2.png', width: 1200, height: 630, alt: 'About Farms to Market' }],
  },
  twitter: {
    title: 'About Farms to Market - Transforming African Agriculture',
    description: 'Our mission, AI modules, team and journey building Africa\'s leading agricultural marketplace.',
  },
};

export default function About() {
  return <AboutPage />;
}
