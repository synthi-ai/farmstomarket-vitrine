'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';

const SupplyChainComponent = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  const cards = [
    {
      number: '01',
      title: t('supplychain.farm.title'),
      description: t('supplychain.farm.description'),
      image: '/Mockups/mockup 11.png',
      features: [
        t('supplychain.farm.features.0'),
        t('supplychain.farm.features.1'),
        t('supplychain.farm.features.2'),
        t('supplychain.farm.features.3'),
      ],
    },
    {
      number: '02',
      title: t('supplychain.processing.title'),
      description: t('supplychain.processing.description'),
      image: '/Mockups/mockup 12.png',
      features: [
        t('supplychain.processing.features.0'),
        t('supplychain.processing.features.1'),
        t('supplychain.processing.features.2'),
        t('supplychain.processing.features.3'),
      ],
    },
    {
      number: '03',
      title: t('supplychain.logistics.title'),
      description: t('supplychain.logistics.description'),
      image: '/Mockups/mockup 13.png',
      features: [
        t('supplychain.logistics.features.0'),
        t('supplychain.logistics.features.1'),
        t('supplychain.logistics.features.2'),
        t('supplychain.logistics.features.3'),
      ],
    },
    {
      number: '04',
      title: t('supplychain.market.title'),
      description: t('supplychain.market.description'),
      image: '/Mockups/mockup 14.png',
      features: [
        t('supplychain.market.features.0'),
        t('supplychain.market.features.1'),
        t('supplychain.market.features.2'),
        t('supplychain.market.features.3'),
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={t('supplychain.title')}
          description={t('supplychain.description')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden group hover:border-emerald-700/50 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Number + Zoomed Image */}
              <div className="relative h-56 overflow-hidden bg-gray-900/50">
                <span className="absolute top-4 left-4 text-6xl font-bold text-emerald-400/15 z-0">
                  {card.number}
                </span>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={350}
                    height={700}
                    className="object-contain h-72 w-auto transition-transform duration-500 group-hover:scale-110"
                    sizes="350px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-900/50 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                    {card.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <ul className="space-y-2">
                  {card.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupplyChainComponent;
