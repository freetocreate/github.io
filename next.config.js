/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist'
}

module.exports = nextConfig
module.exports = {
  basePath: '/github.io',
  assetPrefix: '/github.io/',
  // Rest of your configuration...
  images: {
    unoptimized: true,
  },
};

