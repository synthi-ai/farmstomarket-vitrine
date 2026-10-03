'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { APPS } from '@/data/site';
import { buttonVariants } from '@/components/ui/button';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function FeatureHighlight() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-gray-900 bg-geo-subtle overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-6">
              {t('features.badge')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {t('features.ai.title')}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              {t('showcase.expertise')}
            </p>

            {/* Feature bullets */}
            <div className="space-y-4 mb-10">
              {[
                t('features.ai.description'),
                t('features.payments.description'),
                t('features.delivery.description'),
              ].map((desc, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <a
              href={APPS.googlePlay.pro}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'cta', size: 'cta-lg' })}
            >
              {t('features.cta.button')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right: Large mockup with glow */}
          <motion.div
            className="relative flex justify-center"
            initial={{ x: 60, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px]" />
            </div>
            <div className="relative">
              <Image
                src="/Mockups/mockup 04.png"
                alt="AI Analytics Dashboard"
                width={380}
                height={760}
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 80vw, 380px"
              />
              {/* Floating stat card */}
              <motion.div
                className="absolute -left-4 top-1/3 glass-card rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
              >
                <div className="font-heading text-2xl font-bold text-gradient">+45%</div>
                <div className="text-xs text-gray-400 mt-1">{t('showcase.stat.users')}</div>
              </motion.div>
              {/* Floating stat card 2 */}
              <motion.div
                className="absolute -right-4 bottom-1/3 glass-card rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1, ease: EASE }}
              >
                <div className="font-heading text-2xl font-bold text-gradient">99.8%</div>
                <div className="text-xs text-gray-400 mt-1">{t('credibility.uptime.label')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
