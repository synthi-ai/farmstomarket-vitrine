'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';
import StatGrid from '@/components/ui/StatGrid';

const AgroBank = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  const mockups = [
    { image: '/Mockups/mockup 03.png', title: t('agrobank.wallet.title'), description: t('agrobank.wallet.description') },
    { image: '/Mockups/mockup 11.png', title: t('agrobank.trading.title'), description: t('agrobank.trading.description') },
  ];

  const features = [
    {
      title: t('agrobank.features.secure.title'),
      description: t('agrobank.features.secure.description'),
      iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
    },
    {
      title: t('agrobank.features.analytics.title'),
      description: t('agrobank.features.analytics.description'),
      iconPath: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      title: t('agrobank.features.mobile.title'),
      description: t('agrobank.features.mobile.description'),
      iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    },
    {
      title: t('agrobank.features.contracts.title'),
      description: t('agrobank.features.contracts.description'),
      iconPath: 'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-900 bg-geo-subtle" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={t('agrobank.title')}
          description={t('agrobank.description')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        {/* Mockups side by side – large and zoomed */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {mockups.map((mockup, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center glass-card rounded-3xl overflow-hidden group transition-all duration-500"
              variants={fadeUpVariants}
              whileHover={{ y: -4 }}
            >
              {/* Zoomed mockup container */}
              <div className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-900/50">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full flex items-center justify-center">
                  <Image
                    src={mockup.image}
                    alt={mockup.title}
                    width={600}
                    height={1000}
                    className="object-contain h-full w-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 500px"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">{mockup.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {mockup.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced title */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            {t('agrobank.advanced.title')}
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('agrobank.advanced.description')}
          </p>
        </motion.div>

        {/* 4 Feature cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-500"
              variants={fadeUpVariants}
              whileHover={{ y: -2 }}
            >
              <div className="w-12 h-12 bg-emerald-900/50 border border-emerald-700/50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d={feature.iconPath} />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-3 text-sm">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="mb-16">
          <StatGrid
            stats={[
              { value: '50K+', label: t('agrobank.stats.farmers') },
              { value: '€2.8B', label: t('agrobank.stats.transactions') },
              { value: '95%', label: t('agrobank.stats.coverage') },
              { value: '24/7', label: t('agrobank.stats.support') },
            ]}
            variant="dark"
            animated
            isVisible={isVisible}
            containerVariants={staggerChildrenVariants}
            itemVariants={fadeUpVariants}
          />
        </div>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-12 text-center"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            {t('agrobank.cta.title')}
          </h3>
          <p className="text-emerald-100 mb-8 max-w-3xl mx-auto">
            {t('agrobank.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-white text-emerald-600 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-all hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('agrobank.cta.open')}
            </motion.button>
            <motion.button
              className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('agrobank.cta.consult')}
            </motion.button>
          </div>
          <p className="text-emerald-100 text-sm mt-6">
            {t('agrobank.cta.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgroBank;
