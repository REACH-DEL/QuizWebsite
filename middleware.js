import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req) {
  const session = await auth();
  const { pathname } = req.nextUrl;

  const isAuthenticated = !!session?.payload?.token;

  if (pathname === "/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  const protectedRoutes = ["/home", "/history", "/", "/your-quiz", "/create-quiz", "/taking-quiz", "/result"];
  const isProtected = protectedRoutes.includes(pathname) || pathname.startsWith("/id/");

  if (isProtected && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login",
    "/id/:path*",
    "/quiz/:path*",
    "/home",
    "/history",
    "/your-quiz",
    "/create-quiz",
    "/taking-quiz",
    "/result"
  ],
};
