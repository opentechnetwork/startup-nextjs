import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_COUNTRY = 'US'; // Allow only traffic from the US

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl; // Extract the requested pathname
  const country = req.headers.get('x-vercel-ip-country') || 'Unknown';

  console.log(`Visitor country: ${country}`); // Log for debugging
  console.log(`Visitor pathname: ${pathname}`); // Log the current path

  // Exclude the /access-denied route from middleware logic
  if (pathname === '/access-denied') {
    return NextResponse.next();
  }

  // Block traffic from all countries except the US
  if (country !== ALLOWED_COUNTRY) {
    console.warn(`Blocked request from country: ${country}`);
    // Redirect to the /access-denied page
    const url = new URL('/access-denied', req.url); // Construct the absolute URL
    return NextResponse.redirect(url);
  }

  // Allow traffic from the US
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};
