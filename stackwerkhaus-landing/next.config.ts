import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for hosting on any static server
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable strict mode for better error handling
  reactStrictMode: true,
  
  // Configure trailing slash for consistency
  trailingSlash: true,
  
  // Optimize bundle size
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Security headers are commented out for static export
  // You can add these headers at your hosting provider level
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
