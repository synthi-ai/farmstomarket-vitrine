'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CuttingEdgeFeatures() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const features = [
    {
      title: t('features.ai.title'),
      description: t('features.ai.description'),
      mockup: '/Mockups/mockup 04.png',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: t('features.payments.title'),
      description: t('features.payments.description'),
      mockup: '/Mockups/mockup 13.png',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      title: t('features.delivery.title'),
      description: t('features.delivery.description'),
      mockup: '/Mockups/mockup 06.png',
      iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    },
    {
      title: t('features.legal.title'),
      description: t('features.legal.description'),
      mockup: '/Mockups/mockup 05.png',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      title: t('secure.pricing.title'),
      description: t('secure.pricing.description'),
      mockup: '/Mockups/mockup 19.png',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: t('secure.payments.title'),
      description: t('secure.payments.description'),
      mockup: '/Mockups/mockup 07.png',
      iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    },
  ];

  return (
    <section className="py-20 bg-gray-900" ref={ref} id="features">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={t('features.badge')}
          title={t('features.title')}
          description={t('features.description')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        {/* Feature cards with zoomed mockup previews */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-emerald-700/50 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              {/* Zoomed mockup preview area */}
              <div className="relative h-52 bg-gray-900/80 overflow-hidden">
                {/* Emerald glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full flex items-center justify-center">
                  <Image
                    src={feature.mockup}
                    alt={feature.title}
                    width={320}
                    height={640}
                    className="object-contain h-64 w-auto transition-transform duration-500 group-hover:scale-110"
                    sizes="320px"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center border border-emerald-700/50 group-hover:bg-emerald-900/80 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA with large mockup showcase */}
        <motion.div
          className="relative mt-16 p-8 md:p-12 bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('features.cta.title')}
              </h3>
              <p className="text-gray-400 mb-6">
                {t('features.cta.description')}
              </p>
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-3 rounded-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('features.cta.button')}
              </motion.button>
            </div>

            {/* Large zoomed mockup cluster */}
            <div className="relative h-72 md:h-80 hidden lg:block">
              <div className="absolute left-0 top-0 w-48 h-full">
                <Image
                  src="/Mockups/mockup 20.png"
                  alt="Marketplace Listings"
                  fill
                  className="object-contain object-center scale-125"
                  sizes="200px"
                />
              </div>
              <div className="absolute right-0 top-4 w-48 h-full">
                <Image
                  src="/Mockups/mockup 09.png"
                  alt="Negotiation Chat"
                  fill
                  className="object-contain object-center scale-125"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
