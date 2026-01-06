import { Metadata } from 'next'
import { TrendingUp, Users, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'TechCorp 300% Growth Case Study | Copper Screen',
  description: 'How we helped TechCorp achieve 300% growth through digital transformation, SEO optimization, and AI implementation.',
  keywords: ['case study', 'digital transformation', '300% growth', 'TechCorp', 'SEO', 'AI implementation']
}

export default function TechCorpCaseStudyPage() {
  const results = [
    { icon: TrendingUp, metric: '300%', label: 'Revenue Growth', period: '18 months' },
    { icon: Users, metric: '450%', label: 'Organic Traffic', period: '12 months' },
    { icon: DollarSign, metric: '85%', label: 'Cost Reduction', period: 'Operations' },
    { icon: Clock, metric: '60%', label: 'Time Savings', period: 'Processes' }
  ]

  const timeline = [
    {
      phase: 'Discovery & Strategy',
      duration: 'Months 1-2',
      description: 'Comprehensive audit of existing systems, market analysis, and strategic roadmap development.',
      deliverables: ['Technical audit report', 'Competitive analysis', 'Growth strategy roadmap', 'Technology recommendations']
    },
    {
      phase: 'Foundation & Optimization',
      duration: 'Months 3-6',
      description: 'Website redesign, technical SEO implementation, and initial AI agent deployment.',
      deliverables: ['New responsive website', 'SEO optimization', 'Customer service AI', 'Analytics setup']
    },
    {
      phase: 'Scale & Automation',
      duration: 'Months 7-12',
      description: 'Advanced AI implementation, process automation, and performance optimization.',
      deliverables: ['Sales automation AI', 'Inventory management system', 'Marketing automation', 'Performance dashboards']
    },
    {
      phase: 'Growth & Expansion',
      duration: 'Months 13-18',
      description: 'Market expansion, advanced analytics, and continuous optimization.',
      deliverables: ['Market expansion strategy', 'Advanced AI agents', 'Predictive analytics', 'Ongoing optimization']
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-copper-50 to-copper-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-copper-600 hover:text-copper-700 mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              How TechCorp Achieved <span className="text-gradient">300% Growth</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              A complete digital transformation case study showcasing the power of 
              strategic SEO, AI implementation, and process automation.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-copper-100 rounded-xl mb-4">
                  <result.icon className="w-6 h-6 text-copper-600" />
                </div>
                <div className="text-3xl font-bold text-charcoal mb-2">{result.metric}</div>
                <div className="text-slate font-medium mb-1">{result.label}</div>
                <div className="text-sm text-copper-600">{result.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-slate mb-6">
                TechCorp, a mid-sized B2B software company, was struggling with stagnant growth, 
                inefficient processes, and increasing competition in their market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-charcoal">Low Online Visibility</div>
                    <div className="text-slate">Poor search rankings and minimal organic traffic</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-charcoal">Manual Processes</div>
                    <div className="text-slate">Time-consuming manual tasks reducing productivity</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-charcoal">Outdated Technology</div>
                    <div className="text-slate">Legacy systems limiting scalability and efficiency</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-charcoal mb-6">Initial Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate">Monthly Organic Traffic</span>
                  <span className="font-bold text-charcoal">2,500 visitors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate">Lead Conversion Rate</span>
                  <span className="font-bold text-charcoal">1.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate">Customer Acquisition Cost</span>
                  <span className="font-bold text-charcoal">$450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate">Manual Process Time</span>
                  <span className="font-bold text-charcoal">40 hours/week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Solution
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              A comprehensive digital transformation approach combining SEO, AI automation, 
              and modern web technologies.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-copper-gradient text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">{phase.phase}</h3>
                    </div>
                    <div className="text-copper-600 font-semibold mb-2">{phase.duration}</div>
                    <p className="text-slate">{phase.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-charcoal mb-4">Key Deliverables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Exceptional Results
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              The transformation delivered measurable improvements across all key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Before vs After</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate">Organic Traffic</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">2,500/month</div>
                    <div className="font-bold text-green-600">13,750/month</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate">Conversion Rate</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">1.2%</div>
                    <div className="font-bold text-green-600">4.8%</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate">Monthly Revenue</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">$85K</div>
                    <div className="font-bold text-green-600">$340K</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-copper-50 to-copper-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Key Success Factors</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-copper-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-charcoal">Strategic SEO Implementation</div>
                    <div className="text-slate text-sm">Comprehensive technical and content optimization</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-copper-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-charcoal">AI-Powered Automation</div>
                    <div className="text-slate text-sm">Intelligent process automation and customer service</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-copper-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-charcoal">Modern Technology Stack</div>
                    <div className="text-slate text-sm">Scalable, high-performance web platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Achieve Similar Results?"
        description="Let us help you transform your business with proven digital strategies and AI solutions."
        primaryCTA="Start Your Project"
        secondaryCTA="View More Case Studies"
      />
    </div>
  )
}