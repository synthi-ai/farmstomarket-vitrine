'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';
import StatGrid from '@/components/ui/StatGrid';

const avatars = [
  '/farmers/cassava1.jpeg',
  '/farmers/images1.jpeg',
  '/farmers/farms2.jpeg',
  '/farmers/cassava1.jpeg',
  '/farmers/images1.jpeg',
];

export default function Testimonials() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  const testimonials = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    quote: t(`testimonials.${i + 1}.quote`),
    description: t(`testimonials.${i + 1}.description`),
    author: t(`testimonials.${i + 1}.author`),
    role: t(`testimonials.${i + 1}.role`),
    avatar: avatars[i],
  }));

  const stats = [
    { value: '5,000+', label: t('testimonials.stats.users') },
    { value: '95%', label: t('testimonials.stats.satisfaction') },
    { value: '15+', label: t('testimonials.stats.countries') },
    { value: '24/7', label: t('testimonials.stats.support') },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={t('testimonials.badge')}
          title={t('testimonials.title')}
          description={t('testimonials.description')}
          animated
          isVisible={isVisible}
          variants={staggerChildrenVariants}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              variants={fadeUpVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
            >
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{testimonial.quote}</h3>
                <p className="text-gray-600 leading-relaxed">{testimonial.description}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-emerald-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <StatGrid
          stats={stats}
          variant="gray"
          animated
          isVisible={isVisible}
          containerVariants={staggerChildrenVariants}
          itemVariants={fadeUpVariants}
        />
      </div>
    </section>
  );
}
