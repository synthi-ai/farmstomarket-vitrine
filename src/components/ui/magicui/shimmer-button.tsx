import React, { type ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  background?: string
  borderRadius?: string
  children?: React.ReactNode
  className?: string
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#00e834",
      background = "rgba(0, 232, 52, 0.08)",
      borderRadius = "9999px",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={{ borderRadius, background }}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden",
          "border border-emerald-500/30 px-8 py-3.5",
          "font-bold text-white text-sm tracking-wide",
          "transition-all duration-200 ease-out",
          "hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/20",
          "active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          className
        )}
        {...props}
      >
        {/* shimmer sweep */}
        <span
          className="pointer-events-none absolute inset-0 -z-0 translate-x-[-200%] animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent"
          style={{ borderRadius }}
          aria-hidden="true"
        />
        {/* highlight ring */}
        <span
          className="pointer-events-none absolute inset-0 -z-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)
ShimmerButton.displayName = "ShimmerButton"
