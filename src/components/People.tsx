import ScrollReveal from './ScrollReveal'

const TEAM = [
  { role: 'Managing Director', name: 'Sia Bee Yan' },
  { role: 'Director', name: 'Mong Kian Hong' },
  { role: 'Human Resource Manager', name: 'Nicky Lee' },
  { role: 'Finance Manager', name: 'Nicolle' },
  { role: 'Admin Manager', name: 'Tan YiBin' },
  { role: 'Accounts Manager', name: 'George Law' },
  { role: 'Accounts Team (HQ)', name: 'Huzaimi & Nadia' },
  { role: 'Technical Team', name: 'Wong Tak Wah & Ahmad Ridhwan' },
  { role: 'Head, Operation', name: 'Amirul Fikri' },
  { role: 'Head, Sale & Leasing', name: 'William Phua' },
]

export default function People() {
  return (
    <section id="people" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            The Team
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold mb-4">
            Our People
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Behind every well-managed property is a dedicated team of professionals committed to delivering excellence.
          </p>
        </ScrollReveal>

        {/* Group photo placeholder */}
        <ScrollReveal className="mb-16">
          <div className="w-full rounded-sm bg-primary/5 border border-primary/10 flex flex-col items-center justify-center py-20 gap-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-16 h-16 text-primary/20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            <p className="text-primary/30 text-sm tracking-widest uppercase">Company Group Photo</p>
          </div>
        </ScrollReveal>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={(Math.min(i % 3, 4) as 0 | 1 | 2 | 3 | 4)}>
              <div className="group bg-off-white border border-gray-100 rounded-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full hover:border-gold/40">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-serif text-gold font-bold text-sm">
                      {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-primary text-base leading-tight">{member.name}</p>
                    <p className="text-gold text-xs font-medium tracking-wide mt-0.5">{member.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
