/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ReadyToTransform() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for phone images
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const phone1 = containerRef.current.querySelector('.phone-1') as HTMLElement;
      const phone2 = containerRef.current.querySelector('.phone-2') as HTMLElement;
      
      if (phone1 && phone2) {
        phone1.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
        phone2.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
    };
    
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  } as const;

  const phoneVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  } as const;

  return (
    <div className="w-full p-2 bg-blue-50 rounded-lg">
      <motion.div 
        ref={containerRef}
        className="overflow-hidden relative bg-green-500 w-full rounded-xl py-8 px-8 md:py-12 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side Content */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full relative z-10">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Ready to Transform<br />
              Your Agricultural<br />
              Business?
            </h2>
            <p className="text-sm md:text-base text-black opacity-80 mb-8 max-w-md">
              Join 10,000+ farmers, breeders and buyers and start trading fairly and securely.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#download-app-store"
                className="bg-white text-black rounded-full flex items-center px-4 py-2 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </motion.a>
              
              <motion.a
                href="#download-google-play"
                className="bg-white text-black rounded-full flex items-center px-4 py-2 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </motion.a>
            </div>
          </motion.div>
          
          {/* Phone Images */}
          <div className="relative h-80 md:h-96 w-full md:w-1/2">
            <motion.div 
              className="phone-1 absolute right-24 md:right-36 top-0 w-32 md:w-40 h-48 md:h-60 shadow-xl rounded-2xl overflow-hidden z-10"
              variants={phoneVariants}
            >
              {/* Mockup Phone 1 - Farm Interface */}
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 relative">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-b-lg z-10"></div>
                    
                    {/* Screen Content */}
                    <div className="p-4 pt-8 h-full bg-gradient-to-br from-green-50 to-white">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <h3 className="font-bold text-green-800 text-xs">Farm Dashboard</h3>
                        <div className="space-y-1">
                          <div className="h-1 bg-green-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-1 bg-green-300 rounded w-1/2 mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1 mt-4">
                          <div className="h-6 bg-green-200 rounded text-xs flex items-center justify-center">
                            <span className="text-green-800 font-semibold">Crops</span>
                          </div>
                          <div className="h-6 bg-green-300 rounded text-xs flex items-center justify-center">
                            <span className="text-green-800 font-semibold">Sales</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pagination dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-white opacity-70" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="phone-2 absolute right-4 top-8 w-36 md:w-44 h-56 md:h-72 shadow-xl rounded-2xl overflow-hidden"
              variants={phoneVariants}
              transition={{ delay: 0.2 }}
            >
              {/* Mockup Phone 2 - Market Interface */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1">
                <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden relative pt-6">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-lg z-10"></div>
                  
                  {/* Header */}
                  <div className="absolute top-2 left-0 right-0 text-center">
                    <p className="text-white font-bold text-sm">MARKET</p>
                  </div>
                  
                  {/* Content */}
                  <div className="px-4 text-white text-opacity-80 text-xs mt-8">
                    <p className="mb-2 font-semibold">Discover products</p>
                    <p className="text-white text-opacity-50 text-xs leading-relaxed">
                      Find the best local produce directly from farmers. All products are freshly harvested.
                    </p>
                  </div>
                  
                  {/* Product Cards */}
                  <div className="px-4 mt-4 space-y-2">
                    <div className="bg-white bg-opacity-10 rounded-lg p-2 flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-white bg-opacity-30 rounded w-3/4 mb-1"></div>
                        <div className="h-1 bg-white bg-opacity-20 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-2 flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-500 rounded"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-white bg-opacity-30 rounded w-2/3 mb-1"></div>
                        <div className="h-1 bg-white bg-opacity-20 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Buttons */}
                  <div className="absolute bottom-4 left-0 right-0 px-4">
                    <div className="bg-green-500 text-white text-xs py-2 rounded-md text-center font-semibold mb-2">
                      Browse Products
                    </div>
                    <div className="bg-white bg-opacity-20 text-white text-xs py-2 rounded-md text-center">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-green-400 opacity-20 rounded-l-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.2 }}
        />
        
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400 opacity-20 rounded-full transform translate-x-1/4 translate-y-1/4" />
      </motion.div>
    </div>
  );
}