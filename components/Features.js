'use client'

const features = [
  {
    icon: '📊',
    title: 'Real-Time Analytics Dashboard',
    description: 'Track completion rates, scores, and ROI through a live command center. Monthly reviews keep engagement high and results measurable.',
    highlight: '94% avg completion',
    color: 'from-blue-500/10 to-cyan-500/5',
    border: 'border-blue-200',
  },
  {
    icon: '🧑‍🏫',
    title: 'Live Mentorship at Scale',
    description: '1:1 live sessions with 500+ industry practitioners across AI/ML, Data Science, Product, and Leadership. Experts guide teams through capstone projects.',
    highlight: '500+ mentors',
    color: 'from-purple-500/10 to-pink-500/5',
    border: 'border-purple-200',
  },
  {
    icon: '🤝',
    title: 'Cohort-Based Learning',
    description: 'Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%. Foster team collaboration with synchronized learning paths.',
    highlight: '>94% completion',
    color: 'from-green-500/10 to-emerald-500/5',
    border: 'border-green-200',
  },
  {
    icon: '🎯',
    title: 'Custom Program Design',
    description: 'Tailor curriculum entirely to your organization\'s specific tech stack, skill gaps, industry context, and strategic goals. No one-size-fits-all.',
    highlight: '100% customizable',
    color: 'from-orange-500/10 to-red-500/5',
    border: 'border-orange-200',
  },
  {
    icon: '🏆',
    title: 'Recognized Certifications',
    description: 'Globally recognized credentials from IITs, IIMs, and partner institutions. Verifiable, shareable, and career-defining. Boost employee retention.',
    highlight: 'IIT & IIM certified',
    color: 'from-yellow-500/10 to-amber-500/5',
    border: 'border-yellow-200',
  },
  {
    icon: '🤖',
    title: 'AI-Adaptive Learning',
    description: 'Adaptive learning engine surfaces the right content at the right time, maximizing engagement and retention. AI-driven paths that adjust to each learner\'s pace.',
    highlight: 'Personalised AI paths',
    color: 'from-brand-500/10 to-sky-500/5',
    border: 'border-brand-200',
  },
  {
    icon: '🌍',
    title: 'Global Team Support',
    description: 'Seamlessly upskill distributed teams across different timezones. Onboard 300+ managers across multiple geographies simultaneously with enterprise-grade tools.',
    highlight: 'Multi-timezone',
    color: 'from-teal-500/10 to-cyan-500/5',
    border: 'border-teal-200',
  },
  {
    icon: '📈',
    title: 'Measurable ROI',
    description: 'Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky long after program end.',
    highlight: 'Proven 40% velocity gain',
    color: 'from-indigo-500/10 to-violet-500/5',
    border: 'border-indigo-200',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white section-pattern">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-mono font-medium px-4 py-1.5 rounded-full mb-4">
            Platform Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            The Complete Operating System for{' '}
            <span className="gradient-text">Enterprise Learning</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From curriculum design to analytics — everything your L&D team needs to deliver measurable outcomes at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`card-hover bg-gradient-to-br ${feature.color} border ${feature.border} rounded-2xl p-6 group cursor-default`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <div className="inline-block bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-600 text-xs font-mono px-2 py-1 rounded-md mb-3">
                {feature.highlight}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-base mb-2 group-hover:text-brand-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
