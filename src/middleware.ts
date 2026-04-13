import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ambil hostname dari request
  const hostname = request.headers.get('host')

  // Domain utama yang ingin diindeks
  const primaryDomain = 'www.alphakirana.co.id'

  // Jika hostname bukan domain utama dan bukan localhost (untuk development)
  if (
    hostname && 
    !hostname.includes(primaryDomain) && 
    !hostname.includes('localhost') &&
    // Optional: juga mengabaikan Vercel preview URLs jika dihosting di Vercel
    !hostname.includes('vercel.app')
  ) {
    // Redirect 301 (Permanent) ke domain utama
    const url = request.nextUrl.clone()
    url.host = primaryDomain
    // Pastikan protocol menggunakan https
    url.protocol = 'https:'
    url.port = ''
    
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Hanya jalankan middleware untuk route yang bukan static files atau API internal
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
