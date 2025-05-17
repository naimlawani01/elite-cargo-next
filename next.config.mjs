/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:lang(en|fr)',
        destination: '/:lang',
      },
    ];
  },
};

export default nextConfig;
