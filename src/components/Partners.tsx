'use client';

import Image from 'next/image';

const LOGOS = [
  { name: 'Airbnb', src: '/images/airbnb.png' },
  { name: 'Amazon', src: '/images/amazon.png' },
  { name: 'Canon', src: '/images/canon.png' },
  { name: 'Facebook', src: '/images/facebook.png' },
  { name: 'HubSpot', src: '/images/hubspot.png' },
];

export default function Partners() {
  return (
    <section className="py-14 bg-gray-950 border-t border-gray-800/40">
      <div className="mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
        {LOGOS.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={120}
            height={40}
            className="h-7 w-auto object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}
