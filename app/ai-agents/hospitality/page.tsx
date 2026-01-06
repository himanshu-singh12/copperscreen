import { Metadata } from 'next'
import { Coffee, Bot, Calendar, TrendingUp, CheckCircle, Users } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Hospitality | Copper Screen',
  description: 'Hospitality AI agents for booking optimization, customer service, and revenue management.',
  keywords: ['hospitality AI', 'booking optimization', 'customer service', 'revenue management', 'hotel automation']
}

export default function HospitalityAIPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-gradient rounded-2xl">
                <Coffee className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Hospitality</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Enhance guest experiences with AI agents for booking optimization, 
              customer service, and revenue management.
            </p>
            <button className="magnetic-button bg-amber-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
              Discover More
            </button>
          </div>
        </div>
      </section>
      <CTASection 
        title="Ready to Enhance Your Guest Experience?"
        description="Transform your hospitality business with AI agents for booking optimization and customer service."
        primaryCTA="Get Started"
        secondaryCTA="View Demo"
      />
    </div>
  )
}