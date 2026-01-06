# Cloudflare Pages Deployment Guide

This guide will help you deploy the Copper Screen website to Cloudflare Pages with full production optimization.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **GitHub Repository**: Code should be in a GitHub repository
3. **Domain** (Optional): Custom domain for production

## Step 1: Prepare for Deployment

### 1.1 Environment Variables
Create a `.env.production` file with your production values:

```env
NODE_ENV=production
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your-google-apps-script-url
NEXT_PUBLIC_SITE_URL=https://your-domain.pages.dev
NEXT_PUBLIC_SITE_NAME=Copper Screen
NEXT_PUBLIC_CONTACT_EMAIL=hello@copperscreen.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/copperscreen
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/copperscreen
```

### 1.2 Build Verification
Test the production build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` and test:
- All pages load correctly
- Admin dashboard works (`/admin`)
- Contact form submits to Google Sheets
- No console errors

## Step 2: Cloudflare Pages Setup

### 2.1 Create New Project
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Connect to your GitHub repository
4. Select the repository containing your code

### 2.2 Build Configuration
Set the following build settings:

- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (leave empty if code is in root)
- **Node.js version**: `18.x` or `20.x`

### 2.3 Environment Variables
In Cloudflare Pages project settings, add these environment variables:

```
NODE_ENV=production
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your-actual-script-url
NEXT_PUBLIC_SITE_URL=https://your-domain.pages.dev
NEXT_PUBLIC_SITE_NAME=Copper Screen
NEXT_PUBLIC_CONTACT_EMAIL=hello@copperscreen.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/copperscreen
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/copperscreen
```

## Step 3: Custom Domain Setup (Optional)

### 3.1 Add Custom Domain
1. In your Cloudflare Pages project
2. Go to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `copperscreen.com`)

### 3.2 DNS Configuration
If your domain is managed by Cloudflare:
1. DNS records will be automatically configured
2. SSL certificate will be automatically provisioned

If your domain is managed elsewhere:
1. Add a CNAME record pointing to `your-project.pages.dev`
2. Wait for DNS propagation (up to 24 hours)

## Step 4: Performance Optimization

### 4.1 Cloudflare Settings
Enable these features in your Cloudflare dashboard:

**Speed → Optimization:**
- Auto Minify: CSS, JavaScript, HTML
- Brotli compression: On
- Early Hints: On

**Caching → Configuration:**
- Browser Cache TTL: 4 hours
- Always Online: On

**Security → Settings:**
- Security Level: Medium
- Bot Fight Mode: On
- Always Use HTTPS: On

### 4.2 Page Rules (Optional)
Create page rules for better caching:

1. `your-domain.com/_next/static/*`
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 year

2. `your-domain.com/admin/*`
   - Cache Level: Bypass
   - Security Level: High

## Step 5: Google Apps Script Integration

### 5.1 Update Script URL
1. Deploy your Google Apps Script as a web app
2. Copy the web app URL
3. Update `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` in Cloudflare Pages environment variables
4. Redeploy the site

### 5.2 CORS Configuration
Ensure your Google Apps Script allows requests from your domain:

```javascript
function doPost(e) {
  // Add CORS headers
  const response = {
    'Access-Control-Allow-Origin': 'https://your-domain.pages.dev',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  // Your existing script logic here
}
```

## Step 6: Admin Dashboard Security

### 6.1 Access Control
The admin dashboard is protected by:
- Client-side authentication
- No indexing by search engines
- Secure headers

### 6.2 Credentials
Default admin credentials:
- **Username**: `admin`
- **Password**: `copper2024`

**Important**: Change these in production by updating the environment variables:
```
NEXT_PUBLIC_ADMIN_USERNAME=your-secure-username
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password
```

## Step 7: Monitoring & Analytics

### 7.1 Cloudflare Analytics
Monitor your site performance in:
- Cloudflare Dashboard → Analytics
- Pages project → Analytics

### 7.2 Google Analytics (Optional)
Add Google Analytics by:
1. Setting `NEXT_PUBLIC_GA_ID` environment variable
2. Adding the tracking code to your layout

## Step 8: Post-Deployment Checklist

### 8.1 Functionality Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Admin dashboard accessible at `/admin`
- [ ] Admin login works with credentials
- [ ] Lead data displays in dashboard
- [ ] Mobile responsiveness works
- [ ] Page load speed is optimal

### 8.2 SEO Verification
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Meta tags are correct
- [ ] Open Graph images work
- [ ] Schema markup is present

### 8.3 Security Testing
- [ ] HTTPS is enforced
- [ ] Security headers are present
- [ ] Admin area is not indexed
- [ ] No sensitive data in client-side code

## Step 9: Maintenance

### 9.1 Regular Updates
- Monitor Cloudflare Pages deployments
- Update dependencies regularly
- Review Google Apps Script logs
- Monitor lead submissions

### 9.2 Backup Strategy
- Code is backed up in GitHub
- Google Sheets data is automatically backed up by Google
- Consider exporting lead data regularly

## Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs in Cloudflare Pages

**Contact Form Not Working:**
- Verify Google Apps Script URL
- Check CORS settings
- Test script independently

**Admin Dashboard Issues:**
- Clear browser cache
- Check environment variables
- Verify authentication logic

**Performance Issues:**
- Enable Cloudflare optimizations
- Check image optimization
- Review bundle size

## Support

For deployment issues:
1. Check Cloudflare Pages documentation
2. Review build logs
3. Test locally first
4. Contact Cloudflare support if needed

## Security Notes

- Never commit `.env.local` or `.env.production` to version control
- Use strong passwords for admin access
- Regularly update dependencies
- Monitor for security vulnerabilities
- Consider implementing rate limiting for forms

---

**Deployment Complete!** 🚀

Your Copper Screen website is now live on Cloudflare Pages with:
- ✅ Production-optimized performance
- ✅ Secure admin dashboard
- ✅ Google Sheets integration
- ✅ SEO optimization
- ✅ Global CDN delivery
- ✅ Automatic SSL/TLS