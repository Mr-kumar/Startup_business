import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal standalone server for Docker
  output: 'standalone',
  images: {
    domains: [
      'corpbiz.io',
      'images.unsplash.com',
    ],
  },
};

export default nextConfig;
