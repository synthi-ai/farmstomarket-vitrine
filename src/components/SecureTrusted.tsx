'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SecureTrusted = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  } as const;

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            {t('secure.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('secure.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('secure.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20L12 14.5L17 20" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 4L12 9.5L17 4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-4">{t('secure.pricing.title')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('secure.pricing.description')}
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16L12 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-4">{t('secure.payments.title')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('secure.payments.description')}
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.59 13.51L15.42 17.49" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.41 6.51L8.59 10.49" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-4">{t('secure.delivery.title')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('secure.delivery.description')}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mb-12 max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t('secure.movement.text')
              .replace('{percentage}', '')
              .replace('{quality}', '')
              .split('100%')[0]}
            <span className="font-semibold text-emerald-600">{t('secure.movement.percentage')}</span>
            {t('secure.movement.text')
              .split('100%')[1]
              ?.split('quality products')[0]}
            <span className="font-semibold text-emerald-600">{t('secure.movement.quality')}</span>
            {t('secure.movement.text')
              .split('quality products')[1]}
          </p>
          <p className="text-gray-600">
            {t('secure.join.text')}
          </p>
        </motion.div>

        <motion.div className="text-center mb-16" variants={itemVariants}>
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

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            { value: '99,8%', label: 'Taux de sécurité' },
            { value: '24/7', label: 'Surveillance' },
            { value: '50K+', label: 'Transactions' },
            { value: '0%', label: 'Cas de fraude' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SecureTrusted;