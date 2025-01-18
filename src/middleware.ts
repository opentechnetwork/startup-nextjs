import { NextRequest, NextResponse } from 'next/server';

const BLOCKED_COUNTRY = 'US'; // Block traffic from the US

export function middleware(req: NextRequest) {
  // Extract the visitor's country from headers
  const country = req.headers.get('x-vercel-ip-country') || 'Unknown';

  console.log(`Visitor country: ${country}`);

  // Block traffic from the US
  if (country === BLOCKED_COUNTRY) {
    console.warn(`Blocked request from country: ${country}`);
    const url = new URL('/non-legal', req.url); // Construct absolute URL
    return NextResponse.redirect(url); // Redirect to the non-legal page
  }

  // Allow traffic from other countries
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};
