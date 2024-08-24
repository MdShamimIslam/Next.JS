import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["en", "bn"];

const getLocale = (request) => {
  const acceptedLang = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLang };
  const languages = new Negotiator({ headers }).languages();

 return match(languages, locales, defaultLocale);
};

export const middleware = (request) => {
  // get the path name from request url
  const pathname = request.nextUrl.pathname;

  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
  );

  if (pathNameIsMissingLocale) {
    // detect users preference & redirect with a locale in path e.g: /en/about
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: [ '/((?!_next).*)'],
}
