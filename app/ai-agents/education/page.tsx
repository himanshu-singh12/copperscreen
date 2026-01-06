import { Metadata } from 'next'
import { GraduationCap, Bot, BookOpen, Users, CheckCircle, Zap } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Education | Copper Screen',
  description: 'Educational AI agents for personalized learning, administrative automation, and student assessment.',
  keywords: ['education AI', 'personalized learning', 'administrative automation', 'student assessment', 'educational technology']
}

export default function EducationAIPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-gradient rounded-2xl">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Education</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Transform education with AI agents for personalized learning, 
              administrative automation, and intelligent assessment.
            </p>
            <button className="magnetic-button bg-blue-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>
      <CTASection 
        title="Ready to Revolutionize Education?"
        description="Transform learning with AI agents for personalized education and administrative automation."
        primaryCTA="Get Started"
        secondaryCTA="View Demo"
      />
    </div>
  )
}