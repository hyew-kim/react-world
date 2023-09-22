/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.realworld.io',
        port: '',
        pathname: '/images/*' /* /images/**는 숫자만 먹음 */,
      },
    ],
  },
};

module.exports = nextConfig;
