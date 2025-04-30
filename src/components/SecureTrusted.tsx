'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SecureTrusted = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    },
  };

  return (
    <div className="relative w-full py-16 px-4">
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Titre principal */}
        <motion.h2 
          className="text-3xl font-bold mb-2" 
          variants={itemVariants}
        >
          Secure & Trusted
        </motion.h2>
        
        {/* Sous-titre */}
        <motion.p 
          className="text-gray-600 mb-12" 
          variants={itemVariants}
        >
          Solve Your Biggest Challenges
        </motion.p>
        
        {/* Les 3 fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Feature 1 */}
          <motion.div 
            className="flex flex-col items-center" 
            variants={featureVariants}
          >
            <div className="text-green-500 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20L12 14.5L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 4L12 9.5L17 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2">AI-Powered Pricing</h3>
            <p className="text-sm text-gray-600">
              Get real-time market insights to set prices that actually reflect demand, not guesswork.
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="flex flex-col items-center" 
            variants={featureVariants}
          >
            <div className="text-green-500 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Secure Escrow Payments</h3>
            <p className="text-sm text-gray-600">
              Buyers pay 40% upfront, sellers receive funds only after delivery confirmation. No scams, no delays.
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="flex flex-col items-center" 
            variants={featureVariants}
          >
            <div className="text-green-500 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Transparent Deliveries</h3>
            <p className="text-sm text-gray-600">
              Track shipments live, split delivery costs fairly, and hold transporters accountable.
            </p>
          </motion.div>
        </div>
        
        {/* Texte du milieu */}
        <motion.div 
          className="mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <p className="text-center mb-4">
            We&apos;re not just an app - we&apos;re a movement. By cutting out exploitative middlemen, we ensure 
            producers earn <span className="font-bold">100% of their worth</span>, while avoiding post-harvest losses, and buyers get <span className="font-bold">quality goods 
            on time</span>. Join thousands already thriving in a marketplace built on fairness, tech, and trust.
          </p>
        </motion.div>
        
        {/* Bouton */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-all"
          >
            Join Our Community
            <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SecureTrusted;