'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const SHOWCASE_ITEMS = [
  '/Mockups/mockup 01.png',
  '/Mockups/mockup 02.png',
  '/Mockups/mockup 03.png',
  '/Mockups/mockup 04.png',
  '/Mockups/mockup 05.png',
];

export default function VideoShowcase() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="about" className="relative py-28 md:py-36 bg-gray-950 bg-topo-subtle overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Large centered headline (Shopify-style) */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            initial={{ y: 60, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {t('showcase.title')}{' '}
            <span className="text-gradient">{t('showcase.highlight')}</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 40, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            {t('showcase.description')}
          </motion.p>
        </div>

        {/* Showcase carousel — centered phone with glow (Shopify brand showcase style) */}
        <motion.div
          className="relative"
          initial={{ y: 60, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        >
          <div className="relative flex justify-center items-end mb-12">
            {/* Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative"
              >
                <Image
                  src={SHOWCASE_ITEMS[active]}
                  alt="FarmsToMarket App"
                  width={320}
                  height={640}
                  className="object-contain drop-shadow-2xl"
                  sizes="320px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicator */}
          <div className="flex justify-center gap-2 mb-16">
            {SHOWCASE_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Showcase ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats row — Shopify-style large numbers */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 max-w-4xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        >
          {[
            { value: '50K+', label: t('showcase.stat.users') },
            { value: '72.9K+', label: t('showcase.stat.transactions') },
            { value: '15+', label: t('credibility.countries.label') },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gradient tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
