import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { OfficeLocations } from '@/components/contact/OfficeLocations'

export const metadata = {
  title: 'Contact Copper Screen - Get Your Free Consultation',
  description: 'Ready to transform your digital presence? Contact our experts for a free consultation. Global presence with local expertise.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <OfficeLocations />
    </>
  )
}