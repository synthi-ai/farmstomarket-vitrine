import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function HowProducers() {
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
      title: "Create Account",
      description: "Register & verify your account using a milk tax status.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "List Your Milk",
      description: "Share details, set your price, and publish in an instant.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="9" y="3" width="6" height="4" rx="1" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 14h6M9 18h4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: "text-indigo-500",
    },
    {
      title: "Chat & Negotiate",
      description: "Chat securely, review terms, and sign TPAs digitally.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: "text-emerald-500",
    },
    {
      title: "Deliver & Get Paid",
      description: "Track shipments in real-time and receive payments on time.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-12 max-w-6xl mx-auto" ref={containerRef}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold">How Producers Like You 3x Sales</h2>
        <h3 className="text-2xl font-semibold">in 4 Steps</h3>
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
            <div className={`w-20 h-20 rounded-full bg-white flex items-center justify-center border-2 ${step.iconColor || 'border-gray-400'} mb-4`}>
              <div className={step.iconColor || 'text-gray-500'}>
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