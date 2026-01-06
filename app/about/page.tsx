import { AboutHero } from '@/components/about/AboutHero'
import { Timeline } from '@/components/about/Timeline'
import { Team } from '@/components/about/Team'
import { Methodology } from '@/components/about/Methodology'
import { Certifications } from '@/components/about/Certifications'
import { CTASection } from '@/components/common/CTASection'

export const metadata = {
  title: 'About Copper Screen - 15+ Years of Digital Excellence',
  description: 'Learn about our journey, team, and methodology. 15+ years of delivering data-backed growth and empathy-led strategy for enterprise clients.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Team />
      <Methodology />
      <Certifications />
      <CTASection 
        title="Ready to Work with Industry Experts?"
        description="Join 500+ companies that trust our 15+ years of expertise in digital transformation."
        primaryCTA="Start Your Journey"
        secondaryCTA="Meet Our Team"
      />
    </>
  )
}