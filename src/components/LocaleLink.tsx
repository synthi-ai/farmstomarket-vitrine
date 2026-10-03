'use client';

import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { withLocale } from '@/i18n/routing';

type NextLinkProps = ComponentProps<typeof NextLink>;

/**
 * Drop-in replacement for `next/link` that prefixes in-app paths with the
 * active locale segment (`/apps` → `/fr/apps`). External URLs, `mailto:` and
 * bare hashes pass through untouched. Using this everywhere keeps internal
 * navigation inside the current language and avoids a middleware round-trip.
 */
export default function LocaleLink({ href, ...rest }: NextLinkProps) {
  const { language } = useLanguage();
  const localizedHref = typeof href === 'string' ? withLocale(language, href) : href;
  return <NextLink href={localizedHref} {...rest} />;
}
