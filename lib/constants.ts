export const SITE_CONFIG = {
  name: 'Copper Screen',
  description: 'Data-backed growth. Empathy-led strategy. 15+ years of expertise in SEO, web CRO, full-scale development, and AI agents for enterprise clients.',
  url: 'https://copperscreen.com',
  ogImage: '/og-image.jpg',
  links: {
    linkedin: 'https://linkedin.com/company/copperscreen',
    twitter: 'https://twitter.com/copperscreen',
    email: 'hello@copperscreen.com',
    phone: '+1 (555) 123-4567'
  }
}

export const NAVIGATION_ITEMS = [
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    items: [
      { name: 'SEO & Organic Growth', href: '/services/seo' },
      { name: 'Web CRO', href: '/services/cro' },
      { name: 'Full-Stack Development', href: '/services/development' },
      { name: 'Digital Strategy', href: '/services/strategy' }
    ]
  },
  {
    name: 'AI Agents',
    href: '/ai-agents',
    hasDropdown: true,
    items: [
      { name: 'Retail & eCommerce', href: '/ai-agents/retail' },
      { name: 'Healthcare', href: '/ai-agents/healthcare' },
      { name: 'Finance', href: '/ai-agents/finance' },
      { name: 'Legal', href: '/ai-agents/legal' },
      { name: 'Real Estate', href: '/ai-agents/real-estate' },
      { name: 'Manufacturing', href: '/ai-agents/manufacturing' },
      { name: 'Education', href: '/ai-agents/education' },
      { name: 'Hospitality', href: '/ai-agents/hospitality' }
    ]
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

export const SERVICES = [
  {
    id: 'seo',
    name: 'SEO & Organic Growth',
    slug: 'seo',
    description: 'Drive sustainable traffic with data-driven SEO strategies',
    features: ['Technical SEO', 'Content Strategy', 'Link Building', 'Local SEO'],
    icon: 'Search'
  },
  {
    id: 'cro',
    name: 'Web CRO',
    slug: 'cro',
    description: 'Transform visitors into customers with scientific optimization',
    features: ['A/B Testing', 'User Research', 'Funnel Analysis', 'UX Optimization'],
    icon: 'TrendingUp'
  },
  {
    id: 'development',
    name: 'Full-Stack Development',
    slug: 'development',
    description: 'Build scalable applications that grow with your business',
    features: ['eCommerce Platforms', 'SaaS Applications', 'Custom Solutions', 'API Integration'],
    icon: 'Code'
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    slug: 'ai-agents',
    description: 'Automate workflows with intelligent AI agents',
    features: ['Process Automation', 'Intelligent Analytics', 'Custom Models', '24/7 Operations'],
    icon: 'Bot'
  },
  {
    id: 'strategy',
    name: 'Digital Strategy',
    slug: 'strategy',
    description: 'Navigate transformation with strategic guidance',
    features: ['Digital Audits', 'Growth Planning', 'Technology Roadmaps', 'Team Training'],
    icon: 'Users'
  }
]

export const INDUSTRIES = [
  {
    id: 'retail',
    name: 'Retail & eCommerce',
    slug: 'retail',
    description: 'Drive online sales with conversion-optimized stores',
    icon: 'ShoppingCart',
    aiAgents: ['Inventory Management', 'Personalization Engine', 'Customer Service']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Transform healthcare delivery with compliant solutions',
    icon: 'Heart',
    aiAgents: ['Patient Scheduling', 'Diagnosis Support', 'Records Management']
  },
  {
    id: 'finance',
    name: 'Finance',
    slug: 'finance',
    description: 'Build secure, scalable financial technology',
    icon: 'DollarSign',
    aiAgents: ['Fraud Detection', 'Portfolio Management', 'Risk Assessment']
  },
  {
    id: 'legal',
    name: 'Legal',
    slug: 'legal',
    description: 'Modernize practices with intelligent processing',
    icon: 'Scale',
    aiAgents: ['Document Analysis', 'Contract Review', 'Compliance Monitoring']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    slug: 'real-estate',
    description: 'Accelerate transactions with smart matching',
    icon: 'Home',
    aiAgents: ['Lead Qualification', 'Property Matching', 'Market Analysis']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    slug: 'manufacturing',
    description: 'Optimize operations with predictive intelligence',
    icon: 'Building',
    aiAgents: ['Predictive Maintenance', 'Supply Chain', 'Quality Control']
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    description: 'Enhance learning with personalized experiences',
    icon: 'GraduationCap',
    aiAgents: ['Personalized Learning', 'Administrative Automation', 'Assessment']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    slug: 'hospitality',
    description: 'Optimize guest experiences and operations',
    icon: 'Coffee',
    aiAgents: ['Booking Optimization', 'Customer Service', 'Revenue Management']
  }
]

export const REGIONS = [
  {
    name: 'North America',
    cities: ['San Francisco', 'New York', 'Toronto'],
    stats: { clients: 105, projects: 180, industries: 8 }
  },
  {
    name: 'Europe',
    cities: ['London', 'Berlin', 'Amsterdam'],
    stats: { clients: 111, projects: 195, industries: 9 }
  },
  {
    name: 'APAC',
    cities: ['Singapore', 'Tokyo', 'Hong Kong'],
    stats: { clients: 105, projects: 175, industries: 7 }
  },
  {
    name: 'Australia',
    cities: ['Sydney', 'Melbourne'],
    stats: { clients: 81, projects: 140, industries: 6 }
  }
]

export const BLOG_CATEGORIES = [
  { name: 'SEO', slug: 'seo' },
  { name: 'Development', slug: 'development' },
  { name: 'AI & Automation', slug: 'ai-automation' },
  { name: 'Strategy', slug: 'strategy' },
  { name: 'Industry News', slug: 'industry-news' },
  { name: 'Case Studies', slug: 'case-studies' }
]

export const FORM_VALIDATION = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    }
  },
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    }
  },
  company: {
    required: 'Company name is required'
  },
  message: {
    required: 'Message is required',
    minLength: {
      value: 10,
      message: 'Message must be at least 10 characters'
    }
  }
}

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}