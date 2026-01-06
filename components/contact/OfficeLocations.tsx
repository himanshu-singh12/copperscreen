'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react'

interface Office {
  id: string
  city: string
  country: string
  address: string
  phone: string
  email: string
  timezone: string
  hours: string
  team: number
  image: string
  coordinates: {
    lat: number
    lng: number
  }
}

export function OfficeLocations() {
  const offices: Office[] = [
    {
      id: 'new-york',
      city: 'New York',
      country: 'United States',
      address: '123 Broadway, Suite 456\nNew York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@copperscreen.com',
      timezone: 'EST (UTC-5)',
      hours: 'Mon-Fri: 9AM-6PM',
      team: 25,
      image: '/images/office-ny.jpg',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 'london',
      city: 'London',
      country: 'United Kingdom',
      address: '456 Oxford Street, Floor 12\nLondon W1C 1AP',
      phone: '+44 20 1234 5678',
      email: 'london@copperscreen.com',
      timezone: 'GMT (UTC+0)',
      hours: 'Mon-Fri: 9AM-5PM',
      team: 18,
      image: '/images/office-london.jpg',
      coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Marina Bay, Tower 3\nSingapore 018956',
      phone: '+65 1234 5678',
      email: 'sg@copperscreen.com',
      timezone: 'SGT (UTC+8)',
      hours: 'Mon-Fri: 9AM-6PM',
      team: 15,
      image: '/images/office-singapore.jpg',
      coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    {
      id: 'sydney',
      city: 'Sydney',
      country: 'Australia',
      address: '321 George Street, Level 15\nSydney NSW 2000',
      phone: '+61 2 1234 5678',
      email: 'sydney@copperscreen.com',
      timezone: 'AEST (UTC+10)',
      hours: 'Mon-Fri: 9AM-5PM',
      team: 12,
      image: '/images/office-sydney.jpg',
      coordinates: { lat: -33.8688, lng: 151.2093 }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Global <span className="text-gradient">Presence</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            With offices across four continents, we provide local expertise with global reach. 
            Find the office nearest to you or connect with our distributed team.
          </p>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Office Image */}
              <div className="h-48 bg-gradient-to-br from-copper-100 to-copper-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-copper-500/20 to-copper-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-copper-700">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{office.city}</div>
                    <div className="text-copper-600">{office.country}</div>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-charcoal">
                    {office.city}
                  </h3>
                  <div className="flex items-center space-x-2 text-copper-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{office.team} team members</span>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-copper-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-charcoal">Address</div>
                      <div className="text-slate text-sm whitespace-pre-line">
                        {office.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-copper-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-charcoal">Phone</div>
                      <a 
                        href={`tel:${office.phone}`}
                        className="text-copper-600 hover:text-copper-700 text-sm transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-copper-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-charcoal">Email</div>
                      <a 
                        href={`mailto:${office.email}`}
                        className="text-copper-600 hover:text-copper-700 text-sm transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-copper-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-charcoal">Hours</div>
                      <div className="text-slate text-sm">{office.hours}</div>
                      <div className="text-slate text-xs">{office.timezone}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-copper-gradient text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 magnetic-button">
                    Contact {office.city} Office
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Our Global Impact
            </h3>
            <p className="text-slate">
              Serving clients across the world with local expertise and global standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-copper-700 mb-2">4</div>
              <div className="text-slate text-sm">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-copper-700 mb-2">70+</div>
              <div className="text-slate text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-copper-700 mb-2">24/7</div>
              <div className="text-slate text-sm">Support Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-copper-700 mb-2">50+</div>
              <div className="text-slate text-sm">Countries Served</div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-copper-50 to-copper-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Can't find an office near you?
            </h3>
            <p className="text-slate mb-6 max-w-2xl mx-auto">
              No problem! We work with clients globally through our remote collaboration tools. 
              Get the same high-quality service regardless of your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                Schedule Virtual Meeting
              </button>
              <button className="border-2 border-copper-300 text-copper-700 px-8 py-4 rounded-xl font-semibold hover:bg-copper-50 transition-all duration-300">
                View Remote Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}