/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {   
    locales: ['fr-ca'],
    defaultLocale: 'fr-ca',

  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
