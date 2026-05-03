import ScrollReveal from './ScrollReveal'

const MESSAGE_PARAGRAPHS = [
  `In the property management industry, people are the driving force behind service excellence and sustainable asset value. At Hunt Property Management Sdn Bhd, our success has always been built upon our commitment to respecting talent and creating a harmonious, professional, and inspiring work environment. We believe that only when our employees feel valued and empowered will they deliver services that enhance the quality of living, safeguard property assets, and build lasting trust with property owners, residents, developers, and stakeholders.`,
  `As a service-centric organisation, we place strong emphasis on the continuous development of our management team and frontline personnel. Education, structured training, and knowledge upgrading form an integral part of our operational framework, enabling us to respond to the evolving needs of modern communities and increasingly sophisticated developments. Our people are not only service providers — they are community managers, asset custodians, and the vital bridge connecting clients, residents, and the Company.`,
  `Our aspiration to become a leading and respected property management brand is inseparable from the growth of our employees into professionals of integrity, competence, and dedication. We advocate a balanced and fulfilling life, believing that only individuals who are physically healthy, mentally positive, and guided by strong values can consistently deliver warm, attentive, and dependable services to the communities under our care.`,
  `The property management landscape is constantly evolving, with higher expectations for service quality, operational efficiency, sustainability, and smart living solutions. In facing these challenges, we uphold a culture that is rigorous, pragmatic, collaborative, and progressive. We encourage innovation, proactive problem-solving, and resilience, ensuring that every member of our team approaches their responsibilities with purpose rather than routine.`,
  `We firmly believe that property management is not merely about maintaining buildings — it is about creating safe, harmonious, and thriving environments where people live, work, and grow. Through a healthy organisational culture, meaningful career development opportunities, and a supportive team environment, our employees are able to realise their personal aspirations while contributing to the long-term value of the properties we manage.`,
  `Looking ahead, Hunt Property Management Sdn Bhd will continue to strengthen its professional capabilities, embrace innovation, and enhance service standards to meet the rising expectations of the market. By growing together with our employees, clients, and communities, we are committed to delivering sustainable value and shaping better living and working environments for the future.`,
]

export default function Chairman() {
  return (
    <section id="chairman" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Leadership
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold mb-4">
            Managing Director&apos;s Message
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Portrait column */}
          <ScrollReveal className="flex flex-col items-center lg:items-start">
            {/* Portrait placeholder */}
            <div className="w-52 h-52 rounded-full bg-primary border-4 border-gold flex items-center justify-center shadow-xl mb-6 relative overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(201,168,76,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,168,76,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />
              {/* Initials */}
              <span className="relative font-serif text-5xl text-gold font-bold select-none">
                CH
              </span>
            </div>

            {/* Name & title */}
            <div className="text-center lg:text-left">
              <p className="font-serif text-xl font-semibold text-primary">Managing Director</p>
              <p className="text-sm text-gray-500 mt-1">Hunt Property Management Sdn Bhd</p>
              <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-6 h-px bg-gold" />
                <p className="text-xs text-gold tracking-wider uppercase font-medium">Est. 2010</p>
              </div>
            </div>

            {/* Decorative quote mark */}
            <div
              className="hidden lg:block mt-12 font-serif text-[8rem] text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
          </ScrollReveal>

          {/* Message text column */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              {/* Opening quote accent */}
              <div className="border-l-4 border-gold pl-6 mb-8">
                <p className="font-serif italic text-lg text-primary/80 leading-relaxed">
                  "Property management is not merely about maintaining buildings — it is about
                  creating safe, harmonious, and thriving environments where people live, work, and
                  grow."
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {MESSAGE_PARAGRAPHS.map((para, i) => (
                <ScrollReveal key={i} delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}>
                  <p className="text-gray-600 leading-relaxed text-[0.95rem]">{para}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Signature area */}
            <ScrollReveal delay={4} className="mt-10">
              <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                <div className="h-px flex-1 bg-gold/30" />
                <div>
                  <p className="font-serif text-primary font-semibold text-right">The Chairman</p>
                  <p className="text-xs text-gray-400 text-right mt-0.5">Hunt Property Management Sdn Bhd</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
