'use client'


import { Variants } from 'framer-motion';

// Animation de fondu (fade)
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

// Animation de fondu avec déplacement vers le haut
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

// Animation de fondu avec déplacement vers la droite
export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

// Animation de fondu avec déplacement vers la gauche
export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

// Animation de zoom
export const zoomInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

// Animation pour les cartes avec délai entre chaque élément
export const staggerChildrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation pour le bouton "highlight"
export const pulseVariants: Variants = {
  idle: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: '0px 0px 8px rgba(0, 230, 64, 0.6)',
    transition: { duration: 0.3, ease: 'easeInOut', repeat: 0 }
  },
};

// Animation pour le compteur
export const counterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      delay: custom * 0.1,
      ease: 'easeOut' 
    }
  }),
};