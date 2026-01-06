import { Metadata } from 'next'
import { Code, Layers, Zap, Shield, CheckCircle, Smartphone } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'Full-Stack Web Development Services | Copper Screen',
  description: 'Custom web development services for eCommerce platforms, SaaS applications, and enterprise solutions. Modern, scalable, and secure.',
  keywords: ['web development', 'full-stack development', 'eCommerce development', 'SaaS development', 'custom solutions']
}

export default function DevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Bespoke web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.'
    },
    {
      icon: Layers,
      title: 'eCommerce Platforms',
      description: 'Full-featured eCommerce solutions with payment processing, inventory management, and customer analytics.'
    },
    {
      icon: Zap,
      title: 'SaaS Applications',
      description: 'Scalable Software-as-a-Service platforms with multi-tenancy, subscription management, and API integrations.'
    },
    {
      icon: Shield,
      title: 'Enterprise Solutions',
      description: 'Robust enterprise applications with advanced security, compliance features, and seamless integrations.'
    }
  ]

  const technologies = [
    { name: 'React/Next.js', category: 'Frontend' },
    { name: 'Node.js/Express', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'PostgreSQL/MongoDB', category: 'Database' },
    { name: 'AWS/Vercel', category: 'Cloud' },
    { name: 'Docker/Kubernetes', category: 'DevOps' }
  ]

  const benefits = [
    'Modern, responsive design across all devices',
    'High-performance, SEO-optimized applications',
    'Scalable architecture for future growth',
    'Secure coding practices and data protection',
    'Comprehensive testing and quality assurance',
    'Ongoing maintenance and support'
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Requirements gathering, technical architecture planning, and project roadmap creation.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'UI/UX design, wireframing, and interactive prototypes for user validation.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing, code reviews, and quality assurance.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deployment, performance optimization, and ongoing maintenance and support.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-gradient rounded-2xl">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Full-Stack <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Custom web applications, eCommerce platforms, and SaaS solutions built with 
              modern technologies for performance, scalability, and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-purple-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Start Your Project
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Development Services
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              From concept to deployment, we build applications that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 group-hover:bg-purple-gradient group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.title}</h3>
                <p className="text-slate leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, secure, and scalable applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
                <div className="text-lg font-semibold text-charcoal mb-2">{tech.name}</div>
                <div className="text-sm text-purple-600 font-medium">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Why Choose Our Development Services?
              </h2>
              <p className="text-xl text-slate mb-8">
                We combine technical expertise with business understanding to deliver 
                applications that not only work flawlessly but drive real business results.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-charcoal mb-2">100%</div>
                <div className="text-slate">Mobile Responsive</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-charcoal mb-2">99.9%</div>
                <div className="text-slate">Uptime Guarantee</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-charcoal mb-2">SSL</div>
                <div className="text-slate">Security Standard</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-charcoal mb-2">Clean</div>
                <div className="text-slate">Code Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Agile methodology ensuring quality, transparency, and on-time delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-gradient text-white rounded-full text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Build Your Next Digital Solution?"
        description="Transform your ideas into powerful web applications with our expert development team."
        primaryCTA="Start Your Project"
        secondaryCTA="View Portfolio"
      />
    </div>
  )
}