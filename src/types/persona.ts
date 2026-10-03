import type { TranslationKey } from '@/types/i18n';

export type PersonaIconKey =
  | 'chart'
  | 'shield'
  | 'zap'
  | 'truck'
  | 'wallet'
  | 'globe'
  | 'users'
  | 'lock'
  | 'trending'
  | 'smartphone';

export interface PersonaBenefit {
  iconKey: PersonaIconKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

export interface PersonaStep {
  number: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  img: string;
}

export interface PersonaFeature {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  img: string;
}

export interface PersonaTestimonial {
  quoteKey: TranslationKey;
  authorKey: TranslationKey;
  roleKey: TranslationKey;
  avatar: string;
}

export interface PersonaCta {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  primaryKey: TranslationKey;
  primaryHref: string;
  secondaryKey: TranslationKey;
  secondaryHref: string;
}

export interface PersonaVideoHero {
  badgeKey: TranslationKey;
  titleKey: TranslationKey;
  highlightKey: TranslationKey;
  descKey: TranslationKey;
  statValue: string;
  statLabelKey: TranslationKey;
}

export interface PersonaPageData {
  slug: 'producer' | 'customer' | 'transporter';
  videoHero: PersonaVideoHero;
  hero: {
    titleKey: TranslationKey;
    highlightKey: TranslationKey;
    descKey: TranslationKey;
  };
  benefits: PersonaBenefit[];
  steps: PersonaStep[];
  features: PersonaFeature[];
  testimonial: PersonaTestimonial;
  cta: PersonaCta;
}