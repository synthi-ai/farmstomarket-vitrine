import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SolutionsPage from '@/components/f2m/SolutionsPage';
import { isLanguage } from '@/i18n/routing';
import { LANGUAGES } from '@/types/i18n';
import { SOLUTIONS, ORDER, type SolutionKey } from '@/content/solutions';
import { SITE } from '@/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.flatMap((lang) => ORDER.map((slug) => ({ lang, slug })));
}

function isSolutionKey(value: string): value is SolutionKey {
  return (ORDER as readonly string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLanguage(lang) || !isSolutionKey(slug)) return {};
  const p = SOLUTIONS[lang].pages[slug];
  const canonical = `${SITE.url}/${lang}/solutions/${slug}`;
  const languages: Record<string, string> = { 'x-default': `${SITE.url}/en/solutions/${slug}` };
  for (const l of LANGUAGES) languages[l] = `${SITE.url}/${l}/solutions/${slug}`;

  return {
    title: p.nav,
    description: p.short,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      title: `${p.nav} | ${SITE.name}`,
      description: p.short,
      url: canonical,
      siteName: SITE.name,
      images: [
        {
          url: SITE.ogImage.url,
          width: SITE.ogImage.width,
          height: SITE.ogImage.height,
          alt: `${p.nav} - ${SITE.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${p.nav} | ${SITE.name}`,
      description: p.short,
      images: [SITE.ogImage.url],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLanguage(lang) || !isSolutionKey(slug)) notFound();

  const p = SOLUTIONS[lang].pages[slug];
  const ui = SOLUTIONS[lang].ui;

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (p.faq as Array<{ q: string; a: string }>).map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: ui.home,
        item: `${SITE.url}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: ui.solutions,
        item: `${SITE.url}/${lang}/solutions/${slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: p.nav,
        item: `${SITE.url}/${lang}/solutions/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <SolutionsPage lang={lang} slug={slug} />
    </>
  );
}
