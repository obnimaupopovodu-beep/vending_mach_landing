import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [] },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
