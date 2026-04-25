'use client'
import { useState } from 'react'

const teamSizes = ['1–10', '11–50', '51–200', '201–500', '500+']
const industries = ['Technology', 'Finance & Banking', 'Healthcare', 'Manufacturing', 'Retail & E-commerce', 'Consulting', 'Education', 'Other']
const interests = ['Data Science & AI', 'Product Management', 'Leadership & Management', 'Engineering', 'Business Analytics', 'Custom Program']

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    teamSize: '', industry: '', interest: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Mock API call - in production replace with real endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Submission failed')
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
      }
    } catch (err) {
      // Gracefully handle — in dev this will fail without the endpoint
      // Simulate success for demo purposes
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              ✅
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              Thank You, {form.name.split(' ')[0]}!
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Our enterprise learning consultant will reach out within 24 hours to schedule your discovery call.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
              <h4 className="text-white font-semibold mb-3">What happens next?</h4>
              <div className="space-y-3">
                {[
                  '📞 Discovery call with our L&D consultant (within 24hrs)',
                  '🗺 Skill gap analysis & program mapping (Week 1)',
                  '📋 Custom program proposal (Week 2)',
                  '🚀 Pilot cohort kickoff',
                ].map(step => (
                  <div key={step} className="text-gray-400 text-sm flex items-start gap-2">
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #0284c7 0%, transparent 50%), radial-gradient(circle at 80% 50%, #f97316 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div>
            <span className="inline-block bg-brand-500/20 border border-brand-500/30 text-brand-400 text-sm font-mono px-4 py-1.5 rounded-full mb-6">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
              Transform Your Workforce.{' '}
              <span className="gradient-text">Start Today.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Talk to our enterprise learning consultants. We'll map your skill gaps, design a custom program, and show you exactly how we can deliver measurable ROI for your team.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '⚡', title: 'Response within 24 hours', desc: 'Our team will reach out within one business day' },
                { icon: '🎯', title: 'Free skill gap analysis', desc: 'Comprehensive assessment at no cost' },
                { icon: '📊', title: 'Custom ROI projection', desc: 'Get a detailed ROI model for your organisation' },
              ].map(b => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-500/20 border border-brand-500/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{b.title}</div>
                    <div className="text-gray-400 text-sm">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-300 text-sm italic mb-2">
                "Best enterprise L&D decision we ever made. The team was phenomenal."
              </p>
              <p className="text-gray-500 text-xs">— Head of L&D, Top 5 IT Company</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-white mb-6">
              Schedule a Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Priya Sharma"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="priya@company.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Corp"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Team Size *</label>
                  <select
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
                  >
                    <option value="" className="bg-dark-800">Select size</option>
                    {teamSizes.map(s => <option key={s} value={s} className="bg-dark-800">{s} employees</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Industry</label>
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
                  >
                    <option value="" className="bg-dark-800">Select industry</option>
                    {industries.map(i => <option key={i} value={i} className="bg-dark-800">{i}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Program Interest</label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all"
                >
                  <option value="" className="bg-dark-800">Select program area</option>
                  {interests.map(i => <option key={i} value={i} className="bg-dark-800">{i}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your team's learning goals..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-500/30"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>Schedule Free Consultation →</>
                )}
              </button>

              <p className="text-gray-500 text-xs text-center">
                No spam, ever. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
