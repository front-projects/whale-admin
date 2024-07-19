import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from "./app/auth/session";
import { cookies } from "next/headers";

const protectedRoutes = ["/menu"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // const cookie = cookies().get("session")?.value;
  // const session = await decrypt(cookie);
  const token = cookies().get("session")?.value;

  // if (isProtectedRoute && !session?.userId) {
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (
    isPublicRoute &&
    // session?.userId &&
    token && 
    !protectedRoutes.includes(req.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/menu", req.nextUrl));
  }

  return NextResponse.next();
}
