import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  adjustFontFallback: false
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

export const metadata: Metadata = {
  title: "MESCO - Metal Sanayi Çözümleri",
  description: "MESCO olarak metal sanayi için özel çözümler sunuyoruz. Rulo sac boy kesme hatları, pres besleme sistemleri ve laminasyon pres hatları konusunda uzmanız.",
  keywords: ["metal sanayi", "rulo sac", "pres besleme", "laminasyon pres", "sanayi makineleri"],
  authors: [{ name: "MESCO" }],
  creator: "MESCO",
  publisher: "MESCO",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
