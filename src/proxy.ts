import { NextResponse, type NextRequest } from 'next/server';
import { LANGUAGES, type Language } from '@/types/i18n';
import { DEFAULT_LANGUAGE, hasLocalePrefix } from '@/i18n/routing';

const COOKIE = 'ftm_lang';

/** Resolve the best locale from the saved cookie, then the Accept-Language header. */
function resolveLocale(req: NextRequest): Language {
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie && (LANGUAGES as readonly string[]).includes(cookie)) {
    return cookie as Language;
  }

  const accept = (req.headers.get('accept-language') ?? '').toLowerCase();
  const fr = accept.indexOf('fr');
  const en = accept.indexOf('en');
  if (fr !== -1 && (en === -1 || fr < en)) return 'fr';
  return DEFAULT_LANGUAGE;
}

/** Next.js 16 "proxy" convention (formerly `middleware`). */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (hasLocalePrefix(pathname)) return NextResponse.next();

  const locale = resolveLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the API, and any path with a file extension
  // (favicon.ico, sitemap.xml, robots.txt, images…).
  matcher: ['/((?!_next|api|.*\\.).*)'],
};
