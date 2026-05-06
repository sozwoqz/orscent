/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    domains: ['images.unsplash.com', 'cdn.shopify.com'],
  },
}

module.exports = nextConfig