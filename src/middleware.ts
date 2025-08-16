import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/config/i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect root URL to Turkish version
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Handle other routes with next-intl middleware
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 