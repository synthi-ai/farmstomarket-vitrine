'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function Newsletter() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.15);

  return (
    <section className="py-24 md:py-32 bg-gray-950 bg-topo-subtle" ref={ref}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* Shopify-style: Very large centered heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            {t('newsletter.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('newsletter.description')}
          </p>

          {/* Shopify-style: Pill input + button */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 bg-gray-900 border border-gray-700/60 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all text-base"
              required
            />
            <motion.button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full transition-all whitespace-nowrap shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('newsletter.subscribe')}
            </motion.button>
          </form>

          <p className="text-gray-600 text-sm mt-5">
            {t('newsletter.privacy')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
