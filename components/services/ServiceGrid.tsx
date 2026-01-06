'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Search, 
  TrendingUp, 
  Code, 
  Bot, 
  Users, 
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Organic Growth',
    description: 'Drive sustainable traffic with data-driven SEO strategies that deliver long-term results.',
    features: [
      'Technical SEO audits and optimization',
      'Content strategy and creation',
      'Link building and outreach',
      'Local SEO and Google My Business',
      'SEO analytics and reporting'
    ],
    metrics: {
      primary: '340%',
      label: 'average traffic increase'
    },
    href: '/services/seo',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'cro',
    icon: TrendingUp,
    title: 'Web CRO & Conversion Optimization',
    description: 'Transform visitors into customers with scientific conversion rate optimization.',
    features: [
      'A/B testing and experimentation',
      'User research and behavior analysis',
      'Funnel optimization and mapping',
      'UX/UI design improvements',
      'Landing page optimization'
    ],
    metrics: {
      primary: '280%',
      label: 'average conversion boost'
    },
    href: '/services/cro',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'development',
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'Build scalable, high-performance applications that grow with your business.',
    features: [
      'Custom web application development',
      'eCommerce platform development',
      'SaaS application architecture',
      'API development and integration',
      'Performance optimization'
    ],
    metrics: {
      primary: '99.9%',
      label: 'uptime guarantee'
    },
    href: '/services/development',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'ai-agents',
    icon: Bot,
    title: 'AI Agents for Enterprise',
    description: 'Automate complex workflows with intelligent AI agents tailored to your industry.',
    features: [
      'Custom AI agent development',
      'Process automation and optimization',
      'Intelligent data analysis',
      'Natural language processing',
      '24/7 automated operations'
    ],
    metrics: {
      primary: '75%',
      label: 'operational cost reduction'
    },
    href: '/ai-agents',
    color: 'from-copper-500 to-copper-600'
  },
  {
    id: 'strategy',
    icon: Users,
    title: 'Digital Strategy & Consultancy',
    description: 'Navigate digital transformation with strategic guidance from industry experts.',
    features: [
      'Digital transformation roadmaps',
      'Technology stack recommendations',
      'Growth strategy development',
      'Team training and workshops',
      'Ongoing strategic support'
    ],
    metrics: {
      primary: '15+',
      label: 'years of expertise'
    },
    href: '/services/strategy',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function ServiceGrid() {
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Comprehensive digital solutions designed to drive growth, 
            optimize performance, and transform your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-copper-200 group-hover:scale-105">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{service.metrics.primary}</div>
                          <div className="text-white/80 text-sm">{service.metrics.label}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-copper-gradient rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-charcoal">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-copper-700 font-semibold group-hover:text-copper-600 transition-colors flex items-center space-x-2">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
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
            Need a custom solution? We create tailored strategies for unique business challenges.
          </p>
          <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Discuss Custom Solution</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}