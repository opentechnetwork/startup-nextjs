declare module 'geoip-lite' {
  interface LookupResult {
    country?: string;
    region?: string;
    city?: string;
    ll?: [number, number]; // Latitude and Longitude
  }

  function lookup(ip: string): LookupResult | null;

  export { lookup };
}
