# Admin Dashboard Setup Guide

## Overview
The admin dashboard provides a comprehensive interface for managing leads, blog posts, and generating AI-powered content. It includes secure authentication and works both with Supabase database and in demo mode.

## Admin Access

### Default Admin Credentials
- **Username:** `admin`
- **Password:** `copper2024`
- **Role:** Admin

- **Username:** `superadmin` 
- **Password:** `copper2024super`
- **Role:** Super Admin

### Accessing the Admin Dashboard
1. Navigate to `/admin` in your browser
2. Enter the admin credentials
3. Click "Sign In"

## Features

### 1. Lead Management
- View all leads from contact form submissions
- Filter leads by status, service, and search terms
- Update lead status (New → Contacted → Qualified → Converted)
- Export leads to CSV
- View detailed lead information
- Direct email and phone contact links

### 2. Blog Management
- View all blog posts (published and drafts)
- See blog statistics (views, reading time, etc.)
- Delete blog posts
- View AI-generated content indicators
- Direct links to view published posts

### 3. AI Blog Generator
- Generate trending blog topics using OpenRouter AI
- Create blog posts from trending topics
- View topic relevance scores and difficulty
- Automatic content generation with SEO optimization

## Database Setup

### Supabase Configuration
1. Create the required tables using the SQL scripts in `/supabase/`
2. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   ```

### Required Tables
- `admin_users` - Admin authentication
- `leads` - Contact form submissions
- `blog_posts` - Blog content management
- `blog_categories` - Blog categorization

### Demo Mode
If Supabase is not configured or unavailable, the admin dashboard automatically switches to demo mode with sample data. This ensures the dashboard is always functional for demonstration purposes.

## Security Features

### Authentication
- Session-based authentication with 24-hour expiration
- Secure password verification (demo uses plain text, production should use hashing)
- Role-based access control (Admin vs Super Admin)
- Automatic session cleanup on logout

### Data Protection
- Row Level Security (RLS) enabled on all tables
- Admin-only access to sensitive data
- Secure API endpoints for data operations

## Production Deployment

### Security Checklist
1. **Hash passwords** - Replace plain text passwords with bcrypt or similar
2. **Environment variables** - Ensure all sensitive keys are properly configured
3. **Database security** - Review and tighten RLS policies
4. **HTTPS only** - Ensure admin dashboard is only accessible over HTTPS
5. **Rate limiting** - Implement login attempt rate limiting
6. **Audit logging** - Add admin action logging for compliance

### Performance Optimization
1. **Database indexing** - Ensure proper indexes on frequently queried columns
2. **Caching** - Implement Redis or similar for session management
3. **CDN** - Use CDN for static assets
4. **Monitoring** - Set up error tracking and performance monitoring

## Troubleshooting

### Common Issues

#### Admin Dashboard Stuck Loading
- Check browser console for errors
- Verify Supabase environment variables
- Ensure database tables exist
- Dashboard will fall back to demo mode if database is unavailable

#### Authentication Failures
- Verify admin credentials
- Check browser local storage for session data
- Clear browser cache and cookies
- Ensure admin_users table exists and has default users

#### Database Connection Issues
- Verify Supabase URL and keys
- Check network connectivity
- Review Supabase dashboard for service status
- Demo mode will activate automatically if database is unavailable

### Support
For technical support or questions about the admin dashboard, contact the development team or refer to the project documentation.

## API Endpoints

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/session` - Check session status

### Lead Management
- `GET /api/admin/leads` - Get all leads
- `PUT /api/admin/leads/:id` - Update lead status
- `DELETE /api/admin/leads/:id` - Delete lead

### Blog Management
- `GET /api/admin/blogs` - Get all blog posts
- `POST /api/admin/blogs` - Create new blog post
- `PUT /api/admin/blogs/:id` - Update blog post
- `DELETE /api/admin/blogs/:id` - Delete blog post

### AI Content Generation
- `GET /api/admin/trending-topics` - Get trending topics
- `POST /api/admin/generate-blog` - Generate blog from topic