/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      appDir: true,
      serverActions: true,
  },
  async rewrites() {
      return [
          {
              source: '/:path*',
              destination: 'http://34.175.149.159:3000/:path*',
          },
      ];
  },
};

module.exports = nextConfig;