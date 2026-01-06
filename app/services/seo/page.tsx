import { Metadata } from 'next'
import { Search, TrendingUp, Target, BarChart3, Users, CheckCircle } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'SEO & Organic Growth Services | Copper Screen',
  description: 'Drive organic traffic and improve search rankings with our comprehensive SEO services. Technical SEO, content strategy, and link building expertise.',
  keywords: ['SEO services', 'organic growth', 'search engine optimization', 'technical SEO', 'content strategy', 'link building']
}

export default function SEOPage() {
  const features = [
    {
      icon: Search,
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of your website\'s technical foundation, identifying and fixing crawlability, indexability, and performance issues.'
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Data-driven content planning that targets high-value keywords and addresses your audience\'s search intent at every stage of the funnel.'
    },
    {
      icon: Target,
      title: 'Link Building',
      description: 'Strategic link acquisition campaigns that build domain authority through high-quality, relevant backlinks from trusted sources.'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Advanced analytics and reporting to track keyword rankings, organic traffic growth, and conversion metrics.'
    }
  ]

  const benefits = [
    'Increase organic traffic by 150-300%',
    'Improve search rankings for target keywords',
    'Enhance website technical performance',
    'Build domain authority and trust',
    'Generate qualified leads from search',
    'Reduce dependency on paid advertising'
  ]

  const process = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive technical audit, competitor analysis, and keyword research to identify opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized SEO roadmap with prioritized recommendations and timeline.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute technical fixes, content optimization, and link building campaigns.'
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring, reporting, and optimization based on performance data.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-gradient rounded-2xl">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              SEO & <span className="text-gradient">Organic Growth</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Drive sustainable organic traffic growth with our comprehensive SEO services. 
              From technical optimization to content strategy and link building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-blue-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Get SEO Audit
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Our holistic approach covers every aspect of search engine optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-gradient group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.title}</h3>
                <p className="text-slate leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Why Choose Our SEO Services?
              </h2>
              <p className="text-xl text-slate mb-8">
                Our proven SEO methodology has helped hundreds of businesses achieve sustainable organic growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">150%</div>
                <div className="text-slate mb-6">Average Traffic Increase</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-charcoal">85%</div>
                    <div className="text-sm text-slate">Keyword Improvements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">3.2x</div>
                    <div className="text-sm text-slate">Lead Generation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our SEO Process
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              A systematic approach to achieving sustainable organic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-gradient text-white rounded-full text-xl font-bold mb-6">
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
        title="Ready to Boost Your Search Rankings?"
        description="Get expert SEO guidance from Copper Screen's digital transformation specialists."
        primaryCTA="Get SEO Audit"
        secondaryCTA="View Case Studies"
      />
    </div>
  )
}