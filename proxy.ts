import { NextResponse, type NextRequest } from "next/server";
import { redirects } from "@/lib/legacy-redirects";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (pathname === "/en/icon.svg" || pathname === "/fr/icon.svg") return NextResponse.redirect(new URL(`/icon.svg${search}`, request.url), 307);
  if (pathname === "/fr" || pathname.startsWith("/fr/") || pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();
  const legacy = redirects.find((item) => item.source === pathname);
  const destination = legacy?.destination ?? `/en${pathname}`;
  return NextResponse.redirect(new URL(`${destination}${search}`, request.url), legacy?.permanent ? 308 : 307);
}
export const config = { matcher: ["/((?!api|_next|favicon.ico|icon.svg|sitemap.xml|robots.txt).*)"] };
