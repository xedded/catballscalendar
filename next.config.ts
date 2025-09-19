import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.uk.cloud.ovh.net',
        port: '',
        pathname: '/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
