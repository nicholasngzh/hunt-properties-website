import ScrollReveal from './ScrollReveal'

const TESTIMONIALS = [
  {
    quote: 'Hunt Property Management has consistently exceeded our expectations. Their professionalism and attention to detail make them the best in the industry.',
    author: 'Resident, Isola @ KLCC',
  },
  {
    quote: 'The team is responsive, knowledgeable, and truly cares about the community. We have seen significant improvements since they took over management.',
    author: 'JMB Committee, Scenaria @ North KL',
  },
  {
    quote: 'Transparent financial reporting and proactive maintenance have made a world of difference for our property. Highly recommended.',
    author: 'Property Owner, Ken Damansara @ SS2',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">
            Testimonials &amp; Recognition
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Trusted by residents, JMBs, and property owners across Kuala Lumpur and Selangor.
          </p>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}>
              <div className="bg-white/5 border border-white/10 rounded-sm p-8 flex flex-col gap-6 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="font-serif text-5xl text-gold/30 leading-none select-none">&ldquo;</div>
                <p className="text-white/80 text-sm leading-relaxed flex-1 italic">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-gold text-xs font-medium">{t.author}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA to view more */}
        <ScrollReveal className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gold/50 hover:border-gold text-gold hover:text-gold-light text-sm font-semibold px-8 py-3.5 rounded-sm transition-all duration-200 tracking-wide hover:-translate-y-0.5"
          >
            Share Your Experience
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
