/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function AppScreens() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  
  // App screens data
  const screens = [
    {
      id: 1,
      image: "/images/splash1.png", 
      alt: "Woman farmer with FARMS MARKET overlay"
    },
    {
      id: 2,
      image: "/images/splash4.png", 
      alt: "Dark screen with FARMS MARKET text"
    },
    {
      id: 3,
      image: "/images/splash5.png",
      alt: "Product screen with tomatoes"
    },
    {
      id: 4,
      image: "/images/splash6.png",
      alt: "Map view screen"
    }
  ];

  // Check for mobile screens
  useEffect(() => {
    const checkForMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    checkForMobile();

    // Add event listener
    window.addEventListener('resize', checkForMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkForMobile);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Handle auto-play and timer resets
  useEffect(() => {
    resetTimeout();
    
    if (isAutoPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length);
      }, 3000);
    }
    
    return () => resetTimeout();
  }, [currentIndex, isAutoPlaying, screens.length]);

  // Add touch swipe functionality
  useEffect(() => {
    const carousel = carouselRef.current as any;
    if (!carousel) return;

    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      touchEndX = e.touches[0].clientX;
    };
    
    const handleTouchEnd = () => {
      const swipeDistance = touchEndX - touchStartX;
      // If swipe distance is significant
      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0) {
          goToPrevious();
        } else {
          goToNext();
        }
      }
    };
    
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === 0 ? screens.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    const newIndex = (currentIndex + 1) % screens.length;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index:number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Determine how many screens to show based on device size
  const getVisibleScreenCount = () => {
    if (isMobile) return 1;
    return 3;
  };

  return (
    <div className="w-full rounded-xl py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
      >
        App Screens
      </motion.h2>
      
      <div className="relative" ref={carouselRef}>
        {/* Carousel Container */}
        <div className="flex justify-center items-center">
          {/* Left arrow navigation - hidden on very small screens */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 z-10 transform -translate-y-1/2 top-1/2 hidden xs:block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous screen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-8">
              <path d="M15 18l-6-6 6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          
          {/* Screens Container */}
          <div className="flex justify-center items-center relative w-full overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="flex gap-2 sm:gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {screens.map((screen, index) => {
                  // Calculate relative position from current index with wrapping
                  const position = (index - currentIndex + screens.length) % screens.length;
                  
                  // Show screens in the visible window based on device size
                  const visibleCount = getVisibleScreenCount();
                  
                  if (position >= 0 && position < visibleCount) {
                    return (
                      <motion.div
                        key={screen.id}
                        className={`${
                          position === 0 
                            ? 'w-32 xs:w-36 sm:w-40 md:w-44 2xl:w-48 z-20' 
                            : 'w-24 xs:w-28 sm:w-32 md:w-36 2xl:w-40 z-10 hidden sm:block'
                        } rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg`}
                        initial={{ scale: 0.9, opacity: 0.7 }}
                        animate={{ 
                          scale: position === 0 ? 1 : 0.9,
                          opacity: position === 0 ? 1 : 0.8,
                          x: isMobile ? 0 : position * 5 // slight offset for staggered effect on non-mobile
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative">
                          <Image
                            width={196}
                            height={416}
                            src={screen.image} 
                            alt={screen.alt}
                            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                            priority={position === 0}
                            style={{ aspectRatio: '9/19' }} // maintain phone aspect ratio
                          />
                        </div>
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Right arrow navigation - hidden on very small screens */}
          <motion.button
            onClick={goToNext}
            className="absolute right-0 z-10 transform -translate-y-1/2 top-1/2 hidden xs:block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next screen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-8">
              <path d="M9 18l6-6-6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
        
        {/* Pagination dots - more compact on mobile */}
        <div className="flex justify-center mt-4 sm:mt-8 space-x-1 sm:space-x-2">
          {screens.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-4 sm:w-6 h-1 sm:h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Mobile-only swipe indicator - only shown initially */}
        {isMobile && (
          <motion.div 
            className="text-center mt-4 text-xs text-gray-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Swipe left or right to navigate
          </motion.div>
        )}
      </div>
    </div>
  );
}