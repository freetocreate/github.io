/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  
  output: 'export',
  assetPrefix: isProd ? '/github.io/' : '',
  headers: async () => [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
    ]
}

module.exports = nextConfig
