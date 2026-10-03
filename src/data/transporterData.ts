import type { PersonaPageData } from '@/types/persona';
import { APPS, CONTACT, STATS } from './site';

export const transporterData: PersonaPageData = {
  slug: 'transporter',
  videoHero: {
    badgeKey: 'persona.transporter.videoHero.badge',
    titleKey: 'persona.transporter.videoHero.title',
    highlightKey: 'persona.transporter.videoHero.highlight',
    descKey: 'persona.transporter.videoHero.desc',
    statValue: STATS.transporterReliability,
    statLabelKey: 'persona.transporter.videoHero.statLabel',
  },
  hero: {
    titleKey: 'persona.transporter.hero.title',
    highlightKey: 'persona.transporter.hero.highlight',
    descKey: 'persona.transporter.hero.desc',
  },
  benefits: [
    { iconKey: 'truck', titleKey: 'persona.transporter.benefit1.title', descKey: 'persona.transporter.benefit1.desc' },
    { iconKey: 'zap', titleKey: 'persona.transporter.benefit2.title', descKey: 'persona.transporter.benefit2.desc' },
    { iconKey: 'users', titleKey: 'persona.transporter.benefit3.title', descKey: 'persona.transporter.benefit3.desc' },
  ],
  steps: [
    { number: '.001', titleKey: 'transporter.step1.title', descKey: 'transporter.step1.description', img: '/Mockups/mockup 14.png' },
    { number: '.002', titleKey: 'transporter.step2.title', descKey: 'transporter.step2.description', img: '/Mockups/mockup 12.png' },
    { number: '.003', titleKey: 'transporter.step3.title', descKey: 'transporter.step3.description', img: '/Mockups/mockup 10.png' },
    { number: '.004', titleKey: 'transporter.step4.title', descKey: 'transporter.step4.description', img: '/Mockups/mockup 09.png' },
  ],
  features: [
    { titleKey: 'persona.transporter.feat1.title', descKey: 'persona.transporter.feat1.desc', img: '/Mockups/mockup 11.png' },
    { titleKey: 'persona.transporter.feat2.title', descKey: 'persona.transporter.feat2.desc', img: '/Mockups/mockup 21.png' },
    { titleKey: 'persona.transporter.feat3.title', descKey: 'persona.transporter.feat3.desc', img: '/farmers/3.jpeg' },
    { titleKey: 'persona.transporter.feat4.title', descKey: 'persona.transporter.feat4.desc', img: '/farmers/7.jpeg' },
  ],
  testimonial: {
    quoteKey: 'persona.transporter.testimonial.quote',
    authorKey: 'persona.transporter.testimonial.author',
    roleKey: 'persona.transporter.testimonial.role',
    avatar: '/farmers/imag2.jpeg',
  },
  cta: {
    titleKey: 'persona.transporter.cta.title',
    descKey: 'persona.transporter.cta.desc',
    primaryKey: 'persona.transporter.cta.primary',
    primaryHref: APPS.googlePlay.buyer,
    secondaryKey: 'persona.transporter.cta.secondary',
    secondaryHref: `mailto:${CONTACT.email}`,
  },
};
