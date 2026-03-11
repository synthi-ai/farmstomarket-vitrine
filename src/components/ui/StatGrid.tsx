'use client';

import { motion, Variants } from 'framer-motion';

interface StatGridProps {
  stats: { value: string; label: string }[];
  variant?: 'white' | 'gray';
  animated?: boolean;
  isVisible?: boolean;
  containerVariants?: Variants;
  itemVariants?: Variants;
}

export default function StatGrid({
  stats,
  variant = 'white',
  animated = false,
  isVisible = true,
  containerVariants,
  itemVariants,
}: StatGridProps) {
  const bgClass = variant === 'gray' ? 'bg-gray-50' : 'bg-white';

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
            className={`text-center p-6 ${bgClass} rounded-xl border border-gray-200`}
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 font-medium">
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
          className={`text-center p-6 ${bgClass} rounded-xl border border-gray-200`}
        >
          <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
