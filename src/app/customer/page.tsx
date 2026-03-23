import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { customerData } from '@/data/customerData';

export const metadata: Metadata = {
  title: 'For Buyers - FarmsToMarket | Source Quality Produce Directly from Farms',
  description:
    'Browse verified farms, negotiate transparently and pay securely with full traceability from field to delivery.',
};

export default function CustomerPage() {
  return <PersonaPageTemplate data={customerData} />;
}
