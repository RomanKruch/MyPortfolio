import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, Locale } from './messages/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return;
  }

  const segments = pathname.split('/');
  const locale = segments[1];

  if (!locales.includes(locale as Locale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }
}
