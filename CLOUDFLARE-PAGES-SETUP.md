# Cloudflare Pages Deployment Guide

## Quick Setup Instructions

### 1. Connect Repository
1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
2. Click "Create a project"
3. Select "Connect to Git"
4. Choose GitHub and authorize Cloudflare
5. Select repository: `himanshu-singh12/copperscreen`
6. Click "Begin setup"

### 2. Build Configuration
```yaml
Project name: copperscreen
Production branch: main
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
```

### 3. Environment Variables
Add these in the "Environment variables" section:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://copperscreen.pages.dev
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbya7Js0rhqX5_D9GMKAobqIA3Au4MUFxHkZYorwmUule60j7rqrU1ePceybN7asoh_q/exec
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=copper2024
NEXT_PUBLIC_CONTACT_EMAIL=hello@copperscreen.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
```

### 4. Deploy
1. Click "Save and Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Site will be available at: https://copperscreen.pages.dev

### 5. Custom Domain (Optional)
1. Go to "Custom domains" tab
2. Click "Set up a custom domain"
3. Enter your domain (e.g., copperscreen.com)
4. Follow DNS configuration instructions

## Build Verification
- ✅ Build should complete in ~2-3 minutes
- ✅ 31 pages should be generated
- ✅ No build errors
- ✅ Site loads at https://copperscreen.pages.dev

## Post-Deployment Testing
1. **Homepage**: Check animations and layout
2. **Contact Form**: Test form submission
3. **Admin Dashboard**: Login with admin/copper2024
4. **Blog Pages**: Verify all blog posts load
5. **Navigation**: Test all menu links

## Troubleshooting
- **Build fails**: Check environment variables are set correctly
- **404 errors**: Verify build output directory is set to "out"
- **CSS not loading**: Check _headers file is included in build
- **Form not working**: Verify Google Apps Script URL is correct

The site is ready for production use!