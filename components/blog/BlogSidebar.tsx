'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Tag, Calendar, TrendingUp } from 'lucide-react'

export function BlogSidebar() {
  const categories = [
    { name: 'AI & Technology', count: 12, color: 'text-copper-600' },
    { name: 'SEO', count: 18, color: 'text-blue-600' },
    { name: 'CRO', count: 8, color: 'text-emerald-600' },
    { name: 'Development', count: 15, color: 'text-purple-600' },
    { name: 'Case Studies', count: 6, color: 'text-orange-600' },
    { name: 'Digital Strategy', count: 10, color: 'text-indigo-600' }
  ]

  const popularPosts = [
    {
      title: 'The Complete Guide to Technical SEO',
      date: '2024-01-10',
      slug: 'complete-guide-technical-seo'
    },
    {
      title: 'AI Automation ROI Calculator',
      date: '2024-01-08',
      slug: 'ai-automation-roi-calculator'
    },
    {
      title: 'eCommerce Conversion Optimization',
      date: '2024-01-05',
      slug: 'ecommerce-conversion-optimization'
    },
    {
      title: 'Building Scalable Web Applications',
      date: '2024-01-03',
      slug: 'building-scalable-web-applications'
    }
  ]

  const tags = [
    'SEO', 'AI', 'CRO', 'Development', 'Strategy', 'Analytics', 
    'Automation', 'eCommerce', 'Performance', 'Growth', 'Digital Marketing'
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center">
          <Search className="w-5 h-5 mr-2 text-copper-600" />
          Search Articles
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-100"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-copper-600" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog/category/${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className={`font-medium ${category.color} group-hover:text-copper-700`}>
                {category.name}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-copper-600" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-copper-100 text-copper-600 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-charcoal group-hover:text-copper-700 transition-colors text-sm leading-tight mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-charcoal mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-copper-100 hover:text-copper-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-copper-500 to-copper-600 rounded-2xl p-6 text-white"
      >
        <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
        <p className="text-copper-100 text-sm mb-4">
          Get weekly insights on digital growth and industry trends.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-full bg-white text-copper-600 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  )
}