import type { Metadata } from 'next';
import AgrobankPage from '@/components/AgrobankPage';

export const metadata: Metadata = {
  title: 'AgroBank Banking Built for African Agriculture',
  description:
    'AgroWallet, AgroCredit, AgroInsure and AgroSave: the complete financial suite built for African farmers, cooperatives and agri-businesses. No branch visit required.',
  alternates: {
    canonical: 'https://farmstomarket.io/agrobank',
  },
  openGraph: {
    title: 'AgroBank by Farms to Market Banking for African Agriculture',
    description:
      'Credit based on your harvests. Insurance that pays automatically. Savings with your cooperative. All in one app.',
    url: 'https://farmstomarket.io/agrobank',
    images: [{ url: '/images/home2.png', width: 1200, height: 630, alt: 'AgroBank by Farms to Market' }],
  },
  twitter: {
    title: 'AgroBank Banking Built for African Agriculture',
    description:
      'AgroWallet · AgroCredit · AgroInsure · AgroSave. The financial infrastructure African farmers deserve.',
  },
};

export default function Page() {
  return <AgrobankPage />;
}
