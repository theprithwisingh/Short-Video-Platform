import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next(); // you can add headers or logging here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Allow auth & public routes without token
        if (
          pathname.startsWith("/api/auth") ||
          pathname === "/login" ||
          pathname === "/register" ||
          pathname === "/"
        ) {
          return true;
        }

        // Allow API route to get videos
        if (pathname.startsWith("/api/videos")) {
          return true;
        }

        // Require authentication for all other routes
        return !!token;
      },
    },
  }
);

//Configuration to avoid matching static files
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
