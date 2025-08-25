/** @type {import('next').NextConfig} */
const nextConfig = {
  // Stop ESLint from breaking production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
