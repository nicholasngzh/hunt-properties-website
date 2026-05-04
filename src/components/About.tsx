import ScrollReveal from './ScrollReveal'

const STATS = [
  { value: '20+', label: 'Years of Experience', suffix: '' },
  { value: '80+', label: 'Professional Staff', suffix: '' },
  { value: '6', label: 'Core Departments', suffix: '' },
  { value: '22', label: 'Projects Managed', suffix: '' },
]

const DEPARTMENTS = [
  'General Administration Department',
  'Property Management Department',
  'Business Development Department',
  'Quality Management Department',
  'Account & Finance Department',
  'Human Resource Department',
]

const PROJECTS = [
  'Isola @ KLCC',
  'Scenaria @ North KL',
  'Menara K1 @ Old KLang Road',
  '10 Boulevard @ Damansara Jaya',
  'The Mate @ Damansara',
  'Ken Damansara @ SS2',
  'Yolo Signature Suite @ Bandar Sunway',
  '8 Kinrara @ Bandar Kinrara',
  'Palmiera @ Bandar Kinrara',
]

const FOCUSED_AREAS = [
  {
    region: 'Kuala Lumpur',
    locations: [
      'KL City Center', 'Bangsar', 'Mont Kiara', 'Dutamas', 'KL Sentral',
      'Segambut', 'Kepong', 'Desapark', 'Bandar Sri Damansara', 'Old Klang Road',
    ],
  },
  {
    region: 'Selangor',
    locations: [
      'Petaling Jaya', 'SS2', 'Damansara', 'Kelana Jaya', 'Subang Jaya',
      'Sunway', 'Puchong', 'Subang', 'Shah Alam', 'Kemuning', 'Cyberjaya', 'Putrajaya',
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Who We Are
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold mb-4">
            Company Profile
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: company narrative */}
          <div>
            <ScrollReveal>
              <p className="text-gray-600 leading-relaxed mb-5">
                Hunt Property Management Sdn Bhd is a professional property management firm
                with 4 distinct licenses issued by the Ministry of Finance,specialising in property management 
                and related services. Officially established on 2010 with a registered capital
                of RM300,000, we employ more than 80 professional technical and management
                personnel.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="text-gray-600 leading-relaxed mb-5">
                We are supported by a highly experienced and forward-thinking professional
                management team. Our core members comprise senior property management specialists.
              </p>
            </ScrollReveal>

            {/* Departments */}
            <ScrollReveal delay={3}>
              <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                Our Six Departments
              </h3>
              <ul className="space-y-2">
                {DEPARTMENTS.map((dept) => (
                  <li key={dept} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rotate-45 bg-gold shrink-0" />
                    {dept}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Philosophy quotes */}
            <ScrollReveal delay={4}>
              <div className="mt-8 border-l-4 border-gold pl-5 space-y-3">
                {[
                  '"Delivering heartfelt service every day"',
                  '"Keeping pace with the times and managing in accordance with the law"',
                  '"Integrity as our cornerstone and reform through innovation"',
                  '"Building harmonious communities and giving back to society"',
                ].map((quote) => (
                  <p key={quote} className="text-sm text-gray-500 italic">
                    {quote}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: stats + projects */}
          <div>
            {/* Stats grid */}
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-off-white rounded-sm p-6 text-center border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="font-serif text-4xl font-bold text-primary group-hover:text-gold transition-colors duration-300">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-2">{label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Projects */}
            <ScrollReveal delay={1}>
              <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                Projects Under Our Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {PROJECTS.map((project) => (
                  <span
                    key={project}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium border border-primary/20 text-primary/80 rounded-sm hover:border-gold hover:text-gold bg-white hover:bg-off-white transition-all duration-200 cursor-default"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Focused Areas */}
            <ScrollReveal delay={2}>
              <h3 className="font-serif text-lg font-semibold text-primary mb-4 mt-8">
                Focused Areas
              </h3>
              <div className="space-y-4">
                {FOCUSED_AREAS.map((area) => (
                  <div key={area.region}>
                    <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">{area.region}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.locations.map((loc) => (
                        <span
                          key={loc}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium border border-primary/20 text-primary/80 rounded-sm hover:border-gold hover:text-gold bg-white hover:bg-off-white transition-all duration-200 cursor-default"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Bottom tagline card */}
            <ScrollReveal delay={2}>
              <div className="mt-8 bg-primary rounded-sm p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-100"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(201,168,76,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(201,168,76,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative">
                  <p className="font-serif italic text-gold-light text-base leading-relaxed">
                    "Sincere Service · Standardized Management · Integrity in Operation ·
                    Harmonious Development"
                  </p>
                  <p className="text-white/50 text-xs mt-3 tracking-wider uppercase">
                    Our Guiding Philosophy
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
