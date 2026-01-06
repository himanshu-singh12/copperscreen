'use client'

import { motion } from 'framer-motion'
import { Calendar, Award, Users, Globe } from 'lucide-react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ElementType
  color: string
}

export function Timeline() {
  const events: TimelineEvent[] = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'Started as a boutique digital consultancy with a focus on data-driven growth strategies.',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2012',
      title: 'Global Expansion',
      description: 'Expanded operations to APAC and Australia, serving enterprise clients across multiple continents.',
      icon: Globe,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      year: '2016',
      title: 'AI Integration',
      description: 'Pioneered AI-driven analytics and automation solutions for enterprise digital transformation.',
      icon: Award,
      color: 'from-copper-500 to-copper-600'
    },
    {
      year: '2020',
      title: 'Team Growth',
      description: 'Scaled to 50+ specialists across development, strategy, and AI implementation.',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            15+ years of innovation, growth, and digital excellence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-copper-500 to-copper-600 rounded-full"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${event.color} text-white rounded-2xl mb-6`}>
                      <event.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{event.title}</h3>
                    <p className="text-slate leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-4 border-copper-500 rounded-full">
                  <div className="w-3 h-3 bg-copper-500 rounded-full"></div>
                </div>

                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className={`text-6xl font-bold text-copper-200 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {event.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}