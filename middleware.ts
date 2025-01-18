import { NextRequest, NextResponse } from 'next/server';

const BLOCKED_COUNTRY = 'US'; // Example blocked country

export function middleware(req: NextRequest) {
  const country = req.headers.get('x-vercel-ip-country') || 'Unknown';

  console.log(`Visitor country: ${country}`);

  // Redirect visitors from blocked countries to /non-legal
  if (country === BLOCKED_COUNTRY) {
    return NextResponse.redirect('/non-legal');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply to all routes
};
