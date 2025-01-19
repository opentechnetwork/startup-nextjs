/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: "standalone", // Enables more modern builds
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
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 200000, // Optimize chunk sizes
    };
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
