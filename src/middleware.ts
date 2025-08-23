import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/config/i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { urlMappings, getEnglishUrl, isTurkishUrl, isEnglishUrl } from '@/config/urlMappings';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect root URL to Turkish version
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Handle other routes with next-intl middleware FIRST
  // This prevents our custom logic from interfering with valid routes
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
    localeDetection: false, // Disable auto detection to prevent unwanted redirects
    alternateLinks: false
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 