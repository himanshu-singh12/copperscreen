'use client'

import { motion } from 'framer-motion'
import { 
  Search, 
  Lightbulb, 
  Code2, 
  Rocket, 
  BarChart3,
  ArrowRight 
} from 'lucide-react'

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'Deep dive into your business, goals, and current digital presence to identify opportunities.',
    duration: '1-2 weeks',
    deliverables: [
      'Comprehensive audit report',
      'Competitive analysis',
      'Goal setting and KPIs',
      'Technical assessment'
    ]
  },
  {
    id: 2,
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Develop a customized roadmap with clear milestones and measurable objectives.',
    duration: '1 week',
    deliverables: [
      'Strategic roadmap',
      'Project timeline',
      'Resource allocation',
      'Success metrics'
    ]
  },
  {
    id: 3,
    icon: Code2,
    title: 'Implementation',
    description: 'Execute the strategy with precision, keeping you informed every step of the way.',
    duration: '4-12 weeks',
    deliverables: [
      'Regular progress updates',
      'Quality assurance testing',
      'Stakeholder reviews',
      'Iterative improvements'
    ]
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Launch & Deployment',
    description: 'Carefully orchestrated launch with monitoring and immediate optimization.',
    duration: '1 week',
    deliverables: [
      'Go-live execution',
      'Performance monitoring',
      'Issue resolution',
      'Launch documentation'
    ]
  },
  {
    id: 5,
    icon: BarChart3,
    title: 'Optimization & Growth',
    description: 'Continuous monitoring, analysis, and optimization to maximize results.',
    duration: 'Ongoing',
    deliverables: [
      'Performance reports',
      'Optimization recommendations',
      'Growth strategies',
      'Ongoing support'
    ]
  }
]

export function ProcessSection() {
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
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            A systematic approach refined over 15+ years, ensuring consistent results 
            and transparent communication throughout your project.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-copper-200 via-copper-400 to-copper-200"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-16 space-y-8 lg:space-y-0`}
                >
                  {/* Step Number (Center) */}
                  <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-copper-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {step.id}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:pr-24' : 'lg:pl-24'}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                      {/* Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-copper-gradient rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-charcoal">{step.title}</h3>
                          <p className="text-copper-700 font-medium">{step.duration}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-charcoal mb-3">Key Deliverables:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-copper-gradient rounded-full"></div>
                              <span className="text-sm text-charcoal">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element (opposite side) */}
                  <div className={`flex-1 ${isEven ? 'lg:pl-24' : 'lg:pr-24'} hidden lg:block`}>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-copper-100 to-copper-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-16 h-16 text-copper-700" />
                      </div>
                      <div className="text-copper-700 font-semibold">Step {step.id}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-copper-50 to-copper-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a customized roadmap for your success. 
              Book a free consultation to begin your digital transformation journey.
            </p>
            <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}