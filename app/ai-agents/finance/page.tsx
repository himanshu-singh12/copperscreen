import { Metadata } from 'next'
import { DollarSign, Bot, Shield, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Finance | Copper Screen',
  description: 'Financial AI agents for fraud detection, portfolio management, and risk assessment. Secure and compliant solutions.',
  keywords: ['finance AI', 'fraud detection', 'portfolio management', 'risk assessment', 'financial automation']
}

export default function FinanceAIPage() {
  const agents = [
    {
      icon: Shield,
      title: 'Fraud Detection AI',
      description: 'Real-time fraud detection and prevention using advanced machine learning algorithms to identify suspicious transactions and patterns.',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Automated alerts']
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Management AI',
      description: 'Intelligent portfolio optimization, risk assessment, and automated rebalancing based on market conditions and client objectives.',
      features: ['Portfolio optimization', 'Risk analysis', 'Automated rebalancing', 'Performance tracking']
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment AI',
      description: 'Comprehensive risk evaluation for loans, investments, and financial decisions using predictive analytics and market data.',
      features: ['Credit scoring', 'Market risk analysis', 'Compliance monitoring', 'Stress testing']
    }
  ]

  const benefits = [
    'Reduce fraud losses by up to 90%',
    'Improve portfolio performance by 25%',
    'Automate 80% of risk assessments',
    'Ensure regulatory compliance',
    'Real-time decision making',
    'Scale operations efficiently'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-gradient rounded-2xl">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Finance</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Secure and compliant AI agents for fraud detection, portfolio management, 
              and risk assessment in financial services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-green-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Request Demo
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all">
                Security Overview
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
              Financial AI Agents
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Advanced AI solutions for modern financial institutions and services
            </p>
          </div>

          <div className="space-y-12">
            {agents.map((agent, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl mr-4">
                      <agent.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">{agent.title}</h3>
                  </div>
                  <p className="text-lg text-slate mb-6">{agent.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {agent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <agent.icon className="w-24 h-24 text-green-600 mx-auto mb-6" />
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">99.9%</div>
                        <div className="text-sm text-slate">Accuracy Rate</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">&lt;1ms</div>
                        <div className="text-sm text-slate">Response Time</div>
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
                Transform Financial Operations
              </h2>
              <p className="text-xl text-slate mb-8">
                Our AI agents provide the security, compliance, and performance 
                that financial institutions require in today's digital landscape.
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
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Financial Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-slate">Fraud Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
                  <div className="text-slate">Performance Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
                  <div className="text-slate">Average Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Secure Your Financial Operations?"
        description="Implement AI agents for fraud detection, portfolio management, and risk assessment."
        primaryCTA="Get Started"
        secondaryCTA="View ROI Calculator"
      />
    </div>
  )
}