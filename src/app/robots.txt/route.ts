import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const baseUrl = request.nextUrl.origin

  return new Response(
    `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
} 