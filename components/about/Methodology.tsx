'use client'

import { motion } from 'framer-motion'
import { Search, Target, Code, BarChart, Rocket, Users } from 'lucide-react'

interface MethodologyStep {
  step: number
  title: string
  description: string
  icon: React.ElementType
  color: string
}

export function Methodology() {
  const steps: MethodologyStep[] = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business, market, and current digital presence to identify opportunities.',
      icon: Search,
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create data-driven strategies aligned with your business goals and market positioning.',
      icon: Target,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Execute solutions using best practices, cutting-edge technology, and proven methodologies.',
      icon: Code,
      color: 'from-copper-500 to-copper-600'
    },
    {
      step: 4,
      title: 'Measurement & Optimization',
      description: 'Continuously monitor performance and optimize based on real-world data and insights.',
      icon: BarChart,
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: 5,
      title: 'Scale & Growth',
      description: 'Expand successful initiatives and explore new opportunities for sustainable growth.',
      icon: Rocket,
      color: 'from-orange-500 to-orange-600'
    },
    {
      step: 6,
      title: 'Partnership & Support',
      description: 'Ongoing collaboration and support to ensure long-term success and adaptation.',
      icon: Users,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Our <span className="text-gradient">Methodology</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            A proven 6-step process that delivers measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-copper-500 to-copper-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl mb-6 mt-4`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-charcoal mb-4">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-copper-50 to-copper-100 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-copper-200 via-copper-400 to-copper-200 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.step} className="relative z-10">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}