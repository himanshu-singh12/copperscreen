# Correct Cloudflare Pages Build Settings

## CRITICAL: Build Output Directory Must Be Set

### Framework preset
```
Next.js (Static HTML Export)
```
**Important:** Select "Next.js (Static HTML Export)" from dropdown (NOT regular "Next.js")

### Build command
```
npm run build
```

### Build output directory
```
out
```
**CRITICAL:** Must be set to "out" (not empty!) - this is where Next.js static export generates files

### Root directory
```
(completely empty)
```

## Step-by-Step Fix for 404 Error

1. **Go to your Cloudflare Pages project dashboard**
2. **Click "Settings" → "Build settings"**
3. **Framework preset**: Change to "Next.js (Static HTML Export)"
4. **Build output directory**: Enter "out" (this is critical!)
5. **Build command**: Should be "npm run build"
6. **Root directory**: Leave completely empty
7. **Click "Save"**
8. **Trigger new deployment**

## Why These Settings Matter

- **Next.js Static HTML Export preset**: Handles static files correctly
- **"out" output directory**: Next.js static export generates files in /out folder
- **Standard build command**: Uses our optimized build with cache cleanup

## Current Issue Analysis

The 404 error occurs because:
1. ✅ Build is successful (31 pages generated)
2. ✅ Files are under 25MB limit
3. ❌ Cloudflare Pages is looking in wrong directory
4. ❌ Build output directory not set to "out"

## Verification Steps

After updating settings:
1. Check deployment logs show "out" directory being used
2. Verify index.html exists in deployed files
3. Test homepage loads correctly
4. Test navigation to other pages

## If Still Getting 404

1. **Clear Cloudflare cache**: Purge everything in Cloudflare dashboard
2. **Check _redirects file**: Should handle routing for static export
3. **Verify build output**: Ensure /out directory contains index.html
4. **Test locally**: Run `npm run build` and serve /out directory