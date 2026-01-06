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
  
  // Disable webpack cache for Cloudflare Pages
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig