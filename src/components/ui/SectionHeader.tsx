'use client';

import { motion, Variants } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  subtitle?: string;
  animated?: boolean;
  isVisible?: boolean;
  variants?: Variants;
  variant?: 'light' | 'dark';
}

export default function SectionHeader({
  badge,
  title,
  description,
  subtitle,
  animated = false,
  isVisible = true,
  variants,
  variant = 'dark',
}: SectionHeaderProps) {
  const Wrapper = animated ? motion.div : 'div';

  const wrapperProps = animated
    ? {
        initial: 'hidden' as const,
        animate: isVisible ? 'visible' : 'hidden',
        variants,
      }
    : {};

  const isDark = variant === 'dark';

  return (
    <Wrapper className="text-center mb-16" {...wrapperProps}>
      <span className={`inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 border ${
        isDark
          ? 'bg-emerald-900/50 text-emerald-400 border-emerald-700'
          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
      }`}>
        {badge}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
          isDark ? 'text-emerald-400' : 'text-emerald-600'
        }`}>
          {subtitle}
        </h3>
      )}
      <p className={`text-lg max-w-3xl mx-auto ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {description}
      </p>
    </Wrapper>
  );
}
