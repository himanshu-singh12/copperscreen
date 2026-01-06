import { Metadata } from 'next'
import { ShoppingCart, Bot, TrendingUp, Users, CheckCircle, Zap } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Retail & eCommerce | Copper Screen',
  description: 'Transform your retail business with AI agents for inventory management, personalization, and customer service automation.',
  keywords: ['retail AI', 'eCommerce AI', 'inventory management', 'personalization engine', 'customer service automation']
}

export default function RetailAIPage() {
  const agents = [
    {
      icon: ShoppingCart,
      title: 'Inventory Management AI',
      description: 'Automated inventory tracking, demand forecasting, and reorder optimization to prevent stockouts and reduce carrying costs.',
      features: ['Real-time stock monitoring', 'Demand forecasting', 'Automated reordering', 'Supplier optimization']
    },
    {
      icon: Users,
      title: 'Personalization Engine',
      description: 'AI-powered product recommendations, dynamic pricing, and personalized shopping experiences that increase conversion rates.',
      features: ['Product recommendations', 'Dynamic pricing', 'Personalized content', 'Behavioral targeting']
    },
    {
      icon: Bot,
      title: 'Customer Service AI',
      description: '24/7 intelligent customer support handling inquiries, order tracking, returns, and escalating complex issues to human agents.',
      features: ['24/7 availability', 'Order tracking', 'Returns processing', 'Multilingual support']
    }
  ]

  const benefits = [
    'Reduce inventory costs by 20-30%',
    'Increase conversion rates by 35%',
    'Improve customer satisfaction scores',
    'Automate 80% of customer inquiries',
    'Optimize pricing for maximum profit',
    'Scale operations without proportional staff increases'
  ]

  const useCases = [
    {
      title: 'Fashion Retailer',
      challenge: 'Seasonal inventory management and size optimization',
      solution: 'AI-powered demand forecasting and inventory optimization',
      result: '25% reduction in overstock, 15% increase in sales'
    },
    {
      title: 'Electronics Store',
      challenge: 'Complex product recommendations and technical support',
      solution: 'Personalization engine and technical support AI',
      result: '40% increase in average order value, 60% reduction in support tickets'
    },
    {
      title: 'Home & Garden',
      challenge: 'Seasonal demand fluctuations and customer service load',
      solution: 'Integrated inventory and customer service AI agents',
      result: '30% improvement in stock turnover, 50% faster response times'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-gradient rounded-2xl">
                <ShoppingCart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Retail & eCommerce</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Transform your retail operations with intelligent AI agents that manage inventory, 
              personalize customer experiences, and automate customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-orange-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Get AI Demo
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all">
                Calculate ROI
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
              Retail AI Agents
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Specialized AI agents designed for the unique challenges of retail and eCommerce
            </p>
          </div>

          <div className="space-y-12">
            {agents.map((agent, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                      <agent.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">{agent.title}</h3>
                  </div>
                  <p className="text-lg text-slate mb-6">{agent.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {agent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-slate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <agent.icon className="w-24 h-24 text-orange-600 mx-auto mb-6" />
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-slate">Always Active</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">99.9%</div>
                        <div className="text-sm text-slate">Accuracy Rate</div>
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
                Transform Your Retail Operations
              </h2>
              <p className="text-xl text-slate mb-8">
                Our AI agents integrate seamlessly with your existing systems to deliver 
                immediate improvements in efficiency, customer satisfaction, and profitability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-slate">Monthly Revenue</span>
                  <span className="font-bold text-charcoal">$500K</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-slate">AI Implementation Cost</span>
                  <span className="font-bold text-charcoal">$25K</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-gradient text-white rounded-lg">
                  <span>Monthly Savings</span>
                  <span className="font-bold">$75K</span>
                </div>
                <div className="text-center pt-4">
                  <div className="text-3xl font-bold text-orange-600">3 Months</div>
                  <div className="text-slate">Payback Period</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              See how retail businesses are transforming their operations with AI agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-charcoal mb-4">{useCase.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-orange-600 mb-2">Challenge</div>
                    <p className="text-slate text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-orange-600 mb-2">Solution</div>
                    <p className="text-slate text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-orange-600 mb-2">Result</div>
                    <p className="text-slate text-sm font-medium">{useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Retail Operations?"
        description="Discover how AI agents can optimize your inventory, personalize customer experiences, and boost sales."
        primaryCTA="Get AI Demo"
        secondaryCTA="Calculate ROI"
      />
    </div>
  )
}