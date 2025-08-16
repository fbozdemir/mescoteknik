import { getTranslations } from 'next-intl/server';
import { locales } from '@/config/i18n';

interface MetadataProps {
  locale: string;
  path: string;
}

export async function generateMetadata({ locale, path }: MetadataProps) {
  const t = await getTranslations('Meta');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

  const metadata = {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: Object.fromEntries(
        locales.map(loc => [loc, `${baseUrl}/${loc}${path}`])
      ),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}${path}`,
      siteName: t('title'),
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
} 