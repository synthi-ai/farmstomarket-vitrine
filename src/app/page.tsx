'use client'

const AgroBankFintechComponent = dynamic(() => import('@/components/AgroBank'), {
  ssr: false,
});
import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import SecureTrusted from '@/components/SecureTrusted'
import CuttingEdgeFeatures from '@/components/CuttingEdgeFeatures'
import HowProducers from '@/components/HowProducers'
import HowBuyersGet from '@/components/HowBuyersGet'
import AppScreens from '@/components/AppScreens'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ReadyToTransform from '@/components/ReadyToTransform'
import FarmsMarketHero from '@/components/FarmsMarketHero'

import SupplyChainComponent from '@/components/SupplyChainComponent'
import BuyersSection from '@/components/BuyersSection'
import dynamic from 'next/dynamic';
import TransporterProcess from '@/components/HowTransporter';
//import BuyersSection from '@/components/BuyersSection'

export default function Home() {
  useEffect(() => {
    // Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all elements with fade-in-on-scroll class
    document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <FarmsMarketHero/>
      <Partners />
      <SecureTrusted />
      <CuttingEdgeFeatures />
      <AppScreens />
      <HowProducers />
      <HowBuyersGet />
      <TransporterProcess />
      <SupplyChainComponent />
      <AgroBankFintechComponent />
      <BuyersSection />
      <Testimonials />
      <FAQ />
      <ReadyToTransform />
    </main>
  )
}