'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function CapitalStats() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const stats = [
    { value: '50K+', label: t('agrobank.stats.farmers') },
    { value: '72.9K+', label: t('agrobank.stats.transactions') },
    { value: '97%', label: t('agrobank.stats.coverage') },
    { value: '24/7', label: t('agrobank.stats.support') },
  ];

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-gray-950 bg-topo-subtle overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-6">
            {t('agrobank.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {t('agrobank.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('agrobank.description')}
          </p>
        </motion.div>

        {/* Big bold stats — Shopify capital section style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ y: 40, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards — 4 AgroBank features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { titleKey: 'agrobank.features.secure.title', descKey: 'agrobank.features.secure.description', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
            { titleKey: 'agrobank.features.analytics.title', descKey: 'agrobank.features.analytics.description', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
            { titleKey: 'agrobank.features.mobile.title', descKey: 'agrobank.features.mobile.description', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
            { titleKey: 'agrobank.features.contracts.title', descKey: 'agrobank.features.contracts.description', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
          ].map((feat, i) => (
            <motion.div
              key={feat.titleKey}
              className="glass-card rounded-3xl p-6 group transition-all duration-500"
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + 0.1 * i, ease: EASE }}
            >
              <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-700/40 mb-5 group-hover:bg-emerald-900/80 transition-colors">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t(feat.titleKey)}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t(feat.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
