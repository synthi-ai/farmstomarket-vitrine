import Hero from '@/components/Hero';
import ScrollExpansionHero from '@/components/ScrollExpansionHero';
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

function SectionDivider() {
  return <div className="section-divider mx-auto max-w-7xl" />;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ScrollExpansionHero />
      <Partners />
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
      <CapabilitiesGrid />
      <SectionDivider />
      <ConversionStats />
      <SectionDivider />
      <SuccessStories />
      <SectionDivider />
      <OnboardingSteps />
      <SectionDivider />
      <CapitalStats />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <FinalCTA />
    </div>
  );
}
