# Correct Cloudflare Pages Build Settings

## Exact Settings to Use

### Framework preset
```
Next.js
```
**Important:** Select "Next.js" from dropdown (NOT "Next.js Static HTML Export")

### Build command
```
npm run build
```

### Build output directory
```
(completely empty - delete the "/" if it's there)
```

### Root directory
```
(completely empty)
```

## Step-by-Step Fix

1. **Go to your project settings**
2. **Click "Build settings"**
3. **Framework preset**: Change to "Next.js"
4. **Build output directory**: Delete everything, leave completely empty
5. **Build command**: Should be "npm run build"
6. **Click "Save"**
7. **Trigger new deployment**

## Why These Settings Matter

- **Next.js preset**: Enables server-side rendering and API routes
- **Empty output directory**: Lets Cloudflare auto-detect `.next` folder
- **Standard build command**: Uses our optimized build with cache cleanup

## If Build Still Fails

Check these in order:

1. **Environment variables**: All 9 variables added correctly
2. **Build logs**: Look for specific error messages
3. **File size**: Should be under 25MB after our cleanup script
4. **Node.js version**: Should be 18.x or higher (auto-detected)

## Test Locally First

Before deploying, test locally:
```bash
npm run build
# Should complete without errors
# Check .next folder size (should be reasonable)
```