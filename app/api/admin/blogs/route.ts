import { NextRequest, NextResponse } from 'next/server'
import { staticBlogPosts } from '@/lib/static-data'

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from a database
    // For now, return static demo data
    return NextResponse.json({
      success: true,
      blogs: staticBlogPosts,
      total: staticBlogPosts.length
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}