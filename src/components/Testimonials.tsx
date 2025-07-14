'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Amazing app!",
    description: "I used 70% less fertilizers in 2 weeks - I'm really happy",
    author: "John",
    role: "Tomato Farmer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 2,
    quote: "Completely satisfied",
    description: "Finally a platform where deliveries actually arrive on time",
    author: "Sarah",
    role: "Grocery Chain Owner",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1f6?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 3,
    quote: "Mind-blowing solution",
    description: "Farm-to-fridge time cut by a whopping 60% with complete for my records",
    author: "Kwame",
    role: "Cow Breeder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  } as const;

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  } as const;

  const subtitleVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.2,
        ease: "easeOut" 
      }
    }
  } as const;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  } as const;

  return (
    <div className="w-full bg-purple-50 py-16 px-4 overflow-hidden rounded-lg">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            variants={titleVariants}
          >
            Our Members Speak
          </motion.h2>
          <motion.p 
            className="mt-2 text-gray-600 text-sm"
            variants={subtitleVariants}
          >
            Trusted by 10,000+ Agricultural Pros
          </motion.p>
        </motion.div>

        <div className="flex justify-center gap-6 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm w-64 flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                animate={{
                  y: activeIndex === index ? -4 : 0,
                  scale: activeIndex === index ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold text-lg text-center mb-2">{testimonial.quote}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{testimonial.description}</p>
              </motion.div>
              
              <div className="mt-6 flex items-center justify-center flex-col">
                <motion.div 
                  className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-green-600 mb-2 p-0.5"
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1,
                    boxShadow: activeIndex === index ? '0 0 0 2px rgba(34, 197, 94, 0.3)' : '0 0 0 0px rgba(34, 197, 94, 0)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-1 w-8 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-green-500' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}