'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FAQ() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqItems = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    question: t(`faq.${i + 1}.question`),
    answer: t(`faq.${i + 1}.answer`),
    category: t(`faq.${i + 1}.category`),
  }));

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryColor = (category: string) => {
    const key = category.toUpperCase();
    if (key === t('faq.category.pricing')) return 'text-emerald-700 bg-emerald-50 border border-emerald-200';
    if (key === t('faq.category.security')) return 'text-blue-700 bg-blue-50 border border-blue-200';
    if (key === t('faq.category.delivery')) return 'text-purple-700 bg-purple-50 border border-purple-200';
    if (key === t('faq.category.quality')) return 'text-orange-700 bg-orange-50 border border-orange-200';
    return 'text-gray-700 bg-gray-50 border border-gray-200';
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={t('faq.badge')}
          title={t('faq.title')}
          description={t('faq.description')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeUpVariants}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 leading-tight">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedId === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                  >
                    +
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="mt-4"
                    >
                      <div className="w-full h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-2xl mb-2 text-gray-900">
                {t('faq.notFound.title')}
              </h3>
              <p className="text-gray-600">
                {t('faq.notFound.description')}
              </p>
            </div>

            <motion.button
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('faq.contactSupport')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
