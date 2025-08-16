import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import { Navbar, Footer } from '@/components'
import { ErrorBoundary } from '@/components/error-boundary'
import { unstable_setRequestLocale } from 'next-intl/server'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  adjustFontFallback: false
})

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch {
    notFound()
  }
}

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]
}

type Props = {
  children: ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale
  
  const titles = {
    tr: "MESCO - Metal Şekillendirme Teknolojileri",
    en: "MESCO - Metal Forming Technologies"
  }
  
  const descriptions = {
    tr: "MESCO - Metal Şekillendirme Teknolojileri | Laminasyon Pres Hatları, Pres Besleme Sistemleri ve Üretim Hatları konusunda uzman çözümler.",
    en: "MESCO - Metal Forming Technologies | Expert solutions in Lamination Press Lines, Press Feeding Systems and Production Lines."
  }
  
  const urls = {
    tr: 'https://mesco.com.tr/tr',
    en: 'https://mesco.com.tr/en'
  }
  
  const locales = {
    tr: 'tr_TR',
    en: 'en_US'
  }
  
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    metadataBase: new URL('https://mesco.com.tr'),
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      url: urls[locale as keyof typeof urls] || urls.en,
      siteName: 'MESCO',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: locales[locale as keyof typeof locales] || locales.en,
      type: 'website',
    },
  }
}

export default async function RootLayout({
  children,
  params
}: Props) {
  const resolvedParams = await Promise.resolve(params)
  const locale = resolvedParams.locale
  // Enable static rendering with next-intl in Server Components
  unstable_setRequestLocale(locale)
  const messages = await getMessages(locale)

  return (
    <html lang={locale} className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col`} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ErrorBoundary>
            <Navbar />
            {children}
            <Footer />
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  )
} 