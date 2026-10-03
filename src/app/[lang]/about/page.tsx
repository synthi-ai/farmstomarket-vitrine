import type { Metadata } from 'next';
import AboutPage from '@/components/about/AboutPage';
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
    path: '/about',
    title: 'About - Transforming African Agriculture with AI',
    description:
      'Learn about FarmsToMarket our mission, AI modules, team and journey building the leading agricultural marketplace platform in Africa.',
    ogTitle: 'About Farms to Market - Transforming African Agriculture with AI',
    ogDescription:
      "Our mission, AI-powered modules, leadership team and the journey building Africa's leading agricultural marketplace.",
    twitterTitle: 'About Farms to Market - Transforming African Agriculture',
    twitterDescription:
      "Our mission, AI modules, team and journey building Africa's leading agricultural marketplace.",
    image: { url: '/images/home2.png', width: 1200, height: 630, alt: 'About Farms to Market' },
  });
}

export default function About() {
  return <AboutPage />;
}
