import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(www\\.)?lapanak\\.co\\.id',
          },
        ],
        destination: 'https://www.alphakirana.co.id/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
