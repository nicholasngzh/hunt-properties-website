import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-primary flex items-center justify-center text-white overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(17,40,25,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-gold-light text-xs sm:text-sm tracking-[0.3em] uppercase font-medium mb-6">
          Est. 2010 &nbsp;·&nbsp; Malaysia
        </p>

        {/* Gold decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gold opacity-60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-12 bg-gold opacity-60" />
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/90 rounded-lg px-6 py-4 inline-block">
            <Image
              src="/hunt-properties-website/hunt_properties_logo.jpeg"
              alt="Hunt Property Management Sdn Bhd"
              width={120}
              height={44}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Visually hidden h1 for SEO */}
        <h1 className="sr-only">Hunt Property Management Sdn Bhd</h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 bg-gold/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gold/50" />
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl text-gold-light mb-10">
          "Delivering Heartfelt Service, Every Day"
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary font-semibold text-sm px-8 py-3.5 rounded-sm transition-all duration-200 tracking-wide hover:shadow-lg hover:-translate-y-0.5"
          >
            Discover More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-gold text-white hover:text-gold text-sm font-semibold px-8 py-3.5 rounded-sm transition-all duration-200 tracking-wide hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-widest uppercase text-white">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}
