'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function BuyerSatisfactionSteps() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };
  
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%", 
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 }
    },
  };
  
  const steps = [
    {
      title: "Discover Verified Farms",
      description: "Find what you need in a wide range of quality goods easily with filters.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: "text-indigo-500 border-indigo-500",
    },
    {
      title: "Transparent Negotiation",
      description: "Chat directly with producers, order your products - no hidden fees.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: "text-emerald-500 border-emerald-500",
    },
    {
      title: "Pay Securely",
      description: "Funds held in agricultural bank until delivery and split delivery cost fairly.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 14h.01M12 14h.01M8 14h.01" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 10h20" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: "text-orange-500 border-orange-500",
    },
    {
      title: "Inspect & Approve",
      description: "24-hour inspection window. Request refunds for substandard goods.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15L20 4h1v5" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: "text-purple-500 border-purple-500",
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-12 max-w-6xl mx-auto rounded-xl" ref={containerRef}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold">How Buyers Get Satisfied in 4</h2>
        <h3 className="text-2xl font-bold">Steps</h3>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row justify-between items-start relative"
      >
        {/* Connecting line */}
        <div className="absolute top-10 left-12 right-12 hidden md:block">
          <motion.div 
            variants={lineVariants} 
            className="h-1 bg-gray-200"
          />
        </div>
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/4 px-4 relative z-10"
          >
            <div className={`w-20 h-20 rounded-full bg-white flex items-center justify-center border-2 ${step.iconColor} mb-4`}>
              <div className={step.iconColor.split(' ')[0]}>
                {step.icon}
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-center">{step.title}</h4>
            <p className="text-sm text-gray-600 text-center">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}