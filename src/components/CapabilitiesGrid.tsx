'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const ICON_PATHS = [
  'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
  'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'M13 10V3L4 14h7v7l9-11h-7z',
];

export default function CapabilitiesGrid() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const capabilities = [
    {
      icon: ICON_PATHS[0],
      titleKey: 'platform.card1.title',
      descKey: 'platform.card1.description',
    },
    {
      icon: ICON_PATHS[1],
      titleKey: 'platform.card3.title',
      descKey: 'platform.card3.description',
    },
    {
      icon: ICON_PATHS[2],
      titleKey: 'features.payments.title',
      descKey: 'features.payments.description',
    },
    {
      icon: ICON_PATHS[3],
      titleKey: 'features.ai.title',
      descKey: 'features.ai.description',
    },
  ];

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-gray-950 bg-geo-subtle overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {t('platform.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('platform.description')}
          </p>
        </motion.div>

        {/* 4-column grid — Shopify capabilities style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.titleKey}
              className="glass-card rounded-3xl p-8 group transition-all duration-500 hover:scale-[1.02]"
              initial={{ y: 40, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-emerald-900/50 rounded-2xl flex items-center justify-center border border-emerald-700/40 mb-6 group-hover:bg-emerald-900/80 group-hover:border-emerald-600/50 transition-colors duration-500">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {t(cap.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(cap.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
