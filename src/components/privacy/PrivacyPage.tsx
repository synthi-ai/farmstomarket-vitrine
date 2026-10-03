'use client';

import Link from '@/components/LocaleLink';
import { CONTACT } from '@/data/site';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/types/i18n';

const SECTIONS: { titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { titleKey: 'privacy.data.title', bodyKey: 'privacy.data.body' },
  { titleKey: 'privacy.use.title', bodyKey: 'privacy.use.body' },
  { titleKey: 'privacy.payments.title', bodyKey: 'privacy.payments.body' },
  { titleKey: 'privacy.sharing.title', bodyKey: 'privacy.sharing.body' },
  { titleKey: 'privacy.retention.title', bodyKey: 'privacy.retention.body' },
  { titleKey: 'privacy.cookies.title', bodyKey: 'privacy.cookies.body' },
  { titleKey: 'privacy.rights.title', bodyKey: 'privacy.rights.body' },
  { titleKey: 'privacy.children.title', bodyKey: 'privacy.children.body' },
  { titleKey: 'privacy.changes.title', bodyKey: 'privacy.changes.body' },
];

export default function PrivacyPage() {
  const { t } = useLanguage();
  const emailVars = { email: CONTACT.email };

  return (
    <main className="bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <header className="mb-14">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('privacy.title')}
          </h1>
          <p className="mt-3 text-sm text-gray-500">{t('privacy.lastUpdated')}</p>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">{t('privacy.intro')}</p>
        </header>

        <div className="space-y-10">
          {SECTIONS.map(({ titleKey, bodyKey }) => (
            <section key={titleKey}>
              <h2 className="font-heading mb-3 text-xl font-semibold text-white">
                {t(titleKey)}
              </h2>
              <p className="leading-relaxed text-gray-400">{t(bodyKey)}</p>
            </section>
          ))}

          <section>
            <h2 className="font-heading mb-3 text-xl font-semibold text-white">
              {t('privacy.contact.title')}
            </h2>
            <p className="leading-relaxed text-gray-400">{t('privacy.contact.body', emailVars)}</p>
            <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-gray-300">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald-400 hover:underline">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="hover:text-emerald-400 hover:underline">
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-400"
          >
            {t('notFound.backHome')}
          </Link>
        </div>
      </div>
    </main>
  );
}