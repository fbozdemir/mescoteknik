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

  // Handle locale-specific URL redirects
  const pathSegments = pathname.split('/').filter(Boolean);
  
  if (pathSegments.length >= 2) {
    const locale = pathSegments[0];
    const isEnglish = locale === 'en';
    const isTurkish = locale === 'tr';
    
    if (isEnglish || isTurkish) {
      const remainingPath = pathSegments.slice(1).join('/');
      
      // Check for mixed language paths (products vs urunler)
      if (isTurkish && remainingPath.startsWith('products/')) {
        const productSlug = remainingPath.replace('products/', '');
        // Find Turkish equivalent for English product slug
        const turkishUrl = Object.keys(urlMappings).find(key => urlMappings[key as keyof typeof urlMappings] === productSlug);
        if (turkishUrl) {
          return NextResponse.redirect(new URL(`/tr/urunler/${turkishUrl}`, request.url));
        }
      }
      
      if (isEnglish && remainingPath.startsWith('urunler/')) {
        const productSlug = remainingPath.replace('urunler/', '');
        // Find English equivalent for Turkish product slug
        const englishUrl = getEnglishUrl(productSlug);
        if (englishUrl !== productSlug) {
          return NextResponse.redirect(new URL(`/en/products/${englishUrl}`, request.url));
        }
      }
      
      // Check if this is a Turkish URL being accessed from English locale
      if (isEnglish && isTurkishUrl(remainingPath)) {
        const englishUrl = getEnglishUrl(remainingPath);
        return NextResponse.redirect(new URL(`/en/${englishUrl}`, request.url));
      }
      
      // Check if this is an English URL being accessed from Turkish locale
      if (isTurkish && isEnglishUrl(remainingPath)) {
        const turkishUrl = Object.keys(urlMappings).find(key => urlMappings[key as keyof typeof urlMappings] === remainingPath);
        if (turkishUrl) {
          return NextResponse.redirect(new URL(`/tr/${turkishUrl}`, request.url));
        }
      }
    }
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