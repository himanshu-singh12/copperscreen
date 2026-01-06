import { Metadata } from 'next'
import { Building, Bot, Wrench, BarChart3, CheckCircle, Zap } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Manufacturing | Copper Screen',
  description: 'Manufacturing AI agents for predictive maintenance, supply chain optimization, and quality control automation.',
  keywords: ['manufacturing AI', 'predictive maintenance', 'supply chain', 'quality control', 'industrial automation']
}

export default function ManufacturingAIPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-gradient rounded-2xl">
                <Building className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Manufacturing</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Optimize manufacturing operations with AI agents for predictive maintenance, 
              supply chain management, and quality control.
            </p>
            <button className="magnetic-button bg-gray-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <CTASection 
        title="Ready to Optimize Your Manufacturing Operations?"
        description="Implement AI agents for predictive maintenance, supply chain optimization, and quality control."
        primaryCTA="Get Started"
        secondaryCTA="Calculate Savings"
      />
    </div>
  )
}