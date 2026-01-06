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
import { leadService, blogService, Lead, BlogPost } from '@/lib/supabase'
import { openRouterService, getTrendingTopicsForAdmin } from '@/lib/generate-blogs'

interface AdminDashboardProps {
  onLogout: () => void
  currentUser?: any
}

type ActiveTab = 'leads' | 'blogs' | 'ai-generator'

export function AdminDashboard({ onLogout, currentUser }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('leads')
  const [leads, setLeads] = useState<Lead[]>([])
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [serviceFilter, setServiceFilter] = useState<string>('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [trendingTopics, setTrendingTopics] = useState<any[]>([])
  const [generatingBlog, setGeneratingBlog] = useState(false)
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
    if (activeTab === 'leads') {
      fetchLeads()
    } else if (activeTab === 'blogs') {
      fetchBlogs()
    } else if (activeTab === 'ai-generator') {
      fetchTrendingTopics()
    }
  }, [activeTab])

  useEffect(() => {
    filterLeads()
  }, [filterLeads])

  const fetchLeads = async () => {
    setIsLoading(true)
    setConnectionError(null)
    try {
      const data = await leadService.getAll()
      setLeads(data)
      console.log('✅ Leads fetched from Supabase:', data.length)
    } catch (error) {
      console.error('❌ Failed to fetch leads from Supabase:', error)
      setConnectionError('Supabase database not properly configured. Please check your environment variables.')
      setLeads([]) // Show empty state instead of dummy data
    } finally {
      setIsLoading(false)
    }
  }

  const fetchBlogs = async () => {
    setIsLoading(true)
    setConnectionError(null)
    try {
      const data = await blogService.getAll()
      setBlogs(data)
      console.log('✅ Blogs fetched from Supabase:', data.length)
    } catch (error) {
      console.error('❌ Failed to fetch blogs from Supabase:', error)
      setConnectionError('Supabase database not properly configured. Please check your environment variables.')
      setBlogs([]) // Show empty state instead of dummy data
    } finally {
      setIsLoading(false)
    }
  }

  const fetchTrendingTopics = async () => {
    setIsLoading(true)
    try {
      const topics = await getTrendingTopicsForAdmin()
      setTrendingTopics(topics)
    } catch (error) {
      console.error('Error fetching trending topics:', error)
      // Set fallback topics instead of infinite loading
      setTrendingTopics([
        {
          topic: "AI-Powered SEO Strategies for 2026",
          category: "SEO & Digital Marketing",
          relevanceScore: 95,
          searchVolume: "High",
          difficulty: "Medium",
          description: "How artificial intelligence is revolutionizing search engine optimization"
        },
        {
          topic: "Enterprise AI Agents: ROI and Implementation",
          category: "AI & Technology", 
          relevanceScore: 90,
          searchVolume: "High",
          difficulty: "Hard",
          description: "Practical guide to implementing AI agents in enterprise environments"
        },
        {
          topic: "Conversion Rate Optimization with Machine Learning",
          category: "Web Development",
          relevanceScore: 85,
          searchVolume: "Medium",
          difficulty: "Medium",
          description: "Using ML algorithms to improve website conversion rates"
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: string, newStatus: Lead['status']) => {
    try {
      await leadService.update(leadId, { status: newStatus })
      setLeads(prev => prev.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      ))
    } catch (error) {
      console.error('Error updating lead status:', error)
    }
  }

  const deleteBlog = async (blogId: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        await blogService.delete(blogId)
        setBlogs(prev => prev.filter(blog => blog.id !== blogId))
      } catch (error) {
        console.error('Error deleting blog:', error)
      }
    }
  }

  const generateBlogFromTopic = async (topic: any) => {
    setGeneratingBlog(true)
    try {
      const generatedBlog = await openRouterService.generateBlogPost({
        topic: topic.topic,
        category: topic.category,
        targetAudience: 'Enterprise decision makers',
        tone: 'professional',
        length: 'medium',
        includeImages: true
      })

      const blogPost = {
        ...generatedBlog,
        author: "Copper Screen Team",
        published: false, // Save as draft initially
        views: 0,
        ai_generated: true,
        trending_score: topic.relevanceScore || 75
      }

      const createdBlog = await blogService.create(blogPost)
      setBlogs(prev => [createdBlog, ...prev])
      alert('Blog post generated successfully! It has been saved as a draft.')
    } catch (error) {
      console.error('Error generating blog:', error)
      alert('Failed to generate blog post. Please try again.')
    } finally {
      setGeneratingBlog(false)
    }
  }

  const exportLeads = () => {
    const csvContent = [
      ['Name', 'Email', 'Company', 'Phone', 'Service', 'Budget', 'Status', 'Date', 'Message'],
      ...filteredLeads.map(lead => [
        lead.name,
        lead.email,
        lead.company || '',
        lead.phone || '',
        lead.service,
        lead.budget || '',
        lead.status,
        new Date(lead.created_at).toLocaleDateString(),
        (lead.message || '').replace(/,/g, ';')
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'qualified': return 'bg-purple-100 text-purple-800'
      case 'converted': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    qualified: leads.filter(l => l.status === 'qualified').length,
    converted: leads.filter(l => l.status === 'converted').length,
    conversionRate: leads.length > 0 ? Math.round((leads.filter(l => l.status === 'converted').length / leads.length) * 100) : 0,
    totalBlogs: blogs.length,
    publishedBlogs: blogs.filter(b => b.published).length,
    draftBlogs: blogs.filter(b => !b.published).length,
    totalViews: blogs.reduce((sum, blog) => sum + blog.views, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 min-w-0">
              <h1 className="text-lg font-semibold text-charcoal truncate">Admin Dashboard</h1>
              {currentUser && (
                <div className="flex items-center space-x-2 bg-copper-100 text-copper-800 px-3 py-1 rounded-full text-xs">
                  <div className="w-2 h-2 bg-copper-500 rounded-full"></div>
                  <span>{currentUser.username} ({currentUser.role})</span>
                </div>
              )}
              {connectionError && (
                <div className="flex items-center space-x-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Database Error</span>
                </div>
              )}
              <button
                onClick={() => window.open('/api/admin/test-connection', '_blank')}
                className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs transition-colors"
                title="Test database connection"
              >
                <div className={`w-2 h-2 rounded-full ${connectionError ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <span>Test DB</span>
              </button>
              <button
                onClick={() => window.open('/admin/diagnostics', '_blank')}
                className="flex items-center space-x-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded text-xs transition-colors"
                title="View detailed diagnostics"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Diagnostics</span>
              </button>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('leads')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'leads'
                    ? 'border-copper-500 text-copper-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Users className="w-4 h-4 inline mr-2" />
                Lead Management
              </button>
              <button
                onClick={() => setActiveTab('blogs')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'blogs'
                    ? 'border-copper-500 text-copper-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Blog Management
              </button>
              <button
                onClick={() => setActiveTab('ai-generator')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ai-generator'
                    ? 'border-copper-500 text-copper-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                AI Blog Generator
              </button>
            </nav>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {activeTab === 'leads' ? (
            <>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Leads</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">New Leads</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.new}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.conversionRate}%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-8 w-8 text-copper-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Converted</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.converted}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalBlogs}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Published</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.publishedBlogs}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Edit className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Drafts</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.draftBlogs}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-copper-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Views</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalViews}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'leads' && (
          <LeadsManagement
            leads={filteredLeads}
            isLoading={isLoading}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            serviceFilter={serviceFilter}
            setServiceFilter={setServiceFilter}
            selectedLead={selectedLead}
            setSelectedLead={setSelectedLead}
            updateLeadStatus={updateLeadStatus}
            exportLeads={exportLeads}
            fetchLeads={fetchLeads}
            getStatusColor={getStatusColor}
          />
        )}

        {activeTab === 'blogs' && (
          <BlogsManagement
            blogs={blogs}
            isLoading={isLoading}
            deleteBlog={deleteBlog}
            fetchBlogs={fetchBlogs}
          />
        )}

        {activeTab === 'ai-generator' && (
          <AIBlogGenerator
            trendingTopics={trendingTopics}
            isLoading={isLoading}
            generatingBlog={generatingBlog}
            generateBlogFromTopic={generateBlogFromTopic}
          />
        )}
      </div>
    </div>
  )
}

// Leads Management Component
function LeadsManagement({ 
  leads, 
  isLoading, 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  serviceFilter, 
  setServiceFilter, 
  selectedLead, 
  setSelectedLead, 
  updateLeadStatus, 
  exportLeads, 
  fetchLeads, 
  getStatusColor 
}: any) {
  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="converted">Converted</option>
            </select>

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent"
            >
              <option value="all">All Services</option>
              <option value="SEO & Organic Growth">SEO & Organic Growth</option>
              <option value="AI Agents for Enterprise">AI Agents for Enterprise</option>
              <option value="Web CRO & Conversion Optimization">Web CRO</option>
              <option value="Full-Stack Web Development">Development</option>
              <option value="eCommerce & SaaS Solutions">eCommerce</option>
              <option value="Digital Strategy & Consultancy">Strategy</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={fetchLeads}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportLeads}
              className="flex items-center space-x-2 px-4 py-2 bg-copper-gradient text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-copper-600"></div>
            <span className="ml-3 text-gray-600">Loading leads...</span>
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No leads found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || statusFilter !== 'all' || serviceFilter !== 'all'
                ? 'Try adjusting your filters'
                : 'No leads have been submitted yet'
              }
            </p>
          </div>
        ) : (
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead: Lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                        <div className="text-sm text-gray-500 flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span>{lead.email}</span>
                        </div>
                        {lead.company && (
                          <div className="text-sm text-gray-500 flex items-center space-x-1">
                            <Building className="h-3 w-3" />
                            <span>{lead.company}</span>
                          </div>
                        )}
                        {lead.phone && (
                          <div className="text-sm text-gray-500 flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>{lead.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.budget || 'Not specified'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                      className={`text-xs font-medium px-2 py-1 rounded-full border-0 ${getStatusColor(lead.status)}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="converted">Converted</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="text-copper-600 hover:text-copper-900 flex items-center space-x-1"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Lead Details</h3>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedLead.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedLead.company || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedLead.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Service</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedLead.service}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Budget</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedLead.budget || 'Not specified'}</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedLead.message}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    Submitted: {new Date(selectedLead.created_at).toLocaleString()}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${selectedLead.email}?subject=Re: Your inquiry about ${selectedLead.service}`}
                      className="bg-copper-gradient text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                    >
                      Send Email
                    </a>
                    {selectedLead.phone && (
                      <a
                        href={`tel:${selectedLead.phone}`}
                        className="border border-copper-300 text-copper-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-copper-50 transition-all"
                      >
                        Call
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Blog Management Component
function BlogsManagement({ blogs, isLoading, deleteBlog, fetchBlogs }: any) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'SEO & Digital Marketing': 'bg-blue-100 text-blue-700',
      'AI & Technology': 'bg-purple-100 text-purple-700',
      'Web Development': 'bg-green-100 text-green-700',
      'Business Strategy': 'bg-orange-100 text-orange-700',
      'Case Studies': 'bg-red-100 text-red-700',
      'Industry Trends': 'bg-cyan-100 text-cyan-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Blog Posts</h3>
          <div className="flex space-x-3">
            <button
              onClick={fetchBlogs}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-copper-gradient text-white rounded-lg hover:shadow-lg transition-all">
              <Plus className="h-4 w-4" />
              <span>New Post</span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-copper-600"></div>
            <span className="ml-3 text-gray-600">Loading blog posts...</span>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No blog posts found</h3>
            <p className="mt-1 text-sm text-gray-500">Create your first blog post to get started</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog: BlogPost) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                          {blog.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {blog.reading_time} min read • {blog.author}
                        </div>
                        {blog.ai_generated && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 mt-1">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI Generated
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      blog.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1 text-gray-400" />
                      {blog.views}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(blog.published_at || blog.created_at)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-copper-600 hover:text-copper-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => deleteBlog(blog.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <a
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

// AI Blog Generator Component
function AIBlogGenerator({ trendingTopics, isLoading, generatingBlog, generateBlogFromTopic }: any) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">AI Blog Generator</h3>
            <p className="text-sm text-gray-500 mt-1">Generate trending blog posts using AI</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span>Powered by OpenRouter AI</span>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-copper-600"></div>
            <span className="ml-3 text-gray-600">Loading trending topics...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTopics.map((topic: any, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-gray-900 text-sm leading-tight">{topic.topic}</h4>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-2 flex-shrink-0">
                    {topic.relevanceScore}/100
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Category:</span>
                    <span className="font-medium">{topic.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Search Volume:</span>
                    <span className={`font-medium ${
                      topic.searchVolume === 'High' ? 'text-green-600' : 
                      topic.searchVolume === 'Medium' ? 'text-yellow-600' : 'text-gray-600'
                    }`}>
                      {topic.searchVolume}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Difficulty:</span>
                    <span className={`font-medium ${
                      topic.difficulty === 'Easy' ? 'text-green-600' : 
                      topic.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {topic.difficulty}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-4 line-clamp-3">{topic.description}</p>

                <button
                  onClick={() => generateBlogFromTopic(topic)}
                  disabled={generatingBlog}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    generatingBlog
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-copper-gradient text-white hover:shadow-lg'
                  }`}
                >
                  {generatingBlog ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate Blog</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}