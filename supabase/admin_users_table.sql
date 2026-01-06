-- Create admin_users table for admin authentication
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_active ON admin_users(is_active);

-- Insert default admin users
INSERT INTO admin_users (username, email, password_hash, role, is_active) VALUES
('admin', 'admin@copperscreen.com', 'copper2024', 'admin', true),
('superadmin', 'superadmin@copperscreen.com', 'copper2024super', 'super_admin', true)
ON CONFLICT (username) DO NOTHING;

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_admin_users_updated_at 
    BEFORE UPDATE ON admin_users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users table
-- Only authenticated admin users can read admin_users
CREATE POLICY "Admin users can read admin_users" ON admin_users
    FOR SELECT USING (true); -- In production, add proper authentication check

-- Only super_admin can insert new admin users
CREATE POLICY "Super admin can insert admin_users" ON admin_users
    FOR INSERT WITH CHECK (true); -- In production, add proper role check

-- Only super_admin can update admin users
CREATE POLICY "Super admin can update admin_users" ON admin_users
    FOR UPDATE USING (true); -- In production, add proper role check

-- Only super_admin can delete admin users
CREATE POLICY "Super admin can delete admin_users" ON admin_users
    FOR DELETE USING (true); -- In production, add proper role check

-- Grant necessary permissions
GRANT ALL ON admin_users TO authenticated;
GRANT ALL ON admin_users TO anon; -- For demo purposes, remove in production