# Cloudflare Pages Environment Variables

## Required Environment Variables

Add these **exactly** in your Cloudflare Pages dashboard:

### Production Environment Variables

| Variable Name | Value |
|---------------|-------|
| `NODE_ENV` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://copperscreen.pages.dev` |
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | `https://script.google.com/macros/s/AKfycbya7Js0rhqX5_D9GMKAobqIA3Au4MUFxHkZYorwmUule60j7rqrU1ePceybN7asoh_q/exec` |
| `NEXT_PUBLIC_ADMIN_USERNAME` | `admin` |
| `NEXT_PUBLIC_ADMIN_PASSWORD` | `copper2024` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `hello@copperscreen.com` |
| `NEXT_PUBLIC_CONTACT_PHONE` | `+1 (555) 123-4567` |
| `NEXT_PUBLIC_LINKEDIN_URL` | `https://linkedin.com/company/copperscreen` |
| `NEXT_PUBLIC_TWITTER_URL` | `https://twitter.com/copperscreen` |

## How to Add Variables

1. Go to your Cloudflare Pages project
2. Click **Settings** → **Environment variables**
3. Click **"Add variable"** for each one
4. **Variable name**: Copy exactly from table above
5. **Value**: Copy exactly from table above
6. **Environment**: Select **Production**
7. Click **Save**

## Common Mistakes

❌ **Don't do:**
- Add quotes around values
- Add extra spaces
- Use different variable names
- Skip any variables

✅ **Do:**
- Copy values exactly as shown
- Set environment to "Production"
- Double-check spelling
- Save after each variable