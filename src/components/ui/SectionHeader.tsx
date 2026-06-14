'use client';

import { motion, Variants } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
  subtitle?: string;
  animated?: boolean;
  isVisible?: boolean;
  variants?: Variants;
  variant?: 'light' | 'dark';
}

export default function SectionHeader({
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
    <Wrapper className="text-center mb-20" {...wrapperProps}>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-[1.1] ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
          isDark ? 'text-gradient' : 'text-emerald-600'
        }`}>
          {subtitle}
        </h3>
      )}
      <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {description}
      </p>
    </Wrapper>
  );
}
