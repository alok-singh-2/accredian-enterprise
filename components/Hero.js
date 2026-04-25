'use client'
import { useState, useEffect } from 'react'

const stats = [
  { value: '94%', label: 'Avg. Completion Rate' },
  { value: '500+', label: 'Expert Mentors' },
  { value: '10K+', label: 'Enterprise Learners' },
  { value: '40%', label: 'Avg. Team Velocity Gain' },
]

const trustedBy = ['TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'Capgemini']

export default function Hero() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => (c + 1) % trustedBy.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(2,132,199,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(2,132,199,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-brand-400 rounded-full animate-float opacity-60" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-brand-300 rounded-full animate-float opacity-30" style={{animationDelay: '2s'}} />
      </div>

      <div className="container-custom w-full pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-400/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-brand-300 text-sm font-mono">India's #1 Enterprise Learning Platform</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up-delay-1">
              Upskill Your{' '}
              <span className="gradient-text">Workforce</span>
              {' '}at Scale
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 animate-fade-up-delay-2">
              Partner with IITs, IIMs, and global universities to transform your teams with custom programs, live mentorship, and real-time analytics that deliver measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up-delay-3">
              <a href="#contact" className="btn-primary text-base px-8 py-4 text-center">
                Schedule a Demo →
              </a>
              <a href="#how-it-works" className="btn-white text-base px-8 py-4 text-center">
                See How It Works
              </a>
            </div>

            {/* Trusted by */}
            <div className="animate-fade-up-delay-4">
              <p className="text-gray-500 text-sm font-mono mb-3">TRUSTED BY INDIA'S TOP COMPANIES</p>
              <div className="flex flex-wrap gap-3">
                {trustedBy.map((company, i) => (
                  <span key={company} className={`px-3 py-1.5 rounded-md text-sm font-semibold border transition-all duration-500 ${
                    i === count
                      ? 'bg-brand-500/20 border-brand-400/50 text-brand-300'
                      : 'bg-white/5 border-white/10 text-gray-400'
                  }`}>
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Platform Overview</h3>
                  <span className="flex items-center gap-1.5 text-green-400 text-sm font-mono">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="stat-card rounded-xl p-4">
                      <div className={`text-2xl font-display font-bold gradient-text mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Dashboard mockup */}
                <div className="bg-dark-900/50 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-gray-500 text-xs ml-2 font-mono">analytics.accredian.com</span>
                  </div>
                  <div className="space-y-2">
                    {['Data Science Cohort — 94%', 'ML Engineering — 88%', 'Product Management — 96%'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-gray-400 text-xs w-40 truncate">{item.split('—')[0]}</span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full"
                            style={{ width: item.split('—')[1].trim() }}
                          />
                        </div>
                        <span className="text-brand-400 text-xs font-mono">{item.split('—')[1].trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg animate-float">
                🏆 IIT & IIM Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
