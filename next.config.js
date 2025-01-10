/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // Replace with the port your localhost is running on, if applicable
      },
    ],
  },
};

module.exports = nextConfig;
