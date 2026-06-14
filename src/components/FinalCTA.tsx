'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function FinalCTA() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-950 bg-geo-subtle py-28 md:py-36"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-emerald-600/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* ─── Left: Phone mockups ─── */}
          <motion.div
            className="relative hidden shrink-0 lg:flex items-end gap-4"
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {/* Back phone (offset) */}
            <div className="relative mb-0 translate-y-8 opacity-70">
              <Image
                src="/F2M - Store App Listing/EN/PNG/B1.png"
                alt="FarmsToMarket App Screen"
                width={200}
                height={400}
                className="object-contain drop-shadow-2xl"
                sizes="200px"
              />
            </div>
            {/* Front phone */}
            <div className="relative z-10">
              <Image
                src="/F2M - Store App Listing/EN/PNG/B2.png"
                alt="FarmsToMarket App Screen"
                width={240}
                height={480}
                className="object-contain drop-shadow-2xl"
                sizes="240px"
              />
            </div>
          </motion.div>

          {/* ─── Right: Text + buttons ─── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            <h2 className="font-heading mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t('ready.title')}
            </h2>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl lg:mx-0 mx-auto">
              {t('ready.description')}
            </p>

            {/* App store buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#app-store"
                className="inline-flex items-center gap-4 rounded-2xl border border-gray-700 bg-gray-900/80 px-6 py-4 transition-all hover:border-emerald-600/50 hover:bg-gray-800/80 backdrop-blur-sm"
              >
                {/* Apple icon */}
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                    {t('ready.appstore.label')}
                  </div>
                  <div className="text-lg font-bold text-white leading-tight">
                    {t('ready.appstore.name')}
                  </div>
                </div>
              </a>

              <a
                href="#play-store"
                className="inline-flex items-center gap-4 rounded-2xl border border-gray-700 bg-gray-900/80 px-6 py-4 transition-all hover:border-emerald-600/50 hover:bg-gray-800/80 backdrop-blur-sm"
              >
                {/* Google Play icon */}
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.29.17.63.19.94.07l11.72-6.77-2.88-2.88-9.78 9.58z" fill="#EA4335" />
                  <path d="M22.34 10.06l-3.23-1.86-3.22 3.22 3.22 3.22 3.25-1.88c.93-.53.93-2.17-.02-2.7z" fill="#FBBC04" />
                  <path d="M2.24.24C1.9.44 1.68.82 1.68 1.28v21.44c0 .46.22.84.56 1.04l.1.06 12.01-12.01v-.28L2.34.18l-.1.06z" fill="#4285F4" />
                  <path d="M16.84 12.03l-3.49-3.49-12 11.98.07.05c.31.12.65.1.94-.07l14.48-8.47z" fill="#34A853" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                    {t('ready.googleplay.label')}
                  </div>
                  <div className="text-lg font-bold text-white leading-tight">
                    {t('ready.googleplay.name')}
                  </div>
                </div>
              </a>
            </div>

            {/* Web CTA */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#signup"
                className="font-cta rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold text-black tracking-[2px] uppercase shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('hero.startFree')} — it&apos;s free
              </a>
              <p className="text-xs text-gray-600">
                {t('hero.trustLine')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
