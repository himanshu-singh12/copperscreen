// OpenRouter AI service for blog generation
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1'

// Check if OpenRouter is properly configured
const isOpenRouterConfigured = OPENROUTER_API_KEY && OPENROUTER_API_KEY.startsWith('sk-or-v1-')

console.log('OpenRouter configuration:', {
  configured: isOpenRouterConfigured,
  hasKey: !!OPENROUTER_API_KEY,
  keyValid: OPENROUTER_API_KEY?.startsWith('sk-or-v1-')
})

export interface BlogGenerationRequest {
  topic: string
  category: string
  targetAudience: string
  tone: 'professional' | 'casual' | 'technical' | 'conversational'
  length: 'short' | 'medium' | 'long'
  includeImages: boolean
}

export interface TrendingTopic {
  topic: string
  category: string
  relevanceScore: number
  searchVolume: string
  difficulty: string
  description: string
}

export class OpenRouterService {
  private async makeRequest(endpoint: string, data: any) {
    if (!isOpenRouterConfigured) {
      throw new Error('OpenRouter API key not configured or invalid')
    }

    const response = await fetch(`${OPENROUTER_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Copper Screen Blog Generator'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenRouter API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      })
      throw new Error(`OpenRouter API error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async generateBlogPost(request: BlogGenerationRequest) {
    const wordCount = {
      short: '800-1200',
      medium: '1500-2000', 
      long: '2500-3500'
    }[request.length]

    const prompt = `You are an expert content writer for Copper Screen, a leading digital consultancy specializing in SEO, web development, CRO, and AI agents for enterprise clients.

Write a comprehensive blog post about: "${request.topic}"

Requirements:
- Category: ${request.category}
- Target Audience: ${request.targetAudience}
- Tone: ${request.tone}
- Word Count: ${wordCount} words
- Include actionable insights and practical tips
- Reference current industry trends and data
- Maintain Copper Screen's expertise in digital transformation
- Include relevant examples and case studies where appropriate

Structure the response as JSON with the following format:
{
  "title": "Compelling blog post title (60-70 characters)",
  "slug": "url-friendly-slug",
  "excerpt": "Engaging 150-160 character summary",
  "content": "Full blog post content in markdown format",
  "seo_title": "SEO optimized title (50-60 characters)",
  "seo_description": "Meta description (150-160 characters)",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "reading_time": estimated_reading_time_in_minutes,
  "featured_image_prompt": "Detailed prompt for AI image generation"
}

Focus on providing value to enterprise clients looking for digital transformation solutions.`

    const response = await this.makeRequest('/chat/completions', {
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 4000
    })

    const content = response.choices[0].message.content
    
    try {
      return JSON.parse(content)
    } catch (error) {
      // If JSON parsing fails, extract content manually
      return {
        title: request.topic,
        slug: request.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        excerpt: `Comprehensive guide to ${request.topic} for enterprise clients.`,
        content: content,
        seo_title: request.topic,
        seo_description: `Learn about ${request.topic} with expert insights from Copper Screen.`,
        tags: [request.category.toLowerCase(), 'digital-transformation', 'enterprise'],
        reading_time: 8,
        featured_image_prompt: `Professional illustration of ${request.topic} in a modern digital consultancy context`
      }
    }
  }

  async getTrendingTopics(): Promise<TrendingTopic[]> {
    const prompt = `As a digital marketing expert, identify 10 trending topics for a digital consultancy blog in 2026. Focus on topics relevant to:

- SEO and organic growth
- AI agents and automation
- Web development and CRO
- Digital transformation
- Enterprise solutions

For each topic, provide:
- Topic name
- Category (SEO & Digital Marketing, AI & Technology, Web Development, Business Strategy, Industry Trends)
- Relevance score (1-100)
- Estimated search volume (High/Medium/Low)
- Content difficulty (Easy/Medium/Hard)
- Brief description

Return as JSON array with this structure:
[
  {
    "topic": "Topic name",
    "category": "Category name",
    "relevanceScore": 85,
    "searchVolume": "High",
    "difficulty": "Medium",
    "description": "Brief description of why this topic is trending"
  }
]

Focus on topics that would interest enterprise clients looking for digital transformation solutions.`

    const response = await this.makeRequest('/chat/completions', {
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 2000
    })

    const content = response.choices[0].message.content
    
    try {
      return JSON.parse(content)
    } catch (error) {
      // Return fallback trending topics
      return [
        {
          topic: "AI-Powered SEO Strategies for 2026",
          category: "SEO & Digital Marketing",
          relevanceScore: 95,
          searchVolume: "High",
          difficulty: "Medium",
          description: "How artificial intelligence is revolutionizing search engine optimization"
        },
        {
          topic: "Enterprise AI Agents: ROI and Implementation",
          category: "AI & Technology", 
          relevanceScore: 90,
          searchVolume: "High",
          difficulty: "Hard",
          description: "Practical guide to implementing AI agents in enterprise environments"
        },
        {
          topic: "Conversion Rate Optimization with Machine Learning",
          category: "Web Development",
          relevanceScore: 85,
          searchVolume: "Medium",
          difficulty: "Medium",
          description: "Using ML algorithms to improve website conversion rates"
        }
      ]
    }
  }

  async generateImagePrompt(topic: string, style: string = 'professional'): Promise<string> {
    const prompt = `Create a detailed prompt for AI image generation for a blog post about "${topic}".

Style: ${style}
Context: Digital consultancy blog post
Brand: Copper Screen (colors: copper #B87333, charcoal #2C2C2C, electric blue #3B82F6)

Generate a prompt that would create a professional, modern image suitable for a blog header. Include:
- Visual elements related to the topic
- Professional business context
- Modern design aesthetic
- Appropriate color scheme

Return only the image generation prompt, no additional text.`

    const response = await this.makeRequest('/chat/completions', {
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 200
    })

    return response.choices[0].message.content.trim()
  }
}

export const openRouterService = new OpenRouterService()