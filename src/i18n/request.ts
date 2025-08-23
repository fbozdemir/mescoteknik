import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from '@/config/i18n';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is supported
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
  
  return {
    messages: (await import(`../messages/${validLocale}.json`)).default,
    locale: validLocale
  };
}); 