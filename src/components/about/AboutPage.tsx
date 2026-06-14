'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants, fadeInVariants } from '@/animations/variants';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── Data ─── */

const HERO_IMAGES = [
  { src: '/farmers/farms2.jpeg', alt: 'FarmsToMarket team in the field' },
  { src: '/farmers/cassava.jpeg', alt: 'FarmsToMarket produce' },
  { src: '/farmers/poivrons.jpeg', alt: 'FarmsToMarket harvest' },
];

const PRINCIPLES = [
  { number: '.001', titleKey: 'about.values.v1.title', descKey: 'about.values.v1.description' },
  { number: '.002', titleKey: 'about.values.v2.title', descKey: 'about.values.v2.description' },
  { number: '.003', titleKey: 'about.values.v3.title', descKey: 'about.values.v3.description' },
];

const TEAM = [
  { nameKey: 'about.team.ceo.name', roleKey: 'about.team.ceo.role', bioKey: 'about.team.ceo.bio', img: '/farmers/8.jpg' },
  { nameKey: 'about.team.cto.name', roleKey: 'about.team.cto.role', bioKey: 'about.team.cto.bio', img: '/farmers/2.jpeg' },
  { nameKey: 'about.team.cpo.name', roleKey: 'about.team.cpo.role', bioKey: 'about.team.cpo.bio', img: '/farmers/5.jpeg' },
  { nameKey: 'about.team.coo.name', roleKey: 'about.team.coo.role', bioKey: 'about.team.coo.bio', img: '/farmers/6.jpeg' },
];

const AI_MODULES = [
  { titleKey: 'about.ai.crop.title', descKey: 'about.ai.crop.description', img: '/farmers/3.jpeg' },
  { titleKey: 'about.ai.pricing.title', descKey: 'about.ai.pricing.description', img: '/farmers/4.jpeg' },
  { titleKey: 'about.ai.quality.title', descKey: 'about.ai.quality.description', img: '/farmers/7.jpeg' },
  { titleKey: 'about.ai.logistics.title', descKey: 'about.ai.logistics.description', img: '/farmers/imag2.jpeg' },
  { titleKey: 'about.ai.fraud.title', descKey: 'about.ai.fraud.description', img: '/farmers/img1.jpeg' },
  { titleKey: 'about.ai.demand.title', descKey: 'about.ai.demand.description', img: '/farmers/images1.jpeg' },
] as const;

const KEY_NUMBERS = [
  { value: '50K+', labelKey: 'about.numbers.farmers' },
  { value: '15+', labelKey: 'about.numbers.countries' },
  { value: '72.9K', labelKey: 'about.numbers.transactions' },
  { value: '35%', labelKey: 'about.numbers.waste' },
] as const;

const VALUES = [
  { titleKey: 'about.values.v1.title', descKey: 'about.values.v1.description' },
  { titleKey: 'about.values.v2.title', descKey: 'about.values.v2.description' },
  { titleKey: 'about.values.v3.title', descKey: 'about.values.v3.description' },
  { titleKey: 'about.values.v4.title', descKey: 'about.values.v4.description' },
] as const;

const TIMELINE = [
  { year: '2022', titleKey: 'about.timeline.2022.title', descKey: 'about.timeline.2022.description' },
  { year: '2023', titleKey: 'about.timeline.2023.title', descKey: 'about.timeline.2023.description' },
  { year: '2024', titleKey: 'about.timeline.2024.title', descKey: 'about.timeline.2024.description' },
  { year: '2025', titleKey: 'about.timeline.2025.title', descKey: 'about.timeline.2025.description' },
] as const;

/* ─── Reusable section wrapper ─── */

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
      className={`py-28 md:py-36 ${className}`}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInVariants}
    >
      {children}
    </motion.section>
  );
}

/* ─── Component ─── */

export default function AboutPage() {
  const { t } = useLanguage();
  const [activeMember, setActiveMember] = useState(0);
  const [activeModule, setActiveModule] = useState(0);

  const { ref: heroRef, isVisible: heroVisible } = useAnimateOnScroll(0.05);
  const { ref: imagesRef, isVisible: imagesVisible } = useAnimateOnScroll(0.1);
  const { ref: statementRef, isVisible: statementVisible } = useAnimateOnScroll(0.15);
  const { ref: principlesRef, isVisible: principlesVisible } = useAnimateOnScroll(0.1);
  const { ref: leadershipRef, isVisible: leadershipVisible } = useAnimateOnScroll(0.1);
  const { ref: aiModulesRef, isVisible: aiModulesVisible } = useAnimateOnScroll(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useAnimateOnScroll(0.15);

  const goToMember = (index: number) => {
    if (index < 0) setActiveMember(TEAM.length - 1);
    else if (index >= TEAM.length) setActiveMember(0);
    else setActiveMember(index);
  };

  const goToModule = (index: number) => {
    if (index < 0) setActiveModule(AI_MODULES.length - 1);
    else if (index >= AI_MODULES.length) setActiveModule(0);
    else setActiveModule(index);
  };

  const member = TEAM[activeMember];
  const aiModule = AI_MODULES[activeModule];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Sticky back link */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/80 px-4 py-2 text-sm text-gray-300 backdrop-blur-md transition-colors hover:border-emerald-600 hover:text-emerald-400"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('nav.about') === 'À propos' ? 'Accueil' : 'Home'}
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          1. HERO — giant headline + CTA button
         ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="overflow-hidden mb-10">
            <motion.h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05]"
              initial={{ y: '100%', opacity: 0 }}
              animate={heroVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: EASE }}
            >
              {t('about.hero.title')}{' '}
              <span className="text-emerald-400">{t('about.hero.highlight')}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            <a
              href="#contact"
              className="font-cta inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold tracking-[2px] uppercase rounded-full transition-colors duration-300"
            >
              {t('about.cta.contact')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. THREE IMAGES ROW
         ═══════════════════════════════════════════ */}
      <section ref={imagesRef} className="px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={imagesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
        >
          {HERO_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          3. WHY US — bold statement + 3 numbered principles
         ═══════════════════════════════════════════ */}
      <section ref={statementRef} className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-snug mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={statementVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('about.statement')}
          </motion.p>

          <motion.div
            ref={principlesRef}
            className="grid gap-12 md:gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            animate={principlesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {PRINCIPLES.map(({ number, titleKey, descKey }) => (
              <div key={number}>
                <span className="text-sm font-mono text-emerald-400 mb-4 block">
                  {number}
                </span>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {t(titleKey)}
                </h3>
                <p className="text-gray-400 leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. LEADERSHIP — carousel/tabs (photo left, bio right)
         ═══════════════════════════════════════════ */}
      <section
        ref={leadershipRef}
        id="team"
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('about.team.badge')}
          </motion.h2>

          {/* Active member display */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={leadershipVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] max-h-[500px] overflow-hidden rounded-2xl bg-gray-800">
                  <Image
                    src={member.img}
                    alt={t(member.nameKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Bio */}
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-mono text-emerald-400 mb-4">
                    .00{activeMember + 1}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
                    {t(member.nameKey)}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-6">
                    {t(member.roleKey)}
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {t(member.bioKey)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Tab navigation (arrows + numbered tabs) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToMember(activeMember - 1)}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Previous member"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1">
              {TEAM.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMember(i)}
                  className={`px-3 py-2 text-sm font-mono transition-colors ${
                    i === activeMember
                      ? 'text-emerald-400'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToMember(activeMember + 1)}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Next member"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Progress bar */}
            <div className="flex-1 h-px bg-gray-800 ml-4 relative">
              <motion.div
                className="absolute top-0 left-0 h-px bg-emerald-500"
                animate={{ width: `${((activeMember + 1) / TEAM.length) * 100}%` }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. MISSION — prose, narrow column
         ═══════════════════════════════════════════ */}
      <Section id="mission">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2
            className="font-heading mb-10 text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight"
            variants={fadeUpVariants}
          >
            {t('about.mission.title')}
          </motion.h2>

          <motion.div className="space-y-6 text-lg leading-[1.8] text-gray-400" variants={fadeUpVariants}>
            <p>{t('about.mission.p1')}</p>
            <p>{t('about.mission.p2')}</p>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          6. AI MODULES — carousel (image left, text right)
         ═══════════════════════════════════════════ */}
      <section
        ref={aiModulesRef}
        id="ai-modules"
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={aiModulesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('about.ai.title')}
          </motion.h2>
          <motion.p
            className="mb-16 max-w-3xl text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={aiModulesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
          >
            {t('about.ai.description')}
          </motion.p>

          {/* Active module display */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={aiModulesVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800">
                  <Image
                    src={aiModule.img}
                    alt={t(aiModule.titleKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-mono text-emerald-400 mb-4">
                    .00{activeModule + 1}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                    {t(aiModule.titleKey)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {t(aiModule.descKey)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Tab navigation (arrows + numbered tabs + progress bar) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToModule(activeModule - 1)}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Previous module"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1">
              {AI_MODULES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveModule(i)}
                  className={`px-3 py-2 text-sm font-mono transition-colors ${
                    i === activeModule
                      ? 'text-emerald-400'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToModule(activeModule + 1)}
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Next module"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Progress bar */}
            <div className="flex-1 h-px bg-gray-800 ml-4 relative">
              <motion.div
                className="absolute top-0 left-0 h-px bg-emerald-500"
                animate={{ width: `${((activeModule + 1) / AI_MODULES.length) * 100}%` }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. KEY NUMBERS — clean stat row
         ═══════════════════════════════════════════ */}
      <Section>
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            className="font-heading mb-20 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            variants={fadeUpVariants}
          >
            {t('about.numbers.title')}
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 gap-y-16 gap-x-8 md:grid-cols-4"
            variants={staggerChildrenVariants}
          >
            {KEY_NUMBERS.map(({ value, labelKey }, i) => (
              <motion.div key={i} variants={fadeUpVariants}>
                <div className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl tracking-tight">
                  {value}
                </div>
                <div className="mt-3 text-sm text-gray-500 uppercase tracking-wider">
                  {t(labelKey)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          8. VALUES — clean 2×2 text grid
         ═══════════════════════════════════════════ */}
      <Section id="values">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            className="font-heading mb-20 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            variants={fadeUpVariants}
          >
            {t('about.values.title')}
          </motion.h2>

          <motion.div
            className="grid gap-x-8 gap-y-16 sm:grid-cols-2"
            variants={staggerChildrenVariants}
          >
            {VALUES.map(({ titleKey, descKey }, i) => (
              <motion.div key={i} variants={fadeUpVariants}>
                <h3 className="font-heading mb-3 text-xl font-semibold text-white">{t(titleKey)}</h3>
                <p className="leading-relaxed text-gray-400">{t(descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          9. TIMELINE — minimal left-aligned
         ═══════════════════════════════════════════ */}
      <Section id="timeline">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2
            className="font-heading mb-20 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            variants={fadeUpVariants}
          >
            {t('about.timeline.title')}
          </motion.h2>

          <motion.div className="relative" variants={staggerChildrenVariants}>
            <div
              className="absolute left-0 top-0 h-full w-px bg-gray-800"
              aria-hidden="true"
            />

            {TIMELINE.map(({ year, titleKey, descKey }) => (
              <motion.div
                key={year}
                className="relative mb-16 last:mb-0 pl-10"
                variants={fadeUpVariants}
              >
                <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[3.5px] rounded-full bg-gray-600" />
                <span className="text-sm font-semibold text-emerald-400">{year}</span>
                <h3 className="font-heading mt-2 text-xl font-semibold text-white">{t(titleKey)}</h3>
                <p className="mt-2 leading-relaxed text-gray-400">{t(descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          10. INTERESTED CTA
         ═══════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('about.interested.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            {t('about.interested.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
          >
            <a
              href="#contact"
              className="font-cta inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold tracking-[2px] uppercase rounded-full transition-colors duration-300"
            >
              {t('about.interested.cta')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          11. CTA — Join us
         ═══════════════════════════════════════════ */}
      <Section>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2
            className="font-heading mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            variants={fadeUpVariants}
          >
            {t('about.cta.title')}
          </motion.h2>
          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400"
            variants={fadeUpVariants}
          >
            {t('about.cta.description')}
          </motion.p>
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={fadeUpVariants}
          >
            <a
              href="#careers"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 transition-opacity hover:opacity-80"
            >
              {t('about.cta.careers')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-700 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-gray-500"
            >
              {t('about.cta.contact')}
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
