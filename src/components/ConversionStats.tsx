'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function ConversionStats() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-gray-900 bg-topo-subtle overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats and text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-6">
              {t('secure.payments.title')}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              {t('features.cta.title')}
            </h2>

            {/* Big stats — Shopify checkout stats style */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">50K+</div>
                <div className="text-gray-400 text-sm mt-2">{t('showcase.stat.users')}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">72.9K+</div>
                <div className="text-gray-400 text-sm mt-2">{t('showcase.stat.transactions')}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">15+</div>
                <div className="text-gray-400 text-sm mt-2">{t('credibility.countries.label')}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">99.8%</div>
                <div className="text-gray-400 text-sm mt-2">{t('credibility.uptime.label')}</div>
              </div>
            </div>

            <p className="text-gray-500 text-xs italic">
              {t('features.cta.description')}
            </p>
          </motion.div>

          {/* Right: Mockup */}
          <motion.div
            className="relative flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] bg-emerald-500/8 rounded-full blur-[80px]" />
            </div>
            <Image
              src="/Mockups/mockup 13.png"
              alt="Secure Payment Interface"
              width={350}
              height={700}
              className="object-contain drop-shadow-2xl relative z-10"
              sizes="(max-width: 1024px) 80vw, 350px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
