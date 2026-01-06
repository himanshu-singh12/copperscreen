import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { ProcessSection } from '@/components/services/ProcessSection'
import { CTASection } from '@/components/common/CTASection'

export const metadata = {
  title: 'Digital Services - SEO, Development, AI Agents | Copper Screen',
  description: 'Comprehensive digital services including SEO, web development, AI agents, CRO, and digital strategy. 15+ years of expertise delivering measurable results.',
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceGrid />
      <ProcessSection />
      <CTASection 
        title="Ready to Transform Your Digital Presence?"
        description="Let's discuss how our services can drive measurable growth for your business."
        primaryCTA="Get Started Today"
        secondaryCTA="View Case Studies"
      />
    </>
  )
}