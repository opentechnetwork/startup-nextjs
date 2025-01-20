/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
});

const nextConfig = {
  output: "false", // Enables more modern builds
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
        port: "3000",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/_vercel//(.*)', // Apply to all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 200000, // Optimize chunk sizes
    };
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
