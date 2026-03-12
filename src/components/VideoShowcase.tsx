'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sprout, ShieldCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';

const EXPERTISE_BADGES = [
  { icon: Sprout, labelKey: 'showcase.badge.agriculture' },
  { icon: ShieldCheck, labelKey: 'showcase.badge.fintech' },
  { icon: TrendingUp, labelKey: 'showcase.badge.analytics' },
] as const;

const KEY_STATS = [
  { value: '50K+', labelKey: 'showcase.stat.users' },
  { value: '72.9K', labelKey: 'showcase.stat.transactions' },
] as const;

export default function VideoShowcase() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.15);

  return (
    <section className="relative bg-gray-950 py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full opacity-15"
        style={{
          background:
            'radial-gradient(ellipse, rgba(16,185,129,0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ─── Expertise badges row ─── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
        >
          {EXPERTISE_BADGES.map(({ icon: Icon, labelKey }, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-800 bg-gray-900/60"
              variants={fadeUpVariants}
            >
              <Icon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">
                {t(labelKey)}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Main headline ─── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('showcase.title')}{' '}
            <span className="text-emerald-400">{t('showcase.highlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('showcase.description')}
          </p>
        </motion.div>

        {/* ─── Two big stats (opencv.ai style) ─── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-16"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
        >
          {KEY_STATS.map(({ value, labelKey }, i) => (
            <motion.div key={i} className="text-center" variants={fadeUpVariants}>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-400 tracking-tight">
                {value}
              </div>
              <div className="text-gray-400 text-sm md:text-base mt-2 uppercase tracking-wider">
                {t(labelKey)}
              </div>
            </motion.div>
          ))}

          {/* Divider (desktop) */}
          <div className="hidden sm:block w-px h-20 bg-gray-800" aria-hidden="true" />

          {/* Description block */}
          <motion.div
            className="max-w-md text-center sm:text-left"
            variants={fadeUpVariants}
          >
            <p className="text-gray-400 leading-relaxed">
              {t('showcase.expertise')}
            </p>
          </motion.div>
        </motion.div>

        {/* ─── App showcase – two large mockups side by side ─── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Emerald glow behind mockups */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.3), transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative flex items-end justify-center gap-4 md:gap-8">
            {/* Left mockup - Dashboard */}
            <motion.div
              className="w-[38%] max-w-[280px]"
              initial={{ opacity: 0, x: -40, rotate: -3 }}
              animate={
                isVisible
                  ? { opacity: 1, x: 0, rotate: -3 }
                  : { opacity: 0, x: -40, rotate: -3 }
              }
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))' }}
            >
              <Image
                src="/Mockups/mockup 02.png"
                alt="FarmsToMarket Dashboard"
                width={560}
                height={700}
                className="w-full h-auto"
                sizes="(max-width: 768px) 40vw, 280px"
                priority
              />
            </motion.div>

            {/* Center mockup - Main app (larger) */}
            <motion.div
              className="w-[44%] max-w-[340px] z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))' }}
            >
              <Image
                src="/Mockups/mockup 11.png"
                alt="AgroBank Financial Services"
                width={680}
                height={850}
                className="w-full h-auto"
                sizes="(max-width: 768px) 45vw, 340px"
                priority
              />
            </motion.div>

            {/* Right mockup - Marketplace */}
            <motion.div
              className="w-[38%] max-w-[280px]"
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              animate={
                isVisible
                  ? { opacity: 1, x: 0, rotate: 3 }
                  : { opacity: 0, x: 40, rotate: 3 }
              }
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))' }}
            >
              <Image
                src="/Mockups/mockup 16.png"
                alt="FarmsToMarket Logistics"
                width={560}
                height={700}
                className="w-full h-auto"
                sizes="(max-width: 768px) 40vw, 280px"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Bottom link (like opencv.org link) ─── */}
        <motion.div
          className="text-center mt-14"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <p className="text-gray-500 text-sm mb-3">{t('showcase.poweredBy')}</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-bold text-lg">FARMS</span>
            <span className="text-white font-bold text-lg">TO</span>
            <span className="text-white/70 font-bold text-lg">MARKET</span>
            <span className="text-xs text-gray-500 ml-1">PRO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
