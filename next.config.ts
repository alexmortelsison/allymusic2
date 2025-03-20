import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "**",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
