import { Metadata } from 'next'
import { Download, TrendingUp, Search, BarChart3, Users, CheckCircle, FileText, Calendar } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: '2024 SEO Trends Report - Free Download | Copper Screen',
  description: 'Download our comprehensive 2024 SEO trends report with latest insights, predictions, and actionable strategies for enterprise businesses.',
  keywords: ['SEO trends 2024', 'search engine optimization', 'digital marketing report', 'SEO insights', 'enterprise SEO']
}

export default function SEOTrendsReportPage() {
  const keyInsights = [
    {
      icon: Search,
      title: 'AI-Powered Search Evolution',
      description: 'How AI is reshaping search algorithms and what it means for SEO strategies in 2024.'
    },
    {
      icon: TrendingUp,
      title: 'Voice Search Optimization',
      description: 'The growing importance of voice search and conversational queries in enterprise SEO.'
    },
    {
      icon: BarChart3,
      title: 'Core Web Vitals 2.0',
      description: 'Updated performance metrics and their impact on search rankings and user experience.'
    },
    {
      icon: Users,
      title: 'E-A-T and Authority Building',
      description: 'Advanced strategies for building expertise, authoritativeness, and trustworthiness.'
    }
  ]

  const reportContents = [
    'Executive Summary: Key SEO Trends for 2024',
    'AI and Machine Learning Impact on Search',
    'Technical SEO: Core Web Vitals and Beyond',
    'Content Strategy in the Age of AI',
    'Local SEO and Multi-Location Optimization',
    'Enterprise SEO: Scaling Strategies',
    'Voice Search and Conversational AI',
    'Mobile-First Indexing Evolution',
    'Link Building in 2024: Quality Over Quantity',
    'SEO Tools and Technology Stack',
    'Measuring ROI: Advanced Analytics',
    'Future Predictions: What\'s Next in SEO'
  ]

  const stats = [
    { number: '47', label: 'Pages of Insights', icon: FileText },
    { number: '12', label: 'Key Trend Areas', icon: TrendingUp },
    { number: '25+', label: 'Expert Predictions', icon: Users },
    { number: '100+', label: 'Data Points', icon: BarChart3 }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-gradient rounded-2xl">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              2024 <span className="text-gradient">SEO Trends</span> Report
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Get ahead of the competition with our comprehensive analysis of the latest SEO trends, 
              algorithm updates, and strategic insights for enterprise businesses.
            </p>
            
            {/* Download Form */}
            <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Download Free Report</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Report (PDF)</span>
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3 text-center">
                No spam. Unsubscribe anytime. Your data is secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-charcoal mb-2">{stat.number}</div>
                <div className="text-slate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Key Insights You'll Discover
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Our report covers the most important SEO trends and strategies for 2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyInsights.map((insight, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <insight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">{insight.title}</h3>
                    <p className="text-slate leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Contents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                What's Inside the Report
              </h2>
              <p className="text-xl text-slate mb-8">
                47 pages of actionable insights, expert analysis, and strategic recommendations 
                to help your business dominate search results in 2024.
              </p>
              <div className="space-y-3">
                {reportContents.map((content, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate">{content}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-center">
                <FileText className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-charcoal mb-4">Premium Report</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">47 Pages</div>
                    <div className="text-sm text-slate">Comprehensive Analysis</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">Expert Insights</div>
                    <div className="text-sm text-slate">Industry Leaders</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">Actionable</div>
                    <div className="text-sm text-slate">Ready to Implement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What Industry Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate italic">
                  "This report gave us the strategic insights we needed to revamp our SEO approach. 
                  Our organic traffic increased by 180% in just 6 months."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Sarah Chen</div>
                  <div className="text-sm text-slate">VP Marketing, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate italic">
                  "Comprehensive and actionable. The AI-powered SEO strategies section alone 
                  was worth the download. Highly recommended for enterprise teams."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Michael Rodriguez</div>
                  <div className="text-sm text-slate">SEO Director, GlobalCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate italic">
                  "The technical SEO section helped us identify and fix critical issues 
                  that were holding back our rankings. Excellent resource for technical teams."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Emily Watson</div>
                  <div className="text-sm text-slate">CTO, InnovateTech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Business?"
        description="Get expert guidance from Copper Screen's digital transformation specialists."
        primaryCTA="Start Your Project"
      />
    </div>
  )
}