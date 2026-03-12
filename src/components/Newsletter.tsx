'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants } from '@/animations/variants';

export default function Newsletter() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  return (
    <section className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <span className="inline-block px-4 py-2 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4 border border-emerald-700">
            {t('newsletter.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            {t('newsletter.description')}
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
              required
            />
            <motion.button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('newsletter.subscribe')}
            </motion.button>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            {t('newsletter.privacy')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
