'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const SOLUTIONS = [
  {
    index: '01',
    tab: 'Producers',
    sub: 'Smallholders & Cooperatives',
    headline: 'Turn your harvest into guaranteed income.',
    description:
      'Stop losing 30–40% of your revenue to intermediaries. FarmsToMarket connects you directly to thousands of verified buyers across 15+ countries, delivers AI-powered pricing guidance in real time, and triggers instant mobile payment the moment your produce is validated — no middlemen, no delays, no price manipulation. You grow it. You set the price. You get paid.',
    ctaLabel: 'Agri solutions for Producers',
    ctaHref: '/producer',
    bg: '/farmers/2.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/A1.png',
    stat: '+45%',
    statLabel: 'average revenue increase for registered producers in year one',
    quote: 'I doubled my income in 8 months. The platform shows me real demand before I even harvest — I now grow exactly what sells.',
    quoteAuthor: 'Njikam Pierre',
    quoteRole: 'Maize Farmer — West Cameroon',
    quoteAvatar: '/farmers/2.jpeg',
    caseStudyLink: 'See how Pierre grew his income →',
  },
  {
    index: '02',
    tab: 'Buyers',
    sub: 'Distributors & Wholesalers',
    headline: 'Source with confidence. Pay securely. Receive reliably.',
    description:
      'Eliminate supply uncertainty and eliminate overpayment for good. Connect directly to thousands of verified producers, lock in prices before harvest through forward contracts, and receive fresh produce with full farm-to-table traceability. Our escrow payment system protects every transaction: 45% on order, 55% on delivery — zero fraud, zero dispute, zero delay.',
    ctaLabel: 'Procurement solutions for Buyers',
    ctaHref: '/customer',
    bg: '/farmers/cassava.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/A2.png',
    stat: '−25%',
    statLabel: 'average reduction in procurement costs within 90 days',
    quote: 'I used to overpay and still receive substandard stock. Now I see farm photos, grades and live prices before committing a single franc.',
    quoteAuthor: 'Mireille Fouda',
    quoteRole: 'Wholesale Distributor — Douala',
    quoteAvatar: '/farmers/cassava.jpeg',
    caseStudyLink: 'See how Mireille cut costs →',
  },
  {
    index: '03',
    tab: 'Transporters',
    sub: 'Carriers & Logistics Providers',
    headline: 'More loads. Fairer rates. On time, every time.',
    description:
      'Fill your truck on every single run and eliminate dead miles for good. Our intelligent load-matching engine pairs you with verified agricultural shipments nearby in real time — routes optimised automatically, rates pre-agreed before departure, payment guaranteed upon delivery confirmation. No more chasing clients. No more disputes. Just reliable income, every kilometre.',
    ctaLabel: 'Logistics solutions for Transporters',
    ctaHref: '/transporter',
    bg: '/farmers/farms2.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/A3.png',
    stat: '98%',
    statLabel: 'on-time delivery rate across all network routes',
    quote: 'I used to drive half-empty back from the north. Now I get a matched load before I even unload the first one.',
    quoteAuthor: 'Alain Biyong',
    quoteRole: 'Independent Carrier — Bafoussam',
    quoteAvatar: '/farmers/farms2.jpeg',
    caseStudyLink: 'See how Alain fills every run →',
  },
  {
    index: '04',
    tab: 'AgroBank',
    sub: 'Financial Services & Microfinance',
    headline: 'Agricultural finance, finally built for the field.',
    description:
      'Unlock credit for smallholder farmers who have never held a bank account. Our mobile-first lending model uses verified transaction history and crop performance data to deliver instant microloans, harvest insurance, and savings products — directly on the handset, in the field, at the moment it matters. Financial inclusion that fuels the entire value chain, from seed to shelf.',
    ctaLabel: 'Financial solutions for AgroBank',
    ctaHref: '/agrobank',
    bg: '/farmers/8.jpg',
    screen: '/F2M - Store App Listing/EN/PNG/A4.png',
    stat: '72.9K+',
    statLabel: 'transactions processed with bank-level encryption',
    quote: 'My cooperative received a microloan in 48 hours using only our harvest history on the platform. No collateral. No branch visit.',
    quoteAuthor: 'Emmanuel Nkwenti',
    quoteRole: 'Cooperative Leader — Yaoundé',
    quoteAvatar: '/farmers/8.jpg',
    caseStudyLink: 'See how AgroBank unlocks credit →',
  },
] as const;

export default function VideoShowcase() {
  const { ref, isVisible } = useAnimateOnScroll(0.05);
  const [active, setActive] = useState(0);

  const sol = SOLUTIONS[active];

  const prev = () => setActive((a) => (a - 1 + SOLUTIONS.length) % SOLUTIONS.length);
  const next = () => setActive((a) => (a + 1) % SOLUTIONS.length);

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative overflow-hidden bg-gray-950 bg-geo-subtle py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2 className="font-heading text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            High-impact solutions,{' '}
            <span className="text-gradient">powered by African agriculture.</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-0 lg:flex-row"
          style={{ minHeight: 560 }}
          initial={{ opacity: 0, y: 36 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
        >
          <nav
            aria-label="Solution sectors"
            className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:overflow-visible lg:w-[236px] lg:shrink-0 lg:border-r lg:border-gray-800/70"
          >
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.tab}
                onClick={() => setActive(i)}
                className={`relative flex min-w-[140px] flex-col justify-center gap-0.5 px-5 py-4 text-left transition-colors duration-200 lg:min-w-0 lg:flex-1 lg:px-6 lg:py-0 ${
                  i === active ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                }`}
              >
                {i === active && (
                  <motion.span
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-0 hidden h-full w-[3px] rounded-r-full bg-emerald-500 lg:block"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[2px] transition-colors duration-200 ${
                    i === active ? 'text-emerald-400' : 'text-gray-600'
                  }`}
                >
                  {s.index}
                </span>
                <span
                  className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                    i === active ? 'text-white' : 'text-gray-500 group-hover:text-gray-400'
                  }`}
                >
                  {s.tab}
                </span>
                <span
                  className={`hidden text-[11px] leading-tight transition-colors duration-200 lg:block ${
                    i === active ? 'text-gray-400' : 'text-gray-700'
                  }`}
                >
                  {s.sub}
                </span>
              </button>
            ))}
          </nav>

          <div className="relative flex min-h-[540px] flex-1 overflow-hidden lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.38, ease: EASE }}
                className="absolute inset-0 flex"
              >
                <div className="flex w-[380px] shrink-0 flex-col justify-center px-8 py-10 xl:px-12 xl:w-[420px]">
                  <span className="mb-5 text-[11px] font-semibold uppercase tracking-[2.5px] text-emerald-400">
                    {sol.sub}
                  </span>

                  <h3 className="font-heading mb-5 text-[28px] font-bold leading-[1.15] text-white xl:text-[32px]">
                    {sol.headline}
                  </h3>

                  <p className="mb-7 text-[15px] leading-[1.7] text-gray-400">
                    {sol.description}
                  </p>

                  <Link
                    href={sol.ctaHref}
                    className="group mb-10 inline-flex items-center gap-1.5 text-[14px] font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    {sol.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
                    <div className="mb-4 flex items-end gap-3">
                      <span className="font-heading text-[38px] font-bold leading-none text-gradient">
                        {sol.stat}
                      </span>
                      <span className="pb-1 text-[13px] leading-snug text-gray-400">
                        {sol.statLabel}
                      </span>
                    </div>

                    <p className="mb-4 text-[13px] italic leading-relaxed text-gray-400">
                      &ldquo;{sol.quote}&rdquo;
                    </p>

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-700">
                          <Image
                            src={sol.quoteAvatar}
                            alt={sol.quoteAuthor}
                            fill
                            className="object-cover"
                            sizes="32px"
                          />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-white">{sol.quoteAuthor}</div>
                          <div className="text-[11px] text-gray-500">{sol.quoteRole}</div>
                        </div>
                      </div>
                      <Link
                        href={sol.ctaHref}
                        className="shrink-0 text-[12px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        {sol.caseStudyLink}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`bg-${active}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={sol.bg}
                        alt={sol.tab}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 700px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/10 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`screen-${active}`}
                      initial={{ opacity: 0, y: 28, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                      className="absolute bottom-8 right-6 z-10 pointer-events-none"
                    >
                      <Image
                        src={sol.screen}
                        alt={`${sol.tab} app`}
                        width={190}
                        height={380}
                        className="object-contain drop-shadow-2xl"
                        sizes="190px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {SOLUTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Solution ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'h-2 w-7 bg-emerald-500'
                    : 'h-2 w-2 bg-gray-700 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
