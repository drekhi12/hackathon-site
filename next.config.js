/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Uncomment basePath and assetPrefix before deploying to GitHub Pages
  // basePath: '/hackathon-site',
  // assetPrefix: '/hackathon-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
