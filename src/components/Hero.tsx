'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Play, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const NAV_ITEMS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.features', href: '#features' },
  { key: 'nav.solutions', href: '#solutions' },
  { key: 'nav.marketplace', href: '#marketplace' },
  { key: 'nav.testimonials', href: '#testimonials' },
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
            ? 'bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-tight lg:text-2xl">
            <span className={scrolled ? 'text-emerald-600' : 'text-emerald-400'}>FARMS</span>
            <span className={scrolled ? 'text-gray-900' : 'text-white'}>&#8202;TO&#8202;</span>
            <span className={scrolled ? 'text-gray-500' : 'text-white/70'}>MARKET</span>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle variant={scrolled ? 'light' : 'dark'} />
            <a
              href="#login"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300'
              }`}
            >
              <User className="h-4 w-4" />
              {t('nav.login')}
            </a>
            <a
              href="#signup"
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
                scrolled
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-white text-gray-900 hover:bg-white/90'
              }`}
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
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
        {/* Background */}
        <Image
          src="/images/home2.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/*
          Overlay : gradient renforce au centre (la ou le texte vit)
          et en haut (pour le header). Plus leger en bas.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/40" />

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
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  {t('hero.badge')}
                </span>

                {/* Title — primary: full white */}
                <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {t(currentSlide.title)}{' '}
                  <span className="text-emerald-400">{t(currentSlide.highlight)}</span>
                </h1>

                {/* Description — secondary: white/90 for WCAG AA on our overlay */}
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                  {t(currentSlide.description)}
                </p>

                {/* CTA */}
                <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:gap-4">
                  {/* Primary CTA — high contrast solid button */}
                  <a
                    href="#signup"
                    className="w-full rounded-xl bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:w-auto"
                  >
                    {t('hero.startFree')}
                  </a>
                  {/* Secondary CTA — visible border, readable contrast */}
                  <button className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/20 sm:w-auto">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/20">
                      <Play className="h-4 w-4 translate-x-px" fill="currentColor" />
                    </span>
                    {t('hero.watchDemo')}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots — tertiary: white/60 inactive, emerald active */}
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
                    : 'w-1.5 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator — decorative: white/40 tier */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white/40">
            <motion.div
              className="mt-1.5 h-2 w-0.5 rounded-full bg-white/60"
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
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-20">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-5 top-5"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>

              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-900 transition-colors hover:text-emerald-600"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-3">
                <LanguageToggle variant="light" />
                <a
                  href="#signup"
                  className="block w-full rounded-xl bg-emerald-600 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  {t('nav.signup')}
                </a>
                <a
                  href="#login"
                  className="block w-full rounded-xl border border-gray-300 py-3.5 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
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
