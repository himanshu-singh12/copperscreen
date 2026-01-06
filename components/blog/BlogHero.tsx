'use client'

import { motion } from 'framer-motion'
import { Search, Filter, Calendar } from 'lucide-react'

export function BlogHero() {
  const categories = [
    'All Posts',
    'SEO',
    'Development', 
    'AI & Automation',
    'Strategy',
    'Industry News'
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
        <div className="text-center mb-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Growth <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay ahead with expert insights on SEO, development, AI, and digital strategy. 
              Weekly articles from industry leaders.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:border-copper-500 text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-copper-gradient text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Article Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-copper-gradient text-white text-sm font-medium rounded-full">
                  Featured
                </span>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>January 6, 2025</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Future of AI Agents in Enterprise: 2025 Trends
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Discover how AI agents are revolutionizing business operations and what 
                trends will shape the enterprise landscape in 2025.
              </p>
              <button className="text-copper-400 hover:text-copper-300 font-semibold flex items-center space-x-2">
                <span>Read Full Article</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </button>
            </div>
            <div className="bg-gradient-to-br from-copper-100 to-copper-200 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-copper-700 font-semibold">Featured Article</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}