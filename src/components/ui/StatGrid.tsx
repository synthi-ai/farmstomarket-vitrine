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
  const bgClass = isDark
    ? 'bg-gray-800/50 border-gray-700'
    : variant === 'gray'
      ? 'bg-gray-50 border-gray-200'
      : 'bg-white border-gray-200';

  const valueClass = isDark ? 'text-emerald-400' : 'text-emerald-600';
  const labelClass = isDark ? 'text-gray-400' : 'text-gray-600';

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
            className={`text-center p-6 rounded-xl border ${bgClass}`}
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <div className={`text-2xl md:text-3xl font-bold mb-2 ${valueClass}`}>
              {stat.value}
            </div>
            <div className={`text-sm font-medium ${labelClass}`}>
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
          className={`text-center p-6 rounded-xl border ${bgClass}`}
        >
          <div className={`text-2xl md:text-3xl font-bold mb-2 ${valueClass}`}>
            {stat.value}
          </div>
          <div className={`text-sm font-medium ${labelClass}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
