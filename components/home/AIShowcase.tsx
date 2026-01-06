'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Users, 
  Zap,
  CheckCircle,
  XCircle
} from 'lucide-react'

export function AIShowcase() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'ai'>('traditional')

  const comparisonData = {
    traditional: {
      title: 'Traditional Approach',
      color: 'from-gray-400 to-gray-500',
      items: [
        {
          icon: Clock,
          title: 'Manual Processes',
          description: 'Time-consuming manual tasks',
          metric: '40+ hours/week',
          status: 'negative'
        },
        {
          icon: Users,
          title: 'Limited Scalability',
          description: 'Requires constant human oversight',
          metric: '1:1 ratio',
          status: 'negative'
        },
        {
          icon: TrendingUp,
          title: 'Reactive Decisions',
          description: 'Based on historical data only',
          metric: '24-48h delay',
          status: 'negative'
        }
      ]
    },
    ai: {
      title: 'AI-Powered Results',
      color: 'from-copper-500 to-copper-600',
      items: [
        {
          icon: Zap,
          title: 'Automated Intelligence',
          description: 'Smart automation with learning',
          metric: '2-5 hours/week',
          status: 'positive'
        },
        {
          icon: TrendingUp,
          title: 'Infinite Scalability',
          description: 'Handles growing complexity',
          metric: '1:1000+ ratio',
          status: 'positive'
        },
        {
          icon: Users,
          title: 'Predictive Insights',
          description: 'Real-time intelligent decisions',
          metric: 'Instant response',
          status: 'positive'
        }
      ]
    }
  }

  const aiCapabilities = [
    {
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI that learns and adapts',
      examples: ['Document processing', 'Customer service', 'Data analysis']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and opportunities before they happen',
      examples: ['Market predictions', 'Customer behavior', 'Risk assessment']
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and process human language at scale',
      examples: ['Content generation', 'Sentiment analysis', 'Translation']
    },
    {
      title: '24/7 Operations',
      description: 'Never-sleeping AI agents that work around the clock',
      examples: ['Monitoring systems', 'Customer support', 'Data processing']
    }
  ]

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-slate opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184, 115, 51, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-gradient">AI Advantage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI agents transform traditional business processes into intelligent, 
            scalable solutions that work 24/7.
          </p>
        </motion.div>

        {/* Split Screen Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Approach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800 rounded-2xl p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold text-gray-300">
                  {comparisonData.traditional.title}
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonData.traditional.items.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-300 mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                        <div className="text-red-400 font-semibold">{item.metric}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* AI-Powered Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-copper-900/50 to-copper-800/50 rounded-2xl p-8 h-full border border-copper-600/30">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">
                  {comparisonData.ai.title}
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonData.ai.items.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-copper-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                        <div className="text-emerald-400 font-semibold">{item.metric}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-copper-gradient opacity-20 rounded-2xl blur-xl -z-10"></div>
          </motion.div>
        </div>

        {/* AI Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            What Our <span className="text-gradient">AI Agents</span> Can Do
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {capability.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {capability.examples.map((example, exampleIndex) => (
                    <span
                      key={exampleIndex}
                      className="px-3 py-1 bg-copper-gradient/20 text-copper-300 rounded-full text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-copper-900/30 to-copper-800/30 rounded-2xl p-8 border border-copper-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how AI agents can automate your workflows, provide intelligent insights, 
              and scale your operations beyond human limitations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Discover AI Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border border-copper-400 text-copper-400 hover:bg-copper-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Book AI Strategy Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}