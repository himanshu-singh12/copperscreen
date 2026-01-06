/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for Cloudflare Pages (no cache files)
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slash for better compatibility
  trailingSlash: true,
  
  // Disable all caching for Cloudflare Pages
  experimental: {
    webpackBuildWorker: false,
  },
  
  // Optimize for production
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Webpack configuration to prevent large cache files
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache completely for production builds
    if (!dev) {
      config.cache = false
    }
    
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      },
    }
    
    return config
  },
  
  // Exclude large files for Cloudflare Pages size limits
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
      '.next/cache/**/*',
      'cache/**/*',
      '**/.git/**/*',
      '**/node_modules/**/*',
    ],
  },
}

module.exports = nextConfig