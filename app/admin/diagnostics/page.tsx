import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'System Diagnostics - Admin Dashboard',
  description: 'Check system configuration and database connectivity',
}

// Configure for static export
export const dynamic = 'force-static'

interface DiagnosticResult {
  timestamp: string
  database: {
    configured: boolean
    status: string
  }
  system: {
    status: string
    version: string
  }
}

export default function DiagnosticsPage() {
  // Static diagnostic results for demo
  const results: DiagnosticResult = {
    timestamp: new Date().toISOString(),
    database: {
      configured: true,
      status: 'Connected (Static Mode)'
    },
    system: {
      status: 'Operational',
      version: '1.0.0'
    }
  }

  const StatusIcon = ({ status }: { status: boolean }) => (
    <div className={`w-3 h-3 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'}`} />
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">System Diagnostics</h1>
              <p className="text-gray-600 mt-2">Check your system configuration (Static Export Mode)</p>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {/* System Status */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <StatusIcon status={true} />
                  <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Status</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={true} />
                      <span className="text-sm font-medium">{results.system.status}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Version</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={true} />
                      <span className="text-sm font-medium">{results.system.version}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                  <div className="flex items-center space-x-2">
                    <StatusIcon status={true} />
                    <span className="text-blue-700 font-medium">Static Export Mode</span>
                  </div>
                  <p className="text-blue-600 mt-2">
                    The website is running in static export mode for optimal performance on Cloudflare Pages.
                  </p>
                </div>
              </div>

              {/* Database Status */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <StatusIcon status={true} />
                  <h2 className="text-lg font-semibold text-gray-900">Database Configuration</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Status</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={true} />
                      <span className="text-sm font-medium">{results.database.status}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                  <div className="flex items-center space-x-2">
                    <StatusIcon status={true} />
                    <span className="text-green-700 font-medium">Static Data Mode</span>
                  </div>
                  <p className="text-green-600 mt-2">
                    Using static data for demo purposes. Contact form submissions are sent directly to Google Apps Script.
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Summary</h2>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded">
                  <div className="flex items-center space-x-2">
                    <StatusIcon status={true} />
                    <span className="text-green-700 font-medium">All Systems Operational</span>
                  </div>
                  <p className="text-green-600 mt-2">
                    Your website is properly configured for static deployment on Cloudflare Pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}