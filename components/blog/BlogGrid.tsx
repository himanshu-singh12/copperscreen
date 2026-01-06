'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User, Eye, TrendingUp } from 'lucide-react'
import { blogService, BlogPost } from '@/lib/supabase'

interface BlogGridProps {
  selectedCategory?: string
  searchQuery?: string
}

export function BlogGrid({ selectedCategory, searchQuery }: BlogGridProps = {}) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const allPosts = await blogService.getPublished()
        
        // Filter posts based on category and search query
        let filteredPosts = allPosts
        
        if (selectedCategory && selectedCategory !== 'All') {
          filteredPosts = filteredPosts.filter(post => post.category === selectedCategory)
        }
        
        if (searchQuery) {
          filteredPosts = filteredPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        }
        
        setPosts(filteredPosts)
      } catch (err) {
        setError('Failed to load blog posts')
        console.error('Error fetching blog posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [selectedCategory, searchQuery])

  const getCategoryColor = (category: string) => {
    const colors = {
      'SEO & Digital Marketing': 'bg-blue-100 text-blue-700',
      'AI & Technology': 'bg-purple-100 text-purple-700',
      'Web Development': 'bg-green-100 text-green-700',
      'Business Strategy': 'bg-orange-100 text-orange-700',
      'Case Studies': 'bg-red-100 text-red-700',
      'Industry Trends': 'bg-cyan-100 text-cyan-700'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
            <div className="md:flex">
              <div className="md:w-1/3 h-64 bg-gray-200"></div>
              <div className="md:w-2/3 p-8">
                <div className="h-6 bg-gray-200 rounded mb-4 w-24"></div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6 w-3/4"></div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-6">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-copper-gradient text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 mb-4">
          {searchQuery || selectedCategory !== 'All' 
            ? 'No posts found matching your criteria.' 
            : 'No blog posts available.'}
        </div>
        {(searchQuery || selectedCategory !== 'All') && (
          <button 
            onClick={() => window.location.href = '/blog'} 
            className="text-copper-700 hover:text-copper-600 font-medium"
          >
            View All Posts
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
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
                <div className="h-64 md:h-full bg-gradient-to-br from-copper-100 to-copper-200 flex items-center justify-center relative">
                  <div className="text-copper-600 text-6xl font-bold opacity-20">
                    {post.category.charAt(0)}
                  </div>
                  {post.trending_score && post.trending_score > 85 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </div>
                  )}
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

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 4 && (
                        <span className="text-xs text-gray-500">+{post.tags.length - 4} more</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-slate">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.published_at || post.created_at)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.reading_time} min read</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
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

      {/* Load More Button - Future enhancement */}
      {posts.length >= 6 && (
        <div className="text-center pt-8">
          <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Load More Articles
          </button>
        </div>
      )}
    </div>
  )
}