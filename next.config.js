/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/onepager',
  assetPrefix: '/onepager/',
}

module.exports = nextConfig 