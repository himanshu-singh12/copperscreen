'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: string
  secondaryCTA?: string
  benefits?: string[]
  variant?: 'default' | 'dark' | 'gradient'
}

export function CTASection({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA,
  benefits = [
    'Free consultation call',
    'Custom strategy roadmap',
    'No long-term commitments'
  ],
  variant = 'default'
}: CTASectionProps) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-charcoal text-white'
      case 'gradient':
        return 'bg-gradient-to-br from-copper-50 to-copper-100'
      default:
        return 'bg-white'
    }
  }

  const getTextClasses = () => {
    switch (variant) {
      case 'dark':
        return 'text-white'
      default:
        return 'text-charcoal'
    }
  }

  const getDescriptionClasses = () => {
    switch (variant) {
      case 'dark':
        return 'text-gray-300'
      default:
        return 'text-slate'
    }
  }

  return (
    <section className={`py-20 relative overflow-hidden ${getBackgroundClasses()}`}>
      {/* Background Effects */}
      {variant === 'dark' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate to-charcoal opacity-90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184, 115, 51, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>
      )}

      {variant === 'gradient' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-copper-mesh"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${getTextClasses()}`}>
              {title}
            </h2>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${getDescriptionClasses()}`}>
              {description}
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className={`font-medium ${variant === 'dark' ? 'text-gray-300' : 'text-slate'}`}>
                  {benefit}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <span>{primaryCTA}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {secondaryCTA && (
              <button className={`
                px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300
                ${variant === 'dark' 
                  ? 'border border-copper-400 text-copper-400 hover:bg-copper-400 hover:text-white' 
                  : 'border border-copper-600 text-copper-600 hover:bg-copper-600 hover:text-white'
                }
              `}>
                {secondaryCTA}
              </button>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <p className={`text-sm mb-4 ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Trusted by 500+ companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-8 w-28 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-8 w-22 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-8 w-26 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}