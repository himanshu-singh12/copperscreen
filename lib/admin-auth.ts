// Admin authentication service (Static Export Version)

export interface AdminUser {
  id: string
  username: string
  email: string
  role: 'admin' | 'super_admin'
  created_at: string
  last_login?: string
  is_active: boolean
}

// Default admin users for static export
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
  static async authenticate(username: string, password: string): Promise<AdminUser | null> {
    // Static authentication for demo
    const user = DEFAULT_ADMIN_USERS.find(u => 
      u.username === username && u.password === password
    )
    
    if (user) {
      const { password: _, ...userWithoutPassword } = user
      return userWithoutPassword
    }
    
    return null
  }

  static async createUser(userData: Omit<AdminUser, 'id' | 'created_at'>): Promise<AdminUser> {
    // Static mode - return mock user
    return {
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      ...userData
    }
  }

  static async updateUser(userId: string, updates: Partial<AdminUser>): Promise<AdminUser | null> {
    // Static mode - return mock updated user
    const user = DEFAULT_ADMIN_USERS.find(u => u.id === userId)
    if (user) {
      const { password: _, ...userWithoutPassword } = user
      return { ...userWithoutPassword, ...updates }
    }
    return null
  }

  static async deleteUser(userId: string): Promise<boolean> {
    // Static mode - always return true
    return true
  }

  static async getAllUsers(): Promise<AdminUser[]> {
    // Static mode - return default users without passwords
    return DEFAULT_ADMIN_USERS.map(({ password: _, ...user }) => user)
  }
}

export class AdminSessionService {
  private static readonly SESSION_KEY = 'admin_session'
  private static readonly SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

  static setSession(user: AdminUser): void {
    if (typeof window !== 'undefined') {
      const session = {
        user,
        expiresAt: Date.now() + this.SESSION_DURATION
      }
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session))
    }
  }

  static getSession(): AdminUser | null {
    if (typeof window === 'undefined') return null
    
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY)
      if (!sessionData) return null

      const session = JSON.parse(sessionData)
      
      // Check if session is expired
      if (Date.now() > session.expiresAt) {
        this.clearSession()
        return null
      }

      return session.user
    } catch (error) {
      console.error('Error reading admin session:', error)
      this.clearSession()
      return null
    }
  }

  static clearSession(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.SESSION_KEY)
    }
  }

  static isAuthenticated(): boolean {
    return this.getSession() !== null
  }

  static extendSession(): void {
    const user = this.getSession()
    if (user) {
      this.setSession(user)
    }
  }
}