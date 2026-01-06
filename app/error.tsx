'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-4">Something went wrong!</h1>
          <p className="text-slate leading-relaxed">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center space-x-2 bg-copper-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-copper-700 hover:text-copper-600 font-medium"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-sm text-slate">
          <p>Need help? <Link href="/contact" className="text-copper-700 hover:text-copper-600 font-medium">Contact support</Link></p>
          {error.digest && (
            <p className="mt-2 text-xs text-gray-400">Error ID: {error.digest}</p>
          )}
        </div>
      </div>
    </div>
  )
}