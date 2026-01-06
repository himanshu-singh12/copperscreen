'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former McKinsey consultant with 15+ years in digital transformation. Led growth initiatives for Fortune 500 companies.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@copperscreen.com'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'Full-stack architect and AI specialist. Previously led engineering teams at Google and Stripe.',
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      email: 'marcus@copperscreen.com'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Strategy',
      bio: 'Growth strategist with expertise in SEO and conversion optimization. 10+ years driving measurable results.',
      image: '/images/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@copperscreen.com'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Senior full-stack developer specializing in scalable web applications and eCommerce platforms.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david@copperscreen.com'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Industry experts passionate about driving digital growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-copper-100 to-copper-200 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-24 h-24 bg-gradient-to-br from-copper-500 to-copper-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-charcoal mb-1">{member.name}</h3>
                  <p className="text-copper-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-copper-100 hover:text-copper-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-copper-100 hover:text-copper-600 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-copper-100 hover:text-copper-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}