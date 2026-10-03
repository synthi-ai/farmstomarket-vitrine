import './globals.css';
import Link from 'next/link';
import { DEFAULT_LANGUAGE } from '@/i18n/routing';

/**
 * Root-level fallback for requests that never resolve to a locale segment.
 * In normal operation the middleware rewrites every path to `/en` or `/fr`,
 * so real 404s are served by `app/[lang]/not-found.tsx` inside the localized
 * layout. This page has no access to the language provider, so it ships a
 * self-contained document in the default language.
 */
export default function RootNotFound() {
  return (
    <html lang={DEFAULT_LANGUAGE} className="scroll-smooth">
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-6 text-center text-white antialiased">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-emerald-400">404</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Page not found</h1>
        <p className="mt-3 max-w-md text-white/60">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href={`/${DEFAULT_LANGUAGE}`}
          className="mt-8 rounded-full bg-emerald-500 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-black transition-colors hover:bg-emerald-400"
        >
          Back to home
        </Link>
      </body>
    </html>
  );
}
