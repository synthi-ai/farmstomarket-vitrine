import type { Metadata } from 'next';
import AboutPage from '@/components/about/AboutPage';

export const metadata: Metadata = {
  title: 'About - FarmsToMarket | Transforming African Agriculture with AI',
  description:
    'Learn about FarmsToMarket — our mission, AI modules, team and journey building the leading agricultural marketplace platform in Africa.',
};

export default function About() {
  return <AboutPage />;
}
