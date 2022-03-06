/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    domains: ["kevinmerinsky.com", "localhost"],
  },
};

module.exports = nextConfig;
