import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 需要登录才能访问的路由
const protectedRoutes = ["/dashboard", "/profile", "/settings"];
// 已登录用户不能访问的路由
const publicOnlyRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // 检查是否是受保护的路由
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  // 检查是否是仅公开路由
  const isPublicOnlyRoute = publicOnlyRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // 如果是受保护的路由且用户未登录，重定向到登录页
  if (isProtectedRoute && !token) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }

  // 如果是仅公开路由且用户已登录，重定向到首页
  if (isPublicOnlyRoute && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// 配置中间件匹配的路由
export const config = {
  matcher: [
    /*
     * 匹配所有路由除了:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
