'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';

const cards = [
  { image: '/farmers/2.jpeg', titleKey: 'platform.card1.title', descKey: 'platform.card1.description', mockup: '/Mockups/mockup 22.png' },
  { image: '/farmers/cassava.jpeg', titleKey: 'platform.card2.title', descKey: 'platform.card2.description', mockup: null },
  { image: '/farmers/poivrons.jpeg', titleKey: 'platform.card3.title', descKey: 'platform.card3.description', mockup: '/Mockups/mockup 19.png' },
  { image: '/farmers/cassava1.jpeg', titleKey: 'platform.card4.title', descKey: 'platform.card4.description', mockup: null },
  { image: '/farmers/farms2.jpeg', titleKey: 'platform.card5.title', descKey: 'platform.card5.description', mockup: '/Mockups/mockup 21.png' },
  { image: '/farmers/8.jpg', titleKey: 'platform.card6.title', descKey: 'platform.card6.description', mockup: null },
];

export default function PlatformSolutions() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="py-20 bg-gray-900" ref={ref} id="platform">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={t('platform.title')}
          description={t('platform.description')}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={card.image}
                alt={t(card.titleKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Default dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating phone mockup (some cards) */}
              {card.mockup && (
                <div className="absolute right-3 bottom-16 w-24 md:w-28 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0 z-10 pointer-events-none">
                  <Image
                    src={card.mockup}
                    alt="App preview"
                    width={140}
                    height={280}
                    className="object-contain drop-shadow-2xl scale-125"
                    sizes="140px"
                  />
                </div>
              )}

              {/* Title (default) */}
              <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-bold text-white">
                  {t(card.titleKey)}
                </h3>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(card.titleKey)}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[70%]">
                  {t(card.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
