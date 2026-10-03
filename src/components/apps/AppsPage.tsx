'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Star, Shield, MapPin, CheckCircle, Zap, DollarSign,
  ShoppingBag, Eye, Users, Globe, Wheat,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { APPS, STATS, storeShot } from '@/data/site';
import type { TranslationKey } from '@/types/i18n';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── Reusable sub-components ─────────────────────────────── */

function StoreBadge({ store, href, label, name }: { store: 'apple' | 'google'; href: string; label: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/8 px-5 py-3.5 backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:bg-white/12"
    >
      {store === 'apple' ? (
        <svg className="h-7 w-6 shrink-0 fill-white" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="h-7 w-6 shrink-0 fill-white" viewBox="0 0 24 24">
          <path d="M3.18 23.76c.28.16.61.17.93.05l12.46-7.19-2.69-2.69L3.18 23.76zm17.64-13.05-.01-.01-2.5-1.44-2.96 2.96 2.96 2.96 2.52-1.45c.72-.41.72-1.62-.01-2.02zM.89 1.76C.34 2.3 0 3.12 0 4.2v15.6c0 1.08.34 1.9.89 2.44l.12.12 8.74-8.74v-.2L1.01 1.64.89 1.76zm10.28 10.47L3.18.48C2.86.32 2.53.33 2.25.49L14.71 7.68l-3.54 4.55z" />
        </svg>
      )}
      <div className="text-left">
        <p className="text-[10px] leading-tight text-white/50 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-bold text-white">{name}</p>
      </div>
    </a>
  );
}

interface FeatureRowProps {
  shot: string;
  badgeKey: TranslationKey;
  headlineKeys: TranslationKey[];
  descriptionKey: TranslationKey;
  pillKey: TranslationKey;
  PillIcon: LucideIcon;
  reverse?: boolean;
}

function FeatureRow({ shot, badgeKey, headlineKeys, descriptionKey, pillKey, PillIcon, reverse }: FeatureRowProps) {
  const { t, language } = useLanguage();
  const headlineLines = headlineKeys.map((key) => t(key));
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
      }}
      className={`flex flex-col gap-12 lg:flex-row lg:items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Phone mockup */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: reverse ? 50 : -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
        }}
        className="flex justify-center lg:w-1/2"
      >
        <div className="relative w-[260px] md:w-[290px]">
          <div className="absolute -inset-10 rounded-full bg-emerald-500/8 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl shadow-black/60">
            <Image
              src={storeShot(shot, language)}
              alt={headlineLines.join(' ')}
              width={580}
              height={1160}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      {/* Text block */}
      <div className="flex flex-col gap-5 lg:w-1/2">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-400"
        >
          {t(badgeKey)}
        </motion.span>

        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
          }}
          className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl"
        >
          {headlineLines.map((line, i) => (
            <span key={i}>
              <span className={i === 0 ? 'text-gradient' : ''}>{line}</span>
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </motion.h3>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
          }}
          className="max-w-md text-base leading-relaxed text-white/55"
        >
          {t(descriptionKey)}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.88 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-black">
            <PillIcon className="h-3.5 w-3.5" />
            {t(pillKey)}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface TestimonialProps {
  quote: string;
  text: string;
  author: string;
  role: string;
  photo: string;
  delay?: number;
}

function TestimonialCard({ quote, text, author, role, photo, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-sm"
    >
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
        ))}
      </div>
      <p className="font-heading text-lg font-semibold text-white">&ldquo;{quote}&rdquo;</p>
      <p className="text-sm leading-relaxed text-white/55">{text}</p>
      <div className="mt-auto flex items-center gap-3 border-t border-white/8 pt-5">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-emerald-500/30">
          <Image src={photo} fill sizes="40px" alt={author} className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{author}</p>
          <p className="text-xs text-white/45">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */

const GALLERY_MOCKUPS = [
  '/Mockups/mockup 01.png', '/Mockups/mockup 02.png', '/Mockups/mockup 03.png',
  '/Mockups/mockup 04.png', '/Mockups/mockup 05.png', '/Mockups/mockup 06.png',
  '/Mockups/mockup 07.png', '/Mockups/mockup 09.png', '/Mockups/mockup 10.png',
  '/Mockups/mockup 11.png', '/Mockups/mockup 12.png', '/Mockups/mockup 13.png',
];

export default function AppsPage() {
  const { t, language } = useLanguage();

  /* ── Feature data ── */
  const BUYER_FEATURES: FeatureRowProps[] = [
    {
      shot: 'A1',
      badgeKey: 'apps.bf1.badge',
      headlineKeys: ['apps.bf1.h1', 'apps.bf1.h2'],
      descriptionKey: 'apps.bf1.desc',
      pillKey: 'apps.bf1.pill',
      PillIcon: CheckCircle,
    },
    {
      shot: 'A2',
      badgeKey: 'apps.bf2.badge',
      headlineKeys: ['apps.bf2.h1', 'apps.bf2.h2'],
      descriptionKey: 'apps.bf2.desc',
      pillKey: 'apps.bf2.pill',
      PillIcon: Eye,
    },
    {
      shot: 'A3',
      badgeKey: 'apps.bf3.badge',
      headlineKeys: ['apps.bf3.h1', 'apps.bf3.h2'],
      descriptionKey: 'apps.bf3.desc',
      pillKey: 'apps.bf3.pill',
      PillIcon: Shield,
    },
    {
      shot: 'A4',
      badgeKey: 'apps.bf4.badge',
      headlineKeys: ['apps.bf4.h1', 'apps.bf4.h2'],
      descriptionKey: 'apps.bf4.desc',
      pillKey: 'apps.bf4.pill',
      PillIcon: MapPin,
    },
    {
      shot: 'A5',
      badgeKey: 'apps.bf5.badge',
      headlineKeys: ['apps.bf5.h1', 'apps.bf5.h2'],
      descriptionKey: 'apps.bf5.desc',
      pillKey: 'apps.bf5.pill',
      PillIcon: ShoppingBag,
    },
  ];

  const PRODUCER_FEATURES: FeatureRowProps[] = [
    {
      shot: 'B1',
      badgeKey: 'apps.pf1.badge',
      headlineKeys: ['apps.pf1.h1', 'apps.pf1.h2', 'apps.pf1.h3'],
      descriptionKey: 'apps.pf1.desc',
      pillKey: 'apps.pf1.pill',
      PillIcon: Wheat,
    },
    {
      shot: 'B2',
      badgeKey: 'apps.pf2.badge',
      headlineKeys: ['apps.pf2.h1', 'apps.pf2.h2'],
      descriptionKey: 'apps.pf2.desc',
      pillKey: 'apps.pf2.pill',
      PillIcon: MapPin,
    },
    {
      shot: 'B3',
      badgeKey: 'apps.pf3.badge',
      headlineKeys: ['apps.pf3.h1', 'apps.pf3.h2'],
      descriptionKey: 'apps.pf3.desc',
      pillKey: 'apps.pf3.pill',
      PillIcon: Zap,
    },
    {
      shot: 'B4',
      badgeKey: 'apps.pf4.badge',
      headlineKeys: ['apps.pf4.h1', 'apps.pf4.h2'],
      descriptionKey: 'apps.pf4.desc',
      pillKey: 'apps.pf4.pill',
      PillIcon: Eye,
    },
    {
      shot: 'B5',
      badgeKey: 'apps.pf5.badge',
      headlineKeys: ['apps.pf5.h1', 'apps.pf5.h2', 'apps.pf5.h3'],
      descriptionKey: 'apps.pf5.desc',
      pillKey: 'apps.pf5.pill',
      PillIcon: DollarSign,
    },
  ];

  const TESTIMONIALS: TestimonialProps[] = [
    {
      quote: t('testimonials.1.quote'),
      text: t('testimonials.1.description'),
      author: t('testimonials.1.author'),
      role: t('testimonials.1.role'),
      photo: '/farmers/2.jpeg',
    },
    {
      quote: t('testimonials.2.quote'),
      text: t('testimonials.2.description'),
      author: t('testimonials.2.author'),
      role: t('testimonials.2.role'),
      photo: '/farmers/3.jpeg',
    },
    {
      quote: t('testimonials.4.quote'),
      text: t('testimonials.4.description'),
      author: t('testimonials.4.author'),
      role: t('testimonials.4.role'),
      photo: '/farmers/4.jpeg',
    },
  ];

  return (
    <div className="bg-[#020d04] min-h-screen overflow-x-hidden">

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-500/6 blur-[100px]" />
        </div>
        <div className="absolute inset-0 bg-geo opacity-[0.04] mix-blend-overlay" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

            {/* ── Left: copy ── */}
            <div className="flex flex-col items-start">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {t('apps.ui01')}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
                className="font-heading mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl"
              >
                <>
                  <span className="text-gradient">{t('apps.hero.titleA')}</span>
                  <br />{t('apps.hero.titleB')}
                </>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="mb-8 max-w-[480px] text-lg leading-relaxed text-white/55"
              >
                {t('apps.txt01')}
              </motion.p>

              {/* App store badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                className="mb-8 flex flex-wrap gap-3"
              >
                <StoreBadge store="apple" href={APPS.apple} label={t('ready.appstore.label')} name={t('ready.appstore.name')} />
                <StoreBadge store="google" href={APPS.googlePlay.buyer} label={t('ready.googleplay.label')} name={t('ready.googleplay.name')} />
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
                className="flex items-center gap-3"
              >
                <div className="flex">
                  {['/farmers/2.jpeg', '/farmers/3.jpeg', '/farmers/4.jpeg', '/farmers/5.jpeg'].map((src, i) => (
                    <div
                      key={i}
                      className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#020d04]"
                      style={{ marginLeft: i === 0 ? 0 : -10 }}
                    >
                      <Image src={src} fill sizes="36px" alt="user" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
                    ))}
                    <span className="ml-1 text-sm font-bold text-white">4.8</span>
                  </div>
                  <p className="text-xs text-white/40">{t('hero.trustLine')}</p>
                </div>
              </motion.div>
            </div>

            {/* ── Right: floating phones ── */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
              className="relative hidden lg:flex items-center justify-center min-h-[580px]"
            >
              <div className="absolute inset-0 rounded-full bg-emerald-500/6 blur-[80px]" />

              {/* Phone 1  tilted left */}
              <div className="relative z-10 -mr-16 w-[215px] rotate-[-6deg] overflow-hidden rounded-[2.2rem] ring-1 ring-white/10 shadow-2xl shadow-black/70">
                <Image
                  src="/F2M - Store App Listing/EN/PNG/A1.png"
                  alt="FarmsToMarket  Buyer app"
                  width={430} height={860}
                  className="w-full object-cover"
                  priority
                />
              </div>

              {/* Phone 2  upright, on top */}
              <div className="relative z-20 mt-14 w-[235px] overflow-hidden rounded-[2.2rem] ring-1 ring-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                <Image
                  src="/F2M - Store App Listing/EN/PNG/B1.png"
                  alt="FarmsToMarket  Producer app"
                  width={470} height={940}
                  className="w-full object-cover"
                  priority
                />
              </div>

              {/* Phone 3  tilted right */}
              <div className="relative z-10 -ml-16 mt-24 w-[200px] rotate-[6deg] overflow-hidden rounded-[2.2rem] ring-1 ring-white/8 shadow-2xl shadow-black/60 opacity-70">
                <Image
                  src="/F2M - Store App Listing/EN/PNG/A5.png"
                  alt="FarmsToMarket  Prices"
                  width={400} height={800}
                  className="w-full object-cover"
                  priority
                />
              </div>

              {/* Floating badge: Escrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
                className="absolute left-0 top-20 z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md"
              >
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white">Escrow Protected</span>
              </motion.div>

              {/* Floating badge: AI */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
                className="absolute bottom-20 right-0 z-30 flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/12 px-3 py-2 backdrop-blur-md"
              >
                <Zap className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-300">AI Quality Check</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════════════════ */}
      <section className="border-y border-white/6 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {([
              { value: language === 'fr' ? STATS.usersFr : STATS.users, labelKey: 'apps.stat.users', Icon: Users },
              { value: STATS.countries, labelKey: 'apps.stat.countries', Icon: Globe },
              { value: `${STATS.appStoreRating} ★`, labelKey: 'apps.stat.rating', Icon: Star },
              { value: STATS.escrowCoverage, labelKey: 'apps.stat.escrow', Icon: Shield },
            ] as { value: string; labelKey: TranslationKey; Icon: LucideIcon }[]).map(({ value, labelKey, Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-5 w-5 text-emerald-400" />
                <span className="font-heading text-2xl font-bold text-white md:text-3xl">{value}</span>
                <span className="text-xs uppercase tracking-widest text-white/45">{t(labelKey)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FEATURES  FOR BUYERS
      ════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8" id="buyers">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-24 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            {t('apps.ui02')}
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[2.75rem]">
            {t('apps.ui03')}
            <span className="text-gradient">{t('apps.ui04')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            {t('apps.txt02')}
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {BUYER_FEATURES.map((feat, i) => (
            <FeatureRow key={i} {...feat} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FEATURES  FOR PRODUCERS
      ════════════════════════════════════════════════════ */}
      <section className="bg-white/[0.015] py-28" id="producers">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="mb-24 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {t('apps.ui05')}
            </span>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[2.75rem]">
              {t('apps.ui06')}
              <span className="text-gradient">{t('apps.ui07')}</span>
              {' '}{t('apps.ui08')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/50">
              {t('apps.txt03')}
            </p>
          </motion.div>

          <div className="flex flex-col gap-32">
            {PRODUCER_FEATURES.map((feat, i) => (
              <FeatureRow key={i} {...feat} reverse={i % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SCREENSHOTS GALLERY
      ════════════════════════════════════════════════════ */}
      <section className="overflow-hidden py-28" id="screenshots">
        <div className="mx-auto mb-14 max-w-7xl px-5 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
              {t('apps.ui09')}
            </span>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              {t('apps.ui10')}
              <span className="text-gradient">{t('apps.ui11')}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/50">
              {t('apps.txt04')}
            </p>
          </motion.div>
        </div>

        {/* Scrollable strip */}
        <div
          className="flex gap-5 overflow-x-auto px-5 pb-4 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {GALLERY_MOCKUPS.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: EASE }}
              className="shrink-0"
            >
              <div className="w-[155px] overflow-hidden rounded-[1.6rem] ring-1 ring-white/10 shadow-xl shadow-black/40 md:w-[175px]">
                <Image
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  width={350}
                  height={700}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8" id="testimonials">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
            {t('testimonials.badge')}
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {t('testimonials.title')}
          </h2>
          <p className="mt-3 text-white/50">{t('testimonials.description')}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={i} delay={i * 0.15} {...item} />
          ))}
        </div>

        {/* Mini-stats row */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/6 pt-16 md:grid-cols-4">
          {[
            { value: '50 000+', label: t('testimonials.stats.users') },
            { value: '98%',     label: t('testimonials.stats.satisfaction') },
            { value: '15+',     label: t('testimonials.stats.countries') },
            { value: '24/7',    label: t('testimonials.stats.support') },
          ].map(({ value, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="text-center"
            >
              <p className="font-heading text-2xl font-bold text-emerald-400">{value}</p>
              <p className="mt-1 text-sm text-white/45">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          DOWNLOAD CTA
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-36">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020d04] via-emerald-950/20 to-[#020d04]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/12 blur-[120px]" />
        <div className="absolute inset-0 bg-topo-subtle opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {t('apps.ui12')}
                </span>
              </div>

              <h2 className="font-heading mb-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                {t('ready.title')}
              </h2>
              <p className="mb-8 text-lg text-white/55">{t('ready.description')}</p>

              <div className="flex flex-wrap gap-3">
                <StoreBadge store="apple" href={APPS.apple} label={t('ready.appstore.label')} name={t('ready.appstore.name')} />
                <StoreBadge store="google" href={APPS.googlePlay.buyer} label={t('ready.googleplay.label')} name={t('ready.googleplay.name')} />
              </div>

              <p className="mt-6 text-sm text-white/30">{t('hero.trustLine')}</p>
            </motion.div>

            {/* Phone stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
              className="relative hidden lg:flex items-center justify-center min-h-[400px]"
            >
              <div className="absolute inset-0 rounded-full bg-emerald-500/8 blur-[60px]" />

              <div className="relative -mr-10 w-[190px] rotate-[-4deg] overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-xl shadow-black/60 z-10">
                <Image src="/F2M - Store App Listing/EN/PNG/B5.png" alt="Get paid" width={380} height={760} className="w-full object-cover" loading="lazy" />
              </div>
              <div className="relative z-20 w-[210px] overflow-hidden rounded-[2rem] ring-1 ring-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                <Image src="/F2M - Store App Listing/EN/PNG/A3.png" alt="Pay safe" width={420} height={840} className="w-full object-cover" loading="lazy" />
              </div>
              <div className="relative -ml-10 mt-10 w-[190px] rotate-[4deg] overflow-hidden rounded-[2rem] ring-1 ring-white/8 shadow-xl shadow-black/50 z-10 opacity-75">
                <Image src="/F2M - Store App Listing/EN/PNG/A4.png" alt="Track order" width={380} height={760} className="w-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
