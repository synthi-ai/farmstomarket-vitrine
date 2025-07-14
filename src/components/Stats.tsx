/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Stats = () => {
  const [inView, setInView] = useState(false);
  const controls = useAnimation();
  
  // Simple intersection observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [controls]);
  
  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  } as const;
  
  // Fixed the ease property - use string format for better TypeScript compatibility
  const itemVariants = {
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
  
  // Animation pour les chiffres qui comptent
  const AnimatedCounter = ({ end, suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!inView) return;
      
      let startValue = 0;
      const endValue = parseInt(end.replace(/\D/g, ''));
      const stepTime = Math.abs(Math.floor(duration * 1000 / endValue));
      
      const timer = setInterval(() => {
        startValue += Math.ceil(endValue / 100);
        
        if (startValue > endValue) {
          clearInterval(timer);
          setCount(endValue);
        } else {
          setCount(startValue);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }, [end, duration, inView]);
    
    return (
      <span>
        {suffix === 'k' ? '+' : ''}{count}{suffix === 'k' ? 'k' : ''}
      </span>
    );
  };
  
  const stats = [
    { value: "300", suffix: "", label: "Verified Producers" },
    { value: "15", suffix: "k", label: "Active Users" },
    { value: "500", suffix: "", label: "Tons of produce sold monthly" },
    { value: "10", suffix: "k", label: "Stores Downloads" }
  ];
  
  return (
    <section 
      id="stats-section"
      className="w-full py-12 px-4 rounded-lg text-center relative overflow-hidden"
      style={{ backgroundColor: '#00ff2a' }}
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-40 h-40 bg-white rounded-full -top-20 -left-20"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute w-56 h-56 bg-white rounded-full -bottom-28 -right-28"
        />
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Titre et sous-titre */}
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl font-bold mb-2 text-black"
        >
          Some count that matters
        </motion.h2>
        
        <motion.p 
          variants={itemVariants} 
          className="text-sm mb-12 text-black opacity-80"
        >
          Our achievement in the journey depicted in numbers
        </motion.p>
        
        {/* Statistiques */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center relative"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Séparateurs verticaux entre les statistiques (sauf le dernier) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-black opacity-20"></div>
              )}
              
              <motion.div 
                className="text-3xl font-bold text-black mb-1 flex items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                {stat.suffix === '' && '+'}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </motion.div>
              
              <motion.p 
                className="text-sm text-black opacity-80 max-w-[180px]"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;