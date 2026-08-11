'use client'

import { useSyncExternalStore } from 'react';
import { useInView } from 'react-intersection-observer';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToMotionPreference(callback: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getMotionPreferenceSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getMotionPreferenceServerSnapshot() {
  return false;
}

// Hook pour vérifier si l'utilisateur préfère réduire les animations
export const usePrefersReducedMotion = () => {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreferenceSnapshot,
    getMotionPreferenceServerSnapshot,
  );
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

