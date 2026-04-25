'use client'

const partners = [
  { name: 'IIT Kanpur', type: 'Academic', short: 'IITK', color: 'from-blue-600 to-blue-800' },
  { name: 'IIM Lucknow', type: 'Academic', short: 'IIML', color: 'from-purple-600 to-purple-800' },
  { name: 'IIM Visakhapatnam', type: 'Academic', short: 'IIMV', color: 'from-teal-600 to-teal-800' },
  { name: 'IIM Trichy', type: 'Academic', short: 'IIMT', color: 'from-indigo-600 to-indigo-800' },
  { name: 'XLRI Jamshedpur', type: 'Academic', short: 'XLRI', color: 'from-red-600 to-red-800' },
  { name: 'IIT Hyderabad', type: 'Academic', short: 'IITH', color: 'from-emerald-600 to-emerald-800' },
  { name: 'SP Jain', type: 'Academic', short: 'SPJ', color: 'from-orange-600 to-orange-800' },
  { name: 'E&ICT IIT Guwahati', type: 'Academic', short: 'IITG', color: 'from-cyan-600 to-cyan-800' },
]

const corporatePartners = [
  'Microsoft', 'Google', 'Amazon Web Services', 'IBM', 'Salesforce', 'Adobe'
]

export default function Partners() {
  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-mono font-medium px-4 py-1.5 rounded-full mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Programs Certified by India's Most{' '}
            <span className="gradient-text">Prestigious Institutions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Our programs are co-designed and certified by India's most prestigious academic institutions and global technology leaders.
          </p>
        </div>

        {/* Academic Partners */}
        <div className="mb-12">
          <h3 className="text-center text-gray-400 font-mono text-sm uppercase tracking-wider mb-6">
            Academic Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div key={partner.name} className="card-hover bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-bold font-mono text-sm mb-3 shadow-md`}>
                  {partner.short}
                </div>
                <div className="font-semibold text-gray-800 text-sm leading-tight mb-1">{partner.name}</div>
                <div className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded-full">{partner.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Partners */}
        <div>
          <h3 className="text-center text-gray-400 font-mono text-sm uppercase tracking-wider mb-6">
            Technology Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {corporatePartners.map((company) => (
              <div key={company} className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-200">
                <span className="font-semibold text-gray-600 text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditation note */}
        <div className="mt-12 bg-gradient-to-br from-brand-50 to-sky-50 border border-brand-100 rounded-2xl p-8 text-center">
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            <span className="font-bold text-brand-700">All programs are co-designed</span> with our academic partners to ensure curriculum meets the rigorous standards of India's top institutions while being directly applicable to enterprise challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
