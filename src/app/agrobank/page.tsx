import type { Metadata } from 'next';
import PersonaPageTemplate from '@/components/persona/PersonaPageTemplate';
import { agrobankData } from '@/data/agrobankData';

export const metadata: Metadata = {
  title: 'AgroBank - FarmsToMarket | Banking Built for African Agriculture',
  description:
    'Digital wallets, instant payments, commodity trading and micro-loans — financial services designed for farmers, buyers and transporters.',
};

export default function AgroBankPage() {
  return <PersonaPageTemplate data={agrobankData} />;
}
