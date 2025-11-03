import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/hackathon-site',
  assetPrefix: '/hackathon-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
