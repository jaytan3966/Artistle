import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "../api/auth/[auth0]/route";

export async function middleware(request: NextRequest) {
    const authRes = await auth0.middleware(request); // Returns a NextResponse object

    if (request.nextUrl.pathname.startsWith("/auth")) {
      return authRes;
    }

    if (request.nextUrl.pathname === ("/")) {
      return authRes;
    }

    const { origin } = new URL(request.url)
    const session = await auth0.getSession()

    if (!session) {
      return NextResponse.redirect(`${origin}/auth/login`)
    }
    return authRes
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};