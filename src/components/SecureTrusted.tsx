'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';
import StatGrid from '@/components/ui/StatGrid';

function renderMovementText(template: string, replacements: Record<string, string>) {
  const parts: (string | { key: string; value: string })[] = [];
  let remaining = template;

  for (const [placeholder, value] of Object.entries(replacements)) {
    const token = `{${placeholder}}`;
    const idx = remaining.indexOf(token);
    if (idx !== -1) {
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push({ key: placeholder, value });
      remaining = remaining.slice(idx + token.length);
    }
  }
  if (remaining) parts.push(remaining);

  return parts.map((part, i) =>
    typeof part === 'string' ? (
      <span key={i}>{part}</span>
    ) : (
      <span key={i} className="font-semibold text-emerald-600">{part.value}</span>
    )
  );
}

const SecureTrusted = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  const stats = [
    { value: '99,8%', label: t('secure.stats.security') },
    { value: '24/7', label: t('secure.stats.monitoring') },
    { value: '50K+', label: t('secure.stats.transactions') },
    { value: '0%', label: t('secure.stats.fraud') },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-6"
        variants={staggerChildrenVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <SectionHeader badge={t('secure.badge')} title={t('secure.title')} description={t('secure.description')} animated isVisible={isVisible} variants={fadeUpVariants} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              titleKey: 'secure.pricing.title',
              descKey: 'secure.pricing.description',
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
                  <path d="M7 20L12 14.5L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 4L12 9.5L17 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              titleKey: 'secure.payments.title',
              descKey: 'secure.payments.description',
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              titleKey: 'secure.delivery.title',
              descKey: 'secure.delivery.description',
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeUpVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                {card.icon}
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">{t(card.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed">{t(card.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-12 max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm"
          variants={fadeUpVariants}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {renderMovementText(t('secure.movement.text'), {
              percentage: t('secure.movement.percentage'),
              quality: t('secure.movement.quality'),
            })}
          </p>
          <p className="text-gray-600">{t('secure.join.text')}</p>
        </motion.div>

        <motion.div className="text-center mb-16" variants={fadeUpVariants}>
          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('secure.joinCommunity')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        <StatGrid
          stats={stats}
          animated
          isVisible={isVisible}
          containerVariants={staggerChildrenVariants}
          itemVariants={fadeUpVariants}
        />
      </motion.div>
    </section>
  );
};

export default SecureTrusted;
