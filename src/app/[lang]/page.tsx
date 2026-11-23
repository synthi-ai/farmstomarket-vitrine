import { notFound } from 'next/navigation';
import HomeLanding from '@/components/f2m/HomeLanding';
import { isLanguage } from '@/i18n/routing';
import { T } from '@/content/home';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const faqItems = T[lang].faq.items;
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <HomeLanding lang={lang} />
    </>
  );
}
