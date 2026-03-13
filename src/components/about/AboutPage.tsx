'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

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

export default function AboutPage() {
  const { t } = useLanguage();
  const [activeMember, setActiveMember] = useState(0);

  const heroAnim = useAnimateOnScroll(0.05);
  const imagesAnim = useAnimateOnScroll(0.1);
  const statementAnim = useAnimateOnScroll(0.15);
  const principlesAnim = useAnimateOnScroll(0.1);
  const leadershipAnim = useAnimateOnScroll(0.1);
  const ctaAnim = useAnimateOnScroll(0.15);

  const goToMember = (index: number) => {
    if (index < 0) setActiveMember(TEAM.length - 1);
    else if (index >= TEAM.length) setActiveMember(0);
    else setActiveMember(index);
  };

  const member = TEAM[activeMember];

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
      <section ref={heroAnim.ref} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="overflow-hidden mb-10">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05]"
              initial={{ y: '100%', opacity: 0 }}
              animate={heroAnim.isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: EASE }}
            >
              {t('about.hero.title')}{' '}
              <span className="text-emerald-400">{t('about.hero.highlight')}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroAnim.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-colors duration-300"
            >
              {t('about.cta.contact')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. THREE IMAGES ROW
         ═══════════════════════════════════════════ */}
      <section ref={imagesAnim.ref} className="px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={imagesAnim.isVisible ? { opacity: 1, y: 0 } : {}}
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
      <section ref={statementAnim.ref} className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-snug mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={statementAnim.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('about.statement')}
          </motion.p>

          <motion.div
            ref={principlesAnim.ref}
            className="grid gap-12 md:gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            animate={principlesAnim.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {PRINCIPLES.map(({ number, titleKey, descKey }) => (
              <div key={number}>
                <span className="text-sm font-mono text-emerald-400 mb-4 block">
                  {number}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">
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
        ref={leadershipAnim.ref}
        id="team"
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipAnim.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('about.team.badge')}
          </motion.h2>

          {/* Active member display */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={leadershipAnim.isVisible ? { opacity: 1 } : {}}
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
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
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
          5. CTA — "Got interested?"
         ═══════════════════════════════════════════ */}
      <section
        ref={ctaAnim.ref}
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaAnim.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('about.interested.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaAnim.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            {t('about.interested.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaAnim.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-colors duration-300"
            >
              {t('about.interested.cta')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
