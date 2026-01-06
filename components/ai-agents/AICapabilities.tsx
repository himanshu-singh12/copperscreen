'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Clock, BarChart3, Users } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Intelligent Decision Making',
    description: 'AI agents that understand context, analyze situations, and make informed decisions autonomously.',
    features: ['Natural Language Processing', 'Context Awareness', 'Decision Trees', 'Learning Algorithms']
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline complex workflows and eliminate manual tasks with intelligent automation.',
    features: ['Workflow Orchestration', 'Task Automation', 'Integration APIs', 'Error Handling']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with compliance standards for sensitive business operations.',
    features: ['Data Encryption', 'Access Controls', 'Audit Trails', 'Compliance Monitoring']
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    description: 'Never-sleeping AI agents that work around the clock to keep your business running.',
    features: ['Continuous Monitoring', 'Real-time Processing', 'Automatic Scaling', 'Uptime Guarantee']
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights and predictive analytics to drive data-informed business decisions.',
    features: ['Predictive Modeling', 'Performance Metrics', 'Custom Dashboards', 'Reporting Tools']
  },
  {
    icon: Users,
    title: 'Human-AI Collaboration',
    description: 'Seamless integration between AI agents and human teams for optimal productivity.',
    features: ['Handoff Protocols', 'Escalation Rules', 'Team Integration', 'Training Support']
  }
]

export function AICapabilities() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Advanced <span className="text-gradient">AI Capabilities</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Our AI agents combine cutting-edge technology with industry expertise 
            to deliver intelligent automation solutions.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="w-16 h-16 bg-copper-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  {capability.title}
                </h3>
                
                <p className="text-slate mb-6 leading-relaxed">
                  {capability.description}
                </p>
                
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-copper-gradient rounded-full"></div>
                      <span className="text-sm text-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}