import { Metadata } from 'next'
import { Home, Bot, TrendingUp, Users, CheckCircle, MapPin } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Real Estate | Copper Screen',
  description: 'Real estate AI agents for lead qualification, property matching, and market analysis. Boost sales and efficiency.',
  keywords: ['real estate AI', 'lead qualification', 'property matching', 'market analysis', 'real estate automation']
}

export default function RealEstateAIPage() {
  const agents = [
    {
      icon: Users,
      title: 'Lead Qualification AI',
      description: 'Intelligent lead scoring and qualification based on buyer behavior, preferences, and financial capacity.',
      features: ['Lead scoring', 'Buyer qualification', 'Interest prediction', 'Follow-up automation']
    },
    {
      icon: MapPin,
      title: 'Property Matching AI',
      description: 'Advanced property recommendation engine that matches buyers with ideal properties based on their criteria.',
      features: ['Smart matching', 'Preference learning', 'Market insights', 'Tour scheduling']
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis AI',
      description: 'Real-time market analysis, price predictions, and investment opportunity identification.',
      features: ['Price forecasting', 'Market trends', 'Investment analysis', 'Comparative analysis']
    }
  ]

  const benefits = [
    'Increase lead conversion by 45%',
    'Reduce time to close by 30%',
    'Improve client satisfaction scores',
    'Automate property recommendations',
    'Optimize pricing strategies',
    'Scale operations efficiently'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-teal-gradient rounded-2xl">
                <Home className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Real Estate</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Transform your real estate business with AI agents for lead qualification, 
              property matching, and market analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-teal-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Get Started
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Real Estate AI Agents
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Specialized AI solutions for real estate professionals and agencies
            </p>
          </div>

          <div className="space-y-12">
            {agents.map((agent, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-teal-100 rounded-xl mr-4">
                      <agent.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">{agent.title}</h3>
                  </div>
                  <p className="text-lg text-slate mb-6">{agent.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {agent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-slate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <agent.icon className="w-24 h-24 text-teal-600 mx-auto mb-6" />
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600">45%</div>
                        <div className="text-sm text-slate">Higher Conversion</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600">30%</div>
                        <div className="text-sm text-slate">Faster Closing</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                Accelerate Real Estate Success
              </h2>
              <p className="text-xl text-slate mb-8">
                Our AI agents help real estate professionals close more deals faster 
                while providing exceptional client experiences.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                    <span className="text-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Business Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">45%</div>
                  <div className="text-slate">Lead Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">30%</div>
                  <div className="text-slate">Faster Deal Closing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">92%</div>
                  <div className="text-slate">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Revolutionize Your Real Estate Business?"
        description="Implement AI agents for lead qualification, property matching, and market analysis."
        primaryCTA="Get Started"
        secondaryCTA="View Demo"
      />
    </div>
  )
}