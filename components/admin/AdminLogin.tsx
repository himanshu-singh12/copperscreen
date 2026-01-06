'use client'

import { useState } from 'react'
import { Eye, EyeOff, Lock, User, AlertCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { AdminAuthService, AdminSessionService } from '@/lib/admin-auth'

interface AdminLoginProps {
  onLogin: (success: boolean, user?: any) => void
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Demo credentials
  const DEMO_CREDENTIALS = {
    username: 'admin',
    password: 'copper2024'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await AdminAuthService.authenticate(credentials.username, credentials.password)
      
      if (result.success && result.user) {
        AdminSessionService.setSession(result.user)
        onLogin(true, result.user)
      } else {
        setError(result.error || 'Invalid username or password')
        onLogin(false)
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Login failed. Please try again.')
      onLogin(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Image
            src="/images/logo-new.png"
            alt="Copper Screen Logo"
            width={200}
            height={64}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-charcoal">Admin Dashboard</h2>
          <p className="mt-2 text-sm text-slate">
            Sign in to access the leads management system
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-charcoal mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-charcoal mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-copper-gradient hover:shadow-lg magnetic-button'
                }
                transition-all duration-300
              `}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-6 p-4 bg-copper-50 rounded-lg border border-copper-200">
            <h4 className="text-sm font-semibold text-copper-800 mb-2">Demo Credentials:</h4>
            <div className="text-sm text-copper-700 space-y-1">
              <div><strong>Username:</strong> admin</div>
              <div><strong>Password:</strong> copper2024</div>
            </div>
            <div className="mt-2 text-xs text-copper-600">
              <CheckCircle className="w-3 h-3 inline mr-1" />
              Additional admin users available in production
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}