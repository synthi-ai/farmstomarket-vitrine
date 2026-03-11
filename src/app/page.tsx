import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import SecureTrusted from '@/components/SecureTrusted';
import CuttingEdgeFeatures from '@/components/CuttingEdgeFeatures';
import HowProducers from '@/components/HowProducers';
import HowBuyersGet from '@/components/HowBuyersGet';
import AppScreens from '@/components/AppScreens';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ReadyToTransform from '@/components/ReadyToTransform';
import SupplyChainComponent from '@/components/SupplyChainComponent';
import BuyersSection from '@/components/BuyersSection';
import TransporterProcess from '@/components/HowTransporter';
import AgroBank from '@/components/AgroBank';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Partners />
      <SecureTrusted />
      <CuttingEdgeFeatures />
      <AppScreens />
      <HowProducers />
      <HowBuyersGet />
      <TransporterProcess />
      <SupplyChainComponent />
      <AgroBank />
      <BuyersSection />
      <Testimonials />
      <FAQ />
      <ReadyToTransform />
    </main>
  );
}
