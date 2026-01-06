#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✅ Deleted: ${dirPath}`);
  }
}

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ Deleted: ${filePath}`);
  }
}

console.log('🧹 Cleaning up build artifacts for Cloudflare Pages...');

// Delete cache directories
deleteDirectory('.next/cache');
deleteDirectory('cache');
deleteDirectory('node_modules/.cache');

// Delete large webpack files
const nextDir = '.next';
if (fs.existsSync(nextDir)) {
  const files = fs.readdirSync(nextDir, { recursive: true });
  files.forEach(file => {
    if (file.includes('.pack') || file.includes('webpack')) {
      const fullPath = path.join(nextDir, file);
      try {
        const stats = fs.statSync(fullPath);
        if (stats.size > 10 * 1024 * 1024) { // Files larger than 10MB
          deleteFile(fullPath);
        }
      } catch (err) {
        // Ignore errors for non-existent files
      }
    }
  });
}

console.log('✨ Cleanup completed!');