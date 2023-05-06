/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/github.io',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
