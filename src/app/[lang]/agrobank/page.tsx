import type { Metadata } from 'next';
import AgrobankPage from '@/components/AgrobankPage';
import { pageMetadata } from '@/lib/seo';
import { isLanguage } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata({
    lang,
    path: '/agrobank',
    title: 'AgroBank Banking Built for African Agriculture',
    description:
      'AgroWallet, AgroCredit, AgroInsure and AgroSave: the complete financial suite built for African farmers, cooperatives and agri-businesses. No branch visit required.',
    ogTitle: 'AgroBank by Farms to Market Banking for African Agriculture',
    ogDescription:
      'Credit based on your harvests. Insurance that pays automatically. Savings with your cooperative. All in one app.',
    twitterDescription:
      'AgroWallet · AgroCredit · AgroInsure · AgroSave. The financial infrastructure African farmers deserve.',
    image: { url: '/images/home2.png', width: 1200, height: 630, alt: 'AgroBank by Farms to Market' },
  });
}

export default function Page() {
  return <AgrobankPage />;
}
