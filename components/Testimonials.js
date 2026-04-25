'use client'
import { useState } from 'react'

const testimonials = [
  {
    quote: 'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Sharma',
    title: 'Chief Learning Officer',
    company: 'TechCorp India',
    avatar: 'PS',
    color: 'from-brand-500 to-brand-700',
    rating: 5,
  },
  {
    quote: 'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
    name: 'Rahul Mehta',
    title: 'VP Engineering',
    company: 'Infosys Digital',
    avatar: 'RM',
    color: 'from-purple-500 to-pink-600',
    rating: 5,
  },
  {
    quote: 'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
    name: 'Anjali Gupta',
    title: 'Head of L&D',
    company: 'Wipro Technologies',
    avatar: 'AG',
    color: 'from-emerald-500 to-teal-600',
    rating: 5,
  },
  {
    quote: 'The custom curriculum design process was thorough and impressive. Accredian co-created a program perfectly aligned to our product management philosophy.',
    name: 'Karan Nair',
    title: 'CHRO',
    company: 'HCL Technologies',
    avatar: 'KN',
    color: 'from-orange-500 to-red-500',
    rating: 5,
  },
  {
    quote: 'Our certification program completion rate went from 34% to 91% after switching to Accredian. The cohort model and live mentorship made all the difference.',
    name: 'Sunita Reddy',
    title: 'Director, People & Culture',
    company: 'Cognizant',
    avatar: 'SR',
    color: 'from-yellow-500 to-amber-600',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-mono font-medium px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Hear from L&D Leaders Who{' '}
            <span className="gradient-text">Transformed</span> Their Orgs
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-gradient-to-br from-gray-50 to-brand-50 border border-brand-100 rounded-3xl p-8 md:p-10 relative">
            {/* Quote mark */}
            <div className="font-display text-8xl text-brand-200 leading-none absolute top-4 left-6 select-none">&ldquo;</div>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed relative z-10 mb-6 font-medium">
              {testimonials[active].quote}
            </p>

            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold`}>
                {testimonials[active].avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonials[active].name}</div>
                <div className="text-gray-500 text-sm">{testimonials[active].title}, {testimonials[active].company}</div>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selector cards */}
        <div className="flex flex-wrap justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
                active === i
                  ? 'bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-500/30'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-brand-300'
              }`}
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {t.avatar}
              </div>
              <div className="text-left hidden sm:block">
                <div className={`text-sm font-semibold ${active === i ? 'text-white' : 'text-gray-800'}`}>{t.name}</div>
                <div className={`text-xs ${active === i ? 'text-brand-200' : 'text-gray-400'}`}>{t.company}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
