/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/github.io',
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
