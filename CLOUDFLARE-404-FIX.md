# Cloudflare Pages 404 Error Fix

## Current Status
✅ **Build Successful**: 31 pages generated, under 25MB limit
❌ **404 Error**: Website showing "page can't be found"

## Root Cause
The build output directory is not configured correctly in Cloudflare Pages settings.

## Immediate Fix Required

### 1. Update Cloudflare Pages Build Settings

Go to your Cloudflare Pages project → Settings → Build settings:

| Setting | Current Value | Required Value |
|---------|---------------|----------------|
| Framework preset | Next.js | **Next.js (Static HTML Export)** |
| Build command | npm run build | npm run build ✅ |
| Build output directory | (empty) | **out** |
| Root directory | (empty) | (empty) ✅ |

### 2. Critical Change: Build Output Directory

**MUST BE SET TO:** `out`

This is because:
- Next.js static export generates files in `/out` directory
- Cloudflare Pages needs to know where to find the built files
- Currently looking in wrong location (root or .next)

### 3. Framework Preset Change

**MUST BE:** "Next.js (Static HTML Export)"

This preset:
- Handles static files correctly
- Doesn't expect server-side rendering
- Properly serves HTML files

## Step-by-Step Instructions

1. **Login to Cloudflare Dashboard**
2. **Go to Pages → Your Project**
3. **Click "Settings" tab**
4. **Click "Build settings" in sidebar**
5. **Change Framework preset** to "Next.js (Static HTML Export)"
6. **Set Build output directory** to "out"
7. **Click "Save"**
8. **Go to "Deployments" tab**
9. **Click "Retry deployment" on latest deployment**

## Verification

After deployment completes:

1. **Check deployment logs** - should show "out" directory being used
2. **Visit your domain** - should load homepage
3. **Test navigation** - all pages should work
4. **Check browser console** - no 404 errors for assets

## Files Structure (for reference)

```
out/
├── index.html          # Homepage
├── about/
│   └── index.html      # About page
├── services/
│   └── index.html      # Services page
├── contact/
│   └── index.html      # Contact page
├── _next/              # Next.js assets
├── images/             # Static images
├── _headers            # Cloudflare headers config
├── _redirects          # Cloudflare redirects config
└── ...                 # Other pages
```

## If Still Getting 404 After Fix

1. **Clear Cloudflare Cache**:
   - Go to Cloudflare Dashboard → Caching → Purge Cache
   - Select "Purge Everything"

2. **Wait 5-10 minutes** for global propagation

3. **Test in incognito/private browser** to avoid local caching

4. **Check specific files**:
   - Try accessing: `yourdomain.com/index.html` directly
   - If this works, it's a routing issue

## Expected Result

After applying this fix:
- ✅ Homepage loads correctly
- ✅ All navigation works
- ✅ Contact form submits to Google Apps Script
- ✅ Admin dashboard accessible
- ✅ All 31 pages accessible
- ✅ No 404 errors

## Technical Details

The issue occurs because:
1. Next.js static export (`output: 'export'`) generates files in `/out`
2. Cloudflare Pages was looking in root directory or `.next`
3. Files exist but in wrong location from Cloudflare's perspective
4. Setting build output directory to "out" fixes the path mismatch

This is a common issue when switching from server-side to static export.