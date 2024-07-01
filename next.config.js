const path = require('path');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  compress: true,
  enabled: process.env.ANALYZE === 'true',
});

const CompressionPlugin = require('compression-webpack-plugin');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    APP_URL: process.env.APP_URL,
    APP_API_URL: process.env.APP_API_URL,
    APP_ENV: process.env.APP_ENV,
    APP_IMAGE_URL: process.env.APP_IMAGE_URL,
    KAKAO_JAVASCRIPT_KEY: process.env.KAKAO_JAVASCRIPT_KEY,
    NICEPAY_MID: process.env.NICEPAY_MID,
    NICEPAY_RETURN_URL: process.env.NICEPAY_RETURN_URL,
    GOOGLE_GTM_ID: process.env.GOOGLE_GTM_ID,
    GOOGLE_AD_ID: process.env.GOOGLE_AD_ID,
    GOOGLE_GTM_ID_FLES: process.env.GOOGLE_GTM_ID_FLES,
  },
  webpack: config => {
    const isProd = process.env.NODE_ENV === 'production';
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
      '@img': path.join(__dirname, 'public'),
      '@public': path.join(__dirname, 'public'),
      '@module': path.join(__dirname, 'media-frontend-module'),
    };
    config.plugins.push(new CompressionPlugin());
    return {
      ...config,
      mode: isProd ? 'production' : 'development',
      devtool: isProd ? 'hidden-source-map' : 'eval',
    };
  },
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
  images: {
    loader: 'custom',
    loaderFile: './media-frontend-module/utils/image/loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'borra-bucket.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'static.borra.today',
      }
    ],
  },
  experimental: {
    optimizeFonts: true,
    webVitalsAttribution: ['CLS', 'LCP'],
    serverActions: true,
  },
};

module.exports = withPlugins(
  [withBundleAnalyzer({ compress: true })],
  nextConfig
);
