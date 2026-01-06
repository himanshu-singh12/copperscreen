'use client'

import { useState, useEffect, useCallback } from 'react'
import { 
  LogOut, 
  Users, 
  TrendingUp, 
  Download,
  Search,
  RefreshCw,
  Mail,
  Phone,
  Building,
  DollarSign,
  Clock,
  Eye,
  FileText,
  Plus,
  Edit,
  Trash2,
  Sparkles
} from 'lucide-react'
import { staticLeads, staticBlogPosts, type Lead, type BlogPost } from '@/lib/static-data'

interface AdminDashboardProps {
  onLogout: () => void
  currentUser?: any
}

type ActiveTab = 'leads' | 'blogs' | 'ai-generator'

export function AdminDashboard({ onLogout, currentUser }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('leads')
  const [leads, setLeads] = useState<Lead[]>(staticLeads)
  const [blogs, setBlogs] = useState<BlogPost[]>(staticBlogPosts)
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>(staticLeads)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [serviceFilter, setServiceFilter] = useState<string>('all')
  const [selectedLead, setSelectedLead] = useState<any>(null)
  const [connectionError, setConnectionError] = useState<string | null>(null)

  const filterLeads = useCallback(() => {
    let filtered = leads

    if (searchTerm) {
      filtered = filtered.filter(lead => 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter)
    }

    if (serviceFilter !== 'all') {
      filtered = filtered.filter(lead => lead.service === serviceFilter)
    }

    setFilteredLeads(filtered)
  }, [leads, searchTerm, statusFilter, serviceFilter])

  useEffect(() => {
    filterLeads()
  }, [filterLeads])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    const colors = {
      'new': 'bg-blue-100 text-blue-700',
      'contacted': 'bg-yellow-100 text-yellow-700',
      'qualified': 'bg-green-100 text-green-700',
      'proposal': 'bg-purple-100 text-purple-700',
      'closed': 'bg-gray-100 text-gray-700'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Company', 'Phone', 'Service', 'Budget', 'Status', 'Date']
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(lead => [
        lead.name,
        lead.email,
        lead.company,
        lead.phone,
        lead.service,
        lead.budget,
        lead.status,
        formatDate(lead.created_at)
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              <span className="text-sm text-gray-500">(Static Mode)</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {currentUser?.username || 'Admin'}
              </span>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'leads', label: 'Leads', icon: Users, count: leads.length },
              { id: 'blogs', label: 'Blog Posts', icon: FileText, count: blogs.length },
              { id: 'ai-generator', label: 'AI Generator', icon: Sparkles, count: 0 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-copper-500 text-copper-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {connectionError && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <span className="text-yellow-800 font-medium">Demo Mode</span>
            </div>
            <p className="text-yellow-700 mt-2">
              Running in static export mode with demo data. Contact form submissions are sent to Google Apps Script.
            </p>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Leads</dt>
                      <dd className="text-lg font-medium text-gray-900">{leads.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">New This Week</dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {leads.filter(lead => lead.status === 'new').length}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Qualified</dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {leads.filter(lead => lead.status === 'qualified').length}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">In Progress</dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {leads.filter(lead => ['contacted', 'proposal'].includes(lead.status)).length}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters and Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex-1 min-w-0">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-copper-500 focus:border-copper-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-copper-500 focus:border-copper-500"
                    >
                      <option value="all">All Status</option>
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="proposal">Proposal</option>
                      <option value="closed">Closed</option>
                    </select>

                    <button
                      onClick={exportToCSV}
                      className="flex items-center space-x-2 bg-copper-600 text-white px-4 py-2 rounded-md hover:bg-copper-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Export CSV</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Leads Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Budget
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                            <div className="text-sm text-gray-500">{lead.email}</div>
                            <div className="text-sm text-gray-500">{lead.company}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{lead.service}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{lead.budget}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(lead.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredLeads.length === 0 && (
                <div className="text-center py-12">
                  <Users className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No leads found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchTerm || statusFilter !== 'all' 
                      ? 'Try adjusting your search or filters.' 
                      : 'Contact form submissions will appear here.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Blog Posts (Static Mode)</h3>
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">{blog.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{blog.excerpt}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                    <span>{blog.category}</span>
                    <span>{blog.published ? 'published' : 'draft'}</span>
                    <span>{blog.views} views</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Generator Tab */}
        {activeTab === 'ai-generator' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">AI Blog Generator (Static Mode)</h3>
            <p className="text-gray-500">AI blog generation is not available in static export mode.</p>
          </div>
        )}
      </div>
    </div>
  )
}