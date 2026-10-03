import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import VideoShowcase from '@/components/VideoShowcase';
import MerchantShowcase from '@/components/MerchantShowcase';
import FeatureHighlight from '@/components/FeatureHighlight';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import ConversionStats from '@/components/ConversionStats';
import SuccessStories from '@/components/SuccessStories';
import OnboardingSteps from '@/components/OnboardingSteps';
import CapitalStats from '@/components/CapitalStats';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { getDictionary } from '@/i18n/get-dictionary';
import { isLanguage } from '@/i18n/routing';

function SectionDivider() {
  return <div className="section-divider mx-auto max-w-7xl" />;
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const { t } = getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Partners t={t} />
      <VideoShowcase />
      <SectionDivider />
      <div id="marketplace">
        <MerchantShowcase />
      </div>
      <SectionDivider />
      <div id="features">
        <FeatureHighlight />
      </div>
      <SectionDivider />
      <CapabilitiesGrid t={t} />
      <SectionDivider />
      <ConversionStats t={t} />
      <SectionDivider />
      <SuccessStories t={t} />
      <SectionDivider />
      <OnboardingSteps />
      <SectionDivider />
      <CapitalStats />
      <FAQ />
      <SectionDivider />
      <FinalCTA t={t} lang={lang} />
    </div>
  );
}
