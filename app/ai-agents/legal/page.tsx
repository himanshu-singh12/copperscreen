import { Metadata } from 'next'
import { Scale, Bot, FileText, Search, CheckCircle, Shield } from 'lucide-react'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'AI Agents for Legal Services | Copper Screen',
  description: 'Legal AI agents for document analysis, contract review, and compliance monitoring. Secure and confidential.',
  keywords: ['legal AI', 'document analysis', 'contract review', 'compliance monitoring', 'legal automation']
}

export default function LegalAIPage() {
  const agents = [
    {
      icon: FileText,
      title: 'Document Analysis AI',
      description: 'Intelligent document processing and analysis for legal research, case preparation, and evidence review with high accuracy.',
      features: ['Document classification', 'Key information extraction', 'Legal precedent search', 'Evidence organization']
    },
    {
      icon: Search,
      title: 'Contract Review AI',
      description: 'Automated contract analysis, risk identification, and clause comparison to streamline legal review processes.',
      features: ['Risk assessment', 'Clause analysis', 'Compliance checking', 'Version comparison']
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring AI',
      description: 'Continuous monitoring of regulatory changes and compliance requirements across multiple jurisdictions.',
      features: ['Regulatory tracking', 'Compliance alerts', 'Policy updates', 'Risk reporting']
    }
  ]

  const benefits = [
    'Reduce document review time by 70%',
    'Improve contract analysis accuracy',
    'Ensure regulatory compliance',
    'Accelerate legal research processes',
    'Maintain client confidentiality',
    'Scale legal operations efficiently'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-gradient rounded-2xl">
                <Scale className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              AI Agents for <span className="text-gradient">Legal Services</span>
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-8">
              Confidential and secure AI agents for document analysis, contract review, 
              and compliance monitoring in legal practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-indigo-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                Schedule Consultation
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all">
                Privacy & Security
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Legal AI Agents
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Specialized AI solutions designed for legal professionals and law firms
            </p>
          </div>

          <div className="space-y-12">
            {agents.map((agent, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-indigo-100 rounded-xl mr-4">
                      <agent.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">{agent.title}</h3>
                  </div>
                  <p className="text-lg text-slate mb-6">{agent.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {agent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                        <span className="text-slate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <agent.icon className="w-24 h-24 text-indigo-600 mx-auto mb-6" />
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600">95%</div>
                        <div className="text-sm text-slate">Accuracy Rate</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600">70%</div>
                        <div className="text-sm text-slate">Time Savings</div>
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
                Enhance Legal Practice Efficiency
              </h2>
              <p className="text-xl text-slate mb-8">
                Our AI agents maintain the highest standards of confidentiality and security 
                while dramatically improving legal workflow efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="text-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Practice Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">70%</div>
                  <div className="text-slate">Faster Document Review</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
                  <div className="text-slate">Analysis Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                  <div className="text-slate">Confidentiality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Modernize Your Legal Practice?"
        description="Implement AI agents for document analysis, contract review, and compliance monitoring."
        primaryCTA="Schedule Consultation"
        secondaryCTA="View Case Studies"
      />
    </div>
  )
}