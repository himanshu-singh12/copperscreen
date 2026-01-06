-- Copper Screen Database Setup
-- Run this script in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    service VARCHAR(255) NOT NULL,
    budget VARCHAR(100),
    message TEXT NOT NULL,
    source VARCHAR(100) DEFAULT 'Contact Form',
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted'))
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image VARCHAR(500),
    author VARCHAR(255) NOT NULL DEFAULT 'Copper Screen Team',
    category VARCHAR(100) NOT NULL,
    tags TEXT[] DEFAULT '{}',
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    reading_time INTEGER DEFAULT 5,
    views INTEGER DEFAULT 0,
    seo_title VARCHAR(500),
    seo_description VARCHAR(500),
    ai_generated BOOLEAN DEFAULT false,
    trending_score INTEGER DEFAULT 50
);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    color VARCHAR(50) DEFAULT '#3B82F6'
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);

CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_active ON admin_users(is_active);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_admin_users_updated_at ON admin_users;
CREATE TRIGGER update_admin_users_updated_at 
    BEFORE UPDATE ON admin_users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create function to increment blog views
CREATE OR REPLACE FUNCTION increment_blog_views(blog_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE blog_posts 
    SET views = views + 1 
    WHERE id = blog_id;
END;
$$ LANGUAGE plpgsql;

-- Insert default admin users
INSERT INTO admin_users (username, email, password_hash, role, is_active) VALUES
('admin', 'admin@copperscreen.com', 'copper2024', 'admin', true),
('superadmin', 'superadmin@copperscreen.com', 'copper2024super', 'super_admin', true)
ON CONFLICT (username) DO NOTHING;

-- Insert default blog categories
INSERT INTO blog_categories (name, slug, description, color) VALUES
('SEO & Digital Marketing', 'seo-digital-marketing', 'Search engine optimization and digital marketing strategies', '#3B82F6'),
('AI & Technology', 'ai-technology', 'Artificial intelligence and technology trends', '#8B5CF6'),
('Web Development', 'web-development', 'Web development and programming topics', '#10B981'),
('Business Strategy', 'business-strategy', 'Business strategy and growth topics', '#F59E0B'),
('Case Studies', 'case-studies', 'Real-world case studies and success stories', '#EF4444'),
('Industry Trends', 'industry-trends', 'Latest industry trends and insights', '#06B6D4')
ON CONFLICT (slug) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for leads (allow all operations for now - tighten in production)
DROP POLICY IF EXISTS "Allow all operations on leads" ON leads;
CREATE POLICY "Allow all operations on leads" ON leads
    FOR ALL USING (true);

-- Create RLS policies for blog_posts
DROP POLICY IF EXISTS "Allow read access to published blog posts" ON blog_posts;
CREATE POLICY "Allow read access to published blog posts" ON blog_posts
    FOR SELECT USING (published = true OR true); -- Allow all for now

DROP POLICY IF EXISTS "Allow all operations on blog posts" ON blog_posts;
CREATE POLICY "Allow all operations on blog posts" ON blog_posts
    FOR ALL USING (true);

-- Create RLS policies for blog_categories
DROP POLICY IF EXISTS "Allow read access to blog categories" ON blog_categories;
CREATE POLICY "Allow read access to blog categories" ON blog_categories
    FOR SELECT USING (true);

-- Create RLS policies for admin_users
DROP POLICY IF EXISTS "Allow all operations on admin users" ON admin_users;
CREATE POLICY "Allow all operations on admin users" ON admin_users
    FOR ALL USING (true);

-- Grant necessary permissions
GRANT ALL ON leads TO authenticated;
GRANT ALL ON leads TO anon;

GRANT ALL ON blog_posts TO authenticated;
GRANT ALL ON blog_posts TO anon;

GRANT ALL ON blog_categories TO authenticated;
GRANT ALL ON blog_categories TO anon;

GRANT ALL ON admin_users TO authenticated;
GRANT ALL ON admin_users TO anon;

-- Grant sequence permissions
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'Database setup completed successfully!';
    RAISE NOTICE 'Tables created: leads, blog_posts, blog_categories, admin_users';
    RAISE NOTICE 'Default admin users created: admin/copper2024, superadmin/copper2024super';
    RAISE NOTICE 'Default blog categories created';
    RAISE NOTICE 'Indexes and triggers created';
    RAISE NOTICE 'RLS policies enabled';
END $$;