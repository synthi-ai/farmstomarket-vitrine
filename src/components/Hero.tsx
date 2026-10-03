'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from '@/components/LocaleLink';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonVariants } from '@/components/ui/button';
import { APPS } from '@/data/site';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const ROTATING_PHRASES = [
  'hero.rotate.1',
  'hero.rotate.2',
  'hero.rotate.3',
] as const;

const MOCKUP_SLIDES = [
  { src: '/bg/1pmem.png', altKey: 'hero.slide.mockup1' },
  { src: '/Mockups/mockup 11.png', altKey: 'hero.slide.mockup2' },
] as const;

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
      {/* Background */}
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
      <div className="absolute inset-0 bg-geo opacity-[0.06] mix-blend-overlay" />
      <div className="absolute inset-0 bg-black/[0.52]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ─── Left: Text ─── */}
          <div className="flex flex-col">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
              className="mb-6"
            >
              <h1 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[54px] xl:tracking-[-0.5px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeWord}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="block text-gradient"
                  >
                    {t(ROTATING_PHRASES[activeWord])}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.18, ease: EASE }}
              className="font-heading mb-10 max-w-xl text-lg font-medium leading-relaxed text-white/75 sm:text-xl"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.28, ease: EASE }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href={APPS.googlePlay.buyer}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'cta', size: 'cta' })}
              >
                {t('hero.startFree')}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/apps"
                className={buttonVariants({ variant: 'cta-outline', size: 'cta' })}
              >
                {t('hero.seeApps')}
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.45, ease: EASE }}
              className="mt-6 text-xs text-white/40"
            >
              {t('hero.trustLine')}
            </motion.p>
          </div>

          {/* ─── Right: App mockup (crossfade stack — no blank frame) ─── */}
          <motion.div
            className="relative hidden lg:flex items-center justify-end overflow-visible"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          >
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-emerald-500/8 blur-[140px]" />

            <div className="relative z-10 translate-x-28">
              {/* All images stacked — crossfade, no blank frame */}
              <div className="relative w-[560px] h-[700px] rounded-3xl overflow-hidden">
                {MOCKUP_SLIDES.map(({ src, altKey }, i) => (
                  <motion.div
                    key={src}
                    className="absolute inset-0"
                    animate={{ opacity: i === activeMockup ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <Image
                      src={src}
                      alt={t(altKey)}
                      fill
                      className="object-cover object-center"
                      sizes="560px"
                      priority={i === 0}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Dots */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {MOCKUP_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMockup(i)}
                    aria-label={t('hero.slide.dot', { index: i + 1 })}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeMockup
                        ? 'w-6 bg-emerald-500'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
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
