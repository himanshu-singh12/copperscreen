/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for dynamic Next.js build on Cloudflare Pages
  // output: 'export', // Commented out for dynamic build
  
  // Keep image optimization disabled for Cloudflare compatibility
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slash for better compatibility
  trailingSlash: true,
  
  // Optimize for production
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Exclude large files and cache for Cloudflare Pages size limits
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
      '.next/cache/**/*',
      'cache/**/*',
    ],
  },
  
  // Completely disable webpack cache for Cloudflare Pages
  webpack: (config, { isServer, dev }) => {
    // Disable all caching for production builds
    if (!dev) {
      config.cache = false;
    }
    
    // Disable filesystem cache
    if (config.cache && typeof config.cache === 'object') {
      config.cache = false;
    }
    
    return config;
  },
  
  // Disable experimental features that might create large files
  experimental: {
    // Disable webpack build worker
    webpackBuildWorker: false,
  },
}

module.exports = nextConfig