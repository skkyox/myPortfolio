import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && ['en', 'fr'].includes(localeCookie)) {
    const currentLocale = request.nextUrl.locale || 'en';
    if (currentLocale === localeCookie) {
      return NextResponse.next();
    }
    const url = request.nextUrl.clone();
    url.locale = localeCookie;
    return NextResponse.redirect(url);
  }

  const country = request.headers.get('x-vercel-ip-country') || '';
  const detectedLocale = country === 'FR' ? 'fr' : 'en';

  const currentLocale = request.nextUrl.locale || 'en';
  if (currentLocale !== detectedLocale) {
    const url = request.nextUrl.clone();
    url.locale = detectedLocale;
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', detectedLocale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', detectedLocale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return response;
}
