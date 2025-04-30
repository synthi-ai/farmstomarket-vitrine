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
    avatar: "/images/photo.png" 
  },
  {
    id: 2,
    quote: "Completely satisfied",
    description: "Finally a platform where deliveries actually arrive on time",
    author: "Sarah",
    role: "Grocery Chain Owner",
    avatar: "/images/photo-1.png" 
  },
  {
    id: 3,
    quote: "Mind-blowing solution",
    description: "Farm-to-fridge time cut by a whopping 60% with complete for my records",
    author: "Kwame",
    role: "Cow Breeder",
    avatar: "/images/photo-2.png" 
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

  return (
    <div className="w-full bg-purple-50 py-16 px-4 overflow-hidden rounded-lg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Members Speak
          </motion.h2>
          <motion.p 
            className="mt-2 text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by 10,000+ Agricultural Pros
          </motion.p>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm w-64 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: activeIndex === index ? -8 : 0,
                boxShadow: activeIndex === index ? '0 10px 25px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <h3 className="font-semibold text-lg text-center mb-2">{testimonial.quote}</h3>
                <p className="text-gray-600 text-sm text-center">{testimonial.description}</p>
              </div>
              
              <div className="mt-6 flex items-center justify-center flex-col">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mb-2">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-1 w-8 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-green-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}