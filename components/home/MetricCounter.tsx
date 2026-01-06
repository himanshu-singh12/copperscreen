'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!inView || !mounted) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(end * easeOutQuart))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, end, duration, mounted])

  // Show static value until mounted
  if (!mounted) {
    return (
      <span ref={ref}>
        {prefix}{end}{suffix}
      </span>
    )
  }

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export function MetricCounter() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const metrics = [
    {
      value: 500,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful digital transformations across industries'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Proven track record in digital consultancy'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Consistently exceeding client expectations'
    },
    {
      value: 300,
      suffix: '%',
      label: 'Average ROI',
      description: 'Measurable growth for our clients'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-copper-50 to-copper-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-copper-mesh"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Trusted by <span className="text-gradient">Enterprise Leaders</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Our data-driven approach delivers measurable results that transform businesses 
            and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 copper-glow">
                <div className="text-4xl md:text-5xl font-bold text-copper-700 mb-4">
                  <Counter 
                    end={metric.value} 
                    suffix={metric.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate mb-8">Serving clients across</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-copper-700 font-semibold">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-copper-gradient rounded-full"></div>
              <span>APAC</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-copper-gradient rounded-full"></div>
              <span>Australia</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-copper-gradient rounded-full"></div>
              <span>Europe</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-copper-gradient rounded-full"></div>
              <span>North America</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}