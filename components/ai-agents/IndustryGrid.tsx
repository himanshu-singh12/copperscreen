'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ShoppingCart, 
  Heart, 
  DollarSign, 
  Scale, 
  Home, 
  Building,
  GraduationCap,
  Coffee,
  ArrowRight
} from 'lucide-react'

const industries = [
  {
    id: 'retail',
    name: 'Retail & eCommerce',
    icon: ShoppingCart,
    description: 'Automate inventory, personalize experiences, and optimize customer service.',
    agents: ['Inventory Management', 'Personalization Engine', 'Customer Service Bot'],
    metrics: { value: '250%', label: 'increase in online revenue' },
    color: 'from-blue-500 to-blue-600',
    href: '/ai-agents/retail'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    description: 'Streamline patient care with compliant AI solutions.',
    agents: ['Patient Scheduling', 'Diagnosis Support', 'Records Management'],
    metrics: { value: '300%', label: 'improvement in patient satisfaction' },
    color: 'from-emerald-500 to-emerald-600',
    href: '/ai-agents/healthcare'
  },
  {
    id: 'finance',
    name: 'FinTech',
    icon: DollarSign,
    description: 'Secure financial operations with intelligent automation.',
    agents: ['Fraud Detection', 'Portfolio Management', 'Risk Assessment'],
    metrics: { value: '500%', label: 'faster transaction processing' },
    color: 'from-green-500 to-green-600',
    href: '/ai-agents/finance'
  },
  {
    id: 'legal',
    name: 'LegalTech',
    icon: Scale,
    description: 'Modernize legal practices with document intelligence.',
    agents: ['Document Analysis', 'Contract Review', 'Compliance Monitoring'],
    metrics: { value: '60%', label: 'reduction in processing time' },
    color: 'from-indigo-500 to-indigo-600',
    href: '/ai-agents/legal'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Home,
    description: 'Accelerate property transactions with smart matching.',
    agents: ['Lead Qualification', 'Property Matching', 'Market Analysis'],
    metrics: { value: '180%', label: 'faster lead conversion' },
    color: 'from-orange-500 to-orange-600',
    href: '/ai-agents/real-estate'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Building,
    description: 'Optimize operations with predictive intelligence.',
    agents: ['Predictive Maintenance', 'Supply Chain', 'Quality Control'],
    metrics: { value: '40%', label: 'reduction in downtime' },
    color: 'from-purple-500 to-purple-600',
    href: '/ai-agents/manufacturing'
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    description: 'Enhance learning with personalized AI experiences.',
    agents: ['Personalized Learning', 'Administrative Automation', 'Assessment'],
    metrics: { value: '85%', label: 'improvement in outcomes' },
    color: 'from-pink-500 to-pink-600',
    href: '/ai-agents/education'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Coffee,
    description: 'Optimize guest experiences and operations.',
    agents: ['Booking Optimization', 'Customer Service', 'Revenue Management'],
    metrics: { value: '220%', label: 'increase in bookings' },
    color: 'from-teal-500 to-teal-600',
    href: '/ai-agents/hospitality'
  }
]

export function IndustryGrid() {
  return (
    <section className="py-20 bg-white">
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
            AI Agents by <span className="text-gradient">Industry</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Industry-specific AI agents designed to address unique challenges 
            and opportunities in your sector.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={industry.href}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-copper-200 group-hover:scale-105 h-full">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${industry.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                        <div className="text-2xl font-bold">{industry.metrics.value}</div>
                        <div className="text-white/80 text-sm">{industry.metrics.label}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate mb-4 leading-relaxed text-sm">
                        {industry.description}
                      </p>

                      {/* AI Agents */}
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-charcoal text-sm mb-3">AI Agents:</h4>
                        {industry.agents.map((agent, agentIndex) => (
                          <div key={agentIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-copper-gradient rounded-full"></div>
                            <span className="text-xs text-charcoal">{agent}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <button className="group/btn flex items-center space-x-2 text-copper-700 hover:text-copper-600 font-semibold transition-colors w-full justify-center py-2 text-sm">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate mb-6">
            Don't see your industry? We create custom AI agents for any sector.
          </p>
          <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Discuss Custom AI Solution</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}