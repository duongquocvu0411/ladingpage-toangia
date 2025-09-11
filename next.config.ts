  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
    eslint: {
      ignoreDuringBuilds: true, // bỏ qua ESLint warnings/errors khi build
      
    },
  };

  export default nextConfig;
