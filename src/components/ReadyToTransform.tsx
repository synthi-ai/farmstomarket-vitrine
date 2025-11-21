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
    <div className="w-full bg-white relative overflow-hidden" style={{ height: '685px', padding: '100px 40px 0px' }}>
      {/* Main Container - Following Figma Design */}
      <motion.div 
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto h-full"
        style={{
          background: '#10b981',
          borderRadius: '40px 40px 0px 0px',
          padding: '100px 96px',
          height: '585px',
          isolation: 'isolate'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Content Container */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-10 h-full">
          
          {/* Left Side Content - Exact Figma Dimensions */}
          <motion.div 
            className="flex flex-col justify-center items-start"
            style={{
              width: '591px',
              height: '277px',
              gap: '16px'
            }}
            variants={itemVariants}
          >
            {/* Main Title */}
            <h2 
              className="font-bold text-black leading-tight"
              style={{
                width: '591px',
                height: '201px',
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 700,
                fontSize: '56px',
                lineHeight: '120%',
                letterSpacing: '-1px',
                color: '#000000'
              }}
            >
              Ready to Transform Your Agricultural Business?
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-black"
              style={{
                width: '591px',
                height: '60px',
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                color: '#000000'
              }}
            >
              Join 10,000+ farmers, breeders and buyers and start trading fairly and securely.
            </p>
          </motion.div>

          {/* App Store Buttons Container */}
          <motion.div 
            className="flex flex-row items-center gap-5 mt-8 md:mt-0"
            style={{
              width: '395px',
              height: '60px',
              gap: '20px'
            }}
            variants={itemVariants}
          >
            {/* App Store Button */}
            <motion.a
              href="#download-app-store"
              className="relative flex items-center justify-center"
              style={{
                width: '188px',
                height: '60px',
                background: '#FFFFFF',
                borderRadius: '16px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Apple Logo and Text */}
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-black opacity-60">Download on the</div>
                  <div className="font-semibold text-black">App Store</div>
                </div>
              </div>
            </motion.a>
            
            {/* Google Play Button */}
            <motion.a
              href="#download-google-play"
              className="relative flex items-center justify-center"
              style={{
                width: '187px',
                height: '56px',
                background: '#FFFFFF',
                borderRadius: '16px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Google Play Logo and Text */}
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="#32BBFF"/>
                  <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#32BBFF"/>
                  <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="#32BBFF"/>
                  <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#00F076"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-black opacity-60">Get it on</div>
                  <div className="font-semibold text-black">Google Play</div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Phone Mockups Container - Positioned Absolutely */}
          <div 
            className="absolute"
            style={{
              width: '496px',
              height: '745px',
              right: '40px',
              top: '-140px',
              zIndex: 2
            }}
          >
            {/* Phone Mockup 1 */}
            <motion.div 
              className="phone-1 absolute"
              style={{
                width: '232px',
                height: '464px',
                left: '0px',
                top: '0px',
                filter: 'drop-shadow(10px 15px 30px rgba(10, 10, 34, 0.1))'
              }}
              variants={phoneVariants}
            >
              {/* iPhone Frame with Figma Design */}
              <div 
                className="relative w-full h-full"
                style={{
                  background: '#262831',
                  borderRadius: '40px'
                }}
              >
                {/* Screen */}
                <div 
                  className="absolute"
                  style={{
                    left: '6.51%',
                    right: '6.28%',
                    top: '2.67%',
                    bottom: '3.02%',
                    background: '#F3F3F3',
                    borderRadius: '35px'
                  }}
                >
                  {/* Screen Content - Farm Dashboard */}
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-white p-6 flex flex-col items-center justify-center rounded-[35px]">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-green-800 mb-4">Farm Dashboard</h3>
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-green-200 rounded w-3/4 mx-auto"></div>
                      <div className="h-2 bg-green-300 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>

                {/* iPhone Hardware Elements */}
                {/* Notch */}
                <div 
                  className="absolute"
                  style={{
                    left: '38.92%',
                    right: '59.22%',
                    top: '3.26%',
                    bottom: '95.81%',
                    background: '#262831',
                    borderRadius: '0 0 10px 10px'
                  }}
                />
                
                {/* Side Buttons */}
                <div 
                  className="absolute"
                  style={{
                    left: '-2px',
                    width: '3px',
                    top: '13.18%',
                    bottom: '82.79%',
                    background: '#262831',
                    borderRadius: '0 3px 3px 0'
                  }}
                />
              </div>
            </motion.div>
            
            {/* Phone Mockup 2 */}
            <motion.div 
              className="phone-2 absolute"
              style={{
                width: '232px',
                height: '464px',
                right: '0px',
                top: '281px',
                filter: 'drop-shadow(10px 15px 30px rgba(10, 10, 34, 0.1))'
              }}
              variants={phoneVariants}
              transition={{ delay: 0.2 }}
            >
              {/* iPhone Frame with Figma Design */}
              <div 
                className="relative w-full h-full"
                style={{
                  background: '#262831',
                  borderRadius: '40px'
                }}
              >
                {/* Screen */}
                <div 
                  className="absolute"
                  style={{
                    left: '6.51%',
                    right: '6.28%',
                    top: '2.67%',
                    bottom: '3.02%',
                    background: '#0B0D17',
                    borderRadius: '35px'
                  }}
                >
                  {/* Screen Content - Market Interface */}
                  <div className="w-full h-full bg-gray-900 p-6 flex flex-col rounded-[35px]">
                    <div className="text-center mb-6">
                      <h3 className="text-white font-bold text-lg">MARKET</h3>
                      <p className="text-white text-opacity-80 text-sm mt-2">Discover products</p>
                    </div>
                    
                    {/* Product Cards */}
                    <div className="space-y-3 flex-1">
                      <div className="bg-white bg-opacity-10 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-white bg-opacity-40 rounded w-3/4 mb-2"></div>
                          <div className="h-1 bg-white bg-opacity-20 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-500 rounded"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-white bg-opacity-40 rounded w-2/3 mb-2"></div>
                          <div className="h-1 bg-white bg-opacity-20 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Button */}
                    <div className="mt-4">
                      <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold">
                        Browse Products
                      </button>
                    </div>
                  </div>
                </div>

                {/* iPhone Hardware Elements */}
                {/* Notch */}
                <div 
                  className="absolute"
                  style={{
                    left: '38.92%',
                    right: '59.22%',
                    top: '3.26%',
                    bottom: '95.81%',
                    background: '#262831',
                    borderRadius: '0 0 10px 10px'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="absolute"
          style={{
            width: '1160px',
            height: '2px',
            left: 'calc(50% - 580px)',
            bottom: '254px',
            border: '2px solid rgba(194, 194, 194, 0.1)',
            zIndex: 1
          }}
        />
      </motion.div>
    </div>
  );
}