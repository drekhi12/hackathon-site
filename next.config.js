/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hackathon-site',
  assetPrefix: '/hackathon-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
