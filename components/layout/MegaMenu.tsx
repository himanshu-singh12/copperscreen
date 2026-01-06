'use client'

import Link from 'next/link'
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
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function MegaMenu({ activeItem, onMouseEnter, onMouseLeave }: MegaMenuProps) {
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
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 opacity-100 transform translate-y-0 transition-all duration-300 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ 
        marginTop: '-1px', // Eliminate gap between nav and mega menu
        paddingTop: '1px'   // Add small padding to ensure smooth transition
      }}
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
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-copper-50 to-copper-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-copper-700 group-hover:text-copper-600" />
                    </div>
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
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                      <agent.icon className="w-5 h-5 text-blue-700 group-hover:text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal group-hover:text-blue-700">
                        {agent.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{agent.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/ai-agents"
                className="inline-flex items-center text-blue-700 hover:text-blue-600 font-medium mt-4"
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
                  <div className="aspect-video bg-copper-200 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-copper-400/20 to-copper-600/20"></div>
                    <TrendingUp className="w-8 h-8 text-copper-700 relative z-10" />
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
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-electric/20 rounded-lg flex items-center justify-center mr-3">
                      <Search className="w-4 h-4 text-electric" />
                    </div>
                    <h4 className="font-semibold text-charcoal">
                      {servicesContent.featured.resource.title}
                    </h4>
                  </div>
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
                    className="group p-4 border border-gray-200 rounded-lg hover:border-copper-300 hover:shadow-md transition-all"
                  >
                    <div className="relative mb-3 h-12 w-12 bg-gradient-to-br from-copper-50 to-copper-100 rounded-lg flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-copper-700 group-hover:text-copper-600" />
                      <div className="absolute inset-0 bg-copper-gradient opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                    </div>
                    <h4 className="font-semibold text-charcoal mb-2 group-hover:text-copper-700">
                      {industry.title}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {industry.agents.map((agent) => (
                        <li key={agent} className="flex items-center">
                          <div className="w-1 h-1 bg-copper-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{agent}</span>
                        </li>
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
                {/* AI Demo Card */}
                <div className="bg-gradient-to-br from-copper-50 to-copper-100 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-copper-gradient rounded-lg mb-3">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">AI Demo</h4>
                  <p className="text-sm text-gray-600 mb-3">See AI agents in action</p>
                  <button className="w-full bg-copper-gradient text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm">
                    Watch Demo
                  </button>
                </div>

                {/* ROI Calculator Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-gradient rounded-lg mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">ROI Calculator</h4>
                  <p className="text-sm text-gray-600 mb-3">Calculate potential savings</p>
                  <button className="w-full border border-blue-300 text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
                    Calculate ROI
                  </button>
                </div>

                <Link
                  href="/ai-agents/case-studies"
                  className="block text-center text-copper-700 hover:text-copper-600 font-medium text-sm"
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