export default function Footer() {
  const links = {
    Platform: ['Features', 'Programs', 'Analytics Dashboard', 'Mentorship', 'Certifications'],
    Company: ['About Us', 'Careers', 'Press', 'Contact', 'Blog'],
    Resources: ['Case Studies', 'Whitepaper', 'Webinars', 'Help Center', 'API Docs'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  }

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg">Accredian</span>
                <span className="ml-1 text-xs font-mono bg-brand-500/20 text-brand-400 px-1.5 py-0.5 rounded">Enterprise</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              The complete operating system for enterprise learning. Custom programs, live mentorship, and real-time analytics.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {['𝕏', 'in', '▶', '📘'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-400 transition-all text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4 font-mono uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Fullstack Education Pvt. Ltd. (Accredian). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-500 text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All systems operational
            </span>
            <span className="text-gray-600 text-xs">Gurugram, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
