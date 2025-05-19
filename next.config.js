/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/rafael-2025' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rafael-2025/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
