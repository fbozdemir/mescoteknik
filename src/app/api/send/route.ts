import { NextResponse } from 'next/server'

// Geçici endpoint: SMTP entegrasyonu daha sonra eklenecek
export async function POST(req: Request) {
  try {
    await req.json()
  } catch {}
  return NextResponse.json({ success: true })
}




