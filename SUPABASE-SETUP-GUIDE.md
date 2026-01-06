# Supabase Setup Guide for Copper Screen

## 🚨 CURRENT ISSUE
Your admin dashboard is showing "Database Error" because Supabase is not properly configured. The current environment variables contain placeholder/example values.

## ✅ STEP-BY-STEP SETUP

### Step 1: Access Your Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your existing project or create a new one
4. Note your project URL (should look like: `https://abcdefghijklmnop.supabase.co`)

### Step 2: Get Your REAL API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following **REAL** values (not the examples currently in your .env.local):
   - **Project URL**: `https://your-actual-project-id.supabase.co`
   - **anon/public key**: Starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **service_role key**: Starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Step 3: Update Environment Variables

**IMPORTANT**: Replace the placeholder values in your `.env.local` file:

```env
# Replace these with your REAL Supabase credentials:
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-real-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-real-service-role-key
```

**Current Problem**: Your `.env.local` contains example values like:
- URL: `https://hacqepklwakxtiactzpo.supabase.co` (example)
- Key: `...example-key` (placeholder)

### Step 4: Set Up Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the entire content from `supabase/setup-database.sql`
4. Click **Run** to execute the script

This will create:
- ✅ `leads` table for contact form submissions
- ✅ `blog_posts` table for blog management
- ✅ `blog_categories` table for blog organization
- ✅ `admin_users` table for admin authentication
- ✅ All necessary indexes, triggers, and RLS policies

### Step 5: Verify Database Setup

1. Go to **Table Editor** in your Supabase dashboard
2. You should see these tables:
   - ✅ `leads` (empty initially)
   - ✅ `blog_posts` (empty initially)
   - ✅ `blog_categories` (with 6 default categories)
   - ✅ `admin_users` (with 2 default admin users)

### Step 6: Test the Connection

1. **Restart your development server**: `npm run dev`
2. Go to `http://localhost:3000/api/admin/test-connection`
3. You should see:
   ```json
   {
     "supabase": {
       "configured": true,
       "url": "Set",
       "key": "Set"
     },
     "database": {
       "leads": { "accessible": true, "count": 0, "error": null },
       "blogs": { "accessible": true, "count": 0, "error": null }
     }
   }
   ```

### Step 7: Test Admin Dashboard

1. Go to `http://localhost:3000/admin`
2. Login with: `admin` / `copper2024`
3. You should see:
   - ✅ No "Database Error" indicator
   - ✅ Empty leads table (ready for real submissions)
   - ✅ Empty blogs table
   - ✅ All functionality working

### Step 8: Test Contact Form

1. Go to `http://localhost:3000/contact`
2. Fill out and submit the form
3. Check the admin dashboard - you should see the new lead
4. Check browser console for: `✅ Leads fetched from Supabase: 1`

## 🔧 TROUBLESHOOTING

### Issue: "Supabase not configured" error
**Solution**: Replace the example values in `.env.local` with your real Supabase credentials

### Issue: "Database tables not found" error
**Solution**: Run the `supabase/setup-database.sql` script in your Supabase SQL Editor

### Issue: Still seeing "Database Error"
**Solution**: 
1. Double-check `.env.local` has real values (not examples)
2. Restart development server: `npm run dev`
3. Clear browser cache
4. Check `/api/admin/test-connection` for detailed status

### Issue: RLS policy errors
**Solution**: The setup script includes permissive RLS policies for development

## 🎯 EXPECTED RESULTS AFTER SETUP

- ✅ Admin dashboard shows "Connected" status
- ✅ Contact form submissions save to Supabase
- ✅ No more "Database Error" indicator
- ✅ All CRUD operations work properly
- ✅ Menu overlap fixed with proper spacing
- ✅ Empty state when no leads exist (no dummy data)

## 🔒 PRODUCTION SECURITY NOTES

The current setup uses permissive RLS policies for development. For production:

1. **Tighten RLS policies** to restrict access appropriately
2. **Hash admin passwords** instead of storing plain text
3. **Use environment-specific API keys**
4. **Enable additional security features** in Supabase dashboard

---

**Next Steps**: 
1. Get your real Supabase credentials from your dashboard
2. Update `.env.local` with real values
3. Run the database setup script
4. Restart your dev server
5. Test the admin dashboard

Your admin dashboard will then show only real leads submitted through the contact form!