import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            (() => {
                const hostname = process.env.PUBLIC_HOST || '';
                const port = process.env.PUBLIC_PORT || '';
                const protocolEnv = process.env.PUBLIC_PROTOCOL || 'https';

                return {
                    protocol: protocolEnv as 'http' | 'https',
                    hostname,
                    port: port || '',
                    pathname: '/**',
                };
            })(),   
        ],
    },
};

export default nextConfig;
