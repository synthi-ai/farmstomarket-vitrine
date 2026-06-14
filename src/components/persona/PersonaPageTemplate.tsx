'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import {
  fadeUpVariants,
  fadeInVariants,
  fadeRightVariants,
  fadeLeftVariants,
  staggerChildrenVariants,
} from '@/animations/variants';
import type { PersonaPageData } from '@/types/persona';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const ICONS: Record<string, React.ReactNode> = {
  chart: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h2l3-8 4 16 3-8h6" />
    </svg>
  ),
  shield: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  zap: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
    </svg>
  ),
  truck: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" strokeWidth={1.5} />
      <circle cx="18.5" cy="18.5" r="2.5" strokeWidth={1.5} />
    </svg>
  ),
  wallet: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5zm-4 1a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  ),
  globe: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
    </svg>
  ),
  users: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  lock: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  trending: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M23 6l-9.5 9.5-5-5L1 18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 6h6v6" />
    </svg>
  ),
  smartphone: (
    <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01" />
    </svg>
  ),
};

function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.08);
  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-24 md:py-32 ${className}`}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInVariants}
    >
      {children}
    </motion.section>
  );
}

function PersonaHero({ data }: { data: PersonaPageData }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);
  const vh = data.videoHero;

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home2.png"
          alt="FarmsToMarket"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/70 to-gray-950/90" />
        <div className="absolute inset-0 bg-topo opacity-[0.02]" />
      </div>

      {/* Emerald glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-emerald-600/10 blur-[160px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {t(vh.badgeKey)}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mb-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t(vh.titleKey)}{' '}
          <span className="text-gradient">{t(vh.highlightKey)}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t(vh.descKey)}
        </motion.p>

        {/* Stat chip */}
        <motion.div
          className="inline-flex flex-col items-center gap-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-4xl font-bold text-emerald-400 sm:text-5xl">{vh.statValue}</span>
          <span className="text-sm text-gray-400">{t(vh.statLabelKey)}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-gray-600">
          <motion.div
            className="mt-1.5 h-2 w-0.5 rounded-full bg-gray-400"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}

export default function PersonaPageTemplate({ data }: { data: PersonaPageData }) {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const { ref: heroRef, isVisible: heroVisible } = useAnimateOnScroll(0.05);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useAnimateOnScroll(0.08);
  const { ref: featuresRef, isVisible: featuresVisible } = useAnimateOnScroll(0.08);
  const { ref: testimonialRef, isVisible: testimonialVisible } = useAnimateOnScroll(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useAnimateOnScroll(0.15);

  const feature = data.features[activeFeature];

  const goToFeature = (index: number) => {
    const len = data.features.length;
    setActiveFeature(((index % len) + len) % len);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* ═══ 0. HERO ═══ */}
      <PersonaHero data={data} />

      {/* ═══ 1. TITLE ═══ */}
      <section ref={heroRef} className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 overflow-hidden">
            <motion.h1
              className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              initial={{ y: '100%', opacity: 0 }}
              animate={heroVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: EASE }}
            >
              {t(data.hero.titleKey)}{' '}
              <span className="text-gradient">{t(data.hero.highlightKey)}</span>
            </motion.h1>
          </div>
          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            {t(data.hero.descKey)}
          </motion.p>
        </div>
      </section>

      {/* ═══ 2. BENEFITS ═══ */}
      <section ref={benefitsRef} className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          animate={benefitsVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
        >
          {data.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-gray-800 bg-gray-900/80 p-8 backdrop-blur-sm"
              variants={fadeUpVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-5">{ICONS[benefit.iconKey]}</div>
              <h3 className="mb-3 text-xl font-semibold text-white">{t(benefit.titleKey)}</h3>
              <p className="leading-relaxed text-gray-400">{t(benefit.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ 3. HOW IT WORKS ═══ */}
      <Section id="how-it-works" className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            variants={fadeUpVariants}
          >
            {t('persona.howItWorks')}
          </motion.h2>

          <div className="mt-16 space-y-24">
            {data.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={isEven ? fadeRightVariants : fadeLeftVariants}
                >
                  <div
                    className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-900 ${!isEven ? 'md:order-2' : ''}`}
                  >
                    <div className="-z-10 absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl" />
                    <Image
                      src={step.img}
                      alt={t(step.titleKey)}
                      fill
                      className={step.img.includes('/Mockups/') ? 'object-contain' : 'object-cover'}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className={`flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                    <span className="mb-4 font-mono text-sm text-emerald-400">{step.number}</span>
                    <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-400">{t(step.descKey)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ═══ 4. FEATURES ═══ */}
      <section
        ref={featuresRef}
        id="features"
        className="border-t border-gray-800 px-4 py-24 sm:px-6 lg:px-8 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-16 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('persona.features')}
          </motion.h2>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={featuresVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-900">
                  <Image
                    src={feature.img}
                    alt={t(feature.titleKey)}
                    fill
                    className={feature.img.includes('/Mockups/') ? 'object-contain' : 'object-cover'}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="mb-4 font-mono text-sm text-emerald-400">
                    .00{activeFeature + 1}
                  </span>
                  <h3 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-400">{t(feature.descKey)}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Feature navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToFeature(activeFeature - 1)}
              className="p-2 text-gray-500 transition-colors hover:text-white"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1">
              {data.features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`px-3 py-2 font-mono text-sm transition-colors ${
                    i === activeFeature ? 'text-emerald-400' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToFeature(activeFeature + 1)}
              className="p-2 text-gray-500 transition-colors hover:text-white"
              aria-label="Next feature"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="relative ml-4 h-px flex-1 bg-gray-800">
              <motion.div
                className="absolute left-0 top-0 h-px bg-emerald-500"
                animate={{ width: `${((activeFeature + 1) / data.features.length) * 100}%` }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. TESTIMONIAL ═══ */}
      <section ref={testimonialRef} className="px-4 py-24 sm:px-6 lg:px-8 md:py-32">
        <motion.div
          className="mx-auto max-w-3xl rounded-2xl border border-gray-800 bg-gray-900 p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
        >
          <svg className="mx-auto mb-6 h-10 w-10 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
          </svg>

          <p className="mb-8 text-lg italic leading-relaxed text-gray-300 sm:text-xl">
            &ldquo;{t(data.testimonial.quoteKey)}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-800">
              <Image
                src={data.testimonial.avatar}
                alt={t(data.testimonial.authorKey)}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-white">{t(data.testimonial.authorKey)}</p>
              <p className="text-sm text-gray-400">{t(data.testimonial.roleKey)}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ 6. FINAL CTA ═══ */}
      <section ref={ctaRef} className="px-4 pb-32 pt-8 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{t(data.cta.titleKey)}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-emerald-100">
            {t(data.cta.descKey)}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={data.cta.primaryHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-emerald-700 transition-opacity hover:opacity-90"
            >
              {t(data.cta.primaryKey)}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={data.cta.secondaryHref}
              className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
            >
              {t(data.cta.secondaryKey)}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Back to home link */}
      <div className="pb-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-emerald-400"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('persona.backHome')}
        </Link>
      </div>
    </div>
  );
}
