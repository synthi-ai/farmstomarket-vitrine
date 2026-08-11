'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const APP_SCREENS = [
  {
    src: '/F2M - Store App Listing/EN/PNG/A1.png',
    label: 'Marketplace',
  },
  {
    src: '/F2M - Store App Listing/EN/PNG/A2.png',
    label: 'Orders',
  },
  {
    src: '/F2M - Store App Listing/EN/PNG/A3.png',
    label: 'Payments',
  },
  {
    src: '/F2M - Store App Listing/EN/PNG/A4.png',
    label: 'Tracking',
  },
  {
    src: '/F2M - Store App Listing/EN/PNG/A5.png',
    label: 'Analytics',
  },
];

const FARM_IMAGES = [
  { src: '/farmers/2.jpeg', caption: 'Fresh Produce' },
  { src: '/farmers/cassava.jpeg', caption: 'Cassava Supply' },
  { src: '/farmers/poivrons.jpeg', caption: 'Organic Vegetables' },
  { src: '/farmers/farms2.jpeg', caption: 'Smart Farming' },
  { src: '/farmers/8.jpg', caption: 'Export Grade' },
  { src: '/farmers/cassava1.jpeg', caption: 'Root Crops Network' },
];

export default function MerchantShowcase() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.05);
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gray-950 bg-geo-subtle py-28 md:py-36">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="mb-20 text-center"
          initial={{ y: 60, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h2 className="font-heading mb-6 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t('showcase.title')}{' '}
            <span className="text-gradient">{t('showcase.highlight')}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            {t('showcase.description')}
          </p>
        </motion.div>

        {/* App screens carousel top feature */}
        <motion.div
          className="mb-20"
          initial={{ y: 40, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Large active screen */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[400px] w-[400px] rounded-full bg-emerald-500/8 blur-[100px]" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, scale: 0.93, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative z-10"
                >
                  <Image
                    src={APP_SCREENS[activeScreen].src}
                    alt={APP_SCREENS[activeScreen].label}
                    width={300}
                    height={600}
                    className="object-contain drop-shadow-2xl"
                    sizes="300px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Screen tabs */}
            <div className="flex flex-col justify-center gap-3 lg:py-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                App screens
              </p>
              {APP_SCREENS.map((screen, i) => (
                <button
                  key={screen.label}
                  onClick={() => setActiveScreen(i)}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                    i === activeScreen
                      ? 'glass-card border-emerald-500/40 bg-emerald-500/5'
                      : 'hover:bg-gray-800/30'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                      i === activeScreen
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-800 text-gray-500'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      i === activeScreen ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {screen.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Farm product image grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
          initial={{ y: 60, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        >
          {FARM_IMAGES.map((item, i) => (
            <motion.div
              key={item.caption}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-emerald-600/0 transition-colors duration-500 group-hover:bg-emerald-600/10" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-sm font-semibold text-white md:text-base">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
