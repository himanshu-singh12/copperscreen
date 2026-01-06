'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, Zap, Clock, TrendingUp } from 'lucide-react'

export function AIAgentsHero() {
  const benefits = [
    { icon: Zap, text: '75% cost reduction' },
    { icon: Clock, text: '24/7 operations' },
    { icon: TrendingUp, text: 'Scalable automation' },
    { icon: Bot, text: 'Industry-specific agents' }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-charcoal via-slate to-charcoal text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184, 115, 51, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">AI Agents</span> for Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Autonomous AI agents with situational intelligence that interpret situations, 
              orchestrate actions, and complete transactions without human effort.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <benefit.icon className="w-6 h-6 text-copper-400" />
                  <span className="text-gray-300 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border border-copper-400 text-copper-400 hover:bg-copper-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Book AI Demo
              </button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-copper-100 to-copper-200 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-copper-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-copper-700">AI Agent Dashboard</h3>
                  <p className="text-copper-600">Real-time automation insights</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-charcoal font-medium">Customer Service Agent</span>
                  <span className="text-emerald-600 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-charcoal font-medium">Inventory Management</span>
                  <span className="text-emerald-600 font-semibold">Running</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-charcoal font-medium">Lead Qualification</span>
                  <span className="text-emerald-600 font-semibold">Processing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}