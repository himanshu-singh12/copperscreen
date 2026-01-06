import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Calendar, Clock, Eye, User, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { staticBlogPosts } from '@/lib/static-data'

// Configure for static export
export const dynamic = 'force-static'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return staticBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = staticBlogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }
  
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
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = staticBlogPosts.find(p => p.slug === slug)

  if (!post) {
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
              <span>{post.views} views</span>
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
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, '<h2>').replace(/<h2>/g, '</p><h2 class="text-2xl font-bold mt-8 mb-4">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-copper-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-charcoal mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate mb-6">
            Let's discuss how our expertise can drive your digital transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-copper-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  )
}