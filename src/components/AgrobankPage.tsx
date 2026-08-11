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
              Farming, livestock, fishing, processing, transport, export 
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
            {/* Floating transaction card 
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

           
            <motion.div
              className="absolute -right-6 bottom-[22%] z-20 w-[168px] rounded-2xl border border-emerald-500/20 bg-gray-900/95 p-4 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
            >{/*
              <p className="mb-0.5 text-[10px] text-gray-500">Loan approved</p>
              <p className="font-heading text-[22px] font-bold text-emerald-300">€ 1,500</p>
              <p className="mt-1 text-[10px] text-gray-600">AgroCredit · 6-month</p> 
            </motion.div>
         
            </div>
         



            {/* Main phone */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-20 rounded-full bg-emerald-500/6 blur-[100px]" />
              <Image
                src="/Mockups/mockup 13.png"
                alt="AgroWallet App"
                width={760}
                height={1120}
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
   PARTNERS BAR
───────────────────────────────────────── */
function OrangeMoneyLogo() {
  return (
    <Image
      src="/partners/orange-money.png"
      alt="Orange Money"
      width={100}
      height={40}
      className="h-8 w-auto object-contain"
    />
  );
}

function MTNMoMoLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-6 items-center justify-center rounded px-1.5 bg-[#FFCC00] text-[9px] font-black text-gray-900">
        MTN
      </div>
      <span className="text-[13px] font-bold text-[#FFCC00]">MoMo</span>
    </div>
  );
}

function AfrilandLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-5 w-[3px] rounded-full bg-[#003087]" />
      <div className="leading-none">
        <span className="block text-[11px] font-bold text-gray-300">Afriland</span>
        <span className="block text-[9px] text-gray-600">First Bank</span>
      </div>
    </div>
  );
}

function KiliwaLogo() {
  return (
    <span className="font-heading text-[13px] font-bold tracking-tight text-gray-300">
      kiliwa<span className="text-emerald-400">.</span>ai
    </span>
  );
}

function PartnersBar() {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className="border-y border-gray-800/50 bg-gray-900/30 py-9">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <motion.div
          className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="shrink-0 text-[12px] text-gray-600">
            Integrated with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            <OrangeMoneyLogo />
            <MTNMoMoLogo />
            <AfrilandLogo />
            <Image
              src="/farmers/LogoSYNTHI.png"
              alt="SYNTHI-AI"
              width={90}
              height={28}
              className="h-7 w-auto object-contain grayscale brightness-150 contrast-50 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all"
            />
            <KiliwaLogo />
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
      img: 'https://res.cloudinary.com/dazduy8iw/image/upload/a_-120/e_background_removal/f_png/a_30/e_trim:30/f_auto/q_auto/Agricultural_Bank_Home_t3zpkz_b7cd57.png',
    },
    {
      num: '02',
      titleKey: 'persona.agrobank.step2.title',
      descKey: 'persona.agrobank.step2.desc',
      img: 'https://res.cloudinary.com/dazduy8iw/image/upload/q_auto/f_auto/v1781460008/Withdraw_Funds_r9onta_8ff706.png',
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
      img: 'https://res.cloudinary.com/dazduy8iw/image/upload/q_auto/f_auto/v1781460025/Escrow_Balance_bexrct_8ff706.png',
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
   AUTO MOCKUP (alternating 22 / 23)
───────────────────────────────────────── */
const APP_MOCKUPS = ['/Mockups/mockup 22.png', '/Mockups/mockup 23.png'] as const;

function AutoMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % APP_MOCKUPS.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
    >
      <div className="pointer-events-none absolute -inset-16 rounded-full bg-emerald-500/5 blur-[90px]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.02, y: -12 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="relative z-10"
        >
          <Image
            src={APP_MOCKUPS[idx]}
            alt={idx === 0 ? 'FarmsToMarket App' : 'FarmsToMarket Pro App'}
            width={1200}
            height={2400}
            className="drop-shadow-2xl"
            sizes="300px"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {APP_MOCKUPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? 'w-6 bg-emerald-500' : 'w-1.5 bg-gray-700 hover:bg-gray-500'
            }`}
            aria-label={`App ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   STORY SECTION
───────────────────────────────────────── */
const CHAPTERS = [
  {
    num: '01',
    title: 'Meet Fatima',
    caption: 'Palm oil cooperative leader · Cameroon',
    narrative:
      'Fatima runs a 12-member palm oil cooperative. Her buyers pay by cash, 30 to 45 days late. She has no bank account, no credit history, no insurance. One bad season could wipe out everything her cooperative built.',
    mockup: '/Mockups/mockup 01.png',
  },
  {
    num: '02',
    title: 'She downloads AgroBank',
    caption: '3 minutes · Phone number + national ID',
    narrative:
      'Fatima registers with her phone number and uploads her national ID. No branch visit. No paper forms. Her farm profile cooperative size, crop types, operating zone is captured in the onboarding flow.',
    mockup: '/Mockups/mockup 02.png',
  },
  {
    num: '03',
    title: 'AgroWallet is live',
    caption: 'Linked to her FarmsToMarket profile',
    narrative:
      'Her AgroWallet is active. Balance: €0 but her farm identity is now on the blockchain. She can receive payments from any buyer on FarmsToMarket, send money to suppliers, and build her financial history from the very first transaction.',
    mockup: '/Mockups/mockup 03.png',
  },
  {
    num: '04',
    title: 'First sale paid instantly',
    caption: 'Buyer pays · €840 · 2.1t palm oil',
    narrative:
      'A verified buyer on FarmsToMarket purchases 2.1 tonnes of palm oil. The moment the buyer confirms delivery, €840 hits Fatima\'s AgroWallet. Not in 45 days. Instantly. She reinvests the same afternoon.',
    mockup: '/Mockups/mockup 04.png',
  },
  {
    num: '05',
    title: 'AgroCredit unlocks',
    caption: 'Scored on her trading history · Not collateral',
    narrative:
      'After her first three trades, AgroBank\'s AI scores her creditworthiness not on collateral or a bank statement, but on her verified trading history. She applies for €1,500 to buy improved seedlings. Approved in 28 hours.',
    mockup: '/Mockups/mockup 11.png',
  },
  {
    num: '06',
    title: 'Harvest insured',
    caption: 'Satellite-indexed · Coverage: €2,400',
    narrative:
      'She activates AgroInsure for the incoming season. A satellite tracks her plantation coordinates. If drought or flooding is detected, AgroBank pays automatically no inspector, no paperwork. Coverage: €2,400 against total loss.',
    mockup: '/Mockups/mockup 12.png',
  },
  {
    num: '07',
    title: 'She trades on the exchange',
    caption: 'Real-time commodity pricing · Smart escrow',
    narrative:
      'With her financial identity established, Fatima lists her next harvest directly on the AgroBank commodity exchange. Real-time pricing. Verified buyers. The moment a deal is struck, smart contract escrow locks the funds until delivery is confirmed.',
    mockup: '/Mockups/mockup 16.png',
  },
  {
    num: '08',
    title: 'A new season begins',
    caption: 'Cooperative doubled · Credit history built',
    narrative:
      'One year later. Fatima\'s cooperative has doubled from 12 to 24 members every one of them with an AgroWallet. Her credit score is strong enough for a €12,000 equipment loan. She no longer waits 45 days. She never will again.',
    mockup: '/Mockups/mockup 13.png',
  },
] as const;

const CHAPTER_DURATION = 5000;

function StorySection() {
  const { t } = useLanguage();
  const { ref, inView } = useReveal(0.06);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % CHAPTERS.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }
    const startTime = Date.now();
    intervalRef.current = setInterval(next, CHAPTER_DURATION);
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / CHAPTER_DURATION) * 100, 100));
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [playing, active, next]);

  const chapter = CHAPTERS[active];

  return (
    <>
      {/* ── Story section ── */}
      <section
        ref={ref}
        id="story"
        className="relative border-t border-gray-800/40 bg-gray-950 bg-geo-subtle py-0 overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/4 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid min-h-screen grid-cols-1 items-center gap-0 lg:grid-cols-[420px_1fr]">

            {/* ── Left: chapters ── */}
            <motion.div
              className="flex flex-col justify-center py-20 lg:py-28 lg:pr-12"
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[3px] text-emerald-400">
                AgroBank in action
              </p>
              <h2 className="font-heading mb-3 text-[36px] font-bold leading-[1.08] tracking-[-0.5px] text-white lg:text-[42px]">
                One year inside AgroBank.
              </h2>
              <p className="mb-12 text-[15px] text-gray-500">
                Follow Fatima cooperative leader, Cameroon through her first complete financial journey.
              </p>

              {/* Chapter list */}
              <div className="relative flex flex-col gap-0">
                {/* Vertical connector */}
                <div className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px bg-gray-800" />
                {/* Active progress fill */}
                <motion.div
                  className="absolute left-[15px] top-2 w-px bg-emerald-500/60 origin-top"
                  style={{ height: `${((active) / (CHAPTERS.length - 1)) * 100}%` }}
                  transition={{ duration: 0.4, ease: EASE }}
                />

                {CHAPTERS.map((ch, i) => (
                  <button
                    key={i}
                    onClick={() => { goTo(i); setPlaying(false); }}
                    className="group relative flex items-start gap-4 py-3 text-left"
                  >
                    {/* Node */}
                    <span
                      className={`relative z-10 mt-0.5 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-300 ${
                        i === active
                          ? 'border-emerald-500 bg-emerald-500 text-black'
                          : i < active
                          ? 'border-emerald-800 bg-emerald-900/60 text-emerald-500'
                          : 'border-gray-800 bg-gray-950 text-gray-600'
                      }`}
                    >
                      {i < active ? '✓' : ch.num}
                    </span>
                    <span className={`transition-colors duration-200 ${i === active ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                      <span className="block text-[13px] font-semibold leading-tight">{ch.title}</span>
                      {i === active && (
                        <motion.span
                          className="block text-[11px] text-emerald-400 mt-0.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {ch.caption}
                        </motion.span>
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="mt-10 flex items-center gap-4">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
                  aria-label={playing ? 'Pause' : 'Play'}
                >
                  {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </button>

                {/* Progress bar */}
                <div className="flex-1 overflow-hidden rounded-full bg-gray-800 h-[3px]">
                  <motion.div
                    className="h-full bg-emerald-500 origin-left"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span className="font-mono text-[11px] text-gray-600">
                  {active + 1} / {CHAPTERS.length}
                </span>
              </div>
            </motion.div>

            {/* ── Right: mockup + narrative ── */}
            <div className="relative flex flex-col items-center justify-center border-l border-gray-800/40 py-20 lg:py-0">
              {/* Cinematic letterbox bars */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-950 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-950 to-transparent z-10" />

              {/* Phone mockup */}
              <div className="relative flex items-center justify-center w-full h-[calc(100vh-160px)] max-h-[800px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    className="relative z-0 flex h-full items-center justify-center"
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.02, y: -16 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <Image
                      src={chapter.mockup}
                      alt={chapter.title}
                      width={340}
                      height={680}
                      className="h-full w-auto max-h-[640px] object-contain drop-shadow-2xl"
                      sizes="340px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Narrative overlay */}
              <div className="absolute bottom-10 left-0 right-0 z-20 px-10 lg:px-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="rounded-2xl border border-gray-800/60 bg-gray-950/90 p-6 backdrop-blur-xl"
                  >
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[2px] text-emerald-400">
                      {chapter.caption}
                    </p>
                    <h3 className="font-heading mb-2 text-[17px] font-bold text-white">
                      {chapter.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-gray-400">
                      {chapter.narrative}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Auto Account Section ── */}
      <section className="border-t border-gray-800/40 bg-gray-950 bg-geo-subtle py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-5 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[3px] text-emerald-400">
                Automatic setup
              </p>
              <h2 className="font-heading mb-6 text-[40px] font-bold leading-[1.06] tracking-[-0.5px] text-white lg:text-[48px]">
                Your AgroBank account opens automatically.
              </h2>
              <p className="mb-4 text-[17px] leading-[1.7] text-gray-400">
                Already using <span className="font-semibold text-white">FarmsToMarket</span> or{' '}
                <span className="font-semibold text-white">FarmsToMarket Pro</span>?
                Complete your KYC · KYA · farm verification once your full AgroBank suite
                activates instantly. No separate registration. No branch visit.
              </p>
              <p className="mb-10 text-[15px] text-gray-500">
                Wallet · Credit scoring · Insurance · Commodity trading all unlocked the moment your
                profile is verified on either app.
              </p>

              {/* App download buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-gray-700/60 bg-gray-900/60 px-5 py-3.5 transition-all hover:border-emerald-500/40 hover:bg-gray-900"
                >
                  {/* Google Play icon */}
                  <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.18 23.76a2 2 0 001.06-.3l11.3-6.53-2.47-2.47-9.89 9.3z" fill="#EA4335"/>
                    <path d="M20.96 10.24L17.5 8.27l-2.76 2.76 2.76 2.76 3.49-2.01a1.36 1.36 0 000-2.54z" fill="#FBBC04"/>
                    <path d="M3.18.24a2 2 0 00-1.06 1.76v20a2 2 0 001.06 1.76l.1.06 11.2-11.2v-.26L3.28.18l-.1.06z" fill="#4285F4"/>
                    <path d="M14.48 12l2.26 2.26-11.56 6.8a2 2 0 01-2-.1L14.48 12z" fill="#34A853"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-gray-500">Get it on</span>
                    <span className="block text-[13px] font-semibold text-white">FarmsToMarket</span>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2markets_agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-gray-700/60 bg-gray-900/60 px-5 py-3.5 transition-all hover:border-emerald-500/40 hover:bg-gray-900"
                >
                  <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.18 23.76a2 2 0 001.06-.3l11.3-6.53-2.47-2.47-9.89 9.3z" fill="#EA4335"/>
                    <path d="M20.96 10.24L17.5 8.27l-2.76 2.76 2.76 2.76 3.49-2.01a1.36 1.36 0 000-2.54z" fill="#FBBC04"/>
                    <path d="M3.18.24a2 2 0 00-1.06 1.76v20a2 2 0 001.06 1.76l.1.06 11.2-11.2v-.26L3.28.18l-.1.06z" fill="#4285F4"/>
                    <path d="M14.48 12l2.26 2.26-11.56 6.8a2 2 0 01-2-.1L14.48 12z" fill="#34A853"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-gray-500">Get it on</span>
                    <span className="block text-[13px] font-semibold text-white">FarmsToMarket Pro</span>
                  </div>
                </a>
              </div>

              <p className="mt-6 text-[11px] text-gray-700">
                Requires: KYC · KYA · Farm / Business verification · Minimum 1 completed profile field
              </p>
            </motion.div>

            {/* Mockups */}
            <AutoMockup />
          </div>
        </div>
      </section>

      {/* ── Final CTA strip ── */}
      <section id="open" className="relative overflow-hidden bg-emerald-500 px-5 py-20 text-center lg:px-10 lg:py-24">
        <div className="absolute inset-0 bg-geo opacity-[0.06]" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-heading mb-5 text-[36px] font-bold leading-[1.05] tracking-[-0.5px] text-white lg:text-[44px]">
            {t('persona.agrobank.cta.title')}
          </h2>
          <p className="mb-8 text-[16px] leading-relaxed text-emerald-100/75">
            {t('persona.agrobank.cta.desc')}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cta inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-emerald-700 transition-all hover:bg-gray-100 hover:shadow-2xl"
            >
              {t('persona.agrobank.cta.primary')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:hello@farmstomarket.io`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-[13px] font-medium text-white transition-all hover:bg-white/10"
            >
              {t('persona.agrobank.cta.secondary')}
            </a>
          </div>
        </div>
      </section>

      <div className="bg-gray-950 py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-700 transition-colors hover:text-emerald-400"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to FarmsToMarket
        </Link>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function AgrobankPage() {
  return (
    <div className="min-h-screen bg-gray-950">

      <Hero />
      <PartnersBar />

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
        desc="AgroBank is a fully licensed digital bank serving the entire agro-pastoral sector farmers, breeders, fishermen, processors, traders, cooperatives and agri-SMEs. One account. Every financial service. On your phone."
        bullets={[
          'Personal & business current accounts (IBAN)',
          'Interest-bearing savings accounts up to 7% p.a.',
          'Prepaid Visa card physical or virtual',
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
        desc="From the field to the processor, from the breeder to the butcher, from the fishing cooperative to the export dock AgroBank moves money instantly at every step of the agro-pastoral value chain, online or fully offline."
        bullets={[
          'Peer-to-peer transfers in under 5 seconds',
          'QR & NFC payments works offline in rural zones',
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
        label="AgroCredit Agro-Pastoral Finance"
        headline={
          <>
            Credit built around{' '}
            <span className="text-gradient">your production cycle.</span>
          </>
        }
        desc="Whether you grow cassava, raise cattle, run a fish farm or operate a processing unit AgroCredit finances every activity in the agro-pastoral chain with repayment schedules that follow your real cash flow, not a bank calendar."
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
        desc="From crop disease to livestock mortality, from drought to flooding AgroInsure covers the full agro-pastoral spectrum with satellite and IoT-indexed automatic detection and payout. Paired with a real-time commodity exchange for grains, livestock, fish and processed goods."
        bullets={[
          'Crop, livestock and aquaculture insurance coverage',
          'Satellite + IoT-indexed automatic payout within 5 days',
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
      <StorySection />
    </div>
  );
}
