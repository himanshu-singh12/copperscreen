import { NextRequest, NextResponse } from 'next/server'
import { leadService, blogService, supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const results = {
    timestamp: new Date().toISOString(),
    supabase: {
      configured: !!supabase,
      url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
      key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ? 'Set' : 'Missing'
    },
    database: {
      leads: { accessible: false, count: 0, error: null as string | null },
      blogs: { accessible: false, count: 0, error: null as string | null }
    },
    openrouter: {
      configured: !!process.env.OPENROUTER_API_KEY,
      keyValid: process.env.OPENROUTER_API_KEY?.startsWith('sk-or-v1-') || false
    }
  }

  // Test leads table
  try {
    const leads = await leadService.getAll()
    results.database.leads = {
      accessible: true,
      count: leads.length,
      error: null
    }
  } catch (error) {
    results.database.leads = {
      accessible: false,
      count: 0,
      error: (error as Error).message
    }
  }

  // Test blogs table
  try {
    const blogs = await blogService.getAll()
    results.database.blogs = {
      accessible: true,
      count: blogs.length,
      error: null
    }
  } catch (error) {
    results.database.blogs = {
      accessible: false,
      count: 0,
      error: (error as Error).message
    }
  }

  return NextResponse.json(results, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    }
  })
}