'use client'

import { useState, useEffect } from 'react'
import { AdminLogin } from '@/components/admin/AdminLogin'
import { AdminDashboard } from '@/components/admin/AdminDashboard'
import { AdminSessionService } from '@/lib/admin-auth'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    // Check if user is already authenticated
    const session = AdminSessionService.getSession()
    if (session) {
      setIsAuthenticated(true)
      setCurrentUser(session)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (success: boolean, user?: any) => {
    if (success && user) {
      setIsAuthenticated(true)
      setCurrentUser(user)
    }
  }

  const handleLogout = () => {
    AdminSessionService.clearSession()
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-copper-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminDashboard onLogout={handleLogout} currentUser={currentUser} />
      )}
    </div>
  )
}