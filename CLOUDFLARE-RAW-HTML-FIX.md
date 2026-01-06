# Fix Raw HTML Visibility Issue on Cloudflare Pages

## Problem
Website shows HTML source code instead of rendering the page properly.

## Root Cause
Cloudflare Pages is not serving HTML files with the correct `text/html` MIME type, causing browsers to display raw HTML instead of rendering it.

## ✅ SOLUTION: Correct Build Settings

### Framework Preset: None (Static Sites)
**Change from:** "Next.js (Static HTML Export)"
**Change to:** "None" or "Static sites"

### Complete Settings:
```
Framework preset: None
Build command: npm run build
Build output directory: out
Root directory: (empty)
Build system version: 3 (latest)
```

### Environment Variables:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://copper-1ig.pages.dev
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbya7Js0rhqX5_D9GMKAobqIA3Au4MUFxHkZYorwmUule60j7rqrU1ePceybN7asoh_q/exec
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=copper2024
NEXT_PUBLIC_CONTACT_EMAIL=hello@copperscreen.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/copperscreen
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/copperscreen
```

## Why This Works

1. **Framework preset: None** - Treats as pure static site, avoiding Next.js-specific handling
2. **Updated _headers file** - Forces correct MIME types for all HTML files
3. **Static export compatibility** - Works perfectly with Next.js static export

## Step-by-Step Fix

1. **Go to Cloudflare Pages Dashboard**
2. **Settings → Build settings**
3. **Change Framework preset to "None"**
4. **Ensure Build output directory is "out"**
5. **Save settings**
6. **Trigger new deployment**

## Alternative Solutions Tested

### ❌ Option 1: Next.js Static HTML Export
- **Issue**: Cloudflare's Next.js handling interferes with static export
- **Result**: Raw HTML visibility

### ❌ Option 2: @cloudflare/next-on-pages
- **Issue**: Designed for server-side rendering, not static export
- **Result**: Raw HTML visibility

### ❌ Option 3: npm run dev
- **Issue**: Development server, not production build
- **Result**: Raw HTML visibility + other issues

### ✅ Option 4: None (Static Sites)
- **Benefit**: Pure static file serving
- **Result**: Proper HTML rendering

## Technical Details

The raw HTML issue occurs because:
1. **MIME Type Confusion**: Cloudflare's Next.js presets expect server-side rendering
2. **Static Export Mismatch**: Our app uses static export, not SSR
3. **Content-Type Headers**: HTML files served as `text/plain` instead of `text/html`

## Verification Steps

After applying the fix:
1. ✅ Homepage renders properly (not raw HTML)
2. ✅ Navigation works correctly
3. ✅ CSS and JavaScript load properly
4. ✅ Contact form functions
5. ✅ Admin dashboard accessible
6. ✅ All 31 pages render correctly

## If Still Having Issues

1. **Clear Cloudflare Cache**: Purge everything
2. **Check Browser Cache**: Test in incognito mode
3. **Verify _headers file**: Ensure it's deployed correctly
4. **Check build logs**: Confirm "out" directory is used

## Expected Timeline

- Settings change: 1 minute
- New deployment: 2-3 minutes
- Cache propagation: 5-10 minutes
- **Total fix time: ~15 minutes**

This solution will resolve the raw HTML visibility issue and make your website render properly.