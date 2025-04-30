'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FarmsMarketHero = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    // Animation légère du téléphone qui flotte
    const phoneElement = phoneRef.current as any;
    if (phoneElement) {
      let startY = 0;
      let floating = true;
      
      const floatAnimation = () => {
        if (!phoneElement) return;
        
        if (floating) {
          startY += 0.1;
          if (startY >= 10) floating = false;
        } else {
          startY -= 0.1;
          if (startY <= 0) floating = true;
        }
        
        phoneElement.style.transform = `translateY(${startY}px)`;
        requestAnimationFrame(floatAnimation);
      };
      
      const animationId = requestAnimationFrame(floatAnimation);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    }
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center py-16 px-4 overflow-hidden">
      {/* Téléphone - ajusté pour chevaucher la boîte verte */}
      <motion.div 
        ref={phoneRef}
        className="absolute left-28 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="w-64 h-auto">
            <Image 
              src="/images/iPhone.png" 
              alt="Farms Market Mobile App"
              width={300}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </motion.div>
      
      {/* Boîte verte - contenu principal, ajustée pour permettre le chevauchement */}
      <motion.div 
        className="ml-32 bg-green-500 rounded-lg p-8 text-right w-3/5 relative z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Ajout d'une marge à gauche pour le contenu pour éviter chevauchement avec le téléphone */}
        <div className="pl-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-1">
              <span className="text-white">FARMS.</span>
              <span className="text-black">MARKET</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-black mb-4">Trade Smarter,<br />Grow Together</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-black mb-8">
              At Farms to Market, we&apos;re revolutionizing how agri-food moves 
              from farm to the fingertips of both market users, village residents 
              and urban dwellers alike. Empowering farmers, retailers and 
              operators to connect, identify, negotiate, trade and coordinate 
              on the go.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-end space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {/* App Store Button */}
            <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <span className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"/>
                  <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </span>
              App Store
            </a>
            
            {/* Google Play Button */}
            <a href="#" className="flex items-center bg-white text-black border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5c0-.8.7-1.3 1.5-1.1l12 6.9c.5.3.5 1 0 1.3l-12 6.9c-.8.5-1.5 0-1.5-1z"/>
                  <path d="M3 3.5l11 11-11 6V3.5zM15 12l-9 9h13.5c1.4 0 2.5-1.1 2.5-2.5v-13c0-1.4-1.1-2.5-2.5-2.5H15v9z"/>
                </svg>
              </span>
              Google Play
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FarmsMarketHero;