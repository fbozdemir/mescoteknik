import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const config = {
  images: {
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [128, 256, 384, 512, 640],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  // experimental removed to avoid vendor-chunks resolution issues in dev
  // Ensure proper locale handling in production
  trailingSlash: false,
  skipMiddlewareUrlNormalize: true
};

export default withNextIntl(config); 