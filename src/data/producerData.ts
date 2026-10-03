import type { PersonaPageData } from '@/types/persona';
import { APPS, CONTACT, STATS } from './site';

export const producerData: PersonaPageData = {
  slug: 'producer',
  videoHero: {
    badgeKey: 'persona.producer.videoHero.badge',
    titleKey: 'persona.producer.videoHero.title',
    highlightKey: 'persona.producer.videoHero.highlight',
    descKey: 'persona.producer.videoHero.desc',
    statValue: STATS.producerStat,
    statLabelKey: 'persona.producer.videoHero.statLabel',
  },
  hero: {
    titleKey: 'persona.producer.hero.title',
    highlightKey: 'persona.producer.hero.highlight',
    descKey: 'persona.producer.hero.desc',
  },
  benefits: [
    { iconKey: 'chart', titleKey: 'persona.producer.benefit1.title', descKey: 'persona.producer.benefit1.desc' },
    { iconKey: 'zap', titleKey: 'persona.producer.benefit2.title', descKey: 'persona.producer.benefit2.desc' },
    { iconKey: 'globe', titleKey: 'persona.producer.benefit3.title', descKey: 'persona.producer.benefit3.desc' },
  ],
  steps: [
    { number: '.001', titleKey: 'producers.step1.title', descKey: 'producers.step1.description', img: '/Mockups/mockup 01.png' },
    { number: '.002', titleKey: 'producers.step2.title', descKey: 'producers.step2.description', img: '/Mockups/mockup 02.png' },
    { number: '.003', titleKey: 'producers.step3.title', descKey: 'producers.step3.description', img: '/Mockups/mockup 15.png' },
    { number: '.004', titleKey: 'producers.step4.title', descKey: 'producers.step4.description', img: '/Mockups/mockup 16.png' },
  ],
  features: [
    { titleKey: 'persona.producer.feat1.title', descKey: 'persona.producer.feat1.desc', img: '/Mockups/mockup 04.png' },
    { titleKey: 'persona.producer.feat2.title', descKey: 'persona.producer.feat2.desc', img: '/Mockups/mockup 19.png' },
    { titleKey: 'persona.producer.feat3.title', descKey: 'persona.producer.feat3.desc', img: '/Mockups/mockup 22.png' },
    { titleKey: 'persona.producer.feat4.title', descKey: 'persona.producer.feat4.desc', img: '/farmers/farms2.jpeg' },
  ],
  testimonial: {
    quoteKey: 'persona.producer.testimonial.quote',
    authorKey: 'persona.producer.testimonial.author',
    roleKey: 'persona.producer.testimonial.role',
    avatar: '/farmers/cassava1.jpeg',
  },
  cta: {
    titleKey: 'persona.producer.cta.title',
    descKey: 'persona.producer.cta.desc',
    primaryKey: 'persona.producer.cta.primary',
    primaryHref: APPS.googlePlay.buyer,
    secondaryKey: 'persona.producer.cta.secondary',
    secondaryHref: `mailto:${CONTACT.email}`,
  },
};