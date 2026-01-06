'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Target, Users } from 'lucide-react'

export function AboutHero() {
  const values = [
    {
      icon: Brain,
      title: 'Data-Backed',
      description: 'Every decision supported by comprehensive analytics and proven methodologies'
    },
    {
      icon: Heart,
      title: 'Empathy-Led',
      description: 'Understanding your challenges and crafting solutions that truly fit your needs'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Measurable outcomes that drive real business growth and transformation'
    },
    {
      icon: Users,
      title: 'Partnership-Driven',
      description: 'Collaborative approach that makes your success our primary objective'
    }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-copper-mesh"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              <span className="text-gradient">Data-Backed Growth.</span><br />
              Empathy-Led Strategy.
            </h1>
            <p className="text-xl md:text-2xl text-slate mb-8 leading-relaxed">
              For over 15 years, we've been transforming businesses through the perfect 
              blend of analytical rigor and human understanding.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-copper-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">15+</span>
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Years of Excellence</div>
                  <div className="text-slate">Proven track record since 2008</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-copper-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">500+</span>
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Successful Projects</div>
                  <div className="text-slate">Across 4 continents</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-copper-gradient rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}