'use client';

import { useState, useEffect, useRef } from 'react';
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

const DESKTOP_MP4 = 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.mp4';
const DESKTOP_WEBM = 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.webm';
const MOBILE_MP4 = 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.mp4';
const MOBILE_WEBM = 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.webm';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── SVG icon map ─── */

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

/* ─── Reusable animated section ─── */

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

/* ─── Video Hero ─── */

function VideoHero({ data }: { data: PersonaPageData }) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const vh = data.videoHero;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Desktop video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
      >
        <source src={DESKTOP_WEBM} type="video/webm" />
        <source src={DESKTOP_MP4} type="video/mp4" />
      </video>

      {/* Mobile video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      >
        <source src={MOBILE_WEBM} type="video/webm" />
        <source src={MOBILE_MP4} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {/* Badge */}
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-emerald-700/50 bg-emerald-900/30 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-sm sm:text-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          {t(vh.badgeKey)}
        </motion.span>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t(vh.titleKey)}{' '}
          <span className="text-emerald-400">{t(vh.highlightKey)}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t(vh.descKey)}
        </motion.p>

        {/* Stat */}
        <motion.div
          className="inline-flex flex-col items-center gap-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-4xl sm:text-5xl font-bold text-emerald-400">{vh.statValue}</span>
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

/* ─── Main template ─── */

export default function PersonaPageTemplate({ data }: { data: PersonaPageData }) {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const { ref: heroRef, isVisible: heroVisible } = useAnimateOnScroll(0.05);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useAnimateOnScroll(0.08);
  const { ref: featuresRef, isVisible: featuresVisible } = useAnimateOnScroll(0.08);
  const { ref: testimonialRef, isVisible: testimonialVisible } = useAnimateOnScroll(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useAnimateOnScroll(0.15);

  const goToFeature = (index: number) => {
    if (index < 0) setActiveFeature(data.features.length - 1);
    else if (index >= data.features.length) setActiveFeature(0);
    else setActiveFeature(index);
  };

  const feature = data.features[activeFeature];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Sticky back link */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/80 px-4 py-2 text-sm text-gray-300 backdrop-blur-md transition-colors hover:border-emerald-600 hover:text-emerald-400"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('persona.backHome')}
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          0. VIDEO HERO
         ═══════════════════════════════════════════ */}
      <VideoHero data={data} />

      {/* ═══════════════════════════════════════════
          1. HERO
         ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
              initial={{ y: '100%', opacity: 0 }}
              animate={heroVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: EASE }}
            >
              {t(data.hero.titleKey)}{' '}
              <span className="text-emerald-400">{t(data.hero.highlightKey)}</span>
            </motion.h1>
          </div>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            {t(data.hero.descKey)}
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. KEY BENEFITS — 3 glassmorphic cards
         ═══════════════════════════════════════════ */}
      <section ref={benefitsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={benefitsVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
        >
          {data.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm"
              variants={fadeUpVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-5">{ICONS[benefit.iconKey]}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-gray-400 leading-relaxed">{t(benefit.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          3. HOW IT WORKS — 4 alternating steps
         ═══════════════════════════════════════════ */}
      <Section id="how-it-works" className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeUpVariants}
          >
            {t('persona.howItWorks')}
          </motion.h2>

          <div className="mt-16 space-y-24">
            {data.steps.map((step, i) => {
              const isOdd = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={isOdd ? fadeRightVariants : fadeLeftVariants}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800 ${!isOdd ? 'md:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-2xl -z-10" />
                    <Image
                      src={step.img}
                      alt={t(step.titleKey)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text */}
                  <div className={`flex flex-col justify-center ${!isOdd ? 'md:order-1' : ''}`}>
                    <span className="text-sm font-mono text-emerald-400 mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t(step.descKey)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          4. FEATURES SHOWCASE — carousel
         ═══════════════════════════════════════════ */}
      <section
        ref={featuresRef}
        id="features"
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('persona.features')}
          </motion.h2>

          {/* Active feature display */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={featuresVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800">
                  <Image
                    src={feature.img}
                    alt={t(feature.titleKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-mono text-emerald-400 mb-4">
                    .00{activeFeature + 1}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {t(feature.descKey)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Tab navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToFeature(activeFeature - 1)}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1">
              {data.features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`px-3 py-2 text-sm font-mono transition-colors ${
                    i === activeFeature
                      ? 'text-emerald-400'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToFeature(activeFeature + 1)}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Next feature"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Progress bar */}
            <div className="flex-1 h-px bg-gray-800 ml-4 relative">
              <motion.div
                className="absolute top-0 left-0 h-px bg-emerald-500"
                animate={{ width: `${((activeFeature + 1) / data.features.length) * 100}%` }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. TESTIMONIAL
         ═══════════════════════════════════════════ */}
      <section ref={testimonialRef} className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
        >
          {/* Quote icon */}
          <svg className="h-10 w-10 text-emerald-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
          </svg>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 italic">
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

      {/* ═══════════════════════════════════════════
          7. FINAL CTA
         ═══════════════════════════════════════════ */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(data.cta.titleKey)}
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {t(data.cta.descKey)}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={data.cta.primaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full transition-opacity hover:opacity-90"
            >
              {t(data.cta.primaryKey)}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={data.cta.secondaryHref}
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-full transition-colors hover:bg-white/10"
            >
              {t(data.cta.secondaryKey)}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
