import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let defaultLocale = 'en';
let locales = ['en', 'bn'];

function getLocale(request) {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);

}

export function middleware(request) {
  // get the pathname from request url
  const pathname = request.nextUrl.pathname;
  const isMissingLocaleInPathname = locales.every((loc) => !pathname.startsWith(`/${loc}`) && !pathname.startsWith(`/${loc}/`));

  if (isMissingLocaleInPathname) {
    // detect users preference and redirect with a locale path. for example:/en/about
    const locale = getLocale(request);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));

  }

  return NextResponse.next();

}

export const config = {
  matcher: ['/((?!api|assets|.*\\..*|_next).*)']
}