import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: string;
  suffix?: string;
  duration?: number;
}

export default function Stats() {
  const [inViewLocal, setInViewLocal] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setInViewLocal(true);
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  } as const;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
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
  
  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inViewLocal) return;

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
    }, [end, duration, inViewLocal]);
    
    return (
      <span>
        {suffix === 'k' ? '+' : ''}{count}{suffix === 'k' ? 'k' : ''}
      </span>
    );
  };
  
  const stats = [
    { value: "300", suffix: "", label: "Producteurs vérifiés" },
    { value: "5", suffix: "k", label: "Utilisateurs actifs" },
    { value: "500", suffix: "", label: "Tonnes vendues par mois" },
    { value: "15", suffix: "k", label: "Téléchargements" }
  ];

  return (
    <section className="py-20 bg-emerald-600" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Nos chiffres clés
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-emerald-100 mb-16 max-w-3xl mx-auto"
          >
            L&apos;impact de FarmsToMarket en quelques chiffres
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inViewLocal ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  {stat.suffix === '' && '+'}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </motion.div>

                <motion.p
                  className="text-emerald-100 font-medium"
                  initial={{ opacity: 0 }}
                  animate={inViewLocal ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}