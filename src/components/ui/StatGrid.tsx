'use client';

import { motion, Variants } from 'framer-motion';

interface StatGridProps {
  stats: { value: string; label: string }[];
  variant?: 'white' | 'gray' | 'dark';
  animated?: boolean;
  isVisible?: boolean;
  containerVariants?: Variants;
  itemVariants?: Variants;
}

export default function StatGrid({
  stats,
  variant = 'dark',
  animated = false,
  isVisible = true,
  containerVariants,
  itemVariants,
}: StatGridProps) {
  const isDark = variant === 'dark';

  const cardClasses = isDark
    ? 'glass-card rounded-2xl'
    : variant === 'gray'
      ? 'bg-gray-50 border border-gray-200 rounded-2xl'
      : 'bg-white border border-gray-200 rounded-2xl';

  const valueClass = isDark ? 'text-gradient' : 'text-emerald-600';
  const labelClass = isDark ? 'text-gray-500' : 'text-gray-600';

  if (animated) {
    return (
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`text-center p-6 ${cardClasses}`}
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <div className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${valueClass}`}>
              {stat.value}
            </div>
            <div className={`text-sm font-medium uppercase tracking-wider ${labelClass}`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center p-6 ${cardClasses}`}
        >
          <div className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${valueClass}`}>
            {stat.value}
          </div>
          <div className={`text-sm font-medium uppercase tracking-wider ${labelClass}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
