import type { NextConfig } from "next";
import path from "path";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Nouvelle configuration des images avec remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ndinga237.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ndinga237.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // Activation du support des alias si tu utilises "paths" dans tsconfig.json
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
