import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal standalone server for Docker
  output: 'standalone',
};

export default nextConfig;
