/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.shopify.com'],
  },
}

module.exports = nextConfig