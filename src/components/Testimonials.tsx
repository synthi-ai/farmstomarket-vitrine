'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const DRAG_THRESHOLD = 50;

export default function Testimonials() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);
  const [current, setCurrent] = useState(0);

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

  const paginate = (direction: number) => {
    setCurrent((prev) => {
      const next = prev + direction;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -DRAG_THRESHOLD) {
      setDirection(1);
      paginate(1);
    } else if (info.offset.x > DRAG_THRESHOLD) {
      setDirection(-1);
      paginate(-1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={t('testimonials.title')}
          description={t('testimonials.description')}
          animated
          isVisible={isVisible}
          variants={staggerChildrenVariants}
        />

        {/* Carousel */}
        <motion.div
          className="relative mb-12 overflow-hidden"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <div className="relative w-full max-w-3xl mx-auto min-h-[320px] flex items-center justify-center">
            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="absolute w-full cursor-grab active:cursor-grabbing"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 md:p-12 shadow-2xl">
                  <div className="mb-8">
                    <svg
                      className="w-10 h-10 text-emerald-500 mb-4 opacity-60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.3 2.6C6.1 5.1 3 9.3 3 14c0 3.3 2.4 6 5.4 6 2.8 0 5.1-2.2 5.1-5s-2.3-5-5.1-5c-.5 0-1 .1-1.4.2C7.6 7 9.8 4.6 13 3l-1.7-.4zM22.2 2.6C17 5.1 13.9 9.3 13.9 14c0 3.3 2.4 6 5.4 6 2.8 0 5.1-2.2 5.1-5s-2.3-5-5.1-5c-.5 0-1 .1-1.4.2.6-3.2 2.8-5.6 6-7.2l-1.7-.4z" />
                    </svg>
                    <h3 className="font-semibold text-xl md:text-2xl text-white mb-4 leading-snug">
                      {testimonials[current].quote}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                      {testimonials[current].description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-emerald-500/40">
                      <Image
                        src={testimonials[current].avatar}
                        alt={testimonials[current].author}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">
                        {testimonials[current].author}
                      </p>
                      <p className="text-emerald-400 text-sm">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-emerald-500 scale-125'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <StatGrid
          stats={stats}
          variant="dark"
          animated
          isVisible={isVisible}
          containerVariants={staggerChildrenVariants}
          itemVariants={fadeUpVariants}
        />
      </div>
    </section>
  );
}
