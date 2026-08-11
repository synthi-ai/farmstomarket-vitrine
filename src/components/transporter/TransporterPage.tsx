'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll, usePrefersReducedMotion } from '@/hooks/useAnimation';
import {
  fadeUpVariants,
  fadeInVariants,
  fadeRightVariants,
  fadeLeftVariants,
  zoomInVariants,
  staggerChildrenVariants,
} from '@/animations/variants';
import StatGrid from '@/components/ui/StatGrid';
import SectionHeader from '@/components/ui/SectionHeader';

/* ─── Constants ─── */

const DESKTOP_MP4 =
  'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.mp4';
const DESKTOP_WEBM =
  'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.webm';
const MOBILE_MP4 =
  'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.mp4';
const MOBILE_WEBM =
  'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.webm';

const FLOATING_STATS = [
  { value: '2,500+', labelKey: 'transporter.stats.drivers' },
  { value: '98%', labelKey: 'transporter.stats.ontime' },
  { value: '24h', labelKey: 'transporter.stats.payment' },
  { value: '150+', labelKey: 'transporter.stats.cities' },
];

const STEPS = [
  { number: '.001', titleKey: 'transporter.step1.title', descKey: 'transporter.step1.description', img: '/Mockups/mockup 14.png' },
  { number: '.002', titleKey: 'transporter.step2.title', descKey: 'transporter.step2.description', img: '/Mockups/mockup 12.png' },
  { number: '.003', titleKey: 'transporter.step3.title', descKey: 'transporter.step3.description', img: '/Mockups/mockup 10.png' },
  { number: '.004', titleKey: 'transporter.step4.title', descKey: 'transporter.step4.description', img: '/Mockups/mockup 09.png' },
];

const BENEFITS = [
  {
    titleKey: 'persona.transporter.benefit1.title',
    descKey: 'persona.transporter.benefit1.desc',
    icon: (
      <svg className="h-10 w-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    titleKey: 'persona.transporter.benefit2.title',
    descKey: 'persona.transporter.benefit2.desc',
    icon: (
      <svg className="h-10 w-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
      </svg>
    ),
  },
  {
    titleKey: 'persona.transporter.benefit3.title',
    descKey: 'persona.transporter.benefit3.desc',
    icon: (
      <svg className="h-10 w-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M23 6l-9.5 9.5-5-5L1 18" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 6h6v6" />
      </svg>
    ),
  },
];

const FEATURES = [
  { titleKey: 'persona.transporter.feat1.title', descKey: 'persona.transporter.feat1.desc', img: '/Mockups/mockup 11.png' },
  { titleKey: 'persona.transporter.feat2.title', descKey: 'persona.transporter.feat2.desc', img: '/Mockups/mockup 21.png' },
  { titleKey: 'persona.transporter.feat3.title', descKey: 'persona.transporter.feat3.desc', img: '/farmers/3.jpeg' },
  { titleKey: 'persona.transporter.feat4.title', descKey: 'persona.transporter.feat4.desc', img: '/farmers/7.jpeg' },
];

/* ─── SVG Network Points ─── */

const NETWORK_POINTS = [
  { cx: 120, cy: 80 },
  { cx: 280, cy: 50 },
  { cx: 450, cy: 100 },
  { cx: 600, cy: 60 },
  { cx: 750, cy: 120 },
  { cx: 180, cy: 200 },
  { cx: 350, cy: 180 },
  { cx: 520, cy: 220 },
  { cx: 680, cy: 190 },
  { cx: 100, cy: 320 },
  { cx: 260, cy: 300 },
  { cx: 420, cy: 340 },
  { cx: 580, cy: 310 },
  { cx: 740, cy: 350 },
  { cx: 400, cy: 420 },
];

const NETWORK_LINES = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12], [12, 13],
  [6, 2], [7, 3], [10, 6], [11, 7],
  [10, 14], [11, 14], [12, 14],
  [1, 6], [8, 4], [9, 5],
];

/* ─── Animated Counter Hook ─── */

function useCounter(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isVisible) return;
    if (reducedMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isVisible, target, duration, reducedMotion]);

  return count;
}

/* ════════════════════════════════════════════════════
   1. TransporterHero
   ════════════════════════════════════════════════════ */

function TransporterHero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const driversCount = useCounter(2500, isVisible);
  const ontimeCount = useCounter(98, isVisible);
  const citiesCount = useCounter(150, isVisible);

  const statsData = [
    { display: `${driversCount.toLocaleString()}+`, label: t('transporter.stats.drivers') },
    { display: `${ontimeCount}%`, label: t('transporter.stats.ontime') },
    { display: '24h', label: t('transporter.stats.payment') },
    { display: `${citiesCount}+`, label: t('transporter.stats.cities') },
  ];

  const statPositions = [
    'lg:absolute lg:top-16 lg:left-0',
    'lg:absolute lg:top-16 lg:right-0',
    'lg:absolute lg:bottom-32 lg:left-0',
    'lg:absolute lg:bottom-32 lg:right-0',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Desktop video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
      >
        <source src={DESKTOP_WEBM} type="video/webm" />
        <source src={DESKTOP_MP4} type="video/mp4" />
      </video>

      {/* Mobile video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      >
        <source src={MOBILE_WEBM} type="video/webm" />
        <source src={MOBILE_MP4} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          {t('persona.transporter.videoHero.badge')}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t('persona.transporter.videoHero.title')}{' '}
          <span className="text-emerald-400">{t('persona.transporter.videoHero.highlight')}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('persona.transporter.videoHero.desc')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            {t('persona.transporter.cta.primary')}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
          >
            {t('persona.howItWorks')}
          </a>
        </motion.div>

        {/* Floating Stats - positioned absolutely on lg+, grid on mobile */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 lg:block">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                className={`bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-xl px-5 py-4 ${statPositions[i]} lg:w-52`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              >
                <div className="text-2xl font-bold text-emerald-400">{stat.display}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
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

/* ════════════════════════════════════════════════════
   2. StatBar
   ════════════════════════════════════════════════════ */

function StatBar() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const stats = FLOATING_STATS.map((s) => ({
    value: s.value,
    label: t(s.labelKey),
  }));

  return (
    <section
      ref={ref}
      className="py-8 bg-gray-900 border-t border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatGrid
          stats={stats}
          variant="dark"
          animated
          isVisible={isVisible}
          containerVariants={staggerChildrenVariants}
          itemVariants={fadeUpVariants}
        />
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   3. BenefitsSection
   ════════════════════════════════════════════════════ */

function BenefitsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.08);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={t('persona.transporter.hero.title') + ' ' + t('persona.transporter.hero.highlight')}
          description={t('persona.transporter.hero.desc')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
        >
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm transition-colors hover:border-emerald-600/50"
              variants={fadeUpVariants}
              whileHover={{ y: -8 }}
            >
              <div className="mb-5">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-gray-400 leading-relaxed">{t(benefit.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   4. TimelineSection
   ════════════════════════════════════════════════════ */

function TimelineSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.05);

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title={t('persona.howItWorks')}
          description={t('transporter.description')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 origin-top"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, i) => {
              const isOdd = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={isOdd ? fadeRightVariants : fadeLeftVariants}
                >
                  {/* Timeline circle */}
                  <motion.div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm"
                    variants={zoomInVariants}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      isOdd
                        ? 'md:pr-16 md:text-right'
                        : 'md:order-2 md:pl-16'
                    }`}
                  >
                    <span className="text-sm font-mono text-emerald-400 mb-2 block">
                      {step.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      isOdd ? 'md:order-2 md:pl-16' : 'md:pr-16'
                    }`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-900">
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-2xl -z-10" />
                      <Image
                        src={step.img}
                        alt={t(step.titleKey)}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   5. BentoFeaturesSection
   ════════════════════════════════════════════════════ */

function BentoFeaturesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.08);

  return (
    <section
      ref={ref}
      id="features"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={t('persona.features')}
          description={t('persona.transporter.hero.desc')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
        >
          {/* Smart Dispatch - Large card (col-span-2, row-span-2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden transition-colors hover:border-emerald-600/50"
            variants={fadeUpVariants}
            whileHover={{ y: -4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex flex-col justify-center p-8 md:p-10">
                <svg className="h-10 w-10 text-emerald-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t(FEATURES[0].titleKey)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(FEATURES[0].descKey)}
                </p>
              </div>
              <div className="relative aspect-[3/4] md:aspect-auto bg-gray-900">
                <Image
                  src={FEATURES[0].img}
                  alt={t(FEATURES[0].titleKey)}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </motion.div>

          {/* GPS Tracking - Small card */}
          <motion.div
            className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden p-8 transition-colors hover:border-emerald-600/50"
            variants={fadeUpVariants}
            whileHover={{ y: -4 }}
          >
            <svg className="h-10 w-10 text-emerald-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-3">
              {t(FEATURES[1].titleKey)}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {t(FEATURES[1].descKey)}
            </p>
            <div className="relative mt-4 aspect-square overflow-hidden rounded-xl bg-gray-800/50">
              <Image
                src={FEATURES[1].img}
                alt={t(FEATURES[1].titleKey)}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </motion.div>

          {/* Fleet Management - Small card */}
          <motion.div
            className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden p-8 transition-colors hover:border-emerald-600/50"
            variants={fadeUpVariants}
            whileHover={{ y: -4 }}
          >
            <svg className="h-10 w-10 text-emerald-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-3">
              {t(FEATURES[2].titleKey)}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {t(FEATURES[2].descKey)}
            </p>
            <div className="relative mt-4 aspect-video overflow-hidden rounded-xl bg-gray-800/50">
              <Image
                src={FEATURES[2].img}
                alt={t(FEATURES[2].titleKey)}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </motion.div>

          {/* Cold Chain Monitoring - Full width card */}
          <motion.div
            className="md:col-span-3 bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden transition-colors hover:border-emerald-600/50"
            variants={fadeUpVariants}
            whileHover={{ y: -4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">
              <div className="p-8 md:p-10 md:col-span-1">
                <svg className="h-10 w-10 text-emerald-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t(FEATURES[3].titleKey)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(FEATURES[3].descKey)}
                </p>
              </div>
              <div className="relative aspect-video md:col-span-2 bg-gray-900">
                <Image
                  src={FEATURES[3].img}
                  alt={t(FEATURES[3].titleKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   6. RouteNetworkSection
   ════════════════════════════════════════════════════ */

function RouteNetworkSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section ref={ref} className="py-20 bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* SVG Network */}
        <div className="relative">
          <svg
            viewBox="0 0 860 480"
            className="w-full h-auto"
            fill="none"
            aria-hidden="true"
          >
            {/* Lines */}
            {NETWORK_LINES.map(([from, to], i) => {
              const p1 = NETWORK_POINTS[from];
              const p2 = NETWORK_POINTS[to];
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={p1.cx}
                  y1={p1.cy}
                  x2={p2.cx}
                  y2={p2.cy}
                  stroke="rgba(16,185,129,0.2)"
                  strokeWidth={1.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                />
              );
            })}

            {/* Points */}
            {NETWORK_POINTS.map((point, i) => (
              <motion.circle
                key={`point-${i}`}
                cx={point.cx}
                cy={point.cy}
                r={5}
                fill="#34d399"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isVisible
                    ? {
                        scale: [0, 1.3, 1],
                        opacity: [0, 1, 0.8],
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.08,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Pulse halos */}
            {NETWORK_POINTS.filter((_, i) => i % 3 === 0).map((point, i) => (
              <motion.circle
                key={`halo-${i}`}
                cx={point.cx}
                cy={point.cy}
                r={5}
                fill="none"
                stroke="#34d399"
                strokeWidth={1}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={
                  isVisible
                    ? {
                        scale: [1, 3],
                        opacity: [0.6, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  delay: 1 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </svg>

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <div className="bg-gray-950/70 backdrop-blur-sm rounded-2xl px-8 py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  150+ <span className="text-emerald-400">{t('transporter.stats.cities')}</span>
                </p>
                <p className="text-lg md:text-xl text-gray-300">
                  Never drive empty again
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   7. TestimonialSection
   ════════════════════════════════════════════════════ */

function TestimonialSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="relative max-w-4xl mx-auto bg-gray-900/50 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Emerald glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Quote icon */}
        <svg
          className="h-12 w-12 text-emerald-400/40 mx-auto mb-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
        </svg>

        {/* Quote */}
        <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed mb-6 relative z-10">
          &ldquo;{t('persona.transporter.testimonial.quote')}&rdquo;
        </p>

        {/* Highlighted stat */}
        <p className="text-emerald-400 font-bold text-lg mb-8">
          Revenue doubled in 6 months
        </p>

        {/* Author */}
        <div className="flex items-center justify-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-800">
            <Image
              src="/farmers/imag2.jpeg"
              alt={t('persona.transporter.testimonial.author')}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div className="text-left">
            <p className="font-semibold text-white">
              {t('persona.transporter.testimonial.author')}
            </p>
            <p className="text-sm text-gray-400">
              {t('persona.transporter.testimonial.role')}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   8. CtaSection
   ════════════════════════════════════════════════════ */

function CtaSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);
  const containerRef = useRef<HTMLDivElement>(null);
  const phone1Ref = useRef<HTMLDivElement>(null);
  const phone2Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    if (phone1Ref.current) {
      phone1Ref.current.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
    }
    if (phone2Ref.current) {
      phone2Ref.current.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
    }
  }, []);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleMouseMove]);

  const phoneVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  } as const;

  return (
    <div className="w-full bg-gray-950 relative overflow-hidden py-12 md:py-0 md:h-[685px] md:pt-[100px] md:px-10" ref={ref}>
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-t-[2rem] md:rounded-t-[2.5rem] px-6 py-12 md:px-24 md:py-[100px] md:h-[585px] isolate"
        variants={staggerChildrenVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-10 h-full">
          {/* Text content */}
          <motion.div
            className="flex flex-col justify-center items-start gap-4 max-w-xl"
            variants={fadeUpVariants}
          >
            <h2 className="font-bold text-white text-3xl lg:text-5xl leading-tight tracking-tight">
              {t('persona.transporter.cta.title')}
            </h2>
            <p className="text-emerald-100 text-base lg:text-lg leading-relaxed mb-6">
              {t('persona.transporter.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full transition-opacity hover:opacity-90"
              >
                {t('persona.transporter.cta.primary')}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-full transition-colors hover:bg-white/10"
              >
                {t('persona.transporter.cta.secondary')}
              </a>
            </div>
          </motion.div>

          {/* Phone Mockups - hidden on mobile */}
          <div className="absolute hidden lg:block w-[496px] h-[745px] right-10 -top-[140px] z-[2]">
            <motion.div
              ref={phone1Ref}
              className="absolute w-[232px] h-[464px] left-0 top-0"
              style={{ filter: 'drop-shadow(10px 15px 30px rgba(0, 0, 0, 0.3))' }}
              variants={phoneVariants}
            >
              <Image
                src="/Mockups/mockup 09.png"
                alt="Farms to Market App"
                width={232}
                height={464}
                className="object-contain rounded-[40px]"
                sizes="232px"
              />
            </motion.div>

            <motion.div
              ref={phone2Ref}
              className="absolute w-[232px] h-[464px] right-0 top-[281px]"
              style={{ filter: 'drop-shadow(10px 15px 30px rgba(0, 0, 0, 0.3))' }}
              variants={phoneVariants}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/Mockups/mockup 10.png"
                alt="Farms to Market Marketplace"
                width={232}
                height={464}
                className="object-contain rounded-[40px]"
                sizes="232px"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Main TransporterPage
   ════════════════════════════════════════════════════ */

export default function TransporterPage() {
  const { t } = useLanguage();

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

      <TransporterHero />
      <StatBar />
      <BenefitsSection />
      <TimelineSection />
      <BentoFeaturesSection />
      <RouteNetworkSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}
