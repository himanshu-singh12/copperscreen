'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Logger } from '@/lib/logger'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const services = [
    'SEO & Organic Growth',
    'AI Agents for Enterprise',
    'Web CRO & Conversion Optimization',
    'Full-Stack Web Development',
    'eCommerce & SaaS Solutions',
    'Digital Strategy & Consultancy',
    'Custom Solution'
  ]

  const budgetRanges = [
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+',
    'Let\'s discuss'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending your message...' })

    // Validate form data
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Service, and Project Details).'
      })
      return
    }

    Logger.info('Form submission started', { 
      email: formData.email, 
      service: formData.service 
    })

    try {
      // Submit directly to Google Apps Script (static export compatible)
      const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      
      if (!googleScriptUrl) {
        throw new Error('Google Script URL not configured')
      }

      const formDataToSubmit = new FormData()
      formDataToSubmit.append('name', formData.name)
      formDataToSubmit.append('email', formData.email)
      formDataToSubmit.append('company', formData.company || '')
      formDataToSubmit.append('phone', formData.phone || '')
      formDataToSubmit.append('service', formData.service)
      formDataToSubmit.append('budget', formData.budget || '')
      formDataToSubmit.append('message', formData.message)
      formDataToSubmit.append('timestamp', new Date().toISOString())
      formDataToSubmit.append('source', 'Website Contact Form')

      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors' // Required for Google Apps Script
      })

      // Since we're using no-cors, we can't read the response
      // Assume success if no error is thrown
      setStatus({
        type: 'success',
        message: 'Thank you! We\'ve received your message and will get back to you within 24 hours.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      })

      Logger.success('Form submitted successfully to Google Apps Script')
    } catch (error) {
      Logger.error('Form submission failed', error)
      setStatus({
        type: 'error',
        message: 'Unable to submit form. Please email us directly at hello@copperscreen.com or call +1 (555) 123-4567.'
      })
    }
  }

  return (
    <div className="bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-charcoal mb-4">
          Start Your <span className="text-gradient">Digital Journey</span>
        </h2>
        <p className="text-slate leading-relaxed">
          Ready to transform your business? Fill out the form below and we'll get back to you 
          within 24 hours with a customized strategy for your needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Company and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Service and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">
              Service Interested In *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-charcoal mb-2">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300 resize-vertical"
            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
          />
        </div>

        {/* Status Message */}
        {status.type !== 'idle' && (
          <div
            className={`
              flex items-start space-x-3 p-4 rounded-xl
              ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : ''}
              ${status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : ''}
              ${status.type === 'loading' ? 'bg-blue-50 text-blue-700 border border-blue-200' : ''}
            `}
          >
            {status.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
            {status.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
            {status.type === 'loading' && (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-medium">{status.message}</p>
              {status.type === 'error' && (
                <div className="mt-2 text-sm">
                  <p className="mb-2">Alternative contact methods:</p>
                  <div className="space-y-1">
                    <p>📧 Email: <a href="mailto:hello@copperscreen.com" className="underline hover:text-red-800">hello@copperscreen.com</a></p>
                    <p>📞 Phone: <a href="tel:+15551234567" className="underline hover:text-red-800">+1 (555) 123-4567</a></p>
                    <p>💬 Live Chat: Available 24/7 on this website</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className={`
            w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300
            ${status.type === 'loading'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-copper-gradient hover:shadow-xl magnetic-button'
            }
            text-white
          `}
        >
          {status.type === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-xs text-slate text-center">
          By submitting this form, you agree to our privacy policy. We'll never share your information 
          and will only use it to contact you about your project inquiry.
        </p>
      </form>
    </div>
  )
}