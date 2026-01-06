import { AIAgentsHero } from '@/components/ai-agents/AIAgentsHero'
import { IndustryGrid } from '@/components/ai-agents/IndustryGrid'
import { AICapabilities } from '@/components/ai-agents/AICapabilities'
import { ROICalculator } from '@/components/ai-agents/ROICalculator'
import { CTASection } from '@/components/common/CTASection'

export const metadata = {
  title: 'AI Agents for Enterprise - Automation & Intelligence | Copper Screen',
  description: 'Transform your business with custom AI agents. Automate workflows, enhance customer service, and drive efficiency across industries.',
}

export default function AIAgentsPage() {
  return (
    <>
      <AIAgentsHero />
      <IndustryGrid />
      <AICapabilities />
      <ROICalculator />
      <CTASection 
        title="Ready to Deploy AI Agents?"
        description="Discover how AI agents can transform your business operations and drive measurable ROI."
        primaryCTA="Book AI Consultation"
        secondaryCTA="Calculate ROI"
      />
    </>
  )
}