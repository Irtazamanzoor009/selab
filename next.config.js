/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export mode
  images: {
    unoptimized: true, // Ensures images work on static builds
  },
};

module.exports = nextConfig;
