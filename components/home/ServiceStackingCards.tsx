'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Search, 
  TrendingUp, 
  Code, 
  Bot, 
  ShoppingCart, 
  Users,
  ArrowRight
} from 'lucide-react'

interface Service {
  id: string
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  color: string
  href: string
  metrics: {
    value: string
    label: string
  }
  image: string
  animatedImage: string
}

export function ServiceStackingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services: Service[] = [
    {
      id: 'seo',
      icon: Search,
      title: 'SEO & Organic Growth',
      description: 'Drive sustainable traffic with data-driven SEO strategies that deliver long-term results.',
      features: ['Technical SEO Audits', 'Content Strategy', 'Link Building', 'Local SEO'],
      color: 'from-blue-500 to-blue-600',
      href: '/services/seo',
      metrics: { value: '340%', label: 'avg traffic increase' },
      image: '/images/seo-dashboard.jpg',
      animatedImage: '/images/seo-animated.gif'
    },
    {
      id: 'ai-agents',
      icon: Bot,
      title: 'AI Agents for Enterprise',
      description: 'Automate complex workflows with intelligent AI agents tailored to your industry.',
      features: ['Process Automation', 'Intelligent Analytics', 'Custom AI Models', '24/7 Operations'],
      color: 'from-copper-500 to-copper-600',
      href: '/ai-agents',
      metrics: { value: '75%', label: 'cost reduction' },
      image: '/images/ai-agents-dashboard.jpg',
      animatedImage: '/images/ai-agents-animated.gif'
    },
    {
      id: 'cro',
      icon: TrendingUp,
      title: 'Web CRO & Conversion Optimization',
      description: 'Transform visitors into customers with scientific conversion rate optimization.',
      features: ['A/B Testing', 'User Research', 'Funnel Analysis', 'UX Optimization'],
      color: 'from-purple-500 to-purple-600',
      href: '/services/cro',
      metrics: { value: '280%', label: 'conversion boost' },
      image: '/images/cro-analytics.jpg',
      animatedImage: '/images/cro-animated.gif'
    },
    {
      id: 'development',
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Build scalable, high-performance applications that grow with your business.',
      features: ['eCommerce Platforms', 'SaaS Applications', 'Custom Solutions', 'API Integration'],
      color: 'from-purple-500 to-purple-600',
      href: '/services/development',
      metrics: { value: '99.9%', label: 'uptime guarantee' },
      image: '/images/development-code.jpg',
      animatedImage: '/images/development-animated.gif'
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'eCommerce & SaaS Solutions',
      description: 'Launch and scale digital products with comprehensive eCommerce and SaaS expertise.',
      features: ['Platform Migration', 'Payment Integration', 'Inventory Management', 'Analytics Setup'],
      color: 'from-orange-500 to-orange-600',
      href: '/services/ecommerce',
      metrics: { value: '425%', label: 'revenue growth' },
      image: '/images/ecommerce-platform.jpg',
      animatedImage: '/images/ecommerce-animated.gif'
    },
    {
      id: 'strategy',
      icon: Users,
      title: 'Digital Strategy & Consultancy',
      description: 'Navigate digital transformation with strategic guidance from industry experts.',
      features: ['Digital Audits', 'Growth Planning', 'Technology Roadmaps', 'Team Training'],
      color: 'from-indigo-500 to-indigo-600',
      href: '/services/strategy',
      metrics: { value: '15+', label: 'years expertise' },
      image: '/images/strategy-meeting.jpg',
      animatedImage: '/images/strategy-animated.gif'
    }
  ]

  useEffect(() => {
    if (!containerRef.current || !mounted) return

    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress within the stacking section
      // Start showing cards when section is 20% visible
      const startOffset = windowHeight * 0.2
      const scrollProgress = Math.max(0, Math.min(1, 
        (startOffset - containerTop) / (containerHeight - windowHeight + startOffset)
      ))
      
      // Determine which card should be visible based on scroll progress
      const totalCards = services.length
      const currentCardIndex = Math.floor(scrollProgress * totalCards)
      const clampedIndex = Math.min(currentCardIndex, totalCards - 1)

      cardsRef.current.forEach((card, index) => {
        if (!card) return

        if (index <= clampedIndex) {
          // Card should be visible - higher index cards appear on top
          card.style.opacity = '1'
          card.style.zIndex = `${100 + index}`
        } else {
          // Card should be hidden
          card.style.opacity = '0'
          card.style.zIndex = `${100 + index}`
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [services.length, mounted])

  // Show loading state until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <>
        {/* Desktop Loading State */}
        <section className="relative bg-white hidden lg:block" style={{ height: '600vh' }}>
          <div className="sticky top-0 w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-2xl" style={{ width: '1200px', height: '520px', maxWidth: '95vw', maxHeight: '75vh' }}>
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-64 h-8 bg-gray-200 rounded mx-auto mb-4"></div>
                    <div className="w-48 h-6 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Loading State */}
        <section className="relative bg-white lg:hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <div className="w-80 h-8 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="w-64 h-6 bg-gray-200 rounded mx-auto"></div>
          </div>
          <div className="max-w-md mx-auto px-4 space-y-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full h-96 bg-gray-200 rounded-3xl"></div>
            ))}
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Desktop Stacking Cards */}
      <section 
        ref={containerRef}
        className="relative bg-white hidden lg:block"
        style={{ height: `${services.length * 100}vh` }}
      >
        {/* Section Header - Fixed at top */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Comprehensive <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-6">
              From strategy to execution, we provide end-to-end digital services 
              that drive measurable growth for your business.
            </p>
            <div className="text-sm text-slate/60">
              Scroll down to see our services stack as you explore each solution
            </div>
          </div>
        </div>

        {/* Sticky Cards Container */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  opacity: 0,
                  zIndex: 100 + index
                }}
              >
                <StackingServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Static Cards */}
      <section className="relative bg-white lg:hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end digital services 
            that drive measurable growth for your business.
          </p>
        </div>
        <div className="max-w-md mx-auto px-4 space-y-8">
          {services.map((service, index) => (
            <div key={service.id} className="w-full">
              <MobileServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function StackingServiceCard({ service, index }: { service: Service; index: number }) {
  const IconComponent = service.icon

  return (
    <div 
      className="bg-white rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
      style={{ 
        width: '1200px', 
        height: '520px',
        maxWidth: '95vw',
        maxHeight: '75vh'
      }}
    >
      <div className="h-full flex">
        {/* Left Content - 60% */}
        <div className="flex-1 flex flex-col p-6 lg:p-8">
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${service.color} p-4 lg:p-5 text-white relative overflow-hidden flex-shrink-0 rounded-xl mb-4`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold mb-1 leading-tight">{service.title}</h3>
                    <div className="text-white/80 text-xs">Service {index + 1} of 6</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold leading-none">{service.metrics.value}</div>
                  <div className="text-white/80 text-xs">{service.metrics.label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow">
            <p className="text-slate mb-4 leading-relaxed text-sm">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-4 flex-grow">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-copper-gradient rounded-full flex-shrink-0"></div>
                  <span className="text-charcoal font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA - Always visible at bottom */}
            <div className="mt-auto pt-4">
              <button className="group/btn flex items-center space-x-2 text-copper-700 hover:text-copper-600 font-semibold transition-colors w-full justify-center py-3 border-2 border-copper-200 rounded-xl hover:bg-copper-50 hover:border-copper-300 text-sm">
                <span>Explore Service</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Animated Visual - 40% */}
        <div className="w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 lg:p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-copper-50/50 to-copper-100/50"></div>
          <div className="relative z-10 w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
            <ServiceDashboard service={service} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileServiceCard({ service, index }: { service: Service; index: number }) {
  const IconComponent = service.icon

  return (
    <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                <div className="text-white/80 text-xs">Service {index + 1} of 6</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{service.metrics.value}</div>
              <div className="text-white/80 text-xs">{service.metrics.label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate mb-6 leading-relaxed text-sm">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-copper-gradient rounded-full flex-shrink-0"></div>
              <span className="text-charcoal font-medium text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Mobile Dashboard Preview */}
        <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
          <div className="bg-white rounded-xl p-4 shadow-inner">
            <ServiceDashboard service={service} />
          </div>
        </div>

        {/* CTA */}
        <button className="group/btn flex items-center justify-center space-x-2 text-copper-700 hover:text-copper-600 font-semibold transition-colors w-full py-3 border-2 border-copper-200 rounded-xl hover:bg-copper-50 hover:border-copper-300">
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}

function ServiceDashboard({ service }: { service: Service }) {
  const IconComponent = service.icon

  const getDashboardContent = () => {
    switch (service.id) {
      case 'seo':
        return (
          <div className="w-full h-full p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-copper-600" />
                <span className="font-semibold text-charcoal text-sm">SEO Analytics</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 mb-3">
              <div className="flex items-end justify-between h-16 mb-2">
                {[20, 35, 45, 60, 55, 75, 85, 90].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-1000"
                    style={{
                      width: '10%',
                      height: `${height}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-blue-700 animate-pulse">{service.metrics.value}</div>
                <div className="text-xs text-blue-600">Traffic Increase</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-emerald-600 animate-pulse">1,247</div>
                <div className="text-xs text-gray-600">Keywords</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-copper-600 animate-pulse" style={{ animationDelay: '0.3s' }}>Top 3</div>
                <div className="text-xs text-gray-600">Rankings</div>
              </div>
            </div>
          </div>
        )

      case 'ai-agents':
        return (
          <div className="w-full h-full p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-copper-600" />
                <span className="font-semibold text-charcoal text-sm">AI Control</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-copper-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-copper-50 to-copper-100 rounded-xl p-3 mb-3">
              <div className="space-y-2">
                {['Customer AI', 'Analytics AI', 'Process AI'].map((agent, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded p-1">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      <span className="text-xs">{agent}</span>
                    </div>
                    <div className="text-xs text-copper-600 font-bold">ON</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-copper-600 animate-pulse">{service.metrics.value}</div>
                <div className="text-xs text-gray-600">Cost Saved</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-emerald-600 animate-pulse" style={{ animationDelay: '0.4s' }}>24/7</div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        )

      case 'cro':
        return (
          <div className="w-full h-full p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-charcoal text-sm">Conversion Lab</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 mb-3">
              <div className="space-y-2 mb-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold">Variant A</span>
                  <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-6 h-full bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold">Variant B</span>
                  <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-8 h-full bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-purple-700 animate-pulse">{service.metrics.value}</div>
                <div className="text-xs text-purple-600 font-semibold">Conversion Boost</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-blue-600 animate-pulse">12</div>
                <div className="text-xs text-gray-600 font-semibold">Active Tests</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-purple-600 animate-pulse" style={{ animationDelay: '0.5s' }}>95%</div>
                <div className="text-xs text-gray-600 font-semibold">Confidence</div>
              </div>
            </div>
          </div>
        )

      case 'development':
        return (
          <div className="w-full h-full p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-charcoal text-sm">Dev Console</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 mb-3">
              <div className="space-y-2 mb-2">
                {['API Endpoints', 'Database Queries', 'Frontend Components'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    <span className="text-xs font-medium">{item}</span>
                    <div className="ml-auto text-xs text-emerald-600 font-bold">✓</div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-purple-700 animate-pulse">{service.metrics.value}</div>
                <div className="text-xs text-purple-600 font-semibold">Uptime</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-emerald-600 animate-pulse">47ms</div>
                <div className="text-xs text-gray-600 font-semibold">Response</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-purple-600 animate-pulse" style={{ animationDelay: '0.6s' }}>0</div>
                <div className="text-xs text-gray-600 font-semibold">Errors</div>
              </div>
            </div>
          </div>
        )

      case 'ecommerce':
        return (
          <div className="w-full h-full p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4 text-orange-600" />
                <span className="font-semibold text-charcoal text-sm">Store Analytics</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 mb-3">
              <div className="flex items-end justify-between h-12 mb-2">
                {[30, 45, 60, 40, 70, 85].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-orange-500 to-orange-400 rounded-t transition-all duration-1000"
                    style={{
                      width: '14%',
                      height: `${height}%`,
                      animationDelay: `${i * 0.15}s`
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-orange-700 animate-pulse">{service.metrics.value}</div>
                <div className="text-xs text-orange-600 font-semibold">Revenue Growth</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-emerald-600 animate-pulse">2,847</div>
                <div className="text-xs text-gray-600 font-semibold">Orders</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-orange-600 animate-pulse" style={{ animationDelay: '0.4s' }}>$127K</div>
                <div className="text-xs text-gray-600 font-semibold">Revenue</div>
              </div>
            </div>
          </div>
        )

      case 'strategy':
        return (
          <div className="w-full h-full p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-indigo-600" />
                <span className="font-semibold text-charcoal text-sm">Strategy Hub</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-3 mb-3">
              <div className="space-y-2 mb-2">
                {['Market Analysis', 'Competitive Research', 'Growth Planning'].map((phase, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs font-medium">{phase}</span>
                    <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-400 rounded-full animate-pulse transition-all duration-1000"
                        style={{ 
                          width: `${[100, 75, 45][i]}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-indigo-700 animate-pulse">{service.metrics.value}</div>
                <div className="text-xs text-indigo-600 font-semibold">Years Experience</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-emerald-600 animate-pulse">500+</div>
                <div className="text-xs text-gray-600 font-semibold">Projects</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-indigo-600 animate-pulse" style={{ animationDelay: '0.5s' }}>98%</div>
                <div className="text-xs text-gray-600 font-semibold">Success Rate</div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <div className="text-center">
              <IconComponent className="w-8 h-8 text-copper-600 mx-auto mb-2 animate-pulse" />
              <div className="text-sm font-bold text-copper-700">{service.title}</div>
            </div>
          </div>
        )
    }
  }

  return getDashboardContent()
}