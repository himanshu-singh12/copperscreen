import { Metadata } from 'next'
import { TrendingUp, Target, BarChart3, Users, CheckCircle, Zap } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'Web CRO & Conversion Optimization | Copper Screen',
  description: 'Increase your website conversion rates with our data-driven CRO services. A/B testing, user research, and funnel optimization expertise.',
  keywords: ['CRO services', 'conversion optimization', 'A/B testing', 'user research', 'funnel optimization', 'conversion rate']
}

export default function CROPage() {
  const features = [
    {
      icon: BarChart3,
      title: 'A/B Testing',
      description: 'Systematic testing of page elements, layouts, and copy to identify the highest-converting variations for your audience.'
    },
    {
      icon: Users,
      title: 'User Research',
      description: 'In-depth analysis of user behavior through heatmaps, session recordings, and user surveys to understand conversion barriers.'
    },
    {
      icon: Target,
      title: 'Funnel Optimization',
      description: 'End-to-end funnel analysis and optimization to reduce drop-offs and increase conversion rates at every stage.'
    },
    {
      icon: Zap,
      title: 'Landing Page Optimization',
      description: 'Data-driven optimization of landing pages to maximize conversions from your marketing campaigns.'
    }
  ]

  const benefits = [
    'Increase conversion rates by 25-150%',
    'Reduce customer acquisition costs',
    'Improve user experience and satisfaction',
    'Maximize ROI from existing traffic',
    'Data-driven decision making',
    'Continuous performance improvement'
  ]

  const process = [
    {
      step: '01',
      title: 'Conversion Audit',
      description: 'Comprehensive analysis of your current conversion funnel, identifying bottlenecks and opportunities.'
    },
    {
      step: '02',
      title: 'Research & Hypothesis',
      description: 'User research and data analysis to develop testable hypotheses for improvement.'
    },
    {
      step: '03',
      title: 'Test & Optimize',
      description: 'Implement A/B tests and multivariate experiments to validate improvements.'
    },
    {
      step: '04',
      title: 'Scale & Iterate',
      description: 'Roll out winning variations and continue iterating for ongoing optimization.'
    }
  ]

  const stats = [
    { value: '47%', label: 'Average Conversion Lift' },
    { value: '89%', label: 'Client Satisfaction Rate' },
    { value: '200+', label: 'Tests Completed' },
    { value: '3.2x', label: 'ROI Improvement' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-gradient rounded-2xl">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Web <span className="text-gradient">CRO</span> Services
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Transform your website visitors into customers with our data-driven conversion 
              rate optimization services. Increase conversions without increasing traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-emerald-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Get CRO Audit
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all">
                View Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-slate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our CRO Services
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Comprehensive conversion optimization to maximize your website's potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 group-hover:bg-emerald-gradient group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.title}</h3>
                <p className="text-slate leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Why Conversion Optimization Matters
              </h2>
              <p className="text-xl text-slate mb-8">
                Small improvements in conversion rates can lead to massive increases in revenue 
                without spending more on traffic acquisition.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-6">CRO Impact Calculator</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-slate mb-1">Monthly Visitors</div>
                    <div className="text-2xl font-bold text-charcoal">10,000</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-slate mb-1">Current Conversion Rate</div>
                    <div className="text-2xl font-bold text-charcoal">2%</div>
                  </div>
                  <div className="bg-emerald-gradient p-4 rounded-lg text-white">
                    <div className="text-sm mb-1">With 50% CRO Improvement</div>
                    <div className="text-2xl font-bold">+100 Conversions/Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our CRO Process
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              A systematic, data-driven approach to conversion optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-gradient text-white rounded-full text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Optimize Your Conversions?"
        description="Increase your website's performance with data-driven CRO strategies from our experts."
        primaryCTA="Get CRO Audit"
        secondaryCTA="View Results"
      />
    </div>
  )
}