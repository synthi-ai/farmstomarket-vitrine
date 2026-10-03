'use client';

import { createContext, useCallback, useContext, useMemo } from 'react';
import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';
import { LANGUAGES, type Language, type TranslationKey } from '@/types/i18n';

export { LANGUAGES, type Language };

/* ──────────────────────────────────────────────────────────────
   Client translation.

   The active language now comes from the URL (`/[lang]/…`) and is
   passed down by `app/[lang]/layout.tsx`. This provider is a thin,
   stateless derivation of that prop — no `localStorage`, no
   `useSyncExternalStore`, no hydration dance — so interactive client
   islands (Navbar, Hero, FAQ…) keep calling `useLanguage()` / `t()`
   exactly as before.
────────────────────────────────────────────────────────────── */

/** Typed so that `fr.ts` must cover every key of `en.ts`. */
const DICTIONARIES: Record<Language, Record<TranslationKey, string>> = { en, fr };

const TOKEN = /\{(\w+)\}/g;

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(TOKEN, (match, token: string) =>
    token in vars ? String(vars[token]) : match,
  );
}

interface LanguageContextValue {
  language: Language;
  /** Looks up `key` and replaces every `{token}` with the matching entry of `vars`. */
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) =>
      interpolate(DICTIONARIES[lang][key] ?? key, vars),
    [lang],
  );

  const value = useMemo<LanguageContextValue>(() => ({ language: lang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error('useLanguage() must be called inside a <LanguageProvider>.');
  }
  return context;
}
