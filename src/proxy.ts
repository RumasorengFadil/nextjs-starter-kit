import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const protectedRoutes = ["/dashboard", "/admin"];
const authRoutes = ["/login", "/register"];
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;
    
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthPage = authRoutes.includes(pathname);

  // If you are not logged in and access a protected page → redirect to login
  if (!accessToken && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If you are already logged in but open the login page → redirect to the dashboard
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  if(accessToken){
    // Already Logged in but not yet verified → redirect to verify-email
    const decoded: any = jwt.decode(accessToken);
    console.log("decoded: " + decoded.isEmailVerified);
    
    if(!decoded.isEmailVerified && isProtected){
      return NextResponse.redirect(new URL("/verify-email", request.url));
    }
    if(decoded.isEmailVerified && pathname.startsWith('/verify-email')){
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
}

if(!accessToken && pathname.startsWith('/verify-email')){
  return NextResponse.redirect(new URL("/", request.url));
}
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register", "/verify-email"],
};
