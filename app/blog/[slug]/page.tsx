import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Calendar, Clock, Eye, User, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { blogService } from '@/lib/supabase'
import ReactMarkdown from 'react-markdown'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await blogService.getBySlug(slug)
    
    return {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      keywords: post.tags?.join(', '),
      openGraph: {
        title: post.title,
        description: post.excerpt || '',
        type: 'article',
        publishedTime: post.published_at || post.created_at,
        authors: [post.author],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt || '',
      }
    }
  } catch (error) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  let post
  
  try {
    post = await blogService.getBySlug(slug)
    
    // Increment view count
    await blogService.incrementViews(post.id)
  } catch (error) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-copper-600 hover:text-copper-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(post.published_at || post.created_at)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.reading_time} min read</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              <span>{post.views + 1} views</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Button */}
          <div className="flex items-center justify-between border-t pt-6">
            <div className="text-sm text-gray-500">
              {post.ai_generated && (
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs mr-2">
                  AI-Enhanced Content
                </span>
              )}
            </div>
            <button className="flex items-center space-x-2 text-copper-600 hover:text-copper-700 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="h-64 md:h-96 bg-gradient-to-br from-copper-100 to-copper-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-copper-gradient opacity-10"></div>
        {/* AI Generated Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-copper-700 text-6xl md:text-8xl font-bold opacity-30 mb-4">
              {post.category.charAt(0)}
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-700 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>AI-Generated Visual Content</span>
              </div>
              <p className="text-xs mt-1 opacity-75">
                Professional illustration representing: {post.title.substring(0, 50)}...
              </p>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-copper-300/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-electric/40 rounded-full blur-lg"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-charcoal mb-6 mt-8">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold text-charcoal mb-3 mt-6">{children}</h3>,
                p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-copper-500 pl-4 italic text-gray-600 my-6">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                strong: ({ children }) => <strong className="font-semibold text-charcoal">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                a: ({ href, children }) => (
                  <a href={href} className="text-copper-600 hover:text-copper-700 underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-copper-gradient rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get expert guidance from Copper Screen's digital transformation specialists.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-copper-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>

        {/* Related Posts Section - Future Enhancement */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-charcoal mb-6">Related Articles</h3>
          <div className="text-center py-8 text-gray-500">
            <p>Related articles will be displayed here based on category and tags.</p>
          </div>
        </div>
      </div>
    </div>
  )
}