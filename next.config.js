/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // When using a custom domain, we don't need basePath or assetPrefix
  // basePath: '/onepager',
  // assetPrefix: '/onepager/',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 