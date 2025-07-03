import type { NextConfig } from "next";
import { config } from "process";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
  
    return config;
  },
};

export default nextConfig;
