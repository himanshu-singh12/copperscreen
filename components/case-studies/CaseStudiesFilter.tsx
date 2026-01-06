'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, SortAsc } from 'lucide-react'

interface FilterProps {
  onFilterChange?: (filters: FilterState) => void
}

interface FilterState {
  search: string
  industry: string
  sortBy: string
}

export function CaseStudiesFilter({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    industry: 'all',
    sortBy: 'newest'
  })

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'ecommerce', label: 'eCommerce' },
    { value: 'saas', label: 'SaaS' },
    { value: 'healthtech', label: 'HealthTech' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'realestate', label: 'Real Estate' },
    { value: 'manufacturing', label: 'Manufacturing' }
  ]

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'results', label: 'Best Results' },
    { value: 'alphabetical', label: 'A-Z' }
  ]

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center space-x-4">
            {/* Industry Filter */}
            <div className="relative">
              <select
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300 cursor-pointer"
              >
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate pointer-events-none" />
            </div>

            {/* Sort Filter */}
            <div className="relative">
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-300 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <SortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate pointer-events-none" />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center space-x-2 px-4 py-3 bg-copper-gradient text-white rounded-xl font-semibold transition-all duration-300"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Industry
                </label>
                <select
                  value={filters.industry}
                  onChange={(e) => handleFilterChange('industry', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {/* Active Filters Display */}
        {(filters.search || filters.industry !== 'all' || filters.sortBy !== 'newest') && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-charcoal">Active filters:</span>
            
            {filters.search && (
              <span className="inline-flex items-center px-3 py-1 bg-copper-100 text-copper-800 text-sm rounded-full">
                Search: "{filters.search}"
                <button
                  onClick={() => handleFilterChange('search', '')}
                  className="ml-2 text-copper-600 hover:text-copper-800"
                >
                  ×
                </button>
              </span>
            )}

            {filters.industry !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 bg-copper-100 text-copper-800 text-sm rounded-full">
                {industries.find(i => i.value === filters.industry)?.label}
                <button
                  onClick={() => handleFilterChange('industry', 'all')}
                  className="ml-2 text-copper-600 hover:text-copper-800"
                >
                  ×
                </button>
              </span>
            )}

            {filters.sortBy !== 'newest' && (
              <span className="inline-flex items-center px-3 py-1 bg-copper-100 text-copper-800 text-sm rounded-full">
                {sortOptions.find(s => s.value === filters.sortBy)?.label}
                <button
                  onClick={() => handleFilterChange('sortBy', 'newest')}
                  className="ml-2 text-copper-600 hover:text-copper-800"
                >
                  ×
                </button>
              </span>
            )}

            <button
              onClick={() => {
                const resetFilters = { search: '', industry: 'all', sortBy: 'newest' }
                setFilters(resetFilters)
                onFilterChange?.(resetFilters)
              }}
              className="text-sm text-copper-700 hover:text-copper-600 font-semibold"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </section>
  )
}