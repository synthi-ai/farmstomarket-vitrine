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
}

export default function SectionHeader({
  badge,
  title,
  description,
  subtitle,
  animated = false,
  isVisible = true,
  variants,
}: SectionHeaderProps) {
  const Wrapper = animated ? motion.div : 'div';

  const wrapperProps = animated
    ? {
        initial: 'hidden' as const,
        animate: isVisible ? 'visible' : 'hidden',
        variants,
      }
    : {};

  return (
    <Wrapper className="text-center mb-16" {...wrapperProps}>
      <span className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-4 border border-emerald-200">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">
          {subtitle}
        </h3>
      )}
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </Wrapper>
  );
}
