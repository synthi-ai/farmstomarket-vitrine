import type { PersonaPageData } from '@/types/persona';

export const agrobankData: PersonaPageData = {
  slug: 'agrobank',
  videoHero: {
    badgeKey: 'persona.agrobank.videoHero.badge',
    titleKey: 'persona.agrobank.videoHero.title',
    highlightKey: 'persona.agrobank.videoHero.highlight',
    descKey: 'persona.agrobank.videoHero.desc',
    statValue: '72.9K+',
    statLabelKey: 'persona.agrobank.videoHero.statLabel',
  },
  hero: {
    titleKey: 'persona.agrobank.hero.title',
    highlightKey: 'persona.agrobank.hero.highlight',
    descKey: 'persona.agrobank.hero.desc',
  },
  benefits: [
    { iconKey: 'wallet', titleKey: 'persona.agrobank.benefit1.title', descKey: 'persona.agrobank.benefit1.desc' },
    { iconKey: 'shield', titleKey: 'persona.agrobank.benefit2.title', descKey: 'persona.agrobank.benefit2.desc' },
    { iconKey: 'smartphone', titleKey: 'persona.agrobank.benefit3.title', descKey: 'persona.agrobank.benefit3.desc' },
  ],
  steps: [
    { number: '.001', titleKey: 'persona.agrobank.step1.title', descKey: 'persona.agrobank.step1.desc', img: '/Mockups/mockup 03.png' },
    { number: '.002', titleKey: 'persona.agrobank.step2.title', descKey: 'persona.agrobank.step2.desc', img: '/Mockups/mockup 11.png' },
    { number: '.003', titleKey: 'persona.agrobank.step3.title', descKey: 'persona.agrobank.step3.desc', img: '/Mockups/mockup 06.png' },
    { number: '.004', titleKey: 'persona.agrobank.step4.title', descKey: 'persona.agrobank.step4.desc', img: '/Mockups/mockup 16.png' },
  ],
  features: [
    { titleKey: 'persona.agrobank.feat1.title', descKey: 'persona.agrobank.feat1.desc', img: '/Mockups/mockup 01.png' },
    { titleKey: 'persona.agrobank.feat2.title', descKey: 'persona.agrobank.feat2.desc', img: '/Mockups/mockup 02.png' },
    { titleKey: 'persona.agrobank.feat3.title', descKey: 'persona.agrobank.feat3.desc', img: '/Mockups/mockup 23.png' },
    { titleKey: 'persona.agrobank.feat4.title', descKey: 'persona.agrobank.feat4.desc', img: '/farmers/4.jpeg' },
  ],
  testimonial: {
    quoteKey: 'persona.agrobank.testimonial.quote',
    authorKey: 'persona.agrobank.testimonial.author',
    roleKey: 'persona.agrobank.testimonial.role',
    avatar: '/farmers/5.jpeg',
  },
  cta: {
    titleKey: 'persona.agrobank.cta.title',
    descKey: 'persona.agrobank.cta.desc',
    primaryKey: 'persona.agrobank.cta.primary',
    primaryHref: '#',
    secondaryKey: 'persona.agrobank.cta.secondary',
    secondaryHref: '#',
  },
};
