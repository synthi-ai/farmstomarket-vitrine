export interface PersonaBenefit {
  iconKey: 'chart' | 'shield' | 'zap' | 'truck' | 'wallet' | 'globe' | 'users' | 'lock' | 'trending' | 'smartphone';
  titleKey: string;
  descKey: string;
}

export interface PersonaStep {
  number: string;
  titleKey: string;
  descKey: string;
  img: string;
}

export interface PersonaFeature {
  titleKey: string;
  descKey: string;
  img: string;
}

export interface PersonaTestimonial {
  quoteKey: string;
  authorKey: string;
  roleKey: string;
  avatar: string;
}

export interface PersonaCta {
  titleKey: string;
  descKey: string;
  primaryKey: string;
  primaryHref: string;
  secondaryKey: string;
  secondaryHref: string;
}

export interface PersonaVideoHero {
  badgeKey: string;
  titleKey: string;
  highlightKey: string;
  descKey: string;
  statValue: string;
  statLabelKey: string;
}

export interface PersonaPageData {
  slug: string;
  videoHero: PersonaVideoHero;
  hero: {
    titleKey: string;
    highlightKey: string;
    descKey: string;
  };
  benefits: PersonaBenefit[];
  steps: PersonaStep[];
  features: PersonaFeature[];
  testimonial: PersonaTestimonial;
  cta: PersonaCta;
}
