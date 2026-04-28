import Image from 'next/image'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#chairman', label: "Chairman's Message" },
  { href: '#culture', label: 'Our Culture' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4 bg-white/90 rounded px-3 py-2">
              <Image
                src="/hunt-properties-website/hunt_properties_logo.jpeg"
                alt="Hunt Properties logo"
                width={120}
                height={44}
                className="object-contain"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mt-2">
              We serve with pride and dedication
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-gold font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <h3 className="font-serif text-gold font-semibold text-lg mb-5">Our Philosophy</h3>
            <div className="space-y-3">
              {[
                'Sincere in Service',
                'Professional in Management',
                'Integrity in Business',
                'Excellence in Living',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-gold shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="font-serif italic text-gold-light text-sm">
                "Heartfelt Service, Every Day"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            2010–{new Date().getFullYear()} Hunt Property Management Sdn Bhd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Registered with Board of Valuers, Appraisers, Estate Agents and Property Managers (BOVEAP) Malaysia
          </p>
        </div>
      </div>
    </footer>
  )
}
