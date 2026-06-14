'use client';

import { useState, useEffect } from 'react';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const NAV_LINKS = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.features', href: '/#features' },
  { key: 'nav.marketplace', href: '/#marketplace' },
  { key: 'nav.testimonials', href: '/#testimonials' },
] as const;

const SOLUTIONS = [
  { key: 'nav.producer', href: '/producer' },
  { key: 'nav.customer', href: '/customer' },
  { key: 'nav.transporter', href: '/transporter' },
  { key: 'nav.agrobank', href: '/agrobank' },
] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950/90 shadow-lg shadow-black/10 backdrop-blur-xl border-b border-gray-800/40'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/logo.svg"
              alt="Farms to Market"
              width={160}
              height={40}
              className="h-9 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.slice(0, 2).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
                onClick={() => setSolutionsOpen((o) => !o)}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                {t('nav.solutions')}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="absolute left-1/2 top-full mt-3 -translate-x-1/2 min-w-[220px] rounded-2xl border border-gray-800/60 bg-gray-950/95 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl"
                    role="menu"
                  >
                    {SOLUTIONS.map((link) => (
                      <Link
                        key={link.key}
                        href={link.href}
                        role="menuitem"
                        className="block px-5 py-3 text-sm text-gray-300 transition-all hover:bg-emerald-500/10 hover:pl-6 hover:text-emerald-400"
                      >
                        {t(link.key)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.slice(2).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle variant="dark" />
            <a
              href="#login"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
            >
              <User className="h-4 w-4" />
              {t('nav.login')}
            </a>
            <a
              href="#signup"
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              {t('nav.signup')}
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-gray-950 lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-20">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-5 top-5 p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.slice(0, 2).map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-gray-200 transition-colors hover:text-emerald-400"
                  >
                    {t(item.key)}
                  </Link>
                ))}

                <div>
                  <button
                    onClick={() => setMobileSolutionsOpen((o) => !o)}
                    className="flex w-full items-center justify-between text-lg font-medium text-gray-200 transition-colors hover:text-emerald-400"
                  >
                    {t('nav.solutions')}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                    />
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
                        <div className="mt-3 flex flex-col gap-3 border-l border-emerald-800/50 pl-4">
                          {SOLUTIONS.map((link) => (
                            <Link
                              key={link.key}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-base text-gray-400 transition-colors hover:text-emerald-400"
                            >
                              {t(link.key)}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {NAV_LINKS.slice(2).map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-gray-200 transition-colors hover:text-emerald-400"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-3">
                <LanguageToggle variant="dark" />
                <a
                  href="#signup"
                  className="block w-full rounded-full bg-emerald-600 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
                >
                  {t('nav.signup')}
                </a>
                <a
                  href="#login"
                  className="block w-full rounded-full border border-gray-700 py-3.5 text-center text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800"
                >
                  {t('nav.login')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
