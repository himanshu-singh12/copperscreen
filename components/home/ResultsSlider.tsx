'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

interface Result {
  id: string
  client: string
  industry: string
  challenge: string
  solution: string
  metrics: {
    primary: {
      value: string
      label: string
      icon: React.ElementType
    }
    secondary: Array<{
      value: string
      label: string
    }>
  }
  timeline: string
  testimonial: {
    quote: string
    author: string
    position: string
  }
  image: string
}

export function ResultsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const results: Result[] = [
    {
      id: '1',
      client: 'TechCorp Solutions',
      industry: 'SaaS',
      challenge: 'Low conversion rates and poor user engagement',
      solution: 'Complete UX overhaul with AI-powered personalization',
      metrics: {
        primary: {
          value: '340%',
          label: 'increase in conversions',
          icon: TrendingUp
        },
        secondary: [
          { value: '65%', label: 'user engagement boost' },
          { value: '2.3x', label: 'revenue growth' },
          { value: '45%', label: 'churn reduction' }
        ]
      },
      timeline: '6 months',
      testimonial: {
        quote: "Copper Screen transformed our entire digital presence. The results exceeded our wildest expectations.",
        author: 'Sarah Chen',
        position: 'CEO, TechCorp Solutions'
      },
      image: '/images/case-study-1.jpg'
    },
    {
      id: '2',
      client: 'HealthFirst Clinic',
      industry: 'Healthcare',
      challenge: 'Inefficient patient scheduling and communication',
      solution: 'AI-powered patient management system with automated workflows',
      metrics: {
        primary: {
          value: '280%',
          label: 'improvement in patient satisfaction',
          icon: Users
        },
        secondary: [
          { value: '50%', label: 'reduction in wait times' },
          { value: '90%', label: 'automation rate' },
          { value: '35%', label: 'cost savings' }
        ]
      },
      timeline: '4 months',
      testimonial: {
        quote: "The AI agents handle our scheduling seamlessly. Our staff can now focus on patient care instead of admin work.",
        author: 'Dr. Michael Rodriguez',
        position: 'Medical Director, HealthFirst Clinic'
      },
      image: '/images/case-study-2.jpg'
    },
    {
      id: '3',
      client: 'RetailMax',
      industry: 'eCommerce',
      challenge: 'High cart abandonment and inventory management issues',
      solution: 'Smart inventory AI with personalized shopping experience',
      metrics: {
        primary: {
          value: '425%',
          label: 'increase in online revenue',
          icon: DollarSign
        },
        secondary: [
          { value: '60%', label: 'cart abandonment reduction' },
          { value: '85%', label: 'inventory accuracy' },
          { value: '3.2x', label: 'customer lifetime value' }
        ]
      },
      timeline: '8 months',
      testimonial: {
        quote: "Our inventory practically manages itself now. The AI predicts demand better than we ever could manually.",
        author: 'Jennifer Walsh',
        position: 'Operations Director, RetailMax'
      },
      image: '/images/case-study-3.jpg'
    },
    {
      id: '4',
      client: 'LegalPro Associates',
      industry: 'Legal',
      challenge: 'Time-consuming document review and case research',
      solution: 'AI-powered document analysis and legal research automation',
      metrics: {
        primary: {
          value: '75%',
          label: 'reduction in research time',
          icon: Clock
        },
        secondary: [
          { value: '95%', label: 'accuracy improvement' },
          { value: '40%', label: 'cost reduction' },
          { value: '200%', label: 'case throughput increase' }
        ]
      },
      timeline: '5 months',
      testimonial: {
        quote: "The AI handles our document review with incredible accuracy. We can take on more cases and serve clients better.",
        author: 'Robert Kim',
        position: 'Managing Partner, LegalPro Associates'
      },
      image: '/images/case-study-4.jpg'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, results.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentResult = results[currentIndex]
  const PrimaryIcon = currentResult.metrics.primary.icon

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
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
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Real transformations, measurable outcomes. See how we've helped businesses 
            across industries achieve extraordinary growth.
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  {/* Client Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-copper-gradient rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {currentResult.client.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal">
                        {currentResult.client}
                      </h3>
                      <p className="text-copper-700 font-medium">
                        {currentResult.industry}
                      </p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-8">
                    <div className="mb-4">
                      <h4 className="font-semibold text-charcoal mb-2">Challenge</h4>
                      <p className="text-slate">{currentResult.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Solution</h4>
                      <p className="text-slate">{currentResult.solution}</p>
                    </div>
                  </div>

                  {/* Primary Metric */}
                  <div className="bg-gradient-to-r from-copper-50 to-copper-100 rounded-2xl p-6 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-copper-gradient rounded-xl flex items-center justify-center">
                        <PrimaryIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-copper-700">
                          {currentResult.metrics.primary.value}
                        </div>
                        <div className="text-charcoal font-medium">
                          {currentResult.metrics.primary.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {currentResult.metrics.secondary.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-bold text-charcoal mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center space-x-2 mb-8">
                    <Clock className="w-5 h-5 text-copper-700" />
                    <span className="text-slate">
                      Delivered in <strong>{currentResult.timeline}</strong>
                    </span>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-copper-400 pl-6">
                    <p className="text-charcoal italic mb-4">
                      "{currentResult.testimonial.quote}"
                    </p>
                    <footer>
                      <div className="font-semibold text-charcoal">
                        {currentResult.testimonial.author}
                      </div>
                      <div className="text-slate text-sm">
                        {currentResult.testimonial.position}
                      </div>
                    </footer>
                  </blockquote>
                </div>

                {/* Visual Side */}
                <div className="bg-gradient-to-br from-copper-100 to-copper-200 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-copper-gradient rounded-full flex items-center justify-center mb-6 mx-auto">
                      <PrimaryIcon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-copper-700 mb-2">
                      {currentResult.metrics.primary.value}
                    </div>
                    <div className="text-charcoal font-medium">
                      {currentResult.metrics.primary.label}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow z-10"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow z-10"
          >
            <ChevronRight className="w-6 h-6 text-charcoal" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {results.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-copper-gradient w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-slate hover:text-charcoal transition-colors"
          >
            {isAutoPlaying ? 'Pause' : 'Play'} auto-advance
          </button>
        </div>
      </div>
    </section>
  )
}