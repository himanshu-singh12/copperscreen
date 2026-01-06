import { HeroSection } from '@/components/home/HeroSection'
import { MetricCounter } from '@/components/home/MetricCounter'
import { ServiceStackingCards } from '@/components/home/ServiceStackingCards'
import { IndustryExpertise } from '@/components/home/IndustryExpertise'
import { AIShowcase } from '@/components/home/AIShowcase'
import { ResultsSlider } from '@/components/home/ResultsSlider'
import { GlobalPresence } from '@/components/home/GlobalPresence'
import { CTASection } from '@/components/common/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricCounter />
      <ServiceStackingCards />
      <IndustryExpertise />
      <AIShowcase />
      <ResultsSlider />
      <GlobalPresence />
      <CTASection 
        title="Ready to Transform Your Digital Presence?"
        description="Join 500+ companies that trust Copper Screen for data-backed growth strategies."
        primaryCTA="Start Your Growth Journey"
        secondaryCTA="Explore AI Agents"
      />
    </>
  )
}