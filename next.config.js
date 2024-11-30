/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/selab',
  assetPrefix: '/selab',
};

module.exports = nextConfig;
