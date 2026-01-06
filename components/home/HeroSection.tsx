'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import { CopperMesh } from '../ui/CopperMesh'
import { TypewriterText } from '../ui/TypewriterText'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const trustBadges = [
    { metric: '500+', label: 'Projects Delivered' },
    { metric: '15+', label: 'Years Experience' },
    { metric: '98%', label: 'Client Satisfaction' },
    { metric: '4', label: 'Global Regions' }
  ]

  // Show static version until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-copper-50/20 to-copper-100/20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6">
                <span className="text-gradient">Data-Backed Growth.</span>
                <br />
                <span>Empathy-Led Strategy.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate max-w-4xl mx-auto leading-relaxed">
                15+ years of expertise in SEO, web CRO, full-scale development, and cutting-edge AI agents 
                for enterprise clients across APAC, Australia, Europe, and North America.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Growth Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="group flex items-center space-x-3 text-charcoal hover:text-copper-700 transition-colors font-semibold text-lg">
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span>Explore AI Agents</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-copper-700 mb-2">
                    {badge.metric}
                  </div>
                  <div className="text-sm md:text-base text-slate font-medium">
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-6 text-sm text-slate">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald" />
                <span>Enterprise Clients Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald" />
                <span>Global Presence</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald" />
                <span>AI-Powered Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <CopperMesh mousePosition={mousePosition} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6">
              <TypewriterText 
                text="Data-Backed Growth." 
                className="text-gradient"
                delay={500}
              />
              <br />
              <TypewriterText 
                text="Empathy-Led Strategy." 
                delay={2000}
              />
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate max-w-4xl mx-auto leading-relaxed"
            >
              15+ years of expertise in SEO, web CRO, full-scale development, and cutting-edge AI agents 
              for enterprise clients across APAC, Australia, Europe, and North America.
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <span>Start Your Growth Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="group flex items-center space-x-3 text-charcoal hover:text-copper-700 transition-colors font-semibold text-lg">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span>Explore AI Agents</span>
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.2 + index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-copper-700 mb-2">
                  {badge.metric}
                </div>
                <div className="text-sm md:text-base text-slate font-medium">
                  {badge.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-6 text-sm text-slate"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald" />
              <span>Enterprise Clients Served</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald" />
              <span>Global Presence</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald" />
              <span>AI-Powered Solutions</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-copper-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-copper-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}