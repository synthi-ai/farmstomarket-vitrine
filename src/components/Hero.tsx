'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Play, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const NAV_ITEMS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.features', href: '#features' },
  { key: 'nav.marketplace', href: '#marketplace' },
  { key: 'nav.testimonials', href: '#testimonials' },
] as const;

const SOLUTIONS_LINKS = [
  { key: 'nav.producer', href: '/producer' },
  { key: 'nav.customer', href: '/customer' },
  { key: 'nav.transporter', href: '/transporter' },
  { key: 'nav.agrobank', href: '/agrobank' },
] as const;

const SLIDE_KEYS = [
  { title: 'hero.slide1.title', highlight: 'hero.slide1.highlight', description: 'hero.slide1.description' },
  { title: 'hero.slide2.title', highlight: 'hero.slide2.highlight', description: 'hero.slide2.description' },
  { title: 'hero.slide3.title', highlight: 'hero.slide3.highlight', description: 'hero.slide3.description' },
] as const;

export default function Hero() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % SLIDE_KEYS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const currentSlide = SLIDE_KEYS[activeSlide];

  return (
    <>
      {/* ─── Header ─── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-950/95 shadow-sm backdrop-blur-md border-b border-gray-800/50'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logo/logo.svg"
              alt="Farm's To Market"
              width={160}
              height={40}
              className="h-9 w-auto lg:h-10"
              priority
            />
          </a>

          {/* Nav Desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.slice(0, 2).map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
              >
                {t(item.key)}
              </a>
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
              >
                {t('nav.solutions')}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-xl border border-gray-800 bg-gray-950/95 py-2 shadow-xl backdrop-blur-md min-w-[200px]"
                  >
                    {SOLUTIONS_LINKS.map((link) => (
                      <a
                        key={link.key}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 transition-colors hover:bg-gray-800/60 hover:text-emerald-400"
                      >
                        {t(link.key)}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_ITEMS.slice(2).map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
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
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              {t('nav.signup')}
            </a>
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/home2.png"
        >
          <source src="/videos/hero-farm.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-5 pt-20 text-center">
          <div aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/50 bg-emerald-900/30 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-sm sm:text-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  {t('hero.badge')}
                </span>

                {/* Title */}
                <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {t(currentSlide.title)}{' '}
                  <span className="text-emerald-400">{t(currentSlide.highlight)}</span>
                </h1>

                {/* Description */}
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                  {t(currentSlide.description)}
                </p>

                {/* CTA */}
                <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:gap-4">
                  <a
                    href="#signup"
                    className="w-full rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:w-auto"
                  >
                    {t('hero.startFree')}
                  </a>
                  <button className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-gray-600 bg-gray-800/50 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-gray-500 hover:bg-gray-700/50 sm:w-auto">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-600/30">
                      <Play className="h-4 w-4 translate-x-px text-emerald-400" fill="currentColor" />
                    </span>
                    {t('hero.watchDemo')}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-12 flex items-center justify-center gap-2" role="tablist" aria-label="Slides">
            {SLIDE_KEYS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? 'w-8 bg-emerald-400'
                    : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="flex h-8 w-5 justify-center rounded-full border-2 border-gray-600">
            <motion.div
              className="mt-1.5 h-2 w-0.5 rounded-full bg-gray-400"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
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
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-5 top-5"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.slice(0, 2).map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-200 transition-colors hover:text-emerald-400"
                  >
                    {t(item.key)}
                  </a>
                ))}

                {/* Solutions expandable */}
                <div>
                  <button
                    onClick={() => setMobileSolutionsOpen((o) => !o)}
                    className="flex w-full items-center justify-between text-lg font-medium text-gray-200 transition-colors hover:text-emerald-400"
                  >
                    {t('nav.solutions')}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
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
                        <div className="mt-3 flex flex-col gap-3 pl-4 border-l border-gray-800">
                          {SOLUTIONS_LINKS.map((link) => (
                            <a
                              key={link.key}
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-base text-gray-400 transition-colors hover:text-emerald-400"
                            >
                              {t(link.key)}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {NAV_ITEMS.slice(2).map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-200 transition-colors hover:text-emerald-400"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-3">
                <LanguageToggle variant="dark" />
                <a
                  href="#signup"
                  className="block w-full rounded-xl bg-emerald-600 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
                >
                  {t('nav.signup')}
                </a>
                <a
                  href="#login"
                  className="block w-full rounded-xl border border-gray-700 py-3.5 text-center text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800"
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
