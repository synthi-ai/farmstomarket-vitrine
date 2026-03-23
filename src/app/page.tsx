import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import Partners from '@/components/Partners';
import CredibilityStats from '@/components/CredibilityStats';
import Testimonials from '@/components/Testimonials';
import PlatformSolutions from '@/components/PlatformSolutions';
import HowItWorks from '@/components/HowItWorks';
import CuttingEdgeFeatures from '@/components/CuttingEdgeFeatures';
import SupplyChainComponent from '@/components/SupplyChainComponent';
import AgroBank from '@/components/AgroBank';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ReadyToTransform from '@/components/ReadyToTransform';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <VideoShowcase />
      <Partners />
      <CredibilityStats />
      <Testimonials />
      <PlatformSolutions />
      <HowItWorks />
      <CuttingEdgeFeatures />
      <SupplyChainComponent />
      <AgroBank />
      <FAQ />
      <Newsletter />
      <ReadyToTransform />
    </main>
  );
}
