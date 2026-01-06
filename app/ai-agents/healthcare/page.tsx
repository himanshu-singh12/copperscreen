import { Metadata } from 'next'
import { Heart, Bot, Calendar, FileText, CheckCircle, Shield } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Healthcare | Copper Screen',
  description: 'Healthcare AI agents for patient scheduling, diagnosis support, and records management. HIPAA-compliant and secure.',
  keywords: ['healthcare AI', 'patient scheduling', 'diagnosis support', 'medical records', 'HIPAA compliant']
}

export default function HealthcareAIPage() {
  const agents = [
    {
      icon: Calendar,
      title: 'Patient Scheduling AI',
      description: 'Intelligent appointment scheduling that optimizes provider calendars, reduces no-shows, and improves patient satisfaction.',
      features: ['Smart scheduling optimization', 'Automated reminders', 'No-show prediction', 'Multi-provider coordination']
    },
    {
      icon: FileText,
      title: 'Diagnosis Support AI',
      description: 'AI-powered diagnostic assistance that analyzes symptoms, medical history, and test results to support clinical decision-making.',
      features: ['Symptom analysis', 'Risk assessment', 'Treatment recommendations', 'Drug interaction checks']
    },
    {
      icon: Shield,
      title: 'Records Management AI',
      description: 'Automated medical record processing, data extraction, and compliance monitoring with full HIPAA compliance.',
      features: ['Automated data entry', 'Document classification', 'Compliance monitoring', 'Audit trail management']
    }
  ]

  const benefits = [
    'Reduce administrative workload by 60%',
    'Improve patient satisfaction scores',
    'Decrease appointment no-show rates by 40%',
    'Enhance diagnostic accuracy and speed',
    'Ensure HIPAA compliance and data security',
    'Streamline clinical workflows'
  ]

  const compliance = [
    { standard: 'HIPAA', description: 'Full compliance with healthcare privacy regulations' },
    { standard: 'SOC 2', description: 'Security and availability controls certification' },
    { standard: 'HL7 FHIR', description: 'Healthcare data interoperability standards' },
    { standard: 'FDA Guidelines', description: 'Adherence to medical device software guidelines' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-gradient rounded-2xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Healthcare</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Enhance patient care and streamline operations with HIPAA-compliant AI agents 
              for scheduling, diagnosis support, and records management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-blue-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Schedule Demo
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Compliance Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <Shield className="w-8 h-8" />
            <span className="text-lg font-semibold">HIPAA Compliant</span>
            <span className="text-blue-200">•</span>
            <span className="text-lg font-semibold">SOC 2 Certified</span>
            <span className="text-blue-200">•</span>
            <span className="text-lg font-semibold">FDA Guidelines</span>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Healthcare AI Agents
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Specialized AI solutions designed for healthcare providers and medical practices
            </p>
          </div>

          <div className="space-y-12">
            {agents.map((agent, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <agent.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">{agent.title}</h3>
                  </div>
                  <p className="text-lg text-slate mb-6">{agent.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {agent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-slate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <agent.icon className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">HIPAA</div>
                        <div className="text-sm text-slate">Compliant</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">99.9%</div>
                        <div className="text-sm text-slate">Uptime SLA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Improve Patient Care & Operations
              </h2>
              <p className="text-xl text-slate mb-8">
                Our healthcare AI agents are designed to enhance patient outcomes while 
                reducing administrative burden and ensuring full regulatory compliance.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Impact Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                  <div className="text-slate">Reduction in Admin Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-slate">Fewer No-Shows</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-slate">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Built with healthcare security and compliance requirements at the core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.standard}</h3>
                <p className="text-slate text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Healthcare Operations?"
        description="Implement AI agents for patient scheduling, diagnosis support, and records management."
        primaryCTA="Schedule Demo"
        secondaryCTA="View Case Studies"
      />
    </div>
  )
}