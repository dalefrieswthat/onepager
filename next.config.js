/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/onepager',
  assetPrefix: '/onepager/',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 