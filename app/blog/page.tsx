import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogSidebar } from '@/components/blog/BlogSidebar'
import { Newsletter } from '@/components/blog/Newsletter'

export const metadata = {
  title: 'Digital Marketing Blog - Insights & Strategies | Copper Screen',
  description: 'Stay ahead with the latest digital marketing insights, SEO strategies, AI trends, and industry best practices from our experts.',
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  )
}