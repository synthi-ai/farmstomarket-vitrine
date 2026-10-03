import type { Metadata } from 'next';
import { SITE } from '@/data/site';
import { LANGUAGES, type Language } from '@/types/i18n';

interface OgImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface PageMetaInput {
  lang: Language;
  /** Path after the locale segment. `''` for the locale home, `/producer`, … */
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  image?: OgImage;
  robots?: Metadata['robots'];
}

/**
 * Builds per-locale page metadata with a localized canonical URL and `hreflang`
 * alternates for every language. Centralized so canonical/alternate rules stay
 * consistent across routes.
 */
export function pageMetadata(input: PageMetaInput): Metadata {
  const { lang, path, title, description } = input;
  const canonical = `${SITE.url}/${lang}${path}`;

  const languages: Record<string, string> = { 'x-default': `${SITE.url}/en${path}` };
  for (const l of LANGUAGES) languages[l] = `${SITE.url}/${l}${path}`;

  const image: OgImage =
    input.image ?? {
      url: SITE.ogImage.url,
      width: SITE.ogImage.width,
      height: SITE.ogImage.height,
      alt: SITE.name,
    };

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title: input.ogTitle ?? title,
      description: input.ogDescription ?? description,
      url: canonical,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.twitterTitle ?? input.ogTitle ?? title,
      description: input.twitterDescription ?? input.ogDescription ?? description,
      images: [image.url],
    },
    ...(input.robots ? { robots: input.robots } : {}),
  };
}
