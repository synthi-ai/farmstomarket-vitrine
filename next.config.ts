import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Configuration des images
  images: {
    domains: ['randomuser.me'], // Autorise ce domaine pour <Image />
  },

  // Activation du support des alias si tu utilises "paths" dans tsconfig.json
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
