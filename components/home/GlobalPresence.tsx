'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Users, Building, Globe } from 'lucide-react'

interface Region {
  name: string
  cities: Array<{
    name: string
    x: number
    y: number
    clients: number
    description: string
  }>
  stats: {
    clients: number
    projects: number
    industries: number
  }
}

export function GlobalPresence() {
  const mapRef = useRef<HTMLDivElement>(null)

  const regions: Region[] = [
    {
      name: 'North America',
      cities: [
        { name: 'San Francisco', x: 15, y: 35, clients: 45, description: 'Tech hub with SaaS and fintech clients' },
        { name: 'New York', x: 25, y: 32, clients: 38, description: 'Financial services and enterprise' },
        { name: 'Toronto', x: 23, y: 28, clients: 22, description: 'Healthcare and education sectors' }
      ],
      stats: { clients: 105, projects: 180, industries: 8 }
    },
    {
      name: 'Europe',
      cities: [
        { name: 'London', x: 50, y: 28, clients: 52, description: 'Fintech and legal tech innovation' },
        { name: 'Berlin', x: 53, y: 30, clients: 31, description: 'Manufacturing and automotive' },
        { name: 'Amsterdam', x: 52, y: 29, clients: 28, description: 'eCommerce and logistics' }
      ],
      stats: { clients: 111, projects: 195, industries: 9 }
    },
    {
      name: 'APAC',
      cities: [
        { name: 'Singapore', x: 75, y: 55, clients: 41, description: 'Regional fintech and trade hub' },
        { name: 'Tokyo', x: 82, y: 42, clients: 35, description: 'Technology and manufacturing' },
        { name: 'Hong Kong', x: 78, y: 48, clients: 29, description: 'Financial services center' }
      ],
      stats: { clients: 105, projects: 175, industries: 7 }
    },
    {
      name: 'Australia',
      cities: [
        { name: 'Sydney', x: 85, y: 75, clients: 48, description: 'Financial and professional services' },
        { name: 'Melbourne', x: 83, y: 78, clients: 33, description: 'Healthcare and education' }
      ],
      stats: { clients: 81, projects: 140, industries: 6 }
    }
  ]

  const totalStats = regions.reduce(
    (acc, region) => ({
      clients: acc.clients + region.stats.clients,
      projects: acc.projects + region.stats.projects,
      industries: Math.max(acc.industries, region.stats.industries)
    }),
    { clients: 0, projects: 0, industries: 0 }
  )

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate to-charcoal opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(184, 115, 51, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Global</span> Presence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving enterprise clients across four continents with localized expertise 
            and global best practices.
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div 
            ref={mapRef}
            className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          >
            {/* City Markers */}
            {regions.map((region) =>
              region.cities.map((city, cityIndex) => (
                <motion.div
                  key={`${region.name}-${city.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: cityIndex * 0.1 + regions.indexOf(region) * 0.2 
                  }}
                  viewport={{ once: true }}
                  className="absolute group cursor-pointer"
                  style={{ 
                    left: `${city.x}%`, 
                    top: `${city.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Pulsing Dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-copper-gradient rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-copper-gradient rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-charcoal p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    <div className="font-semibold">{city.name}</div>
                    <div className="text-sm text-slate">{city.clients} clients</div>
                    <div className="text-xs text-slate mt-1">{city.description}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </motion.div>
              ))
            )}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {regions.map((region, regionIndex) =>
                region.cities.map((city, cityIndex) => {
                  if (cityIndex === 0) return null
                  const prevCity = region.cities[cityIndex - 1]
                  return (
                    <motion.line
                      key={`line-${region.name}-${cityIndex}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1, delay: regionIndex * 0.5 + cityIndex * 0.2 }}
                      viewport={{ once: true }}
                      x1={`${prevCity.x}%`}
                      y1={`${prevCity.y}%`}
                      x2={`${city.x}%`}
                      y2={`${city.y}%`}
                      stroke="rgba(184, 115, 51, 0.5)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  )
                })
              )}
            </svg>
          </div>
        </motion.div>

        {/* Regional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{region.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Clients</span>
                  <span className="text-copper-400 font-semibold">{region.stats.clients}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Projects</span>
                  <span className="text-copper-400 font-semibold">{region.stats.projects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Industries</span>
                  <span className="text-copper-400 font-semibold">{region.stats.industries}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-copper-900/30 to-copper-800/30 rounded-2xl p-8 border border-copper-600/30">
            <h3 className="text-2xl font-bold text-white mb-8">
              Trusted Worldwide
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-copper-400 mb-2">
                  {totalStats.clients}+
                </div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-copper-400 mb-2">
                  {totalStats.projects}+
                </div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-copper-400 mb-2">
                  4
                </div>
                <div className="text-gray-300">Continents</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}