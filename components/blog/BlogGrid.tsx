'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}

export function BlogGrid() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Digital Marketing: Trends for 2024',
      excerpt: 'Explore how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-marketing.jpg',
      slug: 'future-ai-digital-marketing-2024'
    },
    {
      id: '2',
      title: 'SEO Best Practices: A Complete Guide for Enterprise Websites',
      excerpt: 'Comprehensive strategies for optimizing large-scale websites and driving organic traffic growth.',
      author: 'Emily Watson',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'SEO',
      image: '/images/blog/seo-guide.jpg',
      slug: 'seo-best-practices-enterprise-websites'
    },
    {
      id: '3',
      title: 'Conversion Rate Optimization: 10 Proven Strategies',
      excerpt: 'Data-driven techniques to improve your website conversion rates and maximize ROI.',
      author: 'Marcus Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'CRO',
      image: '/images/blog/cro-strategies.jpg',
      slug: 'conversion-rate-optimization-strategies'
    },
    {
      id: '4',
      title: 'Building Scalable eCommerce Platforms: Architecture Guide',
      excerpt: 'Technical insights into creating robust, scalable eCommerce solutions that grow with your business.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Development',
      image: '/images/blog/ecommerce-architecture.jpg',
      slug: 'scalable-ecommerce-platform-architecture'
    },
    {
      id: '5',
      title: 'Digital Transformation in Healthcare: Case Study',
      excerpt: 'How we helped a healthcare provider modernize their digital presence and improve patient engagement.',
      author: 'Sarah Chen',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Case Study',
      image: '/images/blog/healthcare-transformation.jpg',
      slug: 'healthcare-digital-transformation-case-study'
    },
    {
      id: '6',
      title: 'The ROI of AI Agents in Business Operations',
      excerpt: 'Measuring the real impact of AI automation on business efficiency and cost reduction.',
      author: 'Emily Watson',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-roi.jpg',
      slug: 'roi-ai-agents-business-operations'
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Technology': 'bg-copper-100 text-copper-700',
      'SEO': 'bg-blue-100 text-blue-700',
      'CRO': 'bg-emerald-100 text-emerald-700',
      'Development': 'bg-purple-100 text-purple-700',
      'Case Study': 'bg-orange-100 text-orange-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-copper-100 to-copper-200 flex items-center justify-center">
                  <div className="text-copper-600 text-6xl font-bold opacity-20">
                    {post.category.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-8">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-copper-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-slate mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-slate">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center space-x-2 text-copper-600 hover:text-copper-700 font-semibold transition-colors group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}

      {/* Load More Button */}
      <div className="text-center pt-8">
        <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
          Load More Articles
        </button>
      </div>
    </div>
  )
}