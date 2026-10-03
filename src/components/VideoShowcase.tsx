'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from '@/components/LocaleLink';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { STATS, storeShot } from '@/data/site';
import type { TranslationKey } from '@/types/i18n';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface Feature {
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

interface Solution {
  index: string;
  tabKey: TranslationKey;
  subKey: TranslationKey;
  headlineKey: TranslationKey;
  descKey: TranslationKey;
  ctaLabelKey: TranslationKey;
  ctaHref: string;
  bg: string;
  screen: string;
  metric: string;
  metricLabelKey: TranslationKey;
  features: Feature[];
}

const SOLUTIONS: Solution[] = [
  {
    index: '01', tabKey: 'solutions.producer.tab', subKey: 'solutions.producer.sub',
    headlineKey: 'solutions.producer.headline', descKey: 'solutions.producer.desc',
    ctaLabelKey: 'solutions.producer.cta', ctaHref: '/producer',
    bg: '/farmers/2.jpeg', screen: 'A1', metric: STATS.buyersConnected,
    metricLabelKey: 'solutions.producer.metricLabel',
    features: [
      { titleKey: 'solutions.producer.f1.t', descKey: 'solutions.producer.f1.d' },
      { titleKey: 'solutions.producer.f2.t', descKey: 'solutions.producer.f2.d' },
      { titleKey: 'solutions.producer.f3.t', descKey: 'solutions.producer.f3.d' },
      { titleKey: 'solutions.producer.f4.t', descKey: 'solutions.producer.f4.d' },
    ],
  },
  {
    index: '02', tabKey: 'solutions.buyer.tab', subKey: 'solutions.buyer.sub',
    headlineKey: 'solutions.buyer.headline', descKey: 'solutions.buyer.desc',
    ctaLabelKey: 'solutions.buyer.cta', ctaHref: '/customer',
    bg: '/farmers/cassava.jpeg', screen: 'A2', metric: STATS.buyerCost,
    metricLabelKey: 'solutions.buyer.metricLabel',
    features: [
      { titleKey: 'solutions.buyer.f1.t', descKey: 'solutions.buyer.f1.d' },
      { titleKey: 'solutions.buyer.f2.t', descKey: 'solutions.buyer.f2.d' },
      { titleKey: 'solutions.buyer.f3.t', descKey: 'solutions.buyer.f3.d' },
      { titleKey: 'solutions.buyer.f4.t', descKey: 'solutions.buyer.f4.d' },
    ],
  },
  {
    index: '03', tabKey: 'solutions.transporter.tab', subKey: 'solutions.transporter.sub',
    headlineKey: 'solutions.transporter.headline', descKey: 'solutions.transporter.desc',
    ctaLabelKey: 'solutions.transporter.cta', ctaHref: '/transporter',
    bg: '/farmers/farms2.jpeg', screen: 'A3', metric: STATS.onTimeDelivery,
    metricLabelKey: 'solutions.transporter.metricLabel',
    features: [
      { titleKey: 'solutions.transporter.f1.t', descKey: 'solutions.transporter.f1.d' },
      { titleKey: 'solutions.transporter.f2.t', descKey: 'solutions.transporter.f2.d' },
      { titleKey: 'solutions.transporter.f3.t', descKey: 'solutions.transporter.f3.d' },
      { titleKey: 'solutions.transporter.f4.t', descKey: 'solutions.transporter.f4.d' },
    ],
  },
  {
    index: '04', tabKey: 'solutions.agrobank.tab', subKey: 'solutions.agrobank.sub',
    headlineKey: 'solutions.agrobank.headline', descKey: 'solutions.agrobank.desc',
    ctaLabelKey: 'solutions.agrobank.cta', ctaHref: '/agrobank',
    bg: '/farmers/8.jpg', screen: 'A4', metric: STATS.transactionsProcessed,
    metricLabelKey: 'solutions.agrobank.metricLabel',
    features: [
      { titleKey: 'solutions.agrobank.f1.t', descKey: 'solutions.agrobank.f1.d' },
      { titleKey: 'solutions.agrobank.f2.t', descKey: 'solutions.agrobank.f2.d' },
      { titleKey: 'solutions.agrobank.f3.t', descKey: 'solutions.agrobank.f3.d' },
      { titleKey: 'solutions.agrobank.f4.t', descKey: 'solutions.agrobank.f4.d' },
    ],
  },
  {
    index: '05', tabKey: 'solutions.marketplace.tab', subKey: 'solutions.marketplace.sub',
    headlineKey: 'solutions.marketplace.headline', descKey: 'solutions.marketplace.desc',
    ctaLabelKey: 'solutions.marketplace.cta', ctaHref: '/customer',
    bg: '/farmers/poivrons.jpeg', screen: 'A5', metric: STATS.commodityCategories,
    metricLabelKey: 'solutions.marketplace.metricLabel',
    features: [
      { titleKey: 'solutions.marketplace.f1.t', descKey: 'solutions.marketplace.f1.d' },
      { titleKey: 'solutions.marketplace.f2.t', descKey: 'solutions.marketplace.f2.d' },
      { titleKey: 'solutions.marketplace.f3.t', descKey: 'solutions.marketplace.f3.d' },
      { titleKey: 'solutions.marketplace.f4.t', descKey: 'solutions.marketplace.f4.d' },
    ],
  },
  {
    index: '06', tabKey: 'solutions.analytics.tab', subKey: 'solutions.analytics.sub',
    headlineKey: 'solutions.analytics.headline', descKey: 'solutions.analytics.desc',
    ctaLabelKey: 'solutions.analytics.cta', ctaHref: '/producer',
    bg: '/farmers/cassava1.jpeg', screen: 'B1', metric: STATS.forecastAccuracy,
    metricLabelKey: 'solutions.analytics.metricLabel',
    features: [
      { titleKey: 'solutions.analytics.f1.t', descKey: 'solutions.analytics.f1.d' },
      { titleKey: 'solutions.analytics.f2.t', descKey: 'solutions.analytics.f2.d' },
      { titleKey: 'solutions.analytics.f3.t', descKey: 'solutions.analytics.f3.d' },
      { titleKey: 'solutions.analytics.f4.t', descKey: 'solutions.analytics.f4.d' },
    ],
  },
];

export default function VideoShowcase() {
  const { ref, isVisible } = useAnimateOnScroll(0.05);
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const sol = SOLUTIONS[active];
  const tab = t(sol.tabKey);
  const metricVars = { countries: STATS.countries };
  const prev = () => setActive((a) => (a - 1 + SOLUTIONS.length) % SOLUTIONS.length);
  const next = () => setActive((a) => (a + 1) % SOLUTIONS.length);

  return (
    <section ref={ref} id="solutions" className="overflow-hidden bg-gray-950 py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* ── Section title ── */}
        <motion.h2
          className="font-heading mb-10 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:mb-12 lg:text-[52px] lg:leading-[1.06]"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {t('solutions.title.a')}{' '}
          <span className="text-gradient">{t('solutions.title.b')}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          {/* Mobile tab chips */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.tabKey}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  i === active ? 'bg-emerald-500 text-black' : 'border border-gray-700 text-gray-400'
                }`}
              >
                {t(s.tabKey)}
              </button>
            ))}
          </div>

          {/* Three-panel block */}
          <div className="relative flex flex-col overflow-hidden border border-gray-800/60 bg-gray-900/30 lg:flex-row" style={{ minHeight: 620 }}>

            {/* LEFT  vertical tab sidebar (desktop) */}
            <div className="hidden shrink-0 border-r border-gray-800/60 lg:flex lg:w-[240px] lg:flex-col">
              {SOLUTIONS.map((s, i) => (
                <button
                  key={s.tabKey}
                  onClick={() => setActive(i)}
                  className={`relative flex flex-1 flex-col justify-center gap-1 px-7 text-left transition-all duration-200 ${
                    i === active ? 'bg-gray-950/80' : 'hover:bg-gray-950/40'
                  }`}
                >
                  {i === active && (
                    <motion.span
                      layoutId="tab-bar"
                      className="absolute left-0 top-0 h-full w-[3px] bg-emerald-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-[2.5px] ${i === active ? 'text-emerald-400' : 'text-gray-700'}`}>
                    {s.index}
                  </span>
                  <span className={`text-[14px] font-semibold leading-tight ${i === active ? 'text-white' : 'text-gray-500'}`}>
                    {t(s.tabKey)}
                  </span>
                </button>
              ))}
            </div>

            {/* CENTER + RIGHT  animated panel */}
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="absolute inset-0 flex flex-col lg:flex-row"
                >
                  {/* CENTER  text content */}
                  <div className="flex w-full shrink-0 flex-col overflow-y-auto bg-gray-950 px-6 py-10 sm:px-10 lg:w-[560px] lg:px-12 lg:py-12 xl:w-[640px] xl:px-14">
                    <div className="my-auto max-w-[480px]">
                      <span className="mb-5 block text-[11px] font-bold uppercase tracking-[3px] text-emerald-400">
                        {t(sol.subKey)}
                      </span>

                      <h3 className="font-heading mb-5 text-[26px] font-bold leading-[1.15] text-white sm:text-[30px] lg:text-[34px] xl:text-[38px]">
                        {t(sol.headlineKey)}
                      </h3>

                      <p className="mb-7 text-[15px] leading-[1.7] text-gray-400 lg:text-[16px]">
                        {t(sol.descKey)}
                      </p>

                      <Link
                        href={sol.ctaHref}
                        className="group mb-10 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-emerald-400 transition-colors hover:text-emerald-300 lg:text-[15px]"
                      >
                        {t(sol.ctaLabelKey)}
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>

                      <div className="border-t border-gray-800/70 pt-7">
                        <div className="mb-5">
                          <span className="font-heading block text-[42px] font-bold leading-none text-gradient lg:text-[48px]">
                            {sol.metric}
                          </span>
                          <span className="mt-1.5 block text-[13px] leading-snug text-gray-500">
                            {t(sol.metricLabelKey, metricVars)}
                          </span>
                        </div>

                        <ul className="space-y-3">
                          {sol.features.map((f) => (
                            <li key={f.titleKey} className="flex items-start gap-3">
                              <span className="mt-[3px] h-[6px] w-[6px] shrink-0 rounded-full bg-emerald-500" />
                              <span className="text-[13px] leading-snug">
                                <span className="font-semibold text-white">{t(f.titleKey)}</span>
                                <span className="text-gray-500">  {t(f.descKey)}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT  farm image panel */}
                  <div className="relative h-64 w-full flex-1 sm:h-80 lg:h-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`bg-${active}`}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={sol.bg}
                          alt={t('solutions.alt.bg', { sub: t(sol.subKey) })}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 750px"
                          priority
                        />
                        <div className="absolute inset-0 hidden bg-gradient-to-r from-gray-950 via-transparent to-transparent lg:block" style={{ backgroundImage: 'linear-gradient(to right, #030712 0%, transparent 18%)' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`screen-${active}`}
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
                        className="pointer-events-none absolute bottom-5 right-5 z-10 sm:bottom-8 sm:right-8"
                      >
                        <Image
                          src={storeShot(sol.screen, language)}
                          alt={t('solutions.alt.screen', { tab })}
                          width={280}
                          height={560}
                          className="w-[130px] object-contain drop-shadow-2xl sm:w-[190px] lg:w-[260px]"
                          sizes="(max-width: 640px) 130px, (max-width: 1024px) 190px, 260px"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Navigation */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {SOLUTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={t('solutions.nav.dot', { index: i + 1 })}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'h-[6px] w-7 bg-emerald-500' : 'h-[6px] w-[6px] bg-gray-700 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label={t('solutions.nav.prev')} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-emerald-500/40 hover:text-emerald-400">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label={t('solutions.nav.next')} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-emerald-500/40 hover:text-emerald-400">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
