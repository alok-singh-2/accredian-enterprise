'use client'

const steps = [
  {
    step: '01',
    title: 'Discovery & Gap Analysis',
    description: 'Our consultants map your team\'s skill gaps, business goals, and requirements. A thorough assessment forms the foundation of your custom learning strategy.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Custom Program Co-Creation',
    description: 'Co-create a custom learning journey with academic partners from IITs and IIMs. Curriculum is tailored to your organization\'s tech stack and strategic goals.',
    icon: '✏️',
  },
  {
    step: '03',
    title: 'Onboarding & Kickoff',
    description: 'Onboard teams with platform access, orientation, and mentor assignment. Smooth rollout across geographies with dedicated enterprise support.',
    icon: '🚀',
  },
  {
    step: '04',
    title: 'Live Learning & Mentorship',
    description: 'Learners engage in cohort-based programs with live sessions, capstone projects, and 1:1 mentorship. AI adapts content to each learner\'s pace.',
    icon: '🎓',
  },
  {
    step: '05',
    title: 'Analytics & Continuous ROI',
    description: 'Real-time analytics and monthly reviews keep ROI measurable. Completion nudges and adaptive recommendations keep learning sticky long-term.',
    icon: '📊',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-brand-500/20 border border-brand-500/30 text-brand-400 text-sm font-mono font-medium px-4 py-1.5 rounded-full mb-4">
            Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            How Accredian Enterprise{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A proven 5-step process that transforms your workforce from assessment to certified ROI.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.step} className="relative group">
                {/* Step card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-xl">
                      {step.icon}
                    </div>
                    <span className="font-mono text-brand-400 font-bold text-sm">{step.step}</span>
                  </div>

                  <h3 className="font-display font-bold text-white text-base mb-3 group-hover:text-brand-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-14 z-10 w-8 items-center justify-center">
                    <span className="text-brand-500 text-lg">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a href="#contact" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
            Start Your Learning Journey
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
