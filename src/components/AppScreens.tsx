'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function AppScreens() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef(null);
  
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

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();   
    return () => resetTimeout();
  }, [currentIndex, isAutoPlaying, screens.length]);

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

  const goToSlide = (index:any) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="w-full  rounded-xl py-12 px-6 max-w-6xl mx-auto relative">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center mb-12"
      >
        App Screens
      </motion.h2>
      
      <div className="relative">
        {/* Carousel Container */}
        <div className="flex justify-center items-center">
          {/* Left arrow navigation */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 z-10 transform -translate-y-1/2 top-1/2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          
          {/* Screens container */}
          <div className="flex justify-center items-center relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="flex gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {screens.map((screen, index) => {
                  // Calculate relative position from current index
                  const position = (index - currentIndex + screens.length) % screens.length;
                  // Show screens in the visible window (position 0-3)
                  if (position >= 0 && position <= 3) {
                    return (
                      <motion.div
                        key={screen.id}
                        className="w-36 md:w-44 2xl:w-48 rounded-3xl overflow-hidden shadow-lg"
                        initial={{ scale: 0.9, opacity: 0.7 }}
                        animate={{ 
                          scale: position === 0 ? 1 : 0.95,
                          opacity: position === 0 ? 1 : 0.9,
                          x: position * 10 // slight offset for a staggered effect
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          width={100}
                          height={100}
                          src={screen.image} 
                          alt={screen.alt}
                          className="w-full h-full object-cover rounded-3xl"
                          style={{ aspectRatio: '9/19' }} // maintain phone aspect ratio
                        />
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Right arrow navigation */}
          <motion.button
            onClick={goToNext}
            className="absolute right-0 z-10 transform -translate-y-1/2 top-1/2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {screens.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-6 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}