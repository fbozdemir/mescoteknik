import { type NextRequest } from 'next/server'
import { locales } from '@/config/i18n'

export async function GET(request: NextRequest) {
  const baseUrl = request.nextUrl.origin
  const pages = ['', '/about', '/services', '/contact'] // Add your pages here

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages
    .map(
      page => `
    ${locales
      .map(
        locale => `
    <url>
      <loc>${baseUrl}/${locale}${page}</loc>
      ${locales
        .map(
          l => `
      <xhtml:link
        rel="alternate"
        hreflang="${l}"
        href="${baseUrl}/${l}${page}"
      />`
        )
        .join('')}
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`
      )
      .join('')}`
    )
    .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 