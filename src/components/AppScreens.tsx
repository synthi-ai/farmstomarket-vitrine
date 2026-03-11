'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AppScreens() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const screens = [
    {
      title: t('appscreens.screen1.title'),
      desc: t('appscreens.screen1.desc'),
      image: '/Mockups/mockup 01.png',
    },
    {
      title: t('appscreens.screen2.title'),
      desc: t('appscreens.screen2.desc'),
      image: '/Mockups/mockup 02.png',
    },
    {
      title: t('appscreens.screen3.title'),
      desc: t('appscreens.screen3.desc'),
      image: '/Mockups/mockup 03.png',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % screens.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [screens.length]);

  const next = () => setIndex((i) => (i + 1) % screens.length);
  const prev = () => setIndex((i) => (i - 1 + screens.length) % screens.length);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={t('appscreens.badge')}
          title={t('appscreens.title')}
          description={t('appscreens.description')}
        />

        <div className="relative">
          <div className="flex items-center justify-center gap-12">
            <button
              onClick={prev}
              className="hidden md:block p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label={t('appscreens.prev')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative z-10"
              >
                <Image
                  src={screens[index].image}
                  alt={screens[index].title}
                  width={600}
                  height={1000}
                  className="object-contain"
                  sizes="(max-width: 768px) 95vw, 600px"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={next}
              className="hidden md:block p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label={t('appscreens.next')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="text-center mt-12 max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {screens[index].title}
                </h3>
                <p className="text-lg text-gray-600">{screens[index].desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-10">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={clsx(
                    'h-2 rounded-full transition-all duration-300',
                    i === index ? 'bg-emerald-600 w-10' : 'bg-gray-300 w-2'
                  )}
                  aria-label={`Screen ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        <div className="text-center mt-20">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all">
            {t('appscreens.download')}
          </button>
        </div>
      </div>
    </section>
  );
}
