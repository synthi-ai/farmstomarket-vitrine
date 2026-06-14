'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const ROTATING_WORDS_KEYS = [
  'hero.rotate.fair',
  'hero.rotate.secure',
  'hero.rotate.direct',
  'hero.rotate.smart',
  'hero.rotate.fast',
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
    setActiveWord((prev) => (prev + 1) % ROTATING_WORDS_KEYS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextWord, 2500);
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
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/home2.png"
      >
        <source src="/videos/hero-farm.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/40" />
      <div className="absolute inset-0 bg-topo opacity-[0.02]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ─── Left: Text ─── */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                {t('hero.headline')}{' '}
                <span className="relative inline-block overflow-hidden h-[1.15em] align-bottom min-w-[180px] sm:min-w-[240px] lg:min-w-[280px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeWord}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="absolute left-0 right-0 text-gradient"
                    >
                      {t(ROTATING_WORDS_KEYS[activeWord])}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-gray-300/90 sm:text-xl"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-600/20 transition-all hover:bg-emerald-500 hover:scale-[1.02] hover:shadow-emerald-500/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                {t('hero.startFree')}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-500/40 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-gray-400/50"
              >
                {t('hero.watchDemo')}
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: EASE }}
              className="mt-8 text-sm text-gray-500"
            >
              {t('hero.trustLine')}
            </motion.p>

            {/* Actor quick links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                { href: '/producer', label: t('nav.producer') },
                { href: '/customer', label: t('nav.customer') },
                { href: '/transporter', label: t('nav.transporter') },
                { href: '/agrobank', label: t('nav.agrobank') },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-gray-700/60 bg-gray-900/50 px-4 py-1.5 text-xs font-medium text-gray-400 backdrop-blur-sm transition-colors hover:border-emerald-600/50 hover:text-emerald-400"
                >
                  {label} →
                </a>
              ))}
            </motion.div>
          </div>

          {/* ─── Right: App mockup ─── */}
          <motion.div
            className="relative hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          >
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
            </div>

            {/* Main mockup */}
            <div className="relative z-10">
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
                    width={320}
                    height={640}
                    className="object-contain drop-shadow-2xl"
                    sizes="320px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-16 top-1/4 glass-card rounded-2xl px-5 py-4 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.2, ease: EASE }}
              >
                <div className="text-2xl font-bold text-gradient">50K+</div>
                <div className="mt-0.5 text-xs text-gray-400">Active farmers</div>
              </motion.div>

              <motion.div
                className="absolute -right-12 bottom-1/3 glass-card rounded-2xl px-5 py-4 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.4, ease: EASE }}
              >
                <div className="text-2xl font-bold text-gradient">99.8%</div>
                <div className="mt-0.5 text-xs text-gray-400">Uptime</div>
              </motion.div>

              <motion.div
                className="absolute -right-14 top-1/4 glass-card rounded-2xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.6, ease: EASE }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="text-xs text-gray-300">Payment confirmed</div>
                </div>
                <div className="mt-1 text-sm font-bold text-white">+XAF 45,000</div>
              </motion.div>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-0 flex gap-2">
              {MOCKUP_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMockup(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeMockup ? 'w-6 bg-emerald-500' : 'w-1.5 bg-gray-700'
                  }`}
                  aria-label={`Mockup ${i + 1}`}
                />
              ))}
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
