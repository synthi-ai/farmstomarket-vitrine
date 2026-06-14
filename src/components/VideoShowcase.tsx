'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface Feature { title: string; desc: string }
interface Solution {
  index: string; tab: string; sub: string; headline: string;
  description: string; ctaLabel: string; ctaHref: string;
  bg: string; screen: string; metric: string; metricLabel: string;
  features: Feature[];
}

const SOLUTIONS: Solution[] = [
  {
    index: '01', tab: 'Producers', sub: 'Smallholders and Cooperatives',
    headline: 'Turn your harvest into guaranteed income.',
    description: 'FarmsToMarket eliminates every middleman between your field and your buyer. List your produce in under two minutes, receive real bids in real time, and collect payment directly to your mobile wallet the moment your delivery is confirmed.',
    ctaLabel: 'Explore Producer solutions', ctaHref: '/producer',
    bg: '/farmers/2.jpeg', screen: '/F2M - Store App Listing/EN/PNG/A1.png',
    metric: '50K+', metricLabel: 'verified buyers connected across 15+ countries',
    features: [
      { title: 'Smart Harvest Calendar', desc: 'AI scheduling driven by soil data and live market demand' },
      { title: 'Direct Buyer Marketplace', desc: 'Post listings in under 2 minutes, receive competitive bids instantly' },
      { title: 'Mobile Price Alerts', desc: 'Daily fair-market prices pushed to your handset before harvest' },
      { title: 'Instant Mobile Payment', desc: 'XAF transferred within 24h of validated delivery confirmation' },
    ],
  },
  {
    index: '02', tab: 'Buyers', sub: 'Distributors and Wholesalers',
    headline: 'Source with confidence. Pay securely. Receive reliably.',
    description: 'Replace fragile supplier networks with a single verified platform. Browse thousands of graded producer profiles, lock in volume and price before harvest through digital forward contracts, and let our escrow engine protect every franc you commit.',
    ctaLabel: 'Explore Buyer solutions', ctaHref: '/customer',
    bg: '/farmers/cassava.jpeg', screen: '/F2M - Store App Listing/EN/PNG/A2.png',
    metric: '25%', metricLabel: 'average reduction in procurement cost within 90 days',
    features: [
      { title: 'Verified Producer Profiles', desc: 'Ratings, traceability data and geo-location per supplier' },
      { title: 'Forward Contracting', desc: 'Secure volume and price weeks before harvest' },
      { title: 'Escrow Protection', desc: '45% on order, 55% on delivery, funds held until you validate' },
      { title: 'Live Inventory Feed', desc: 'Real-time stock levels from producers in your target region' },
    ],
  },
  {
    index: '03', tab: 'Transporters', sub: 'Carriers and Logistics Providers',
    headline: 'More loads. Fairer rates. Zero dead miles.',
    description: 'Stop driving empty. Our intelligent load-matching engine scans nearby agricultural cargo in real time, pairs you with a verified shipment, pre-agrees the rate before departure, and releases payment the second a digital delivery confirmation is signed.',
    ctaLabel: 'Explore Transporter solutions', ctaHref: '/transporter',
    bg: '/farmers/farms2.jpeg', screen: '/F2M - Store App Listing/EN/PNG/A3.png',
    metric: '98%', metricLabel: 'on-time delivery rate across all active routes',
    features: [
      { title: 'Smart Load Matching', desc: 'Paired with agricultural cargo nearby in under 5 minutes' },
      { title: 'Route Optimisation', desc: 'GPS routing with live traffic and road condition alerts' },
      { title: 'Digital Waybill', desc: 'Paperless proof of delivery accepted across the entire network' },
      { title: 'Guaranteed Payout', desc: 'Payment auto-released upon digital delivery confirmation' },
    ],
  },
  {
    index: '04', tab: 'AgroBank', sub: 'Microfinance and Agricultural Credit',
    headline: 'Agricultural finance, finally built for the field.',
    description: 'Traditional banks exclude the 80% of African farmers who lack collateral or a credit record. AgroBank uses verified transaction history and crop data to score creditworthiness and disburse funds directly to a mobile wallet within 48 hours.',
    ctaLabel: 'Explore AgroBank solutions', ctaHref: '/agrobank',
    bg: '/farmers/8.jpg', screen: '/F2M - Store App Listing/EN/PNG/A4.png',
    metric: '72.9K+', metricLabel: 'transactions processed securely on the network',
    features: [
      { title: 'Mobile Credit Scoring', desc: 'Creditworthiness assessed on transaction history, not collateral' },
      { title: 'Instant Microloan', desc: 'Approved and disbursed to mobile wallet in 48h' },
      { title: 'Harvest Insurance', desc: 'Per-crop coverage against drought, flooding and price collapse' },
      { title: 'Digital Savings Wallet', desc: 'Automated savings triggered on every completed transaction' },
    ],
  },
  {
    index: '05', tab: 'Marketplace', sub: 'Trading Platform and Commodity Exchange',
    headline: 'The African agricultural marketplace, live and transparent.',
    description: 'A single digital floor where producers post offers, buyers place orders, and prices are set by real supply and demand. From cassava and cocoa to livestock and palm oil, every commodity is live, graded, and traceable to source.',
    ctaLabel: 'Explore Marketplace solutions', ctaHref: '/customer',
    bg: '/farmers/poivrons.jpeg', screen: '/F2M - Store App Listing/EN/PNG/A5.png',
    metric: '40+', metricLabel: 'commodity categories actively traded every day',
    features: [
      { title: 'Live Commodity Prices', desc: 'Real-time price feed across 40+ agricultural categories' },
      { title: 'Bulk Order Management', desc: 'Multi-supplier RFQ tools for volume procurement' },
      { title: 'Export Documentation', desc: 'Auto-generated phytosanitary certificates and customs forms' },
      { title: 'Trade Finance Tools', desc: 'Invoice factoring and buyer credit for verified traders' },
    ],
  },
  {
    index: '06', tab: 'AI and Analytics', sub: 'Intelligence Layer and Decision Tools',
    headline: 'Know what to grow. Know when. Know the price.',
    description: 'Our intelligence layer processes satellite imagery, soil sensor data, historical price curves and live order books to give every actor a decision edge. Farmers plan harvests. Buyers hedge supply. Lenders score risk from one dashboard.',
    ctaLabel: 'Explore Analytics solutions', ctaHref: '/producer',
    bg: '/farmers/cassava1.jpeg', screen: '/F2M - Store App Listing/EN/PNG/B1.png',
    metric: '98.2%', metricLabel: 'forecast accuracy on primary commodity yield models',
    features: [
      { title: 'Yield Forecasting', desc: 'Predict harvest volume 6 weeks ahead with satellite and soil data' },
      { title: 'Demand Prediction', desc: 'Identify under-supplied crops in your target market before planting' },
      { title: 'Price Trend Analysis', desc: '12-month commodity models by region, variety and grade' },
      { title: 'Carbon Dashboard', desc: 'Track and certify your agricultural carbon sequestration per hectare' },
    ],
  },
];

export default function VideoShowcase() {
  const { ref, isVisible } = useAnimateOnScroll(0.05);
  const [active, setActive] = useState(0);
  const sol = SOLUTIONS[active];
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
          High-impact solutions,{' '}
          <span className="text-gradient">powered by African agriculture.</span>
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
                key={s.tab}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  i === active ? 'bg-emerald-500 text-black' : 'border border-gray-700 text-gray-400'
                }`}
              >
                {s.tab}
              </button>
            ))}
          </div>

          {/* Three-panel block */}
          <div className="relative flex flex-col overflow-hidden border border-gray-800/60 bg-gray-900/30 lg:flex-row" style={{ minHeight: 620 }}>

            {/* LEFT  vertical tab sidebar (desktop) */}
            <div className="hidden shrink-0 border-r border-gray-800/60 lg:flex lg:w-[240px] lg:flex-col">
              {SOLUTIONS.map((s, i) => (
                <button
                  key={s.tab}
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
                    {s.tab}
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
                        {sol.sub}
                      </span>

                      <h3 className="font-heading mb-5 text-[26px] font-bold leading-[1.15] text-white sm:text-[30px] lg:text-[34px] xl:text-[38px]">
                        {sol.headline}
                      </h3>

                      <p className="mb-7 text-[15px] leading-[1.7] text-gray-400 lg:text-[16px]">
                        {sol.description}
                      </p>

                      <Link
                        href={sol.ctaHref}
                        className="group mb-10 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-emerald-400 transition-colors hover:text-emerald-300 lg:text-[15px]"
                      >
                        {sol.ctaLabel}
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>

                      <div className="border-t border-gray-800/70 pt-7">
                        <div className="mb-5">
                          <span className="font-heading block text-[42px] font-bold leading-none text-gradient lg:text-[48px]">
                            {sol.metric}
                          </span>
                          <span className="mt-1.5 block text-[13px] leading-snug text-gray-500">
                            {sol.metricLabel}
                          </span>
                        </div>

                        <ul className="space-y-3">
                          {sol.features.map((f) => (
                            <li key={f.title} className="flex items-start gap-3">
                              <span className="mt-[3px] h-[6px] w-[6px] shrink-0 rounded-full bg-emerald-500" />
                              <span className="text-[13px] leading-snug">
                                <span className="font-semibold text-white">{f.title}</span>
                                <span className="text-gray-500">  {f.desc}</span>
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
                          alt={sol.tab}
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
                          src={sol.screen}
                          alt={`${sol.tab} app`}
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
                  aria-label={`Solution ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'h-[6px] w-7 bg-emerald-500' : 'h-[6px] w-[6px] bg-gray-700 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-emerald-500/40 hover:text-emerald-400">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label="Next" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-emerald-500/40 hover:text-emerald-400">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
