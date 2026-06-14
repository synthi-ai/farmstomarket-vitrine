'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function SuccessStories() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const stories = [
    {
      image: '/farmers/2.jpeg',
      quote: t('testimonials.1.description'),
      author: t('testimonials.1.author'),
      role: t('testimonials.1.role'),
      stat: '+45%',
      statLabel: t('persona.producer.videoHero.statLabel'),
      tier: t('howitworks.tab.producers'),
    },
    {
      image: '/farmers/cassava.jpeg',
      quote: t('testimonials.2.description'),
      author: t('testimonials.2.author'),
      role: t('testimonials.2.role'),
      stat: '-25%',
      statLabel: t('persona.customer.videoHero.statLabel'),
      tier: t('howitworks.tab.buyers'),
    },
    {
      image: '/farmers/farms2.jpeg',
      quote: t('testimonials.3.description'),
      author: t('testimonials.3.author'),
      role: t('testimonials.3.role'),
      stat: '98%',
      statLabel: t('persona.transporter.videoHero.statLabel'),
      tier: t('howitworks.tab.transporters'),
    },
  ];

  return (
    <section ref={ref} id="testimonials" className="relative py-28 md:py-36 bg-gray-950 bg-geo-subtle overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* 3-column success stories Shopify tier style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.author}
              className="glass-card rounded-3xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] flex flex-col"
              initial={{ y: 40, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: EASE }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.author}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                {/* Tier badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {story.tier}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Big stat */}
                <div className="mb-4">
                  <span className="font-heading text-3xl font-bold text-gradient">{story.stat}</span>
                  <span className="text-gray-500 text-xs ml-2">{story.statLabel}</span>
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{story.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-gray-800/50 pt-4">
                  <div className="font-semibold text-white text-sm">{story.author}</div>
                  <div className="text-gray-500 text-xs">{story.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
