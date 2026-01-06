'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign,
  ShoppingCart,
  Building,
  Heart
} from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  image: string
  tags: string[]
  icon: React.ElementType
  color: string
}

export function CaseStudiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const caseStudies: CaseStudy[] = [
    {
      id: 'ecommerce-fashion',
      title: 'Fashion Retailer Digital Transformation',
      client: 'StyleCorp Fashion',
      industry: 'eCommerce',
      challenge: 'Low online conversion rates and poor mobile experience leading to declining sales.',
      solution: 'Complete UX redesign, mobile optimization, and AI-powered personalization engine.',
      results: [
        { metric: '250%', value: 'increase', description: 'in online revenue' },
        { metric: '180%', value: 'boost', description: 'in mobile conversions' },
        { metric: '65%', value: 'reduction', description: 'in cart abandonment' }
      ],
      image: '/images/case-study-fashion.jpg',
      tags: ['UX Design', 'Mobile Optimization', 'AI Personalization'],
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'saas-platform',
      title: 'B2B SaaS Growth Acceleration',
      client: 'TechFlow Solutions',
      industry: 'SaaS',
      challenge: 'Slow user acquisition and high churn rates affecting growth targets.',
      solution: 'Growth marketing strategy, onboarding optimization, and retention automation.',
      results: [
        { metric: '400%', value: 'growth', description: 'in user acquisition' },
        { metric: '45%', value: 'reduction', description: 'in churn rate' },
        { metric: '320%', value: 'increase', description: 'in MRR' }
      ],
      image: '/images/case-study-saas.jpg',
      tags: ['Growth Marketing', 'User Onboarding', 'Retention'],
      icon: Building,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'healthcare-app',
      title: 'Telemedicine Platform Launch',
      client: 'HealthConnect',
      industry: 'HealthTech',
      challenge: 'Need for HIPAA-compliant telemedicine solution during pandemic.',
      solution: 'Secure video platform with patient management and billing integration.',
      results: [
        { metric: '300%', value: 'increase', description: 'in patient engagement' },
        { metric: '50K+', value: 'users', description: 'onboarded in 6 months' },
        { metric: '99.9%', value: 'uptime', description: 'reliability achieved' }
      ],
      image: '/images/case-study-healthcare.jpg',
      tags: ['HIPAA Compliance', 'Video Platform', 'Patient Management'],
      icon: Heart,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'fintech-payment',
      title: 'Payment Platform Scaling',
      client: 'PaySecure',
      industry: 'FinTech',
      challenge: 'Processing bottlenecks and security concerns limiting transaction volume.',
      solution: 'Microservices architecture with advanced fraud detection and compliance.',
      results: [
        { metric: '500%', value: 'increase', description: 'in transaction volume' },
        { metric: '99.99%', value: 'security', description: 'fraud prevention rate' },
        { metric: '40ms', value: 'speed', description: 'average processing time' }
      ],
      image: '/images/case-study-fintech.jpg',
      tags: ['Microservices', 'Security', 'Fraud Detection'],
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'real-estate',
      title: 'Property Management Automation',
      client: 'PropTech Innovations',
      industry: 'Real Estate',
      challenge: 'Manual processes causing delays in property transactions and client management.',
      solution: 'AI-powered property matching with automated workflow management.',
      results: [
        { metric: '180%', value: 'faster', description: 'lead conversion' },
        { metric: '70%', value: 'reduction', description: 'in manual tasks' },
        { metric: '250%', value: 'increase', description: 'in client satisfaction' }
      ],
      image: '/images/case-study-realestate.jpg',
      tags: ['AI Matching', 'Workflow Automation', 'CRM Integration'],
      icon: Building,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'manufacturing',
      title: 'Smart Manufacturing Analytics',
      client: 'IndustrialTech Corp',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time visibility into production processes and quality control.',
      solution: 'IoT sensors with predictive analytics dashboard for operational intelligence.',
      results: [
        { metric: '35%', value: 'increase', description: 'in production efficiency' },
        { metric: '60%', value: 'reduction', description: 'in equipment downtime' },
        { metric: '$2M+', value: 'savings', description: 'in operational costs' }
      ],
      image: '/images/case-study-manufacturing.jpg',
      tags: ['IoT Integration', 'Predictive Analytics', 'Dashboard'],
      icon: TrendingUp,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const categories = ['all', 'eCommerce', 'SaaS', 'HealthTech', 'FinTech', 'Real Estate', 'Manufacturing']

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedCategory)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-copper-gradient text-white shadow-lg'
                  : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }
              `}
            >
              {category === 'all' ? 'All Industries' : category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study, index) => {
            const IconComponent = study.icon
            
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${study.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-white/80 text-sm">{study.industry}</div>
                          <div className="font-bold">{study.client}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{study.results[0].metric}</div>
                        <div className="text-white/80 text-sm">{study.results[0].description}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-charcoal mb-2">Challenge</h4>
                      <p className="text-slate text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Solution</h4>
                      <p className="text-slate text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-charcoal mb-4">Key Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-copper-700 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-slate">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-charcoal text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="group/btn flex items-center space-x-2 text-copper-700 hover:text-copper-600 font-semibold transition-colors">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Load More Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}