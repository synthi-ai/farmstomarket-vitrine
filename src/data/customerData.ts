import type { PersonaPageData } from '@/types/persona';
import { APPS, CONTACT, STATS } from './site';

export const customerData: PersonaPageData = {
  slug: 'customer',
  videoHero: {
    badgeKey: 'persona.customer.videoHero.badge',
    titleKey: 'persona.customer.videoHero.title',
    highlightKey: 'persona.customer.videoHero.highlight',
    descKey: 'persona.customer.videoHero.desc',
    statValue: STATS.buyerStat,
    statLabelKey: 'persona.customer.videoHero.statLabel',
  },
  hero: {
    titleKey: 'persona.customer.hero.title',
    highlightKey: 'persona.customer.hero.highlight',
    descKey: 'persona.customer.hero.desc',
  },
  benefits: [
    { iconKey: 'shield', titleKey: 'persona.customer.benefit1.title', descKey: 'persona.customer.benefit1.desc' },
    { iconKey: 'lock', titleKey: 'persona.customer.benefit2.title', descKey: 'persona.customer.benefit2.desc' },
    { iconKey: 'trending', titleKey: 'persona.customer.benefit3.title', descKey: 'persona.customer.benefit3.desc' },
  ],
  steps: [
    { number: '.001', titleKey: 'buyersProcess.step1.title', descKey: 'buyersProcess.step1.description', img: '/Mockups/mockup 07.png' },
    { number: '.002', titleKey: 'buyersProcess.step2.title', descKey: 'buyersProcess.step2.description', img: '/Mockups/mockup 17.png' },
    { number: '.003', titleKey: 'buyersProcess.step3.title', descKey: 'buyersProcess.step3.description', img: '/Mockups/mockup 18.png' },
    { number: '.004', titleKey: 'buyersProcess.step4.title', descKey: 'buyersProcess.step4.description', img: '/Mockups/mockup 23.png' },
  ],
  features: [
    { titleKey: 'persona.customer.feat1.title', descKey: 'persona.customer.feat1.desc', img: '/Mockups/mockup 05.png' },
    { titleKey: 'persona.customer.feat2.title', descKey: 'persona.customer.feat2.desc', img: '/Mockups/mockup 13.png' },
    { titleKey: 'persona.customer.feat3.title', descKey: 'persona.customer.feat3.desc', img: '/Mockups/mockup 20.png' },
    { titleKey: 'persona.customer.feat4.title', descKey: 'persona.customer.feat4.desc', img: '/farmers/poivrons.jpeg' },
  ],
  testimonial: {
    quoteKey: 'persona.customer.testimonial.quote',
    authorKey: 'persona.customer.testimonial.author',
    roleKey: 'persona.customer.testimonial.role',
    avatar: '/farmers/images1.jpeg',
  },
  cta: {
    titleKey: 'persona.customer.cta.title',
    descKey: 'persona.customer.cta.desc',
    primaryKey: 'persona.customer.cta.primary',
    primaryHref: APPS.googlePlay.buyer,
    secondaryKey: 'persona.customer.cta.secondary',
    secondaryHref: `mailto:${CONTACT.email}`,
  },
};
