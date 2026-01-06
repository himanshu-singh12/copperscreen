'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Search, 
  TrendingUp, 
  Code, 
  Bot, 
  ShoppingCart, 
  Heart, 
  DollarSign, 
  Scale,
  Home,
  GraduationCap,
  Coffee,
  Building
} from 'lucide-react'

interface MegaMenuProps {
  activeItem: string
  onClose: () => void
}

export function MegaMenu({ activeItem, onClose }: MegaMenuProps) {
  const servicesContent = {
    coreServices: [
      {
        icon: Search,
        title: 'SEO & Organic Growth',
        description: 'Technical SEO, content strategy, link building',
        href: '/services/seo'
      },
      {
        icon: TrendingUp,
        title: 'Web CRO',
        description: 'A/B testing, user research, funnel optimization',
        href: '/services/cro'
      },
      {
        icon: Code,
        title: 'Full-Stack Development',
        description: 'eCommerce platforms, SaaS applications, custom solutions',
        href: '/services/development'
      }
    ],
    aiAgents: [
      {
        icon: ShoppingCart,
        title: 'Retail & eCommerce',
        description: 'Inventory management, personalization',
        href: '/ai-agents/retail'
      },
      {
        icon: Heart,
        title: 'Healthcare',
        description: 'Patient scheduling, diagnosis support',
        href: '/ai-agents/healthcare'
      },
      {
        icon: DollarSign,
        title: 'Finance',
        description: 'Fraud detection, portfolio management',
        href: '/ai-agents/finance'
      },
      {
        icon: Scale,
        title: 'Legal',
        description: 'Document analysis, contract review',
        href: '/ai-agents/legal'
      }
    ],
    featured: {
      caseStudy: {
        title: 'How We Helped TechCorp Achieve 300% Growth',
        description: 'Complete digital transformation case study',
        image: '/images/case-study-featured.jpg',
        href: '/case-studies/techcorp-growth'
      },
      resource: {
        title: 'Download: 2024 SEO Trends Report',
        description: 'Latest insights and predictions',
        href: '/resources/seo-trends-2024'
      }
    }
  }

  const aiAgentsContent = {
    industries: [
      {
        icon: ShoppingCart,
        title: 'Retail & eCommerce',
        agents: ['Inventory Management', 'Personalization Engine', 'Customer Service'],
        href: '/ai-agents/retail'
      },
      {
        icon: Heart,
        title: 'Healthcare',
        agents: ['Patient Scheduling', 'Diagnosis Support', 'Records Management'],
        href: '/ai-agents/healthcare'
      },
      {
        icon: DollarSign,
        title: 'Finance',
        agents: ['Fraud Detection', 'Portfolio Management', 'Risk Assessment'],
        href: '/ai-agents/finance'
      },
      {
        icon: Scale,
        title: 'Legal',
        agents: ['Document Analysis', 'Contract Review', 'Compliance Monitoring'],
        href: '/ai-agents/legal'
      },
      {
        icon: Home,
        title: 'Real Estate',
        agents: ['Lead Qualification', 'Property Matching', 'Market Analysis'],
        href: '/ai-agents/real-estate'
      },
      {
        icon: Building,
        title: 'Manufacturing',
        agents: ['Predictive Maintenance', 'Supply Chain', 'Quality Control'],
        href: '/ai-agents/manufacturing'
      },
      {
        icon: GraduationCap,
        title: 'Education',
        agents: ['Personalized Learning', 'Administrative Automation', 'Assessment'],
        href: '/ai-agents/education'
      },
      {
        icon: Coffee,
        title: 'Hospitality',
        agents: ['Booking Optimization', 'Customer Service', 'Revenue Management'],
        href: '/ai-agents/hospitality'
      }
    ]
  }

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 opacity-100 transform translate-y-0 transition-all duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeItem === 'Services' && (
          <div className="grid grid-cols-12 gap-8">
            {/* Core Services */}
            <div className="col-span-4">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Core Services</h3>
              <div className="space-y-4">
                {servicesContent.coreServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <service.icon className="w-6 h-6 text-copper-700 mt-1 group-hover:text-copper-600" />
                    <div>
                      <h4 className="font-medium text-charcoal group-hover:text-copper-700">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-copper-700 hover:text-copper-600 font-medium mt-4"
              >
                View All Services →
              </Link>
            </div>

            {/* AI Agents by Industry */}
            <div className="col-span-4">
              <h3 className="text-lg font-semibold text-charcoal mb-4">AI Agents by Industry</h3>
              <div className="space-y-4">
                {servicesContent.aiAgents.map((agent) => (
                  <Link
                    key={agent.title}
                    href={agent.href}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <agent.icon className="w-6 h-6 text-copper-700 mt-1 group-hover:text-copper-600" />
                    <div>
                      <h4 className="font-medium text-charcoal group-hover:text-copper-700">
                        {agent.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{agent.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/ai-agents"
                className="inline-flex items-center text-copper-700 hover:text-copper-600 font-medium mt-4"
              >
                + 4 More Industries →
              </Link>
            </div>

            {/* Featured Content */}
            <div className="col-span-4">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Featured</h3>
              <div className="space-y-6">
                {/* Case Study Card */}
                <Link
                  href={servicesContent.featured.caseStudy.href}
                  className="block bg-gradient-to-br from-copper-50 to-copper-100 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-copper-200 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-copper-700 font-medium">Case Study</span>
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">
                    {servicesContent.featured.caseStudy.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {servicesContent.featured.caseStudy.description}
                  </p>
                </Link>

                {/* Resource Download */}
                <Link
                  href={servicesContent.featured.resource.href}
                  className="block bg-gradient-to-br from-electric/10 to-electric/20 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-charcoal mb-2">
                    {servicesContent.featured.resource.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {servicesContent.featured.resource.description}
                  </p>
                </Link>

                {/* Quick CTA */}
                <button className="w-full bg-copper-gradient text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                  🎯 Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}

        {activeItem === 'AI Agents' && (
          <div className="grid grid-cols-12 gap-8">
            {/* Industries Grid */}
            <div className="col-span-10">
              <h3 className="text-lg font-semibold text-charcoal mb-6">AI Agents by Industry</h3>
              <div className="grid grid-cols-4 gap-6">
                {aiAgentsContent.industries.map((industry) => (
                  <Link
                    key={industry.title}
                    href={industry.href}
                    className="p-4 border border-gray-200 rounded-lg hover:border-copper-300 hover:shadow-md transition-all group"
                  >
                    <industry.icon className="w-8 h-8 text-copper-700 mb-3 group-hover:text-copper-600" />
                    <h4 className="font-semibold text-charcoal mb-2 group-hover:text-copper-700">
                      {industry.title}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {industry.agents.map((agent) => (
                        <li key={agent}>• {agent}</li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-copper-gradient text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                  ROI Calculator
                </button>
                <button className="w-full border border-copper-300 text-copper-700 px-4 py-3 rounded-lg font-semibold hover:bg-copper-50 transition-colors">
                  Book AI Demo
                </button>
                <Link
                  href="/ai-agents/case-studies"
                  className="block text-center text-copper-700 hover:text-copper-600 font-medium"
                >
                  View AI Case Studies →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}