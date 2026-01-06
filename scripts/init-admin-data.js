// Script to initialize admin data in Supabase
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function initializeAdminData() {
  console.log('🚀 Initializing admin data...')

  try {
    // Create admin users table if it doesn't exist
    console.log('📝 Creating admin_users table...')
    
    // Insert default admin users
    const { data: adminUsers, error: adminError } = await supabase
      .from('admin_users')
      .upsert([
        {
          username: 'admin',
          email: 'admin@copperscreen.com',
          password_hash: 'copper2024', // In production, this should be properly hashed
          role: 'admin',
          is_active: true
        },
        {
          username: 'superadmin',
          email: 'superadmin@copperscreen.com',
          password_hash: 'copper2024super', // In production, this should be properly hashed
          role: 'super_admin',
          is_active: true
        }
      ], {
        onConflict: 'username'
      })

    if (adminError) {
      console.log('⚠️ Admin users table might not exist yet, that\'s okay for demo mode')
    } else {
      console.log('✅ Admin users created successfully')
    }

    // Insert sample leads
    console.log('📝 Creating sample leads...')
    const { data: leads, error: leadsError } = await supabase
      .from('leads')
      .upsert([
        {
          name: 'John Smith',
          email: 'john.smith@techcorp.com',
          company: 'TechCorp Inc.',
          phone: '+1 (555) 123-4567',
          service: 'SEO & Organic Growth',
          budget: '$10,000 - $25,000',
          message: 'We need help improving our organic search rankings and overall SEO strategy.',
          source: 'website',
          status: 'new'
        },
        {
          name: 'Sarah Johnson',
          email: 'sarah.j@retailplus.com',
          company: 'RetailPlus',
          phone: '+1 (555) 987-6543',
          service: 'AI Agents for Enterprise',
          budget: '$25,000 - $50,000',
          message: 'Interested in implementing AI agents for customer service automation.',
          source: 'website',
          status: 'contacted'
        },
        {
          name: 'Michael Chen',
          email: 'mchen@innovatetech.com',
          company: 'InnovateTech',
          phone: '+1 (555) 456-7890',
          service: 'Full-Stack Web Development',
          budget: '$50,000+',
          message: 'Looking for a complete website redesign and development for our SaaS platform.',
          source: 'website',
          status: 'qualified'
        }
      ], {
        onConflict: 'email'
      })

    if (leadsError) {
      console.log('⚠️ Leads table might not exist yet:', leadsError.message)
    } else {
      console.log('✅ Sample leads created successfully')
    }

    // Insert sample blog posts
    console.log('📝 Creating sample blog posts...')
    const { data: blogs, error: blogsError } = await supabase
      .from('blog_posts')
      .upsert([
        {
          title: 'AI-Powered SEO: The Future of Search Optimization in 2026',
          slug: 'ai-powered-seo-future-search-optimization-2026',
          excerpt: 'Discover how artificial intelligence is revolutionizing SEO strategies and what enterprise teams need to know to stay competitive.',
          content: '# AI-Powered SEO: The Future of Search Optimization in 2026\n\nThe landscape of search engine optimization is undergoing a dramatic transformation...',
          author: 'Copper Screen Team',
          category: 'SEO & Digital Marketing',
          tags: ['AI', 'SEO', 'Digital Marketing', 'Enterprise'],
          published: true,
          reading_time: 12,
          views: 1247,
          seo_title: 'AI-Powered SEO: Future of Search Optimization 2026',
          seo_description: 'Learn how AI is transforming SEO strategies for enterprise teams.',
          ai_generated: true,
          trending_score: 95
        },
        {
          title: 'Enterprise AI Agents: Complete ROI Guide',
          slug: 'enterprise-ai-agents-roi-guide',
          excerpt: 'A comprehensive guide to implementing AI agents in enterprise environments with ROI calculations.',
          content: '# Enterprise AI Agents: Complete ROI Guide\n\nArtificial Intelligence agents are transforming how enterprises operate...',
          author: 'Copper Screen Team',
          category: 'AI & Technology',
          tags: ['AI Agents', 'Enterprise', 'ROI', 'Implementation'],
          published: true,
          reading_time: 15,
          views: 892,
          seo_title: 'Enterprise AI Agents ROI Guide',
          seo_description: 'Complete guide to AI agent implementation and ROI measurement.',
          ai_generated: false,
          trending_score: 88
        }
      ], {
        onConflict: 'slug'
      })

    if (blogsError) {
      console.log('⚠️ Blog posts table might not exist yet:', blogsError.message)
    } else {
      console.log('✅ Sample blog posts created successfully')
    }

    console.log('🎉 Admin data initialization complete!')
    console.log('\n📋 Admin Credentials:')
    console.log('Username: admin | Password: copper2024')
    console.log('Username: superadmin | Password: copper2024super')

  } catch (error) {
    console.error('❌ Error initializing admin data:', error)
  }
}

// Run the initialization
initializeAdminData()