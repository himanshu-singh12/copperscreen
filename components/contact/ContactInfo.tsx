'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Globe,
  Award
} from 'lucide-react'

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@copperscreen.com',
      secondary: 'Response within 2 hours',
      action: 'mailto:hello@copperscreen.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri, 9AM-6PM EST',
      action: 'tel:+15551234567',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      primary: 'Chat with our team',
      secondary: 'Available 24/7',
      action: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Book a Call',
      primary: 'Schedule consultation',
      secondary: '30-minute strategy session',
      action: '#',
      color: 'from-copper-500 to-copper-600'
    }
  ]

  const officeInfo = [
    {
      city: 'New York',
      address: '123 Broadway, Suite 456',
      timezone: 'EST',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'London',
      address: '456 Oxford Street, Floor 12',
      timezone: 'GMT',
      phone: '+44 20 1234 5678'
    },
    {
      city: 'Singapore',
      address: '789 Marina Bay, Tower 3',
      timezone: 'SGT',
      phone: '+65 1234 5678'
    },
    {
      city: 'Sydney',
      address: '321 George Street, Level 15',
      timezone: 'AEST',
      phone: '+61 2 1234 5678'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-charcoal mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-slate leading-relaxed">
          Choose the best way to reach us. Our team is ready to help you transform 
          your digital presence and achieve your business goals.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon
          
          return (
            <motion.a
              key={method.title}
              href={method.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block group"
            >
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-copper-200">
                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal group-hover:text-copper-700 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-charcoal font-medium">{method.primary}</p>
                  <p className="text-slate text-sm">{method.secondary}</p>
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-copper-50 to-copper-100 rounded-2xl p-6">
        <h3 className="font-bold text-charcoal mb-4 flex items-center">
          <Award className="w-5 h-5 text-copper-600 mr-2" />
          Why Choose Copper Screen
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-copper-700 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-copper-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="font-bold text-charcoal mb-4 flex items-center">
          <Clock className="w-5 h-5 text-copper-600 mr-2" />
          Office Hours
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate">Monday - Friday</span>
            <span className="text-charcoal font-medium">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate">Saturday</span>
            <span className="text-charcoal font-medium">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate">Sunday</span>
            <span className="text-charcoal font-medium">Closed</span>
          </div>
          <div className="pt-2 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-slate">Emergency Support</span>
              <span className="text-emerald-600 font-medium">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Offices */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="font-bold text-charcoal mb-4 flex items-center">
          <Globe className="w-5 h-5 text-copper-600 mr-2" />
          Global Presence
        </h3>
        <div className="space-y-3">
          {officeInfo.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3"
            >
              <MapPin className="w-4 h-4 text-copper-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-charcoal">{office.city}</div>
                <div className="text-sm text-slate">{office.address}</div>
                <div className="text-xs text-slate mt-1">
                  {office.timezone} • {office.phone}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Response Time Guarantee */}
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-emerald-800">Response Time Guarantee</h3>
        </div>
        <p className="text-emerald-700 text-sm leading-relaxed">
          We guarantee a response to all inquiries within 2 hours during business hours, 
          and within 24 hours on weekends. For urgent matters, call our emergency line.
        </p>
      </div>
    </motion.div>
  )
}