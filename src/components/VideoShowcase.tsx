'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const SOLUTIONS = [
  {
    index: '01',
    tab: 'Producers',
    sub: 'Smallholders & Cooperatives',
    headline: 'Turn your harvest into guaranteed income.',
    description:
      'FarmsToMarket eliminates every middleman between your field and your buyer. List your produce in under two minutes, receive real bids in real time, and collect payment directly to your mobile wallet the moment your delivery is confirmed.',
    ctaLabel: 'Explore Producer features',
    ctaHref: '/producer',
    bg: '/farmers/2.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/A1.png',
    features: [
      'Smart Harvest Calendar AI scheduling driven by soil data and live market demand',
      'Direct Buyer Marketplace Post listings in <2 min, receive competitive bids instantly',
      'Mobile Price Alerts Daily fair-market prices pushed to your handset before harvest',
      'Instant Mobile Payment XAF transferred within 24h of validated delivery',
    ],
    metric: '50K+',
    metricLabel: 'verified buyers connected to your listings across 15+ countries',
  },
  {
    index: '02',
    tab: 'Buyers',
    sub: 'Distributors & Wholesalers',
    headline: 'Source with confidence. Pay securely. Receive reliably.',
    description:
      'Replace fragile supplier networks with a single, verified platform. Browse thousands of graded producer profiles, lock in volume and price before harvest through digital forward contracts, and let our escrow engine protect every franc you commit.',
    ctaLabel: 'Explore Buyer features',
    ctaHref: '/customer',
    bg: '/farmers/cassava.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/A2.png',
    features: [
      'Verified Producer Profiles Ratings, traceability data and geo-location per supplier',
      'Forward Contracting Secure volume and price weeks before harvest',
      'Escrow Protection 45% on order, 55% on delivery. Funds held until you validate',
      'Live Inventory Feed Real-time stock levels from producers in your target region',
    ],
    metric: '−25%',
    metricLabel: 'average reduction in procurement cost achieved within 90 days',
  },
  {
    index: '03',
    tab: 'Transporters',
    sub: 'Carriers & Logistics Providers',
    headline: 'More loads. Fairer rates. Zero dead miles.',
    description:
      'Stop driving empty. Our intelligent load-matching engine scans nearby agricultural cargo in real time, pairs you with a verified shipment, pre-agrees the rate before departure, and releases payment the second a digital delivery confirmation is signed.',
    ctaLabel: 'Explore Transporter features',
    ctaHref: '/transporter',
    bg: '/farmers/farms2.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/A3.png',
    features: [
      'Smart Load Matching Paired with agricultural cargo nearby in under 5 minutes',
      'Route Optimisation GPS routing with live traffic and road condition alerts',
      'Digital Waybill Paperless proof of delivery accepted across the entire network',
      'Guaranteed Payout Payment auto-released upon digital delivery confirmation',
    ],
    metric: '98%',
    metricLabel: 'on-time delivery rate logged across all active routes on the network',
  },
  {
    index: '04',
    tab: 'AgroBank',
    sub: 'Microfinance & Agricultural Credit',
    headline: 'Agricultural finance, finally built for the field.',
    description:
      'Traditional banks exclude the 80% of African farmers who lack collateral or a credit record. AgroBank uses verified platform transaction history and crop performance data to score creditworthiness and disburse funds directly to a mobile wallet within 48 hours.',
    ctaLabel: 'Explore AgroBank features',
    ctaHref: '/agrobank',
    bg: '/farmers/8.jpg',
    screen: '/F2M - Store App Listing/EN/PNG/A4.png',
    features: [
      'Mobile Credit Scoring Creditworthiness assessed on transaction history, not collateral',
      'Instant Microloan Disbursement Approved and sent to mobile wallet in 48h',
      'Harvest Insurance Per-crop coverage against drought, flooding and price collapse',
      'Digital Savings Wallet Automated savings triggered on every completed transaction',
    ],
    metric: '72.9K+',
    metricLabel: 'transactions processed with bank-level encryption and agricultural compliance',
  },
  {
    index: '05',
    tab: 'Marketplace',
    sub: 'Trading Platform & Commodity Exchange',
    headline: 'The African agricultural marketplace, live and transparent.',
    description:
      'A single digital floor where producers post offers, buyers place orders, and prices are set by real supply and demand not by speculation. From cassava and cocoa to livestock and palm oil, every commodity category is live, graded, and traceable to source.',
    ctaLabel: 'Explore Marketplace features',
    ctaHref: '/customer',
    bg: '/farmers/poivrons.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/A5.png',
    features: [
      'Live Commodity Prices Real-time price feed across 40+ agricultural categories',
      'Bulk Order Management Multi-supplier RFQ tools for volume procurement',
      'Export Documentation Auto-generated phytosanitary certificates and customs forms',
      'Trade Finance Tools Invoice factoring and buyer credit for verified traders',
    ],
    metric: '40+',
    metricLabel: 'commodity categories actively traded on the platform every day',
  },
  {
    index: '06',
    tab: 'AI & Analytics',
    sub: 'Intelligence Layer & Decision Tools',
    headline: 'Know what to grow. Know when. Know the price.',
    description:
      'Our intelligence layer processes satellite imagery, soil sensor data, historical price curves and live order books to give every actor on the platform a decision edge. Farmers plan harvests. Buyers hedge supply. Lenders score risk. All from a single dashboard.',
    ctaLabel: 'Explore Analytics features',
    ctaHref: '/producer',
    bg: '/farmers/cassava1.jpeg',
    screen: '/F2M - Store App Listing/EN/PNG/B1.png',
    features: [
      'Yield Forecasting Predict harvest volume 6 weeks ahead with satellite + soil data',
      'Demand Prediction Identify under-supplied crops in your target market before planting',
      'Price Trend Analysis 12-month commodity models by region, variety and grade',
      'Carbon Dashboard Track and certify your agricultural carbon sequestration per hectare',
    ],
    metric: '98.2%',
    metricLabel: 'forecast accuracy on primary commodity yield models across monitored regions',
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
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2 className="font-heading text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            We are building the future of{' '}
            <span className="text-gradient">African agriculture..</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row"
          style={{ minHeight: 600 }}
          initial={{ opacity: 0, y: 36 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
        >
          <nav
            aria-label="Solution sectors"
            className="flex shrink-0 flex-row gap-0 overflow-x-auto border-b border-gray-800/70 lg:w-[210px] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:border-gray-800/70"
          >
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.tab}
                onClick={() => setActive(i)}
                className={`relative flex min-w-[120px] flex-col justify-center gap-0.5 px-4 py-3 text-left transition-colors duration-200 lg:min-w-0 lg:flex-1 lg:px-5 lg:py-0 ${
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
                  className={`font-mono text-[10px] font-semibold uppercase tracking-[2px] transition-colors duration-200 ${
                    i === active ? 'text-emerald-400' : 'text-gray-700'
                  }`}
                >
                  {s.index}
                </span>
                <span
                  className={`text-[13px] font-semibold leading-snug transition-colors duration-200 ${
                    i === active ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {s.tab}
                </span>
              </button>
            ))}
          </nav>

          <div className="relative flex min-h-[580px] flex-1 overflow-hidden lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.36, ease: EASE }}
                className="absolute inset-0 flex"
              >
                <div className="flex w-[460px] shrink-0 flex-col justify-start overflow-y-auto bg-gray-950 px-8 py-10 xl:w-[520px] xl:px-12">
                  <span className="mb-4 text-[11px] font-semibold uppercase tracking-[2.5px] text-emerald-400">
                    {sol.sub}
                  </span>

                  <h3 className="font-heading mb-4 text-[28px] font-bold leading-[1.14] text-white xl:text-[34px]">
                    {sol.headline}
                  </h3>

                  <p className="mb-6 text-[15px] leading-[1.72] text-gray-400">
                    {sol.description}
                  </p>

                  <Link
                    href={sol.ctaHref}
                    className="group mb-8 inline-flex items-center gap-1.5 text-[14px] font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    {sol.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                    <div className="mb-4 flex items-end gap-3 border-b border-gray-800 pb-4">
                      <span className="font-heading text-[36px] font-bold leading-none text-gradient">
                        {sol.metric}
                      </span>
                      <span className="pb-0.5 text-[12px] leading-snug text-gray-500">
                        {sol.metricLabel}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {sol.features.map((f, i) => {
                        const [title, ...rest] = f.split(' ');
                        return (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                              <Check className="h-2.5 w-2.5 text-emerald-400" strokeWidth={3} />
                            </span>
                            <span className="text-[13px] leading-snug text-gray-300">
                              <span className="font-semibold text-white">{title}</span>
                              {rest.length > 0 && (
                                <span className="text-gray-500"> {rest.join(' ')}</span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`bg-${active}`}
                      initial={{ opacity: 0, scale: 1.04 }}
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
                        sizes="600px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
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
                        width={185}
                        height={370}
                        className="object-contain drop-shadow-2xl"
                        sizes="185px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-5 flex items-center justify-between">
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
