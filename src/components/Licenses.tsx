import ScrollReveal from './ScrollReveal'

const LICENSE_PLACEHOLDERS = [
  { label: 'Property Management License' },
  { label: 'Estate Agency License' },
  { label: 'Valuation License' },
  { label: 'Business Registration Certificate' },
]

export default function Licenses() {
  return (
    <section id="licenses" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Credentials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold mb-4">
            Licenses &amp; Insurance
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Hunt Property Management Sdn Bhd holds 4 distinct licenses issued by the Ministry of Finance, affirming our commitment to professional and compliant service delivery.
          </p>
        </ScrollReveal>

        {/* Certificate grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LICENSE_PLACEHOLDERS.map((item, i) => (
            <ScrollReveal key={item.label} delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}>
              <div className="bg-white border border-gray-100 rounded-sm p-8 flex flex-col items-center justify-center gap-4 hover:border-gold/40 hover:shadow-md transition-all duration-300 min-h-[200px]">
                <div className="w-16 h-16 rounded-sm bg-primary/5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <p className="font-serif text-sm font-semibold text-primary text-center">{item.label}</p>
                <p className="text-xs text-gray-400 text-center italic">Certificate coming soon</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
