import React, { type ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

const SHIMMER_BASE =
  'group relative inline-flex items-center justify-center overflow-hidden border border-emerald-500/30 px-8 py-3.5 font-bold text-white text-sm tracking-wide transition-all duration-200 ease-out hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

interface ShimmerStyleProps {
  shimmerColor?: string;
  background?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  className?: string;
}

/** Decorative layers shared by both the button and the link variant. */
function ShimmerLayers({ shimmerColor, borderRadius }: { shimmerColor: string; borderRadius: string }) {
  return (
    <>
      <span
        className="pointer-events-none absolute inset-0 -z-0 translate-x-[-200%] animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent"
        style={{ borderRadius, backgroundImage: `linear-gradient(90deg, transparent, ${shimmerColor}22, transparent)` }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 -z-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        aria-hidden="true"
      />
    </>
  );
}

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<'button'>, ShimmerStyleProps {}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#00e834',
      background = 'rgba(0, 232, 52, 0.08)',
      borderRadius = '9999px',
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      style={{ borderRadius, background }}
      className={cn(SHIMMER_BASE, className)}
      {...props}
    >
      <ShimmerLayers shimmerColor={shimmerColor} borderRadius={borderRadius} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  ),
);
ShimmerButton.displayName = 'ShimmerButton';

/**
 * Anchor variant. Prefer this over `ShimmerButton` + `onClick` for navigation so
 * the link keeps native behaviour: middle-click, "open in new tab", right-click
 * "copy link address", and keyboard activation.
 */
export interface ShimmerLinkProps extends ComponentPropsWithoutRef<'a'>, ShimmerStyleProps {}

export const ShimmerLink = React.forwardRef<HTMLAnchorElement, ShimmerLinkProps>(
  (
    {
      shimmerColor = '#00e834',
      background = 'rgba(0, 232, 52, 0.08)',
      borderRadius = '9999px',
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <a
      ref={ref}
      style={{ borderRadius, background }}
      className={cn(SHIMMER_BASE, className)}
      {...props}
    >
      <ShimmerLayers shimmerColor={shimmerColor} borderRadius={borderRadius} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  ),
);
ShimmerLink.displayName = 'ShimmerLink';