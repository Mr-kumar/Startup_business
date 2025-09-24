/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'corpbiz.io',
      'images.unsplash.com'
    ],
  },
  output : "standalone",
};

module.exports = nextConfig;
