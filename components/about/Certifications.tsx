'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Star, CheckCircle } from 'lucide-react'

interface Certification {
  name: string
  issuer: string
  description: string
  icon: React.ElementType
  color: string
  year: string
}

export function Certifications() {
  const certifications: Certification[] = [
    {
      name: 'Google Partner',
      issuer: 'Google',
      description: 'Certified Google Ads and Analytics partner with proven expertise in digital marketing.',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
      year: '2020'
    },
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      description: 'Professional certification for designing distributed systems on AWS.',
      icon: Shield,
      color: 'from-orange-500 to-orange-600',
      year: '2021'
    },
    {
      name: 'HubSpot Partner',
      issuer: 'HubSpot',
      description: 'Certified partner for inbound marketing and sales automation solutions.',
      icon: Star,
      color: 'from-emerald-500 to-emerald-600',
      year: '2019'
    },
    {
      name: 'ISO 27001 Compliant',
      issuer: 'International Organization for Standardization',
      description: 'Information security management system certification for data protection.',
      icon: CheckCircle,
      color: 'from-purple-500 to-purple-600',
      year: '2022'
    }
  ]

  const achievements = [
    { metric: '500+', label: 'Projects Completed' },
    { metric: '98%', label: 'Client Satisfaction' },
    { metric: '15+', label: 'Years Experience' },
    { metric: '50+', label: 'Team Members' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Industry-recognized expertise and proven track record of success
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${cert.color} text-white rounded-2xl mb-4`}>
                  <cert.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-charcoal mb-2">{cert.name}</h3>
                <p className="text-copper-600 font-semibold text-sm mb-3">{cert.issuer}</p>
                <p className="text-slate text-sm leading-relaxed mb-4">{cert.description}</p>
                
                {/* Year Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-copper-100 text-copper-700 rounded-full text-xs font-semibold">
                  Since {cert.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {achievement.metric}
                </div>
                <div className="text-slate font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}