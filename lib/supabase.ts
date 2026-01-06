import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

// Check if Supabase is properly configured
const isSupabaseConfigured = supabaseUrl && supabasePublishableKey && 
  supabaseUrl.startsWith('https://') && 
  supabasePublishableKey.startsWith('eyJ') &&
  !supabaseUrl.includes('your-project-id') &&
  !supabasePublishableKey.includes('example')

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabasePublishableKey)
  : null

console.log('Supabase configuration:', {
  configured: isSupabaseConfigured,
  hasUrl: !!supabaseUrl,
  hasKey: !!supabasePublishableKey,
  urlValid: supabaseUrl?.startsWith('https://'),
  keyValid: supabasePublishableKey?.startsWith('eyJ'),
  urlIsExample: supabaseUrl?.includes('your-project-id') || supabaseUrl?.includes('example'),
  keyIsExample: supabasePublishableKey?.includes('example')
})

// Types for our database tables
export interface Lead {
  id: string
  created_at: string
  updated_at: string
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget?: string
  message: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'converted'
}

export interface BlogPost {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image?: string
  author: string
  category: string
  tags: string[]
  published: boolean
  published_at?: string
  reading_time: number
  views: number
  seo_title?: string
  seo_description?: string
  ai_generated?: boolean
  trending_score?: number
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  color?: string
}

// Database helper functions
export const leadService = {
  async getAll() {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      if (error.message.includes('relation "leads" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as Lead[]
  },

  async create(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select()
      .single()
    
    if (error) {
      if (error.message.includes('relation "leads" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as Lead
  },

  async update(id: string, updates: Partial<Lead>) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('leads')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      if (error.message.includes('relation "leads" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as Lead
  },

  async delete(id: string) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)
    
    if (error) {
      if (error.message.includes('relation "leads" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
  }
}

export const blogService = {
  async getPublished() {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
    
    if (error) {
      if (error.message.includes('relation "blog_posts" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as BlogPost[]
  },

  async getAll() {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      if (error.message.includes('relation "blog_posts" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as BlogPost[]
  },

  async getBySlug(slug: string) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      if (error.message.includes('relation "blog_posts" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as BlogPost
  },

  async create(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([post])
      .select()
      .single()
    
    if (error) {
      if (error.message.includes('relation "blog_posts" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as BlogPost
  },

  async update(id: string, updates: Partial<BlogPost>) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      if (error.message.includes('relation "blog_posts" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as BlogPost
  },

  async delete(id: string) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)
    
    if (error) {
      if (error.message.includes('relation "blog_posts" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
  },

  async incrementViews(id: string) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { error } = await supabase.rpc('increment_blog_views', { blog_id: id })
    if (error) {
      if (error.message.includes('relation "blog_posts" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
  }
}

export const categoryService = {
  async getAll() {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name')
    
    if (error) {
      if (error.message.includes('relation "blog_categories" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as BlogCategory[]
  },

  async create(category: Omit<BlogCategory, 'id'>) {
    if (!supabase) {
      throw new Error('Supabase not configured. Please update your environment variables with real Supabase credentials.')
    }
    
    const { data, error } = await supabase
      .from('blog_categories')
      .insert([category])
      .select()
      .single()
    
    if (error) {
      if (error.message.includes('relation "blog_categories" does not exist')) {
        throw new Error('Database tables not found. Please run the setup script in your Supabase SQL Editor.')
      }
      throw new Error(`Database error: ${error.message}`)
    }
    return data as BlogCategory
  }
}