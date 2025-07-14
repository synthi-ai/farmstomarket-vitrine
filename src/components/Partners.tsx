'use client';

import { useState, useEffect } from 'react';

const Partners = () => {
  const [inView, setInView] = useState(false);

  // Simple intersection observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('partners-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { name: 'Canon', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Canon-Logo.png' },
    { name: 'Facebook', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png' },
    { name: 'HubSpot', logo: 'https://logos-world.net/wp-content/uploads/2021/02/HubSpot-Logo.png' },
    { name: 'Airbnb', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Airbnb-Logo.png' },
  ];

  return (
    <section id="partners-section" className="py-16 bg-white mb-12">
      <div className="container mx-auto px-6">
        <h2 className={`text-2xl font-bold text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          They Believe in Us
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-500 ${
                inView ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: inView ? `${index * 0.1}s` : '0s'
              }}
            >
              <div className="h-12 w-32 flex items-center justify-center rounded overflow-hidden bg-white">
                <img
                  width={100}
                  height={48}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;