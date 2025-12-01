import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Ignore ESLint when building
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      // You can add other hostnames here if needed
    ],
  },
};

export default nextConfig;
