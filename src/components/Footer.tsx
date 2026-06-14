'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/farmstomarket',
    svg: 'M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z',
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/farmstomarketcm',
    svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/farmstomarket',
    svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4 4 0 100 8 4 4 0 000-8zm0 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm4.965-7.403a.96.96 0 100 1.92.96.96 0 000-1.92z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/farmstomarket',
    svg: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
] as const;

export default function Footer() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const productLinks = [
    { label: t('footer.marketplace'), href: '/#marketplace' },
    { label: t('footer.forFarmers'), href: '/producer' },
    { label: t('footer.forBuyers'), href: '/customer' },
    { label: t('footer.forTransporters'), href: '/transporter' },
    { label: t('footer.agrobank'), href: '/agrobank' },
    { label: t('footer.mobileApp'), href: '#app-store' },
  ];

  const companyLinks = [
    { label: t('footer.aboutUs'), href: '/about' },
    { label: t('footer.ourMission'), href: '/about#mission' },
    { label: t('footer.leadership'), href: '/about#team' },
    { label: t('footer.careers'), href: '#' },
    { label: t('footer.pressMedia'), href: '#' },
  ];

  const supportLinks = [
    { label: t('footer.helpCenter'), href: '#' },
    { label: t('footer.documentation'), href: '#' },
    { label: t('footer.apiReference'), href: '#' },
    { label: t('footer.communityForum'), href: '#' },
    { label: t('footer.technicalSupport'), href: '#' },
  ];

  const legalLinks = [
    { label: t('footer.termsOfService'), href: '#' },
    { label: t('footer.privacyPolicy'), href: '#' },
    { label: t('footer.cookiePolicy'), href: '#' },
    { label: t('footer.dataProtection'), href: '#' },
  ];

  return (
    <motion.footer
      ref={ref}
      className="w-full bg-gray-950 text-white"
      variants={staggerChildrenVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <div className="section-divider mx-6" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <motion.div className="space-y-6 lg:col-span-2" variants={fadeUpVariants}>
            <div>
              <Link href="/" className="mb-4 inline-block">
                <Image
                  src="/logo/logo.svg"
                  alt="Farms to Market"
                  width={160}
                  height={40}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="max-w-md text-sm leading-relaxed text-gray-300">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">{t('footer.followUs')}</h4>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ name, svg, href }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/60 text-gray-400 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={name}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={svg} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">{t('footer.products')}</h3>
            <ul className="space-y-3">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">{t('footer.support')}</h3>
            <ul className="space-y-3">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-300 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact row */}
        <motion.div
          className="mt-12 border-t border-gray-800 pt-8"
          variants={fadeUpVariants}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium text-gray-400">{t('footer.email')}</p>
                <p className="text-sm text-white">contact@farmstomarket.io</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium text-gray-400">{t('footer.phone')}</p>
                <p className="text-sm text-white">+237 620 207 980</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium text-gray-400">{t('footer.location')}</p>
                <p className="text-sm text-white">{t('location.douala')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row"
          variants={fadeUpVariants}
        >
          <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-emerald-400"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
