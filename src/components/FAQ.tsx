'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';

type Category = 'PRICING' | 'SECURITY' | 'DELIVERY' | 'QUALITY';

const CATEGORY_STYLES: Record<Category, string> = {
  PRICING: 'text-emerald-400 bg-emerald-900/50 border border-emerald-700',
  SECURITY: 'text-blue-400 bg-blue-900/50 border border-blue-700',
  DELIVERY: 'text-purple-400 bg-purple-900/50 border border-purple-700',
  QUALITY: 'text-orange-400 bg-orange-900/50 border border-orange-700',
};

const DEFAULT_STYLE = 'text-gray-400 bg-gray-800 border border-gray-700';

function getCategoryStyle(categoryKey: string): string {
  return CATEGORY_STYLES[categoryKey as Category] ?? DEFAULT_STYLE;
}

const FAQ_ITEMS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  questionKey: `faq.${i + 1}.question`,
  answerKey: `faq.${i + 1}.answer`,
  categoryKey: `faq.${i + 1}.category`,
}));

export default function FAQ() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-gray-900 bg-geo-subtle py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title={t('faq.title')}
          description={t('faq.description')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        <motion.div
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {FAQ_ITEMS.map((item) => {
            const rawCategory = t(item.categoryKey);
            const style = getCategoryStyle(rawCategory);

            return (
              <motion.div
                key={item.id}
                className="glass-card overflow-hidden rounded-2xl transition-all duration-500"
                variants={fadeUpVariants}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${style}`}>
                      {rawCategory}
                    </span>
                  </div>

                  <button
                    className="flex w-full items-start justify-between gap-4 text-left"
                    onClick={() => toggle(item.id)}
                    aria-expanded={expandedId === item.id}
                  >
                    <h3 className="font-heading text-lg font-semibold leading-tight text-white">
                      {t(item.questionKey)}
                    </h3>
                    <motion.span
                      animate={{ rotate: expandedId === item.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="mt-4"
                      >
                        <div className="mb-4 h-px w-full bg-gray-700" />
                        <p className="leading-relaxed text-gray-400">
                          {t(item.answerKey)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA card */}
        <motion.div
          className="glass-card rounded-3xl p-8"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-heading mb-2 text-2xl font-bold text-white">
                {t('faq.notFound.title')}
              </h3>
              <p className="text-gray-400">{t('faq.notFound.description')}</p>
            </div>

            <motion.a
              href="#contact"
              className="font-cta inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-bold text-black tracking-[2px] uppercase transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('faq.contactSupport')}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
