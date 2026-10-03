'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Wheat, ShoppingBasket, Truck, Landmark, BarChart3, Layers, HelpCircle, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from '@/components/LocaleLink';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { APPS, NAV_LINKS } from '@/data/site';
import { buttonVariants } from '@/components/ui/button';
import type { TranslationKey } from '@/types/i18n';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const SOLUTIONS = [
  { key: 'nav.producer', descKey: 'nav.producer.desc', href: '/producer', Icon: Wheat },
  { key: 'nav.customer', descKey: 'nav.customer.desc', href: '/customer', Icon: ShoppingBasket },
  { key: 'nav.transporter', descKey: 'nav.transporter.desc', href: '/transporter', Icon: Truck },
  { key: 'nav.agrobank', descKey: 'nav.agrobank.desc', href: '/agrobank', Icon: Landmark },
] as const;

const PLATFORM = [
  { key: 'nav.features', href: '/#features', Icon: Layers },
  { key: 'nav.howItWorks', href: '/#onboarding', Icon: HelpCircle },
  { key: 'nav.analytics', href: '/#solutions', Icon: BarChart3 },
  { key: 'nav.mobileApp', href: '/apps', Icon: Smartphone },
] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'solutions' | 'platform' | null>(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openWith = (menu: 'solutions' | 'platform') => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950/95 shadow-lg shadow-black/10 backdrop-blur-xl border-b border-gray-800/40'
            : 'bg-transparent'
        }`}
      >
        {/* ── desktop ── */}
        <div className="relative mx-auto flex max-w-7xl items-center px-5 py-3.5 lg:px-8">

          {/* Logo — left */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/logo/logo.svg"
              alt={t('brand.logoAlt')}
              width={160}
              height={40}
              className="h-8 w-auto lg:h-9"
              priority
            />
          </Link>

          {/* Nav — truly centered via absolute */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex">

            {/* Platform dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openWith('platform')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  openMenu === 'platform' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setOpenMenu(openMenu === 'platform' ? null : 'platform')}
                aria-expanded={openMenu === 'platform'}
                aria-haspopup="true"
              >
                {t('nav.platform')}
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openMenu === 'platform' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openMenu === 'platform' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: EASE }}
                    onMouseEnter={() => openWith('platform')}
                    onMouseLeave={scheduleClose}
                    className="absolute left-1/2 top-full mt-2 w-[220px] -translate-x-1/2 rounded-2xl border border-gray-800/60 bg-gray-950/98 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl"
                    role="menu"
                  >
                    {PLATFORM.map(({ key, href, Icon }) => (
                      <Link
                        key={key}
                        href={href}
                        className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-400 transition-all hover:bg-white/[0.04] hover:text-white"
                        onClick={() => setOpenMenu(null)}
                        role="menuitem"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                          <Icon className="h-3.5 w-3.5 text-emerald-400" />
                        </span>
                        {t(key)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openWith('solutions')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  openMenu === 'solutions' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')}
                aria-expanded={openMenu === 'solutions'}
                aria-haspopup="true"
              >
                {t('nav.solutions')}
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openMenu === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: EASE }}
                    onMouseEnter={() => openWith('solutions')}
                    onMouseLeave={scheduleClose}
                    className="absolute left-1/2 top-full mt-2 w-[420px] -translate-x-1/2 rounded-2xl border border-gray-800/60 bg-gray-950/98 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl"
                    role="menu"
                  >
                    <p className="mb-2 px-2 pt-1 text-[10px] font-semibold uppercase tracking-[2px] text-gray-600">
                      {t('nav.whoIsItFor')}
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {SOLUTIONS.map(({ key, descKey, href, Icon }) => (
                        <Link
                          key={key}
                          href={href}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/[0.04]"
                          onClick={() => setOpenMenu(null)}
                          role="menuitem"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                            <Icon className="h-4 w-4 text-emerald-400" />
                          </span>
                          <span>
                            <span className="block text-[13px] font-semibold text-white">{t(key)}</span>
                            <span className="mt-0.5 block text-[11px] leading-snug text-gray-500">{t(descKey)}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-gray-800/60 pt-2">
                      <Link
                        href="/#solutions"
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-[12px] font-medium text-emerald-400 transition-all hover:bg-emerald-500/5"
                        onClick={() => setOpenMenu(null)}
                      >
                        {t('nav.seeAllSolutions')}
                        <ChevronDown className="-rotate-90 h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#marketplace" className="rounded-md px-3.5 py-2 text-[13px] font-medium text-gray-400 transition-colors hover:text-white">
              {t('nav.marketplace')}
            </Link>

            <Link href="/#testimonials" className="rounded-md px-3.5 py-2 text-[13px] font-medium text-gray-400 transition-colors hover:text-white">
              {t('nav.testimonials')}
            </Link>

            <Link href={NAV_LINKS.about} className="rounded-md px-3.5 py-2 text-[13px] font-medium text-gray-400 transition-colors hover:text-white">
              {t('nav.about')}
            </Link>
          </nav>

          {/* Actions — right */}
          <div className="ml-auto hidden items-center gap-2 lg:flex z-10">
            <LanguageToggle variant="dark" />
            <a
              href={APPS.googlePlay.pro}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'cta', size: 'cta-sm' })}
            >
              {t('nav.getApp')}
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto lg:hidden p-2"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {mobileOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: EASE }}
            className="fixed inset-0 z-50 bg-gray-950 lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800/50">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image src="/logo/logo.svg" alt={t('brand.logoAlt')} width={140} height={36} className="h-8 w-auto" />
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label={t('nav.closeMenu')}>
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="flex flex-col px-5 pb-8 pt-4">
              <nav className="flex flex-col gap-1">

                {/* Platform accordion */}
                <button
                  onClick={() => setMobilePlatformOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-gray-200 hover:bg-white/[0.04]"
                >
                  {t('nav.platform')}
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${mobilePlatformOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobilePlatformOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 flex flex-col gap-1 border-l border-gray-800 pl-4 pb-2">
                        {PLATFORM.map(({ key, href, Icon }) => (
                          <Link key={key} href={href} onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-[14px] text-gray-400 hover:text-white">
                            <Icon className="h-4 w-4 text-emerald-400" />
                            {t(key)}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Solutions accordion */}
                <button
                  onClick={() => setMobileSolutionsOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-gray-200 hover:bg-white/[0.04]"
                >
                  {t('nav.solutions')}
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 flex flex-col gap-1 border-l border-gray-800 pl-4 pb-2">
                        {SOLUTIONS.map(({ key, descKey, href, Icon }) => (
                          <Link key={key} href={href} onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 hover:bg-white/[0.04]">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                              <Icon className="h-3.5 w-3.5 text-emerald-400" />
                            </span>
                            <span>
                              <span className="block text-[14px] font-semibold text-white">{t(key)}</span>
                              <span className="block text-[11px] text-gray-500">{t(descKey)}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {(
                  [
                    { key: 'nav.marketplace', href: '/#marketplace' },
                    { key: 'nav.testimonials', href: '/#testimonials' },
                    { key: 'nav.about', href: NAV_LINKS.about },
                  ] as { key: TranslationKey; href: string }[]
                ).map(({ key, href }) => (
                  <Link key={key} href={href} onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-[15px] font-medium text-gray-200 hover:bg-white/[0.04] hover:text-white">
                    {t(key)}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 space-y-2">
                <a
                  href={APPS.googlePlay.pro}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={buttonVariants({ variant: 'cta', size: 'cta', className: 'block w-full text-center' })}
                >
                  {t('nav.getApp')}
                </a>
                <div className="flex justify-center pt-2">
                  <LanguageToggle variant="dark" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
