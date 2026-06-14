'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const ROTATING_PHRASES = [
  'hero.rotate.1',
  'hero.rotate.2',
  'hero.rotate.3',
] as const;

const MOCKUP_SLIDES = [
  '/Mockups/mockup 01.png',
  '/Mockups/mockup 02.png',
  '/Mockups/mockup 03.png',
  '/Mockups/mockup 04.png',
];

export default function Hero() {
  const { t } = useLanguage();
  const [activeWord, setActiveWord] = useState(0);
  const [activeMockup, setActiveMockup] = useState(0);

  const nextWord = useCallback(() => {
    setActiveWord((prev) => (prev + 1) % ROTATING_PHRASES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextWord, 3500);
    return () => clearInterval(interval);
  }, [nextWord]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMockup((prev) => (prev + 1) % MOCKUP_SLIDES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-20">
      {/* ── Background: Hero.png ── */}
      <div className="absolute inset-0">
        <Image
          src="/bg/Hero.png"
          alt="Farmer in the field"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* ── Geo pattern overlay (calque Figma) ── */}
      <div className="absolute inset-0 bg-geo opacity-[0.06] mix-blend-overlay" />

      {/* ── Dark overlay: rgba(0,0,0,0.48) from Figma ── */}
      <div className="absolute inset-0 bg-black/[0.48]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ─── Left: Text ─── */}
          <div className="flex flex-col">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
              className="mb-8"
            >
              <h1 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[52px] xl:tracking-[-0.5px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeWord}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="block text-gradient"
                  >
                    {t(ROTATING_PHRASES[activeWord])}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="font-heading mb-10 max-w-xl text-lg font-semibold leading-relaxed text-white/80 sm:text-xl"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            >
              <a
                href="#demo"
                className="font-heading inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-8 py-[14px] text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
              >
                <ArrowRight className="h-4 w-4" />
                {t('hero.watchDemo')}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="mt-6 text-sm text-white/50"
            >
              {t('hero.trustLine')}
            </motion.p>
          </div>

          {/* ─── Right: App mockup ─── */}
          <motion.div
            className="relative hidden lg:flex items-center justify-end overflow-visible"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          >
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-emerald-500/8 blur-[140px]" />

            <div className="relative z-10 translate-x-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMockup}
                  initial={{ opacity: 0, scale: 0.94, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <Image
                    src={MOCKUP_SLIDES[activeMockup]}
                    alt="FarmsToMarket App"
                    width={1000}
                    height={2000}
                    className="object-contain drop-shadow-2xl"
                    sizes="1000px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex gap-2">
                {MOCKUP_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMockup(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === activeMockup
                        ? 'w-6 bg-emerald-500'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Mockup ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/20">
          <div className="mt-2 h-2 w-0.5 rounded-full bg-white/40 animate-scroll-pulse" />
        </div>
      </div>
    </section>
  );
}
