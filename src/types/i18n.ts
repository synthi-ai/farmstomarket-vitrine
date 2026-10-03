import type { en } from '@/i18n/en';

/** Languages the site can be displayed in. */
export const LANGUAGES = ['en', 'fr'] as const;
export type Language = (typeof LANGUAGES)[number];

/**
 * Every translatable key of the application.
 *
 * Derived from the English dictionary so that `fr.ts` can be typed as
 * `Record<TranslationKey, string>`: a missing or extra French key becomes a
 * compile error instead of a runtime `t()` call that silently renders the raw key.
 */
export type TranslationKey = keyof typeof en;