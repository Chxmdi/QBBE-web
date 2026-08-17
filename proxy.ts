import { NextResponse, type NextRequest } from "next/server";
export function proxy(request: NextRequest) { const { pathname } = request.nextUrl; if (pathname === "/fr" || pathname.startsWith("/fr/")) return NextResponse.next(); if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next(); const legacy = new URL(`/en${pathname}`, request.url); return NextResponse.redirect(legacy); }
export const config = { matcher: ["/((?!api|_next|favicon.ico|sitemap.xml|robots.txt).*)"] };
