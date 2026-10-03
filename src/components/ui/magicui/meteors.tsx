"use client"

import React, { useMemo } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

/**
 * Deterministic pseudo-random in [0, 1) seeded by `seed`.
 *
 * The meteors must render identically on the server and on the client:
 * `Math.random()` (or a `window.innerWidth` read) would produce a different
 * DOM after hydration and re-randomise the animation on every prop change.
 */
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

export const Meteors = ({
  number = 12,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 3,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const meteorStyles = useMemo<Array<React.CSSProperties>>(
    () =>
      [...new Array(number)].map((_, i) => ({
        top: "-5%",
        left: `${Math.floor(pseudoRandom(i + 1) * 100)}%`,
        animationDelay: `${(pseudoRandom(i + 2) * (maxDelay - minDelay) + minDelay).toFixed(2)}s`,
        animationDuration: `${(pseudoRandom(i + 3) * (maxDuration - minDuration) + minDuration).toFixed(2)}s`,
      })),
    [number, minDelay, maxDelay, minDuration, maxDuration]
  )

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={{
            transform: `rotate(${angle}deg)`,
            ...style,
          }}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rounded-full bg-emerald-400/40 shadow-[0_0_0_1px_rgba(0,232,52,0.1)]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-emerald-400/40 to-transparent" />
        </span>
      ))}
    </>
  )
}
