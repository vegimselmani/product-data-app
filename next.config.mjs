/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images.italist.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
