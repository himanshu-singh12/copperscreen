import { Metadata } from 'next'
import { Bot, TrendingUp, Users, CheckCircle, ArrowRight, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents Case Studies | Copper Screen',
  description: 'Discover how businesses across industries are transforming operations with AI agents. Real results, measurable ROI, and proven implementations.',
  keywords: ['AI agents case studies', 'AI automation success stories', 'enterprise AI implementation', 'AI ROI examples']
}

export default function AIAgentsCaseStudiesPage() {
  const caseStudies = [
    {
      industry: 'Retail & eCommerce',
      company: 'FashionForward Inc.',
      challenge: 'Managing inventory across 200+ SKUs with seasonal demand fluctuations',
      solution: 'AI-powered inventory management and demand forecasting system',
      results: [
        '35% reduction in overstock',
        '22% increase in sales',
        '60% faster reorder processing',
        '$2.3M annual savings'
      ],
      timeline: '3 months',
      roi: '340%',
      color: 'orange',
      icon: '🛍️'
    },
    {
      industry: 'Healthcare',
      company: 'MedCenter Network',
      challenge: 'Patient scheduling inefficiencies and high no-show rates',
      solution: 'Intelligent scheduling AI with predictive analytics',
      results: [
        '45% reduction in no-shows',
        '30% increase in appointment efficiency',
        '25% improvement in patient satisfaction',
        '40 hours/week staff time saved'
      ],
      timeline: '4 months',
      roi: '280%',
      color: 'red',
      icon: '🏥'
    },
    {
      industry: 'Finance',
      company: 'SecureBank Corp',
      challenge: 'Manual fraud detection causing delays and false positives',
      solution: 'Real-time fraud detection AI with machine learning',
      results: [
        '85% reduction in false positives',
        '99.7% fraud detection accuracy',
        '2-second average response time',
        '$5.8M prevented fraud losses'
      ],
      timeline: '6 months',
      roi: '520%',
      color: 'green',
      icon: '💰'
    },
    {
      industry: 'Manufacturing',
      company: 'TechManufacturing Ltd',
      challenge: 'Unpredictable equipment failures causing production delays',
      solution: 'Predictive maintenance AI with IoT sensor integration',
      results: [
        '70% reduction in unplanned downtime',
        '45% decrease in maintenance costs',
        '25% increase in equipment lifespan',
        '$3.2M annual savings'
      ],
      timeline: '5 months',
      roi: '410%',
      color: 'blue',
      icon: '🏭'
    },
    {
      industry: 'Legal',
      company: 'GlobalLaw Partners',
      challenge: 'Time-intensive contract review and document analysis',
      solution: 'AI-powered document analysis and contract review system',
      results: [
        '80% faster contract review',
        '95% accuracy in clause identification',
        '60% reduction in legal research time',
        '200+ hours/month saved'
      ],
      timeline: '3 months',
      roi: '290%',
      color: 'purple',
      icon: '⚖️'
    },
    {
      industry: 'Real Estate',
      company: 'PropertyPro Realty',
      challenge: 'Lead qualification and property matching inefficiencies',
      solution: 'AI lead scoring and intelligent property recommendation engine',
      results: [
        '55% increase in qualified leads',
        '40% faster property matching',
        '30% higher conversion rates',
        '150% increase in agent productivity'
      ],
      timeline: '4 months',
      roi: '380%',
      color: 'indigo',
      icon: '🏠'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-700',
      red: 'from-red-50 to-red-100 border-red-200 text-red-700',
      green: 'from-green-50 to-green-100 border-green-200 text-green-700',
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-700',
      indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-700'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const stats = [
    { number: '50+', label: 'Successful Implementations', icon: CheckCircle },
    { number: '380%', label: 'Average ROI', icon: TrendingUp },
    { number: '4.2M', label: 'Hours Automated', icon: Clock },
    { number: '$25M+', label: 'Client Savings', icon: DollarSign }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-copper-50 to-copper-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-copper-gradient rounded-2xl">
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Discover how businesses across industries are transforming their operations 
              with AI agents. Real results, measurable ROI, and proven implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/ai-agents"
                className="border-2 border-copper-600 text-copper-600 px-8 py-4 rounded-lg font-semibold hover:bg-copper-50 transition-all"
              >
                Explore AI Agents
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-copper-600" />
                </div>
                <div className="text-3xl font-bold text-charcoal mb-2">{stat.number}</div>
                <div className="text-slate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Real Results Across Industries
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              See how AI agents are delivering measurable value across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(study.color)} p-6 border-b`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{study.icon}</span>
                        <h3 className="text-xl font-bold text-charcoal">{study.industry}</h3>
                      </div>
                      <p className="text-slate font-medium">{study.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-charcoal">{study.roi}</div>
                      <div className="text-sm text-slate">ROI</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-charcoal mb-2">Challenge</h4>
                    <p className="text-slate text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-charcoal mb-2">Solution</h4>
                    <p className="text-slate text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-charcoal mb-3">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-slate text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-slate">
                      <Clock className="w-4 h-4" />
                      <span>Implementation: {study.timeline}</span>
                    </div>
                    <button className="flex items-center space-x-1 text-copper-600 hover:text-copper-700 font-medium text-sm">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              How we ensure successful AI agent deployments across all industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-gradient text-white rounded-full text-xl font-bold mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Discovery & Analysis</h3>
              <p className="text-slate">Comprehensive assessment of your current processes and identification of AI opportunities.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-gradient text-white rounded-full text-xl font-bold mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom AI Development</h3>
              <p className="text-slate">Design and develop AI agents tailored to your specific business requirements and workflows.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-gradient text-white rounded-full text-xl font-bold mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Integration & Testing</h3>
              <p className="text-slate">Seamless integration with existing systems and comprehensive testing to ensure optimal performance.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-gradient text-white rounded-full text-xl font-bold mb-6">
                04
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Launch & Optimization</h3>
              <p className="text-slate">Deployment with ongoing monitoring, optimization, and support to maximize ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Calculate Your Potential ROI
              </h2>
              <p className="text-xl text-slate mb-8">
                Based on our case studies, most businesses see significant returns within 3-6 months. 
                Use our calculator to estimate your potential savings.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate">Average 380% ROI within first year</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate">3-6 month typical payback period</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate">Ongoing operational cost savings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate">Improved customer satisfaction</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">ROI Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Revenue</label>
                  <input
                    type="text"
                    placeholder="$500,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Manual Process Hours/Month</label>
                  <input
                    type="text"
                    placeholder="200 hours"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Average Hourly Cost</label>
                  <input
                    type="text"
                    placeholder="$75/hour"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-copper-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                  Calculate ROI
                </button>
                <div className="text-center pt-4 border-t">
                  <div className="text-3xl font-bold text-copper-600">$45K</div>
                  <div className="text-slate">Estimated Monthly Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Operations with AI?"
        description="Discover how AI agents can deliver measurable ROI for your business."
        primaryCTA="Get AI Consultation"
        secondaryCTA="View More Case Studies"
      />
    </div>
  )
}