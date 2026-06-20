'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-emerald-500/20 bg-black/40 px-6 py-5 backdrop-blur-md">
      <Icon className="h-5 w-5 text-emerald-400" />
      <span className="font-heading text-2xl font-bold text-white">{value}</span>
      <span className="text-center text-xs font-medium text-white/60 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function ScrollExpansionHero() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Media expansion: small card → full bleed
  const mediaWidth  = useTransform(scrollYProgress, [0, 0.65], ['32vw', '100vw']);
  const mediaHeight = useTransform(scrollYProgress, [0, 0.65], ['52vh', '100vh']);
  const mediaBorderRadius = useTransform(scrollYProgress, [0, 0.65], ['16px', '0px']);
  const mediaBoxShadow = useTransform(
    scrollYProgress,
    [0, 0.65],
    ['0 25px 80px rgba(0,0,0,0.6)', '0 0px 0px rgba(0,0,0,0)']
  );

  // Background farm image fades away as media expands
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Title words split left / right
  const titleLeftX  = useTransform(scrollYProgress, [0, 0.6], ['0vw', '-28vw']);
  const titleRightX = useTransform(scrollYProgress, [0, 0.6], ['0vw', '28vw']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4, 0.65], [1, 0.3, 0]);

  // Overlay on media: strong → transparent
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.65], [0.55, 0]);

  // Subtitle + scroll hint fade out early
  const hintOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Stats & CTA fade in at the end
  const contentOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const contentY       = useTransform(scrollYProgress, [0.65, 0.85], ['40px', '0px']);

  return (
    // Tall container → drives the sticky scroll animation
    <div ref={containerRef} className="relative h-[300vh]">

      {/* Sticky viewport layer */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* ── Solid dark base (always visible) ── */}
        <div className="absolute inset-0 bg-[#020d04]" />

        {/* ── Geo pattern overlay ── */}
        <div className="absolute inset-0 bg-geo opacity-[0.04] mix-blend-overlay pointer-events-none" />

        {/* ── Farm background photo (fades out during expansion) ── */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: bgOpacity }}
        >
          <Image
            src="/bg/Hero.png"
            alt="Farmers in field"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient vignette so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
        </motion.div>

        {/* ── Expanding media card ── */}
        <motion.div
          className="absolute z-10 overflow-hidden"
          style={{
            width: mediaWidth,
            height: mediaHeight,
            borderRadius: mediaBorderRadius,
            boxShadow: mediaBoxShadow,
            maxWidth: '95vw',
            maxHeight: '95vh',
          }}
        >
          <Image
            src="/Mockups/mockup 14.png"
            alt="FarmsToMarket Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay on media that fades away */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
          {/* Emerald glow rim */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-emerald-500/20" />
        </motion.div>

        {/* ── Title: splits left & right as media grows ── */}
        <div className="absolute z-20 flex w-full items-center justify-center gap-6 pointer-events-none select-none px-8">
          <motion.h2
            className="font-heading text-5xl font-bold text-white md:text-6xl lg:text-7xl drop-shadow-xl"
            style={{ x: titleLeftX, opacity: titleOpacity }}
          >
            {isFr ? 'La Ferme' : 'From Farm'}
          </motion.h2>
          <motion.h2
            className="font-heading text-5xl font-bold text-gradient md:text-6xl lg:text-7xl drop-shadow-xl"
            style={{ x: titleRightX, opacity: titleOpacity }}
          >
            {isFr ? 'au Marché' : 'to Market'}
          </motion.h2>
        </div>

        {/* ── Scroll hint ── */}
        <motion.div
          className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
          style={{ opacity: hintOpacity }}
        >
          <p className="font-heading text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            {isFr ? 'Faites défiler pour découvrir' : 'Scroll to expand'}
          </p>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/20">
            <div className="mt-2 h-2 w-0.5 rounded-full bg-white/40 animate-scroll-pulse" />
          </div>
        </motion.div>

        {/* ── Content revealed after full expansion ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-30 px-6 pb-12 pt-8"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Stats row */}
          <div className="mx-auto mb-8 grid max-w-2xl grid-cols-3 gap-4">
            <StatCard icon={Users}     value="50 000+" label={t('about.numbers.farmers')} />
            <StatCard icon={Globe}     value="15+"     label={t('about.numbers.countries')} />
            <StatCard icon={TrendingUp} value="+40%"   label={isFr ? 'Revenus supplémentaires' : 'Additional Revenue'} />
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="#marketplace"
              className="font-heading inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold text-black shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40"
            >
              <ArrowRight className="h-4 w-4" />
              {t('hero.watchDemo')}
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
