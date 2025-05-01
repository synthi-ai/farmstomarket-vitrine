'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CuttingEdgeFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      title: "AI-Powered Insights",
      description: "Get real-time market insights and yield forecasts to set prices that actually reflect demand, not guesswork.",
      icon: (
        <div className="w-6 h-6 bg-green-400 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-sm"></div>
        </div>
      ),
    },
    {
      title: "Secure Escrow Payments",
      description: "45% upfront, 55% on delivery - funds held safely until you approve. No scams, no delays.",
      icon: (
        <div className="w-6 h-6 bg-green-400 rounded-lg flex items-center justify-center">
          <div className="w-4 h-1 bg-white rounded-sm"></div>
          <div className="w-4 h-1 bg-white rounded-sm mt-1"></div>
        </div>
      ),
    },
    {
      title: "Transparent Deliveries",
      description: "Track delivery live, split delivery costs fairly, and get updates from transporters in real-time.",
      icon: (
        <div className="w-6 h-6 bg-green-400 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-sm"></div>
        </div>
      ),
    },
    {
      title: "In-App Legal Docs",
      description: "Pre-built FAF templates and compliance-certified contracts.",
      icon: (
        <div className="w-6 h-6 bg-green-400 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-sm"></div>
        </div>
      ),
    },
  ];

  const phoneScreens = [
    "/images/iPhone.png",
    "/images/iPhone14.png",
    "/images/father.jpg",
    "/images/mother.jpg",
  ];

  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-between p-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 pr-4"
      >
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Cutting-Edge Features</h2>
        
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.7 }}
              animate={{ 
                opacity: activeFeature === index ? 1 : 0.7,
                scale: activeFeature === index ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4 cursor-pointer"
              onClick={() => setActiveFeature(index)}
            >
              <div className="pt-1">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <div className="relative w-64 h-128">
          {/* Phone frame */}
          <div className="absolute w-full h-full rounded-3xl bg-black z-10">
            {/* Screen */}
            <div className="absolute top-1 left-1 right-1 bottom-1 bg-white rounded-3xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-20"></div>
              
              {/* Screen content */}
              <div className="w-full h-full pt-8 relative">
                {phoneScreens.map((screen, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeFeature === index ? 1 : 0,
                      scale: activeFeature === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={screen} 
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                ))}
                
                {/* Bottom action button */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="bg-green-500 text-white rounded-full py-2 px-8 font-medium">
                    Get Started
                  </div>
                </div>
                
                {/* Bottom navigation */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-6">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9h18v11H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 5V3M8 5L7 3M16 5l1-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="2" />
                      <path d="M19 22c0-3.866-3.134-7-7-7s-7 3.134-7 7" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}