'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';

function useCountUp(target: number, isVisible: boolean, duration = 2000): number {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({ targetValue, suffix, label, isVisible, index }: {
  targetValue: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  index: number;
}) {
  const count = useCountUp(targetValue, isVisible);

  return (
    <motion.div
      className="flex flex-col items-center text-center px-6 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
    >
      <span className="font-heading text-4xl md:text-5xl font-bold text-emerald-400">
        {count}{suffix}
      </span>
      <span className="mt-3 text-gray-400 text-sm md:text-base uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

export default function CredibilityStats() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  const stats = [
    { targetValue: 50, suffix: 'K+', label: t('credibility.users.label') },
    { targetValue: 99, suffix: '.8%', label: t('credibility.uptime.label') },
    { targetValue: 15, suffix: '+', label: t('credibility.countries.label') },
  ];

  return (
    <section ref={ref} className="bg-gray-900 py-20 md:py-28 bg-geo-subtle">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              targetValue={stat.targetValue}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
