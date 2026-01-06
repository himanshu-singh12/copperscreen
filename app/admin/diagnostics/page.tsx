'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from 'lucide-react'

interface DiagnosticResult {
  timestamp: string
  supabase: {
    configured: boolean
    url: string
    key: string
  }
  database: {
    leads: { accessible: boolean; count: number; error: string | null }
    blogs: { accessible: boolean; count: number; error: string | null }
  }
  openrouter: {
    configured: boolean
    keyValid: boolean
  }
}

export default function DiagnosticsPage() {
  const [results, setResults] = useState<DiagnosticResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const runDiagnostics = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/admin/test-connection')
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runDiagnostics()
  }, [])

  const StatusIcon = ({ status }: { status: boolean }) => {
    return status ? (
      <CheckCircle className="w-5 h-5 text-green-500" />
    ) : (
      <XCircle className="w-5 h-5 text-red-500" />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">System Diagnostics</h1>
              <p className="text-gray-600 mt-2">Check your Supabase and database configuration</p>
            </div>
            <button
              onClick={runDiagnostics}
              disabled={loading}
              className="flex items-center space-x-2 px-4 py-2 bg-copper-gradient text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Run Diagnostics</span>
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700 font-medium">Error running diagnostics</span>
              </div>
              <p className="text-red-600 mt-2">{error}</p>
            </div>
          )}

          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-copper-600"></div>
              <span className="ml-3 text-gray-600">Running diagnostics...</span>
            </div>
          )}

          {results && (
            <div className="space-y-6">
              {/* Supabase Configuration */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <StatusIcon status={results.supabase.configured} />
                  <h2 className="text-lg font-semibold text-gray-900">Supabase Configuration</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm text-gray-600">Project URL</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={results.supabase.url === 'Set'} />
                      <span className="text-sm font-medium">{results.supabase.url}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm text-gray-600">API Key</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={results.supabase.key === 'Set'} />
                      <span className="text-sm font-medium">{results.supabase.key}</span>
                    </div>
                  </div>
                </div>

                {!results.supabase.configured && (
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                      <span className="text-yellow-700 font-medium">Configuration Issue</span>
                    </div>
                    <p className="text-yellow-600 mt-2">
                      Your Supabase environment variables contain placeholder/example values. 
                      Please update your <code className="bg-yellow-100 px-1 rounded">.env.local</code> file with real credentials from your Supabase dashboard.
                    </p>
                  </div>
                )}
              </div>

              {/* Database Tables */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Database Tables</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <StatusIcon status={results.database.leads.accessible} />
                      <div>
                        <span className="font-medium text-gray-900">Leads Table</span>
                        <p className="text-sm text-gray-600">Contact form submissions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {results.database.leads.accessible ? `${results.database.leads.count} records` : 'Not accessible'}
                      </div>
                      {results.database.leads.error && (
                        <div className="text-xs text-red-600 mt-1">{results.database.leads.error}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <StatusIcon status={results.database.blogs.accessible} />
                      <div>
                        <span className="font-medium text-gray-900">Blog Posts Table</span>
                        <p className="text-sm text-gray-600">Blog content management</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {results.database.blogs.accessible ? `${results.database.blogs.count} records` : 'Not accessible'}
                      </div>
                      {results.database.blogs.error && (
                        <div className="text-xs text-red-600 mt-1">{results.database.blogs.error}</div>
                      )}
                    </div>
                  </div>
                </div>

                {(!results.database.leads.accessible || !results.database.blogs.accessible) && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span className="text-red-700 font-medium">Database Setup Required</span>
                    </div>
                    <p className="text-red-600 mt-2">
                      Database tables are not accessible. Please run the setup script from 
                      <code className="bg-red-100 px-1 rounded mx-1">supabase/setup-database.sql</code> 
                      in your Supabase SQL Editor.
                    </p>
                  </div>
                )}
              </div>

              {/* OpenRouter AI */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <StatusIcon status={results.openrouter.configured && results.openrouter.keyValid} />
                  <h2 className="text-lg font-semibold text-gray-900">OpenRouter AI</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm text-gray-600">API Key Configured</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={results.openrouter.configured} />
                      <span className="text-sm font-medium">{results.openrouter.configured ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm text-gray-600">Key Format Valid</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={results.openrouter.keyValid} />
                      <span className="text-sm font-medium">{results.openrouter.keyValid ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Summary</h2>
                
                {results.supabase.configured && results.database.leads.accessible && results.database.blogs.accessible ? (
                  <div className="p-4 bg-green-50 border border-green-200 rounded">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-700 font-medium">All Systems Operational</span>
                    </div>
                    <p className="text-green-600 mt-2">
                      Your Supabase configuration is working correctly. The admin dashboard should show real data without any errors.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-red-50 border border-red-200 rounded">
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span className="text-red-700 font-medium">Setup Required</span>
                    </div>
                    <p className="text-red-600 mt-2">
                      Please follow the setup guide in <code className="bg-red-100 px-1 rounded">SUPABASE-SETUP-GUIDE.md</code> to configure your database properly.
                    </p>
                  </div>
                )}
              </div>

              <div className="text-center text-sm text-gray-500">
                Last updated: {new Date(results.timestamp).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}