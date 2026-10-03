import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';
import type { Language, TranslationKey } from '@/types/i18n';

/**
 * Server-side translation. Mirrors the client `t()` from `LanguageContext` so
 * React Server Components can render localized text without shipping any
 * JavaScript. The URL locale is the single source of truth.
 */

const DICTIONARIES: Record<Language, Record<TranslationKey, string>> = { en, fr };

const TOKEN = /\{(\w+)\}/g;

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(TOKEN, (match, token: string) =>
    token in vars ? String(vars[token]) : match,
  );
}

export type TFunction = (
  key: TranslationKey,
  vars?: Record<string, string | number>,
) => string;

export interface Dictionary {
  lang: Language;
  t: TFunction;
}

export function getDictionary(lang: Language): Dictionary {
  const dict = DICTIONARIES[lang] ?? DICTIONARIES.en;
  const t: TFunction = (key, vars) => interpolate(dict[key] ?? key, vars);
  return { lang, t };
}
