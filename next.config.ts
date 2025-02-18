// import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase the limit (e.g., 10MB)
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      //  {
      //   protocol: 'https',
      //   hostname: 'pldbjxhkrlailuixuvhz.supabase.co',
      // },
       {
        protocol: 'https',
        hostname: 'vyhuucrkmvktfkwvpxbs.supabase.co',
      },
    ],
  },
};

export default nextConfig;
