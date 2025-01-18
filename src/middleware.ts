import { NextRequest, NextResponse } from 'next/server';
import countries from './data/countries.json'; // Import the JSON file with blocked countries

export function middleware(req: NextRequest) {
  const country = req.headers.get('x-vercel-ip-country') || 'Unknown';

  console.log(`Visitor country: ${country}`); // Debugging log

  // Allow traffic to `/access-denied` to prevent redirect loops
  if (req.nextUrl.pathname === '/access-denied') {
    return NextResponse.next();
  }

  // Check if the country is in the blocked list
  if (countries.blockedCountries.includes(country)) {
    console.warn(`Blocked request from country: ${country}`);
    const url = new URL('/access-denied', req.url); // Construct absolute URL
    return NextResponse.redirect(url); // Redirect to /access-denied
  }

  // Allow traffic for all other countries (e.g., US)
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};
