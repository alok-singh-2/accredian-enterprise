'use client'
import { useState } from 'react'

const categories = ['All', 'Data & AI', 'Management', 'Product', 'Leadership']

const programs = [
  {
    category: 'Data & AI',
    title: 'Executive Program in Data Science & AI',
    institution: 'IIT Kanpur',
    duration: '12 months',
    format: 'Live Online',
    level: 'Advanced',
    tag: '🔥 Most Popular',
    tagColor: 'bg-red-100 text-red-600',
    topics: ['Machine Learning', 'Deep Learning', 'NLP', 'Business Analytics'],
    outcomes: 'Build production ML systems and lead data-driven initiatives',
  },
  {
    category: 'Data & AI',
    title: 'Certificate Program in Machine Learning',
    institution: 'IIT Hyderabad',
    duration: '6 months',
    format: 'Live Online',
    level: 'Intermediate',
    tag: '⚡ Fast Track',
    tagColor: 'bg-yellow-100 text-yellow-700',
    topics: ['Supervised Learning', 'Neural Networks', 'Computer Vision', 'MLOps'],
    outcomes: 'Deploy ML models and build intelligent systems at scale',
  },
  {
    category: 'Management',
    title: 'Executive MBA — Business Management',
    institution: 'IIM Lucknow',
    duration: '18 months',
    format: 'Hybrid',
    level: 'Executive',
    tag: '🏆 Premium',
    tagColor: 'bg-purple-100 text-purple-600',
    topics: ['Strategy', 'Finance', 'Operations', 'Leadership'],
    outcomes: 'Qualify for senior management roles with IIM credentials',
  },
  {
    category: 'Product',
    title: 'Executive Program in Product Management',
    institution: 'SP Jain',
    duration: '8 months',
    format: 'Live Online',
    level: 'Advanced',
    tag: '🚀 High Demand',
    tagColor: 'bg-brand-100 text-brand-700',
    topics: ['Product Strategy', 'Agile', 'User Research', 'Growth'],
    outcomes: 'Lead product teams and drive product-led growth',
  },
  {
    category: 'Leadership',
    title: 'CXO Leadership Program',
    institution: 'XLRI',
    duration: '10 months',
    format: 'Hybrid',
    level: 'CXO',
    tag: '👔 Executive',
    tagColor: 'bg-gray-100 text-gray-700',
    topics: ['Strategic Leadership', 'Change Management', 'Executive Presence', 'Board Governance'],
    outcomes: 'Develop C-suite readiness and organizational leadership skills',
  },
  {
    category: 'Data & AI',
    title: 'PG Diploma in Business Analytics',
    institution: 'IIM Visakhapatnam',
    duration: '11 months',
    format: 'Live Online',
    level: 'Advanced',
    tag: '📊 Analytics',
    tagColor: 'bg-green-100 text-green-700',
    topics: ['SQL & Python', 'Data Visualization', 'Predictive Analytics', 'Business Intelligence'],
    outcomes: 'Lead analytics functions and present data-driven strategies',
  },
]

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? programs
    : programs.filter(p => p.category === activeCategory)

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-mono font-medium px-4 py-1.5 rounded-full mb-4">
            Enterprise Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Programs Co-Designed with{' '}
            <span className="gradient-text">Top Institutions</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Rigorously structured for real-world applicability. Every program is built with industry experts and certified by India's most prestigious academic institutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <div key={program.title} className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              {/* Card header */}
              <div className="bg-gradient-to-br from-brand-900 to-brand-700 p-6 relative">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${program.tagColor}`}>
                  {program.tag}
                </span>
                <h3 className="font-display font-bold text-white text-lg leading-snug mb-2">
                  {program.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-md font-medium">
                    🏛 {program.institution}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { icon: '⏱', label: program.duration },
                    { icon: '💻', label: program.format },
                    { icon: '📈', label: program.level },
                  ].map(meta => (
                    <span key={meta.label} className="flex items-center gap-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">
                      {meta.icon} {meta.label}
                    </span>
                  ))}
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {program.topics.map(topic => (
                    <span key={topic} className="bg-brand-50 text-brand-700 text-xs px-2 py-1 rounded border border-brand-100">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  <span className="font-semibold text-gray-700">Outcome: </span>
                  {program.outcomes}
                </p>

                <a
                  href="#contact"
                  className="btn-primary text-sm text-center py-3 mt-auto"
                >
                  Enquire for Your Team →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Need a custom program?{' '}
            <a href="#contact" className="text-brand-600 font-semibold hover:underline">
              Talk to our learning consultants →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
