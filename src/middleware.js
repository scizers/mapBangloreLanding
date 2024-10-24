import { NextResponse, userAgent } from "next/server";

export const config = {
  matcher: ["/"],
};

export function middleware(req) {
  const { device } = userAgent(req);
  const { pathname } = req.nextUrl;

  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  let hasSeenPopup = req.cookies.get("hasSeenPopup") === "true";

  hasSeenPopup = true

  if (!hasSeenPopup) {
    if (viewport === "mobile") {
      // return NextResponse.redirect(new URL("/mobile-popup", req.url));
      return NextResponse.redirect(new URL("/map/event_bangalore/mobile", req.url));
    } else {
      // return NextResponse.redirect(new URL("/desktop-popup", req.url));
      return NextResponse.redirect(new URL("/map/event_bangalore/desktop", req.url));
    }
  } else {
    req.nextUrl.pathname = `/${viewport}${pathname}`;
    return NextResponse.rewrite(req.nextUrl);
  }
}

