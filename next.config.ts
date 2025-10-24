import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal standalone server for Docker
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'corpbiz.io',
      'images.unsplash.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Performance optimizations
  poweredByHeader: false,
  // Generate ETags for better caching
  generateEtags: true,
};

export default nextConfig;
