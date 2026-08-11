'use client';

import Image from 'next/image';

const PARTNERS = [
  { name: 'SYNTHI', src: '/farmers/LogoSYNTHI.png', useImage: true },
  { name: 'Orange Money', useImage: false },
  { name: 'MTN MoMo', useImage: false },
  { name: 'FAO Cameroun', useImage: false },
  { name: 'AfDB', useImage: false },
  { name: 'GIZ', useImage: false },
  { name: 'MINADER', useImage: false },
  { name: 'WFP Africa', useImage: false },
];

const ALL = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function Partners() {
  return (
    <section
      className="border-t border-gray-800/30 bg-gray-950 py-12 overflow-hidden"
      aria-label="Trusted partners and organisations"
    >
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-500">
        Trusted by leading agricultural organisations
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-gray-950 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-gray-950 to-transparent" aria-hidden="true" />

        {/* pause on hover AND keyboard focus */}
        <div className="flex animate-marquee w-max items-center focus-within:[animation-play-state:paused] hover:[animation-play-state:paused]">
          {ALL.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 px-10 flex items-center justify-center"
            >
              {partner.useImage && partner.src ? (
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-7 w-auto object-contain opacity-30 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-300 focus:opacity-60 focus:grayscale-0"
                  sizes="120px"
                />
              ) : (
                <span className="text-sm font-bold tracking-wide text-gray-500 hover:text-gray-300 transition-colors duration-300 whitespace-nowrap select-none focus:text-gray-300">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
