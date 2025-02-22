import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            (() => {
                const hostname = process.env.PUBLIC_HOST || '';
                const port = process.env.PUBLIC_PORT || '';

                return {
                    protocol: "http",
                    hostname,
                    port: port || '',
                    pathname: '/**',
                };
            })(),
        ],
    },
};

export default nextConfig;
