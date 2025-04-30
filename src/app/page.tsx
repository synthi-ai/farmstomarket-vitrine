'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import SecureTrusted from '@/components/SecureTrusted'
import Stats from '@/components/Stats'
import CuttingEdgeFeatures from '@/components/CuttingEdgeFeatures'
import HowProducers from '@/components/HowProducers'
import HowBuyersGet from '@/components/HowBuyersGet'
import AppScreens from '@/components/AppScreens'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ReadyToTransform from '@/components/ReadyToTransform'
import Footer from '@/components/Footer'
import FarmsMarketHero from '@/components/FarmsMarketHero'

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
      <Partners />
      <FarmsMarketHero/>
      <SecureTrusted />
      <Stats />
      <CuttingEdgeFeatures />
      <HowProducers />
      <HowBuyersGet />
      <AppScreens />
      <Testimonials />
      <FAQ />
      <ReadyToTransform />
      <Footer />
    </main>
  )
}