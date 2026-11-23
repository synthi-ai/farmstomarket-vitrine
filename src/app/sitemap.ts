import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';
import { LANGUAGES } from '@/types/i18n';
import { ORDER } from '@/content/solutions';

interface Entry {
  /** Path after the locale segment. `''` for the home page. */
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}

const ROUTES: Entry[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  ...ORDER.map((slug) => ({
    path: `/solutions/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap(({ path, changeFrequency, priority }) =>
    LANGUAGES.map((lang) => ({
      url: `${SITE.url}/${lang}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LANGUAGES.map((l) => [l, `${SITE.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
