

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ReadyToTransform() {
  const containerRef = useRef(null) as any;

  // Parallax effect for phone images
  useEffect(() => {
    const handleMouseMove = (e:any) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const phone1 = containerRef.current.querySelector('.phone-1');
      const phone2 = containerRef.current.querySelector('.phone-2');
      
      if (phone1 && phone2) {
        phone1.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
        phone2.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
    };
    
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="w-full p-2 bg-blue-50 rounded-lg">
      <motion.div 
        ref={containerRef}
        className="overflow-hidden relative bg-green-500 w-full rounded-xl py-8 px-8 md:py-12 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side Content */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full relative z-10">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="/images/mockup1.png" 
                alt="Farmer with produce" 
                className="w-[400px] h-full object-cover"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="phone-2 absolute right-4 top-8 w-36 md:w-44 h-56 md:h-72 shadow-xl rounded-2xl overflow-hidden bg-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-full h-full relative bg-gray-900 pt-6">
                <div className="absolute top-2 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm">MARKET</p>
                </div>
                
                <div className="px-4 text-white text-opacity-80 text-xs mt-8">
                  <p className="mb-2">Discover products</p>
                  <p className="text-white text-opacity-50 text-xxs">
                    Find the best local produce directly from farmers. All products are freshly harvested and delivered to your doorstep.
                  </p>
                </div>
                
                <div className="absolute bottom-12 left-0 right-0 px-4">
                  <div className="bg-green-500 text-white text-xs py-2 rounded-md text-center">
                    Browse Products
                  </div>
                  <div className="mt-2 bg-white bg-opacity-20 text-white text-xs py-2 rounded-md text-center">
                    Learn More
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