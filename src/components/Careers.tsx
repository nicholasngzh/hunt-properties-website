import ScrollReveal from './ScrollReveal'

const OPENINGS = [
  {
    title: 'Property Executive',
    department: 'Property Management',
    type: 'Full-time',
    location: 'Kuala Lumpur',
  },
  {
    title: 'Accounts Executive',
    department: 'Account & Finance',
    type: 'Full-time',
    location: 'Kuala Lumpur',
  },
  {
    title: 'Building Technician',
    department: 'Technical Team',
    type: 'Full-time',
    location: 'KL / Selangor',
  },
  {
    title: 'Sales & Leasing Negotiator',
    department: 'Sale & Leasing',
    type: 'Full-time',
    location: 'KL / Selangor',
  },
  {
    title: 'Security Supervisor',
    department: 'Operations',
    type: 'Full-time',
    location: 'KL / Selangor',
  },
  {
    title: 'HR & Admin Executive',
    department: 'Human Resource',
    type: 'Full-time',
    location: 'Kuala Lumpur',
  },
]

const PERKS = [
  {
    title: 'Career Growth',
    description: 'Structured career development pathways and continuous professional training.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Positive Culture',
    description: 'A collaborative, respectful, and inclusive work environment where everyone thrives.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Benefits',
    description: 'Attractive remuneration, performance bonuses, and comprehensive leave entitlements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Purposeful Work',
    description: 'Make a real difference in communities and contribute to better living environments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Join Our Team
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold mb-4">
            Talent Search
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            We are always looking for talented, passionate, and driven individuals to grow with us. Be part of a team that creates better living and working environments across Malaysia.
          </p>
        </ScrollReveal>

        {/* Why join us */}
        <ScrollReveal className="mb-16">
          <div className="bg-off-white rounded-sm p-8 border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-primary text-center mb-8">Why Join Hunt Properties?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PERKS.map((perk) => (
                <div key={perk.title} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-primary/5 flex items-center justify-center text-gold">
                    {perk.icon}
                  </div>
                  <p className="font-serif font-semibold text-primary text-sm">{perk.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Current openings */}
        <ScrollReveal className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-primary mb-8 text-center">Current Openings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPENINGS.map((job, i) => (
              <div
                key={job.title}
                className="group bg-off-white border border-gray-100 rounded-sm p-6 hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="font-serif font-semibold text-primary text-base leading-tight group-hover:text-gold transition-colors duration-200">
                    {job.title}
                  </h4>
                  <span className="text-[10px] font-semibold text-gold border border-gold/30 rounded-sm px-2 py-0.5 shrink-0 bg-gold/5">
                    {job.type}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">{job.department}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {job.location}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Apply CTA */}
        <ScrollReveal className="text-center">
          <div className="bg-primary rounded-sm p-10 relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201,168,76,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,168,76,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />
            <div className="relative">
              <p className="font-serif italic text-gold-light text-lg mb-2">
                &ldquo;Right People in the Right Roles&rdquo;
              </p>
              <p className="text-white/60 text-sm mb-8">
                Don&apos;t see a suitable opening? We welcome spontaneous applications from motivated individuals.
              </p>
              <a
                href="mailto:admin@huntpropkl.com.my?subject=Career%20Application%20-%20Hunt%20Property%20Management"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary font-semibold text-sm px-8 py-3.5 rounded-sm transition-all duration-200 tracking-wide hover:shadow-lg hover:-translate-y-0.5"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
