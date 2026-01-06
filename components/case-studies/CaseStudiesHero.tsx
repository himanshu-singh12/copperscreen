'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Award } from 'lucide-react'

export function CaseStudiesHero() {
  const stats = [
    { icon: TrendingUp, value: '340%', label: 'Average growth increase' },
    { icon: Users, value: '500+', label: 'Successful projects' },
    { icon: Globe, value: '4', label: 'Continents served' },
    { icon: Award, value: '98%', label: 'Client satisfaction' }
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
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Proven <span className="text-gradient">Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate max-w-4xl mx-auto leading-relaxed">
              Real transformations, measurable outcomes. See how we've helped businesses 
              across industries achieve extraordinary growth with our digital solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-copper-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-copper-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-slate font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}