import { Metadata } from 'next'
import { CaseStudiesHero } from '@/components/case-studies/CaseStudiesHero'
import { CaseStudiesGrid } from '@/components/case-studies/CaseStudiesGrid'
import { CaseStudiesFilter } from '@/components/case-studies/CaseStudiesFilter'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'Case Studies - Proven Results & Client Success Stories',
  description: 'Real transformations, measurable outcomes. See how we\'ve helped businesses achieve extraordinary growth with our digital solutions.',
  keywords: [
    'case studies',
    'client success',
    'digital transformation',
    'results',
    'testimonials',
    'portfolio'
  ],
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudiesGrid />
      <CTASection 
        title="Ready to Write Your Success Story?"
        description="Join the companies that have transformed their business with our proven digital solutions."
        primaryCTA="Start Your Project"
        secondaryCTA="Book Consultation"
        variant="gradient"
      />
    </>
  )
}