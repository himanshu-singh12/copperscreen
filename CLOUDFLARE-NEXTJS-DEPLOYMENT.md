# Cloudflare Pages - Next.js Dynamic Deployment Guide

## 🚀 Updated Configuration for Dynamic Next.js

The website is now configured for **dynamic Next.js build** instead of static export, which will provide full functionality including:
- Working contact form with API routes
- Dynamic admin dashboard
- Server-side rendering capabilities
- All animations and interactivity

## 📋 Cloudflare Pages Setup

### 1. Build Configuration
```yaml
Framework preset: Next.js
Build command: npm run build
Build output directory: (leave empty - auto-detect)
Root directory: (leave empty)
Node.js version: 18.x or higher
```

### 2. Environment Variables
Add these in Cloudflare Pages dashboard:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://copperscreen.pages.dev
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbya7Js0rhqX5_D9GMKAobqIA3Au4MUFxHkZYorwmUule60j7rqrU1ePceybN7asoh_q/exec
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=copper2024
NEXT_PUBLIC_CONTACT_EMAIL=hello@copperscreen.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/copperscreen
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/copperscreen
```

### 3. Compatibility Flags
Cloudflare will automatically detect and configure:
- `nodejs_compat` for Node.js runtime
- Next.js runtime for API routes
- Edge runtime compatibility

## 🔄 Deployment Steps

### Option A: Redeploy Existing Project
1. Go to your existing Cloudflare Pages project
2. Go to **Settings** → **Builds & deployments**
3. Update build configuration:
   - Framework preset: **Next.js** (not Static HTML Export)
   - Build output directory: **(leave empty)**
4. Add/update environment variables
5. Trigger a new deployment

### Option B: Create New Project
1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
2. Click "Create a project"
3. Connect to Git → GitHub
4. Select repository: `himanshu-singh12/copperscreen`
5. Use configuration above
6. Deploy

## 🎯 What's Different Now

### Before (Static Export)
- ❌ No server-side functionality
- ❌ Contact form couldn't process responses
- ❌ Admin dashboard was purely static
- ❌ No API routes
- ❌ Limited interactivity

### After (Dynamic Next.js)
- ✅ Full server-side rendering
- ✅ Working API routes (`/api/contact`, `/api/admin/*`)
- ✅ Dynamic contact form processing
- ✅ Interactive admin dashboard
- ✅ All Next.js features available
- ✅ Better SEO and performance

## 🧪 Testing After Deployment

### 1. Homepage Test
- Visit: `https://copperscreen.pages.dev`
- Check: Animations, styling, interactivity

### 2. Contact Form Test
- Go to: `https://copperscreen.pages.dev/contact`
- Fill out and submit form
- Should show success message (not CORS errors)

### 3. Admin Dashboard Test
- Go to: `https://copperscreen.pages.dev/admin`
- Login: admin / copper2024
- Should show interactive dashboard

### 4. API Routes Test
- Visit: `https://copperscreen.pages.dev/api/contact`
- Should return JSON response (not 404)

## 🔧 Troubleshooting

### Build Fails
- Check Node.js version is 18.x or higher
- Verify all environment variables are set
- Check build logs for specific errors

### API Routes Don't Work
- Ensure framework preset is "Next.js" (not Static HTML Export)
- Check compatibility flags include `nodejs_compat`
- Verify build output directory is empty (auto-detect)

### Styling Issues
- Check if CSS files are loading properly
- Verify `_headers` file is included in build
- Check browser console for asset loading errors

### Contact Form Issues
- Test API route directly: `/api/contact`
- Check environment variables are set correctly
- Verify Google Apps Script URL is accessible

## 📊 Expected Build Output

```
Route (app)                                       Size  First Load JS
├ ○ /                                          18.2 kB         151 kB
├ ƒ /api/contact                                 142 B         100 kB  ← API Routes
├ ƒ /api/admin/leads                             142 B         100 kB  ← API Routes
├ ƒ /api/admin/blogs                             142 B         100 kB  ← API Routes
├ ○ /contact                                   6.96 kB         140 kB
├ ○ /admin                                     5.71 kB         121 kB
└ + 29 more pages...

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand  ← This is what we want!
```

## 🎉 Benefits of Dynamic Build

1. **Full Functionality**: All features work as intended
2. **Better Performance**: Server-side rendering for faster initial loads
3. **SEO Optimization**: Dynamic meta tags and structured data
4. **Scalability**: Can add database integration later
5. **User Experience**: Proper form handling and feedback

The website will now work exactly like a traditional web application with all modern features!