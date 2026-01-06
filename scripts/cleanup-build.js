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

function deleteLargeFiles(dir, maxSize = 10 * 1024 * 1024) { // 10MB default
  if (!fs.existsSync(dir)) return;
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        deleteLargeFiles(fullPath, maxSize);
      } else if (item.isFile()) {
        try {
          const stats = fs.statSync(fullPath);
          if (stats.size > maxSize) {
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

console.log('🧹 Cleaning up build artifacts for Cloudflare Pages...');

// Delete all cache directories
deleteDirectory('.next/cache');
deleteDirectory('cache');
deleteDirectory('node_modules/.cache');

// Delete specific large webpack files
deleteLargeFiles('.next', 5 * 1024 * 1024); // 5MB limit

// Delete specific problematic files
const problematicFiles = [
  '.next/cache/webpack/server-production/0.pack',
  '.next/cache/webpack/client-production/0.pack',
  '.next/cache/webpack/server-development/0.pack',
  '.next/cache/webpack/client-development/0.pack'
];

problematicFiles.forEach(deleteFile);

console.log('✨ Cleanup completed! Build should now be under 25MB limit.');