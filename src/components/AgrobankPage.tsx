'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, ChevronLeft, Star, Pause, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Geo pattern mask */}
      <div className="absolute inset-0 bg-gray-950 bg-geo-subtle" />
      {/* Radial glow bottom-right */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[640px] w-[640px] translate-x-1/3 translate-y-1/4 rounded-full bg-emerald-500/6 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-10">
        <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-8 py-20 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex flex-col">
            {/* Headline */}
            <motion.h1
              className="font-heading mb-6 text-[52px] font-bold leading-[1.04] tracking-[-1.5px] text-white lg:text-[62px] xl:text-[72px]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            >
              The bank for{' '}
              <span className="text-gradient">every link in the agri-chain.</span>
            </motion.h1>

            {/* Desc */}
            <motion.p
              className="mb-10 max-w-md text-[17px] leading-[1.7] text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            >
              Farming, livestock, fishing, processing, transport, export —
              AgroBank provides every financial service across the entire
              agro-pastoral value chain. A fully licensed digital bank,
              natively connected to the FarmsToMarket ecosystem.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
            >
              <a
                href="#open"
                className="font-cta inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-black transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20"
              >
                Open your account
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-gray-400 transition-colors hover:text-white"
              >
                How it works <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.p
              className="mt-7 text-xs text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              No branch visit required · Starts in 2 minutes · Available in 15 countries
            </motion.p>
          </div>

          {/* ── Right: phone mockup ── */}
          <motion.div
            className="relative hidden items-center justify-center lg:flex"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          >
            {/* Floating transaction card */}
            <motion.div
              className="absolute -left-8 top-[18%] z-20 w-[186px] rounded-2xl border border-gray-800/80 bg-gray-900/95 p-4 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
            >
              <p className="mb-0.5 text-[10px] text-gray-500">Payment received</p>
              <p className="font-heading text-[22px] font-bold text-emerald-400">+ €840.00</p>
              <p className="mt-1 text-[10px] text-gray-600">Maize · 2.1t · Buyer confirmed</p>
            </motion.div>

            {/* Floating loan card */}
            <motion.div
              className="absolute -right-6 bottom-[22%] z-20 w-[168px] rounded-2xl border border-emerald-500/20 bg-gray-900/95 p-4 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
            >
              <p className="mb-0.5 text-[10px] text-gray-500">Loan approved</p>
              <p className="font-heading text-[22px] font-bold text-emerald-300">€ 1,500</p>
              <p className="mt-1 text-[10px] text-gray-600">AgroCredit · 6-month</p>
            </motion.div>

            {/* Main phone */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-20 rounded-full bg-emerald-500/6 blur-[100px]" />
              <Image
                src="/Mockups/mockup 03.png"
                alt="AgroWallet App"
                width={360}
                height={720}
                className="relative z-10 drop-shadow-2xl"
                sizes="360px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   LOGO BAR
───────────────────────────────────────── */
function LogoBar() {
  const { ref, inView } = useReveal();
  const logos = ['airbnb', 'amazon', 'facebook', 'hubspot', 'cannon'];
  return (
    <div ref={ref} className="border-y border-gray-800/50 bg-gray-900/30 py-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <motion.div
          className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="shrink-0 text-sm text-gray-600">
            Powering agriculture across{' '}
            <span className="font-semibold text-gray-400">15 countries</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {logos.map((l) => (
              <Image
                key={l}
                src={`/images/${l}.png`}
                alt={l}
                width={80}
                height={24}
                className="h-5 w-auto object-contain opacity-25 grayscale transition-opacity hover:opacity-50"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PRODUCT SECTION (alternating)
───────────────────────────────────────── */
interface ProductSectionProps {
  id: string;
  label: string;
  headline: React.ReactNode;
  desc: string;
  bullets: string[];
  ctaLabel: string;
  mockup: string;
  mockupAlt: string;
  reverse?: boolean;
}

function ProductSection({
  id,
  label,
  headline,
  desc,
  bullets,
  ctaLabel,
  mockup,
  mockupAlt,
  reverse = false,
}: ProductSectionProps) {
  const { ref, inView } = useReveal(0.1);

  const textCol = (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: reverse ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
    >
      {/* Label */}
      <span className="mb-5 font-mono text-[10px] uppercase tracking-[3px] text-emerald-400">
        {label}
      </span>

      {/* Headline */}
      <h2 className="font-heading mb-5 text-[38px] font-bold leading-[1.08] tracking-[-0.5px] text-white lg:text-[44px]">
        {headline}
      </h2>

      {/* Desc */}
      <p className="mb-8 text-[17px] leading-[1.7] text-gray-400">{desc}</p>

      {/* Bullets */}
      <ul className="mb-10 space-y-3">
        {bullets.map((b, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 text-[15px] text-gray-300"
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.07, ease: EASE }}
          >
            <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
              <Check className="h-2.5 w-2.5 text-emerald-400" />
            </span>
            {b}
          </motion.li>
        ))}
      </ul>

      {/* CTA text-link */}
      <a
        href="#open"
        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-emerald-400 transition-opacity hover:opacity-70"
      >
        {ctaLabel} <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );

  const imageCol = (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: reverse ? 32 : -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {/* Glow behind */}
      <div className="pointer-events-none absolute -inset-16 rounded-full bg-emerald-500/4 blur-[80px]" />
      <div className="relative overflow-hidden rounded-[28px] border border-gray-800/50 bg-gray-900/50 bg-geo-subtle">
        <Image
          src={mockup}
          alt={mockupAlt}
          width={560}
          height={700}
          className="w-full object-contain"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </div>
    </motion.div>
  );

  return (
    <section id={id} ref={ref} className="border-t border-gray-800/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {reverse ? (
            <>
              {imageCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────── */
function HowItWorks() {
  const { t } = useLanguage();
  const { ref, inView } = useReveal(0.08);

  const steps = [
    {
      num: '01',
      titleKey: 'persona.agrobank.step1.title',
      descKey: 'persona.agrobank.step1.desc',
      img: '/Mockups/mockup 03.png',
    },
    {
      num: '02',
      titleKey: 'persona.agrobank.step2.title',
      descKey: 'persona.agrobank.step2.desc',
      img: '/Mockups/mockup 11.png',
    },
    {
      num: '03',
      titleKey: 'persona.agrobank.step3.title',
      descKey: 'persona.agrobank.step3.desc',
      img: '/Mockups/mockup 06.png',
    },
    {
      num: '04',
      titleKey: 'persona.agrobank.step4.title',
      descKey: 'persona.agrobank.step4.desc',
      img: '/Mockups/mockup 16.png',
    },
  ] as const;

  return (
    <section id="how-it-works" ref={ref} className="border-t border-gray-800/40 bg-gray-900/25 bg-geo-subtle py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="mb-4 inline-block font-mono text-[10px] uppercase tracking-[3px] text-emerald-400">
            Getting started
          </span>
          <h2 className="font-heading text-[44px] font-bold leading-[1.06] tracking-[-0.5px] text-white lg:text-[52px]">
            Up and running in minutes.
          </h2>
          <p className="mt-5 text-[17px] text-gray-400">
            No paperwork. No queues. Just your phone and your farm identity.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ num, titleKey, descKey, img }, i) => (
            <motion.div
              key={i}
              className="flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
            >
              {/* Mockup thumbnail */}
              <div className="mb-6 overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/60">
                <Image
                  src={img}
                  alt={t(titleKey)}
                  width={280}
                  height={350}
                  className="w-full object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                />
              </div>
              <span className="mb-3 font-mono text-[11px] text-emerald-500">{num}</span>
              <h3 className="font-heading mb-2 text-[18px] font-bold text-white">{t(titleKey)}</h3>
              <p className="text-[14px] leading-relaxed text-gray-400">{t(descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIAL
───────────────────────────────────────── */
function Testimonial() {
  const { t } = useLanguage();
  const { ref, inView } = useReveal(0.15);

  return (
    <section ref={ref} className="border-t border-gray-800/40 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <motion.div
          className="rounded-[28px] border border-gray-800/50 bg-gray-900/40 bg-geo-subtle p-10 lg:p-16"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE }}
        >
          {/* Stars */}
          <div className="mb-7 flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="mb-10 text-[20px] leading-[1.6] text-gray-200 lg:text-[24px]">
            &ldquo;{t('persona.agrobank.testimonial.quote')}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-800">
              <Image
                src="/farmers/5.jpeg"
                alt={t('persona.agrobank.testimonial.author')}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-semibold text-white">{t('persona.agrobank.testimonial.author')}</p>
              <p className="text-sm text-gray-500">{t('persona.agrobank.testimonial.role')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FINAL CTA  (Paystack-style: full-width colored strip)
───────────────────────────────────────── */
function FinalCTA() {
  const { t } = useLanguage();
  const { ref, inView } = useReveal(0.15);

  return (
    <section ref={ref} id="open" className="border-t border-gray-800/40 bg-gray-950 pb-28 pt-0">
      <motion.div
        className="relative overflow-hidden bg-emerald-500 px-5 py-24 text-center lg:px-10 lg:py-32"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {/* Geo pattern overlay */}
        <div className="absolute inset-0 bg-geo opacity-[0.06]" />

        <div className="relative mx-auto max-w-2xl">
          <motion.span
            className="mb-4 inline-block font-mono text-[10px] uppercase tracking-[3px] text-emerald-900/50"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start today
          </motion.span>

          <motion.h2
            className="font-heading mb-5 text-[44px] font-bold leading-[1.05] tracking-[-1px] text-white lg:text-[56px]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            {t('persona.agrobank.cta.title')}
          </motion.h2>

          <motion.p
            className="mb-10 text-[17px] leading-relaxed text-emerald-100/75"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          >
            {t('persona.agrobank.cta.desc')}
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            <a
              href="#signup"
              className="font-cta inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-emerald-700 transition-all hover:bg-gray-100 hover:shadow-2xl"
            >
              {t('persona.agrobank.cta.primary')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-[13px] font-medium text-white transition-all hover:bg-white/10"
            >
              {t('persona.agrobank.cta.secondary')}
            </a>
          </motion.div>

          <p className="mt-8 text-xs text-emerald-900/40">
            No branch visit · No collateral · Available iOS & Android
          </p>
        </div>
      </motion.div>

      <div className="py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-700 transition-colors hover:text-emerald-400"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to FarmsToMarket
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function AgrobankPage() {
  return (
    <div className="min-h-screen bg-gray-950">

      <Hero />
      <LogoBar />

      {/* ── 1. Accounts & Cards ── */}
      <ProductSection
        id="banking"
        label="Accounts & Cards"
        headline={
          <>
            A real bank account,{' '}
            <span className="text-gradient">no branch required.</span>
          </>
        }
        desc="AgroBank is a fully licensed digital bank serving the entire agro-pastoral sector — farmers, breeders, fishermen, processors, traders, cooperatives and agri-SMEs. One account. Every financial service. On your phone."
        bullets={[
          'Personal & business current accounts (IBAN)',
          'Interest-bearing savings accounts up to 7% p.a.',
          'Prepaid Visa card — physical or virtual',
          'SEPA, SWIFT and mobile money transfers',
          'Multi-currency: XOF, GHS, NGN, KES, EUR',
        ]}
        ctaLabel="Open a bank account"
        mockup="/Mockups/mockup 03.png"
        mockupAlt="AgroBank accounts"
      />

      {/* ── 2. Payments ── */}
      <ProductSection
        id="payments"
        label="Payments & Transfers"
        headline={
          <>
            Instant money movement,{' '}
            <span className="text-gradient">across every link of the chain.</span>
          </>
        }
        desc="From the field to the processor, from the breeder to the butcher, from the fishing cooperative to the export dock — AgroBank moves money instantly at every step of the agro-pastoral value chain, online or fully offline."
        bullets={[
          'Peer-to-peer transfers in under 5 seconds',
          'QR & NFC payments — works offline in rural zones',
          'Mobile money interoperability (Orange, MTN, Wave, M-Pesa…)',
          'Cross-border remittances at interbank exchange rates',
          'Automatic settlement for every FarmsToMarket trade',
        ]}
        ctaLabel="Explore payments"
        mockup="/Mockups/mockup 11.png"
        mockupAlt="AgroBank payments"
        reverse
      />

      {/* ── 3. AgroCredit ── */}
      <ProductSection
        id="agrocredit"
        label="AgroCredit — Agro-Pastoral Finance"
        headline={
          <>
            Credit built around{' '}
            <span className="text-gradient">your production cycle.</span>
          </>
        }
        desc="Whether you grow cassava, raise cattle, run a fish farm or operate a processing unit — AgroCredit finances every activity in the agro-pastoral chain with repayment schedules that follow your real cash flow, not a bank calendar."
        bullets={[
          'Micro-loans from €50 to SME financing up to €500K',
          'Scored on your production & trading history, not collateral',
          'Livestock & aquaculture-specific loan products',
          'Supply chain financing for processors and exporters',
          '0% interest for first-time borrowers under €200',
        ]}
        ctaLabel="Apply for AgroCredit"
        mockup="/Mockups/mockup 06.png"
        mockupAlt="AgroCredit"
      />

      {/* ── 4. Insurance & Trading ── */}
      <ProductSection
        id="agroinsure"
        label="AgroInsure & Commodity Exchange"
        headline={
          <>
            Protect every asset.{' '}
            <span className="text-gradient">Trade every commodity.</span>
          </>
        }
        desc="From crop disease to livestock mortality, from drought to flooding — AgroInsure covers the full agro-pastoral spectrum with satellite and IoT-indexed automatic detection and payout. Paired with a real-time commodity exchange for grains, livestock, fish and processed goods."
        bullets={[
          'Crop, livestock and aquaculture insurance coverage',
          'Satellite + IoT-indexed — automatic payout within 5 days',
          'Real-time commodity exchange: grains, livestock, fish, inputs',
          'Automated escrow & smart contracts on every trade',
          'Export documentation and trade finance support',
        ]}
        ctaLabel="Discover AgroInsure"
        mockup="/Mockups/mockup 16.png"
        mockupAlt="AgroInsure and trading"
        reverse
      />

      <HowItWorks />
      <Testimonial />
      <FinalCTA />
    </div>
  );
}
