'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'

export function ContactHero() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Book a 30-minute strategy call',
      action: 'Schedule Now'
    },
    {
      icon: Phone,
      title: 'Direct Call',
      description: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@copperscreen.com',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: '24h Response',
      description: 'We respond within 24 hours',
      action: 'Guaranteed'
    }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-copper-mesh"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Start Your <span className="text-gradient">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how our proven digital solutions 
              can drive measurable growth for your company.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-copper-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {method.title}
                  </h3>
                  <p className="text-slate mb-4">
                    {method.description}
                  </p>
                  <button className="text-copper-700 hover:text-copper-600 font-semibold transition-colors">
                    {method.action}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-copper-50 to-copper-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6">
              Why Choose Copper Screen?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-copper-700 mb-2">15+</div>
                <div className="text-charcoal font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-copper-700 mb-2">500+</div>
                <div className="text-charcoal font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-copper-700 mb-2">98%</div>
                <div className="text-charcoal font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}