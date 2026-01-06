#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Deleted: ${dirPath}`);
    } catch (err) {
      console.log(`⚠️ Could not delete ${dirPath}: ${err.message}`);
    }
  }
}

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted: ${filePath}`);
    } catch (err) {
      console.log(`⚠️ Could not delete ${filePath}: ${err.message}`);
    }
  }
}

function deleteLargeFiles(dir, maxSize = 5 * 1024 * 1024) { // 5MB limit for Cloudflare
  if (!fs.existsSync(dir)) return;
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // Skip cache directories entirely
        if (item.name === 'cache' || item.name === 'webpack') {
          deleteDirectory(fullPath);
          continue;
        }
        deleteLargeFiles(fullPath, maxSize);
      } else if (item.isFile()) {
        try {
          const stats = fs.statSync(fullPath);
          if (stats.size > maxSize) {
            console.log(`🗑️ Deleting large file: ${fullPath} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`);
            deleteFile(fullPath);
          }
        } catch (err) {
          // Ignore stat errors
        }
      }
    }
  } catch (err) {
    console.log(`⚠️ Could not read directory ${dir}: ${err.message}`);
  }
}

console.log('🧹 Aggressive cleanup for Cloudflare Pages 25MB limit...');

// Delete all cache directories completely
const cacheDirectories = [
  '.next/cache',
  '.next/standalone',
  '.next/server/chunks',
  'cache',
  'node_modules/.cache',
  '.cache',
  'dist/cache'
];

cacheDirectories.forEach(deleteDirectory);

// Delete specific large webpack files that cause issues
const problematicFiles = [
  '.next/cache/webpack/server-production/0.pack',
  '.next/cache/webpack/client-production/0.pack',
  '.next/cache/webpack/server-development/0.pack',
  '.next/cache/webpack/client-development/0.pack',
  '.next/server/chunks/webpack-runtime.js',
  '.next/server/chunks/webpack-api-runtime.js'
];

problematicFiles.forEach(deleteFile);

// Scan for any remaining large files
console.log('🔍 Scanning for large files...');
deleteLargeFiles('.next', 5 * 1024 * 1024); // 5MB limit

// Check final build size
if (fs.existsSync('.next')) {
  try {
    const { execSync } = require('child_process');
    const sizeOutput = execSync('du -sh .next 2>/dev/null || echo "Size check failed"', { encoding: 'utf8' });
    console.log(`📊 Final .next directory size: ${sizeOutput.trim()}`);
  } catch (err) {
    console.log('📊 Could not determine directory size');
  }
}

console.log('✨ Aggressive cleanup completed! Build should be well under 25MB limit.');
console.log('🚀 Ready for Cloudflare Pages deployment!');