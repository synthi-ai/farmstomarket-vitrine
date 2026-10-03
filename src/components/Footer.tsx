'use client';

import Image from 'next/image';
import Link from '@/components/LocaleLink';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT, NAV_LINKS, SITE, SOCIALS } from '@/data/site';

/* ─── Social icons ─────────────────────────────────────────── */
const SOCIAL_LINKS = [
  { name: 'Facebook', href: SOCIALS.facebook, path: 'M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' },
  { name: 'Twitter / X', href: SOCIALS.twitter, path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'Instagram', href: SOCIALS.instagram, path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4 4 0 100 8 4 4 0 000-8zm0 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm4.965-7.403a.96.96 0 100 1.92.96.96 0 000-1.92z' },
  { name: 'LinkedIn', href: SOCIALS.linkedin, path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
] as const;

/* ─── AnimatedContainer (from 21st.dev sticky-footer) ──────── */
type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, className, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
export default function Footer() {
  const { t } = useLanguage();
  const mailto = `mailto:${CONTACT.email}`;

  const productLinks = [
    { label: t('footer.marketplace'), href: '/#marketplace' },
    { label: t('footer.forFarmers'), href: NAV_LINKS.producer },
    { label: t('footer.forBuyers'), href: NAV_LINKS.customer },
    { label: t('footer.forTransporters'), href: NAV_LINKS.transporter },
    { label: t('footer.agrobank'), href: NAV_LINKS.agrobank },
    { label: t('footer.mobileApp'), href: NAV_LINKS.apps },
  ];

  const companyLinks = [
    { label: t('footer.aboutUs'), href: NAV_LINKS.about },
    { label: t('footer.ourMission'), href: `${NAV_LINKS.about}#mission` },
    { label: t('footer.leadership'), href: `${NAV_LINKS.about}#team` },
  ];

  const supportLinks = [
    { label: t('footer.technicalSupport'), href: mailto },
    { label: t('footer.pressMedia'), href: mailto },
  ];

  const legalLinks = [
    { label: t('footer.privacyPolicy'), href: NAV_LINKS.privacy },
  ];

  const linkGroups = [
    { label: t('footer.products'), links: productLinks },
    { label: t('footer.company'), links: companyLinks },
    { label: t('footer.support'), links: supportLinks },
  ];

  return (
    /* ── Sticky footer mechanism (21st.dev pattern) ── */
    <footer
      className={cn('relative w-full', 'h-[720px]')}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[720px] w-full">
        <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto bg-gray-950 text-white">

          {/* Decorative radial glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0 isolate z-0 overflow-hidden">
            <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] -rotate-45 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,232,52,0.06)_0%,transparent_70%)]" />
            <div className="absolute -top-20 right-1/4 h-[400px] w-[300px] -rotate-45 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,232,52,0.03)_0%,transparent_70%)]" />
          </div>

          <div className="section-divider mx-6" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 pt-10 pb-5 md:px-8">

            {/* ── Main grid ── */}
            <div className="flex flex-col gap-10 md:flex-row md:gap-8 xl:gap-12">

              {/* Brand column */}
              <AnimatedContainer delay={0} className="w-full max-w-xs shrink-0 space-y-5">
                <Link href="/" className="inline-block">
                  <Image
                    src={SITE.logo.wordmark}
                    alt={t('brand.logoAlt')}
                    width={160}
                    height={40}
                    className="h-9 w-auto"
                  />
                </Link>
                <p className="text-sm leading-relaxed text-gray-400">
                  {t('footer.description')}
                </p>

                {/* Contact */}
                <div className="space-y-3 pt-1">
                  <a href={mailto} className="flex items-center gap-2.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {CONTACT.email}
                  </a>
                  <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {CONTACT.phoneDisplay}
                  </a>
                  <p className="flex items-center gap-2.5 text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {t('location.douala')}
                  </p>
                </div>

                {/* Social */}
                <div className="flex gap-2 pt-1">
                  {SOCIAL_LINKS.map(({ name, href, path }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/70 text-gray-400 transition-all hover:bg-emerald-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </AnimatedContainer>

              {/* Link columns */}
              {linkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.08}
                  className="w-full"
                >
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
                    {group.label}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.links.map(({ label, href }) => (
                      <li key={label}>
                        <Link
                          href={href}
                          className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AnimatedContainer>
              ))}

              {/* Legal column */}
              <AnimatedContainer delay={0.34} className="w-full">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
                  {t('footer.legal')}
                </h3>
                <ul className="space-y-2.5">
                  {legalLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>
            </div>

            {/* ── Bottom bar ── */}
            <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-gray-800/60 pt-4 text-xs text-gray-600 md:flex-row">
              <p>{t('footer.copyright')}</p>
              <p className="text-gray-700">
                <a href={mailto} className="transition-colors hover:text-gray-500">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}