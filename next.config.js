/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    domains: ['fakestoreapi.com'],
  },
};

module.exports = nextConfig;

