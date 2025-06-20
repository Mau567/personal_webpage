import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages
  ...(process.env.GITHUB_PAGES === 'true' && {
    output: 'export',
    trailingSlash: true,
    basePath: '/personal_webpage',
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
