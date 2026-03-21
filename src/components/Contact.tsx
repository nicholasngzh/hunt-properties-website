'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const CONTACT_DETAILS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'No. 1, Jalan Contoh, Taman Contoh, 50000 Kuala Lumpur, Malaysia',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+60 3-XXXX XXXX',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'info@huntproperty.com.my',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Office Hours',
    value: 'Monday – Friday: 9:00 AM – 6:00 PM',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const newErrors: Partial<typeof form> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 6000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            We'd love to hear from you. Reach out to discuss your property management needs or to
            learn more about our services.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <ScrollReveal>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-gold font-semibold mb-8">
                Our Office
              </h3>
              {CONTACT_DETAILS.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-primary transition-colors duration-300">
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-white text-sm leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}

              {/* Decorative divider */}
              <div className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-white/10" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <p className="font-serif italic text-gold-light text-sm">
                "Delivering Heartfelt Service, Every Day"
              </p>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={1}>
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
              <h3 className="font-serif text-xl text-white font-semibold mb-6">
                Send Us a Message
              </h3>

              {/* Success message */}
              {submitted && (
                <div className="mb-6 bg-gold/20 border border-gold/40 rounded-sm p-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gold text-sm font-medium">
                    Thank you! Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-1.5" htmlFor="name">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-white/5 border rounded-sm px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors ${
                        errors.name ? 'border-red-400/60' : 'border-white/20'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-1.5" htmlFor="email">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={`w-full bg-white/5 border rounded-sm px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors ${
                        errors.email ? 'border-red-400/60' : 'border-white/20'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-1.5" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+60 12-XXX XXXX"
                      className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-1.5" htmlFor="subject">
                      Enquiry Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="" className="text-gray-800">Select a topic</option>
                      <option value="engineering" className="text-gray-800">Engineering Services</option>
                      <option value="security" className="text-gray-800">Security Management</option>
                      <option value="landscaping" className="text-gray-800">Landscaping Services</option>
                      <option value="general" className="text-gray-800">General Enquiry</option>
                      <option value="careers" className="text-gray-800">Careers</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-1.5" htmlFor="message">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property management needs..."
                    className={`w-full bg-white/5 border rounded-sm px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors resize-none ${
                      errors.message ? 'border-red-400/60' : 'border-white/20'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-primary font-semibold text-sm py-3 rounded-sm transition-all duration-200 tracking-wide hover:shadow-lg hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
