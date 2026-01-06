'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

interface Industry {
  id: string
  name: string
  icon: React.ElementType
  description: string
  caseStudy: {
    title: string
    metric: string
    result: string
  }
  services: string[]
  color: string
}

export function IndustryExpertise() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null)

  const industries: Industry[] = [
    {
      id: 'ecommerce',
      name: 'eCommerce',
      icon: ShoppingCart,
      description: 'Drive online sales with conversion-optimized stores and intelligent automation.',
      caseStudy: {
        title: 'Fashion Retailer',
        metric: '250%',
        result: 'increase in online revenue'
      },
      services: ['Store Optimization', 'Inventory AI', 'Customer Personalization'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'saas',
      name: 'SaaS',
      icon: Building,
      description: 'Scale software businesses with growth-focused development and marketing.',
      caseStudy: {
        title: 'B2B Platform',
        metric: '400%',
        result: 'growth in user acquisition'
      },
      services: ['Product Development', 'Growth Marketing', 'Analytics'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'healthcare',
      name: 'HealthTech',
      icon: Heart,
      description: 'Transform healthcare delivery with compliant digital solutions.',
      caseStudy: {
        title: 'Telemedicine App',
        metric: '300%',
        result: 'increase in patient engagement'
      },
      services: ['HIPAA Compliance', 'Patient Portals', 'AI Diagnostics'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'fintech',
      name: 'FinTech',
      icon: DollarSign,
      description: 'Build secure, scalable financial technology solutions.',
      caseStudy: {
        title: 'Payment Platform',
        metric: '500%',
        result: 'transaction volume growth'
      },
      services: ['Security Audits', 'Compliance', 'API Development'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'legal',
      name: 'LegalTech',
      icon: Scale,
      description: 'Modernize legal practices with intelligent document processing.',
      caseStudy: {
        title: 'Law Firm',
        metric: '60%',
        result: 'reduction in document processing time'
      },
      services: ['Document AI', 'Case Management', 'Client Portals'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: Home,
      description: 'Accelerate property transactions with smart matching and automation.',
      caseStudy: {
        title: 'Property Platform',
        metric: '180%',
        result: 'faster lead conversion'
      },
      services: ['Lead Qualification', 'Property Matching', 'Market Analysis'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B87333' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Industry <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Deep domain knowledge across multiple industries, delivering tailored solutions 
            that address specific challenges and opportunities.
          </p>
        </motion.div>

        {/* Interactive Hexagonal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            const isActive = activeIndustry === industry.id

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative industry-card-container"
              >
                <div
                  className={`
                    relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300
                    hover:shadow-xl hover:scale-105 group
                    ${isActive ? 'shadow-2xl scale-105 ring-2 ring-copper-400' : 'shadow-lg'}
                  `}
                  onMouseEnter={() => setActiveIndustry(industry.id)}
                  onMouseLeave={() => setActiveIndustry(null)}
                >
                  {/* Icon and Title */}
                  <div className="text-center mb-4">
                    <div className={`
                      w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${industry.color} 
                      flex items-center justify-center transform group-hover:scale-110 transition-transform
                    `}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal group-hover:text-copper-700 transition-colors">
                      {industry.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate text-center mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Case Study Preview */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-copper-700 mb-1">
                      {industry.caseStudy.metric}
                    </div>
                    <div className="text-xs text-slate">
                      {industry.caseStudy.result}
                    </div>
                  </div>

                  {/* Hover Overlay - Fixed positioning and z-index */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-white rounded-2xl shadow-2xl border-2 border-copper-200 industry-hover-overlay"
                        style={{ zIndex: 1000 }}
                      >
                        <div className="h-full flex flex-col justify-between p-6 overflow-hidden">
                          <div>
                            <div className="flex items-center space-x-3 mb-4">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="font-bold text-charcoal">{industry.name}</h4>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              {industry.services.map((service, serviceIndex) => (
                                <div key={serviceIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-copper-gradient rounded-full"></div>
                                  <span className="text-xs text-charcoal">{service}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-4">
                            <div className="text-center mb-3">
                              <div className="text-sm font-semibold text-charcoal mb-1">
                                {industry.caseStudy.title}
                              </div>
                              <div className="text-lg font-bold text-copper-700">
                                {industry.caseStudy.metric} {industry.caseStudy.result}
                              </div>
                            </div>
                            <button className="w-full flex items-center justify-center space-x-2 text-copper-700 hover:text-copper-600 font-semibold text-sm transition-colors">
                              <span>View Case Study</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate mb-6">
            Don't see your industry? We work across all sectors.
          </p>
          <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Discuss Your Industry</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}