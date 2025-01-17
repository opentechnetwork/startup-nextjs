import { NextResponse } from 'next/server';
import geoip from 'geoip-lite';

export function middleware(request: Request) {
  // Get the client's IP address
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';

  // Perform GeoIP lookup
  const geo = geoip.lookup(ip);

  // Log IP and GeoIP details for debugging
  console.log(`Incoming request from IP: ${ip}, Geo Info: ${geo ? JSON.stringify(geo) : 'Not Found'}`);

  // Handle failed GeoIP lookups
  if (!geo) {
    console.warn(`Geo lookup failed for IP: ${ip}`);
    return new Response('Access Denied: Unable to determine location', { status: 403 });
  }

  // Block requests from non-US countries
  if (geo.country !== 'US') {
    console.warn(`Blocked request from IP: ${ip}, Country: ${geo.country}`);
    return new Response('Access Denied: Restricted Country', { status: 403 });
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
