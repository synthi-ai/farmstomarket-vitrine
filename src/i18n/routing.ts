import { LANGUAGES, type Language } from '@/types/i18n';

/**
 * Locale routing helpers shared by the middleware, the server dictionary and the
 * client `LocaleLink`. Kept free of React / Node APIs so it is safe to import
 * from the Edge middleware.
 */

export const DEFAULT_LANGUAGE: Language = 'en';

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

/** True when `pathname` already begins with a known locale segment. */
export function hasLocalePrefix(pathname: string): boolean {
  return LANGUAGES.some((lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`));
}

/**
 * Prefixes an in-app path with the active locale segment.
 * External URLs, `mailto:`, and bare hashes (anything not starting with `/`)
 * pass through unchanged.
 */
export function withLocale(lang: Language, path: string): string {
  if (!path.startsWith('/')) return path;
  if (path === '/') return `/${lang}`;
  return `/${lang}${path}`;
}

/** Replaces (or inserts) the leading locale segment of a pathname. */
export function swapLocale(pathname: string, next: Language): string {
  const segments = pathname.split('/');
  if (isLanguage(segments[1])) {
    segments[1] = next;
  } else {
    segments.splice(1, 0, next);
  }
  return segments.join('/') || `/${next}`;
}
