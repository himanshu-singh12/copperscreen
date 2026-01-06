'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function ServiceHero() {
  const benefits = [
    'Data-driven strategies',
    'Proven methodologies',
    'Enterprise-grade solutions',
    'Measurable results'
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-copper-mesh"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Comprehensive <span className="text-gradient">Digital Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate max-w-4xl mx-auto leading-relaxed">
              From strategy to execution, we provide end-to-end digital solutions that drive 
              measurable growth for enterprise clients worldwide.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="font-medium text-slate">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border border-copper-600 text-copper-600 hover:bg-copper-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Our Process
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}