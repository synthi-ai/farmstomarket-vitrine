'use client'

import Image from "next/image"

const Partners = () => {
  const partners = [
    { name: 'Partner 1', logo: '/images/amazon.png' },
    { name: 'Partner 2', logo: '/images/cannon.png' },
    { name: 'Partner 3', logo: '/images/facebook.png' },
    { name: 'Partner 4', logo: '/images/hubspot.png' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-12 fade-in-on-scroll">They Believe in Us</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 fade-in-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* In a real implementation, these would be actual images */}
              <div className="h-12 w-32 flex items-center justify-center rounded overflow-hidden bg-white">
        <Image
          width={100}
          height={100}
          src={`${partner.logo}`}
          alt={partner.name}
          className="h-full object-contain"
      />
      </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners