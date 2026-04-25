'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 94, suffix: '%', label: 'Average Completion Rate', desc: 'Industry average is 15%' },
  { value: 500, suffix: '+', label: 'Expert Mentors', desc: 'Across AI, ML, Product, Leadership' },
  { value: 10000, suffix: '+', label: 'Enterprise Learners', desc: 'Across 100+ companies' },
  { value: 40, suffix: '%', label: 'Team Velocity Gain', desc: 'Average across cohorts' },
  { value: 96, suffix: '%', label: 'Learner Satisfaction', desc: 'Based on exit surveys' },
  { value: 300, suffix: '+', label: 'Managers Onboarded', desc: 'Simultaneously across 3 geographies' },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 2000, animate)
  return (
    <div className="text-center p-6 stat-card rounded-2xl">
      <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
        {animate ? count.toLocaleString() : 0}{stat.suffix}
      </div>
      <div className="font-semibold text-white text-base mb-1">{stat.label}</div>
      <div className="text-gray-400 text-sm">{stat.desc}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Numbers That Prove Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg">Real outcomes from real organizations.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  )
}
