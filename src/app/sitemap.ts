import type { MetadataRoute } from 'next';
import { NAV_LINKS, SITE } from '@/data/site';
import { LANGUAGES } from '@/types/i18n';

interface Entry {
  /** Path after the locale segment. `''` for the home page. */
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}

const ROUTES: Entry[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: NAV_LINKS.producer, changeFrequency: 'monthly', priority: 0.9 },
  { path: NAV_LINKS.customer, changeFrequency: 'monthly', priority: 0.9 },
  { path: NAV_LINKS.transporter, changeFrequency: 'monthly', priority: 0.9 },
  { path: NAV_LINKS.agrobank, changeFrequency: 'monthly', priority: 0.8 },
  { path: NAV_LINKS.apps, changeFrequency: 'weekly', priority: 0.8 },
  { path: NAV_LINKS.about, changeFrequency: 'monthly', priority: 0.6 },
  { path: NAV_LINKS.privacy, changeFrequency: 'yearly', priority: 0.2 },
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
