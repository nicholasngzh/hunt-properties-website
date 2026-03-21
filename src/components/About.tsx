import ScrollReveal from './ScrollReveal'

const STATS = [
  { value: '20+', label: 'Years of Experience', suffix: '' },
  { value: '40+', label: 'Professional Staff', suffix: '' },
  { value: '5', label: 'Core Departments', suffix: '' },
  { value: '9', label: 'Projects Managed', suffix: '' },
]

const DEPARTMENTS = [
  'General Administration Department',
  'Property Management Department',
  'Business Development Department',
  'Quality Management Department',
  'Finance Department',
]

const PROJECTS = [
  'Danxi Third District · Times Garden',
  'Sunshine Metropolis',
  'Oriental Star International Residence',
  'Jincheng Golf International Apartments',
  'Yile New Village',
  'Shuanglin Yiyuan',
  'Wending Apartment',
  'Chunhan Apartment',
  'Jinglong Kitchenware City',
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
                Hunt Property Management Sdn Bhd is a professional property management enterprise
                with a <strong className="text-primary">National Class II qualification</strong>,
                specialising in property management and related services. Officially established on{' '}
                <strong className="text-primary">2 September 2004</strong> with a registered capital
                of RMB 5 million, we employ more than 40 professional technical and management
                personnel.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="text-gray-600 leading-relaxed mb-5">
                We are supported by a highly experienced and forward-thinking professional
                management team. Our core members comprise senior property management specialists
                from major cities such as Yiwu, Hangzhou, Shenzhen, and Guangzhou.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-gray-600 leading-relaxed mb-8">
                The Company is in the process of fully implementing the{' '}
                <strong className="text-primary">ISO 9001:2000</strong> International Quality
                Management System, with the ISO 14000 Environmental Management System and OHSMS
                18000 Occupational Health and Safety Management System to follow.
              </p>
            </ScrollReveal>

            {/* Departments */}
            <ScrollReveal delay={3}>
              <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                Our Five Departments
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
