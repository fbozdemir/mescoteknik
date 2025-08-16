import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from '@/config/i18n';

export default getRequestConfig(async () => {
  return {
    messages: (await import(`../messages/${defaultLocale}.json`)).default,
    locale: defaultLocale
  };
}); 