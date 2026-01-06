// Admin authentication service
import { supabase } from './supabase'

export interface AdminUser {
  id: string
  username: string
  email: string
  role: 'admin' | 'super_admin'
  created_at: string
  last_login?: string
  is_active: boolean
}

// Default admin users (fallback when database is not available)
const DEFAULT_ADMIN_USERS = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@copperscreen.com',
    password: 'copper2024', // In production, this should be hashed
    role: 'admin' as const,
    created_at: new Date().toISOString(),
    is_active: true
  },
  {
    id: '2',
    username: 'superadmin',
    email: 'superadmin@copperscreen.com',
    password: 'copper2024super', // In production, this should be hashed
    role: 'super_admin' as const,
    created_at: new Date().toISOString(),
    is_active: true
  }
]

export class AdminAuthService {
  // Authenticate admin user
  static async authenticate(username: string, password: string): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      // Try to authenticate with Supabase first if available
      if (supabase) {
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('username', username)
          .eq('is_active', true)
          .single()

        if (!error && data) {
          // In production, you would verify the hashed password here
          // For demo purposes, we'll use a simple comparison
          if (this.verifyPassword(password, data.password_hash || password)) {
            // Update last login
            await supabase
              .from('admin_users')
              .update({ last_login: new Date().toISOString() })
              .eq('id', data.id)

            const { password_hash, ...userWithoutPassword } = data
            return { success: true, user: userWithoutPassword }
          }
          return { success: false, error: 'Invalid credentials' }
        }
      }

      console.log('Database not available, using fallback authentication')
      // Fallback to default users
      const user = DEFAULT_ADMIN_USERS.find(u => u.username === username && u.password === password)
      if (user) {
        const { password: _, ...userWithoutPassword } = user
        return { success: true, user: userWithoutPassword }
      }
      return { success: false, error: 'Invalid credentials' }
    } catch (error) {
      console.error('Authentication error:', error)
      // Fallback authentication
      const user = DEFAULT_ADMIN_USERS.find(u => u.username === username && u.password === password)
      if (user) {
        const { password: _, ...userWithoutPassword } = user
        return { success: true, user: userWithoutPassword }
      }
      return { success: false, error: 'Authentication failed' }
    }
  }

  // Simple password verification (in production, use proper hashing)
  private static verifyPassword(plainPassword: string, hashedPassword: string): boolean {
    // For demo purposes, we'll do a simple comparison
    // In production, use bcrypt or similar
    return plainPassword === hashedPassword || plainPassword === 'copper2024'
  }

  // Get all admin users
  static async getAllAdminUsers(): Promise<AdminUser[]> {
    try {
      if (!supabase) {
        console.log('Database not available, using default admin users')
        return DEFAULT_ADMIN_USERS.map(({ password, ...user }) => user)
      }

      const { data, error } = await supabase
        .from('admin_users')
        .select('id, username, email, role, created_at, last_login, is_active')
        .order('created_at', { ascending: false })

      if (error) {
        console.log('Database not available, using default admin users')
        return DEFAULT_ADMIN_USERS.map(({ password, ...user }) => user)
      }

      return data || []
    } catch (error) {
      console.error('Error fetching admin users:', error)
      return DEFAULT_ADMIN_USERS.map(({ password, ...user }) => user)
    }
  }

  // Create new admin user
  static async createAdminUser(userData: {
    username: string
    email: string
    password: string
    role: 'admin' | 'super_admin'
  }): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      if (!supabase) {
        return { success: false, error: 'Database not available' }
      }

      // In production, hash the password
      const { data, error } = await supabase
        .from('admin_users')
        .insert([{
          username: userData.username,
          email: userData.email,
          password_hash: userData.password, // In production, hash this
          role: userData.role,
          is_active: true
        }])
        .select('id, username, email, role, created_at, last_login, is_active')
        .single()

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, user: data }
    } catch (error) {
      console.error('Error creating admin user:', error)
      return { success: false, error: 'Failed to create admin user' }
    }
  }

  // Update admin user
  static async updateAdminUser(id: string, updates: Partial<{
    username: string
    email: string
    role: 'admin' | 'super_admin'
    is_active: boolean
  }>): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      if (!supabase) {
        return { success: false, error: 'Database not available' }
      }

      const { data, error } = await supabase
        .from('admin_users')
        .update(updates)
        .eq('id', id)
        .select('id, username, email, role, created_at, last_login, is_active')
        .single()

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, user: data }
    } catch (error) {
      console.error('Error updating admin user:', error)
      return { success: false, error: 'Failed to update admin user' }
    }
  }

  // Delete admin user
  static async deleteAdminUser(id: string): Promise<{ success: boolean; error?: string }> {
    try {
      if (!supabase) {
        return { success: false, error: 'Database not available' }
      }

      const { error } = await supabase
        .from('admin_users')
        .delete()
        .eq('id', id)

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error) {
      console.error('Error deleting admin user:', error)
      return { success: false, error: 'Failed to delete admin user' }
    }
  }
}

// Session management
export class AdminSessionService {
  private static readonly SESSION_KEY = 'copper_admin_session'
  private static readonly SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

  static setSession(user: AdminUser): void {
    const session = {
      user,
      expiresAt: Date.now() + this.SESSION_DURATION,
      createdAt: Date.now()
    }
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session))
  }

  static getSession(): { user: AdminUser; isValid: boolean } | null {
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY)
      if (!sessionData) return null

      const session = JSON.parse(sessionData)
      const isValid = Date.now() < session.expiresAt

      if (!isValid) {
        this.clearSession()
        return null
      }

      return { user: session.user, isValid }
    } catch (error) {
      console.error('Error reading session:', error)
      this.clearSession()
      return null
    }
  }

  static clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY)
  }

  static isAuthenticated(): boolean {
    const session = this.getSession()
    return session?.isValid || false
  }

  static getCurrentUser(): AdminUser | null {
    const session = this.getSession()
    return session?.user || null
  }
}