'use client'

import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-copper-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-charcoal mb-4">Page Not Found</h2>
          <p className="text-slate leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-copper-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          
          <div className="text-center">
            <button
              onClick={handleGoBack}
              className="inline-flex items-center space-x-2 text-copper-700 hover:text-copper-600 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>
        </div>

        <div className="mt-12 text-sm text-slate">
          <p>Need help? <Link href="/contact" className="text-copper-700 hover:text-copper-600 font-medium">Contact us</Link></p>
        </div>
      </div>
    </div>
  )
}