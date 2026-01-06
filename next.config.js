/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export in production (Cloudflare Pages compatible)
  output: 'export',
  
  // Disable image optimization for static export
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
  
  // Exclude large files for Cloudflare Pages (moved from experimental)
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
    ],
  },
}

module.exports = nextConfig