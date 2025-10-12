/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // Cache for 24 hours
    dangerouslyAllowSVG: true,
    unoptimized: false,
    loader: 'default',
    domains: [],
    path: '/_next/image',
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

