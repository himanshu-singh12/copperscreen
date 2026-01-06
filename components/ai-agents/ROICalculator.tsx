'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react'

export function ROICalculator() {
  const [inputs, setInputs] = useState({
    employees: 50,
    hourlyRate: 25,
    hoursPerWeek: 40,
    automationPercentage: 30
  })

  const calculateROI = () => {
    const weeklyLabourCost = inputs.employees * inputs.hourlyRate * inputs.hoursPerWeek
    const annualLabourCost = weeklyLabourCost * 52
    const automatedHours = (inputs.hoursPerWeek * inputs.automationPercentage) / 100
    const weeklySavings = inputs.employees * inputs.hourlyRate * automatedHours
    const annualSavings = weeklySavings * 52
    const aiImplementationCost = 50000 // Estimated cost
    const roi = ((annualSavings - aiImplementationCost) / aiImplementationCost) * 100
    const paybackMonths = Math.ceil(aiImplementationCost / (annualSavings / 12))

    return {
      annualSavings,
      roi,
      paybackMonths,
      automatedHours: automatedHours * inputs.employees
    }
  }

  const results = calculateROI()

  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your <span className="text-gradient">AI ROI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much you could save with AI automation tailored to your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <Calculator className="w-8 h-8 text-copper-400" />
              <h3 className="text-2xl font-bold">ROI Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => setInputs({...inputs, employees: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-copper-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Average Hourly Rate ($)
                </label>
                <input
                  type="number"
                  value={inputs.hourlyRate}
                  onChange={(e) => setInputs({...inputs, hourlyRate: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-copper-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Hours per Week
                </label>
                <input
                  type="number"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => setInputs({...inputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-copper-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Automation Percentage (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={inputs.automationPercentage}
                  onChange={(e) => setInputs({...inputs, automationPercentage: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-center mt-2 text-copper-400 font-semibold">
                  {inputs.automationPercentage}%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-copper-900/50 to-copper-800/50 rounded-2xl p-8 border border-copper-600/30">
              <div className="flex items-center space-x-3 mb-6">
                <DollarSign className="w-8 h-8 text-copper-400" />
                <h3 className="text-2xl font-bold">Projected Savings</h3>
              </div>
              
              <div className="text-4xl font-bold text-copper-400 mb-2">
                ${results.annualSavings.toLocaleString()}
              </div>
              <div className="text-gray-300">Annual cost savings</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                  <h4 className="font-semibold">ROI</h4>
                </div>
                <div className="text-2xl font-bold text-emerald-400">
                  {results.roi.toFixed(0)}%
                </div>
                <div className="text-gray-400 text-sm">Return on investment</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <h4 className="font-semibold">Payback</h4>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {results.paybackMonths} months
                </div>
                <div className="text-gray-400 text-sm">Time to break even</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold mb-4">Hours Automated Weekly</h4>
              <div className="text-3xl font-bold text-copper-400 mb-2">
                {results.automatedHours.toFixed(0)} hours
              </div>
              <div className="text-gray-400 text-sm">
                Equivalent to {(results.automatedHours / 40).toFixed(1)} full-time employees
              </div>
            </div>

            <button className="w-full magnetic-button bg-copper-gradient text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
              Get Detailed ROI Analysis
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}