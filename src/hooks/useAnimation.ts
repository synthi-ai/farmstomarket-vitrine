'use client'

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Hook pour vérifier si l'utilisateur préfère réduire les animations
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Hook pour animer les éléments lorsqu'ils entrent dans le viewport
export const useAnimateOnScroll = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });
  
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Si l'utilisateur préfère réduire les animations, considérer comme toujours visible
  const isVisible = prefersReducedMotion ? true : inView;
  
  return { ref, isVisible };
};

// Hook pour les animations avec délai
export const useDelayedAnimation = (delay: number, inView: boolean) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [inView, delay]);
  
  return shouldAnimate;
};