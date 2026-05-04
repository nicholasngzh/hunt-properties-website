'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface Service {
  id: string
  title: string
  summary: string
  tagline: string
  items: string[]
  icon: React.ReactNode
}

const SERVICES: Service[] = [
  {
    id: 'property-management',
    title: 'Property Management Service',
    summary:
      'Comprehensive management of strata, residential, and commercial properties to ensure smooth operations and compliance.',
    tagline: 'Efficient Operations · Compliance · Resident Satisfaction',
    items: [
      'Setting Up Modus Operandi',
      'System Setup & Audit',
      'Building Operation Manual',
      'House Rules & Renovation Guidelines',
      'Statutory Compliance (Malaysia Strata Management Act)',
      'Customer Service Management',
      'Routine & Preventive Maintenance',
      'Contractor & Service Provider Appointment',
      'Daily Operations Management',
      'Insurance Administration',
      'Mechanical & Electrical (M&E) Oversight',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: 'account-financial',
    title: 'Account & Financial Service',
    summary:
      'Transparent and structured financial management for JMB, MC, and property owners.',
    tagline: 'Transparency · Accuracy · Financial Stability',
    items: [
      'Procurement Process Management',
      'Budget Planning & Control',
      'Income & Expenditure Tracking',
      'Credit Control & Arrears Management',
      'Financial Health Check',
      'Account Reconciliation & Issue Resolution',
      'Audit Preparation & Financial Reporting',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    id: 'valuation',
    title: 'Valuation Advisory',
    summary:
      'Professional property valuation services to support informed financial and investment decisions.',
    tagline: 'Accurate Valuation · Strategic Insight · Investment Confidence',
    items: [
      'Insurance Valuation',
      'Sale & Acquisition',
      'Mortgage & Financing',
      'Compulsory Land Acquisition',
      'Corporate Exercises',
      'Financial Reporting & Accounting',
      'Internal Asset Management',
      'Investment ROI Analysis',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    id: 'estate-agency',
    title: 'Estate Agency Service',
    summary:
      'End-to-end support for property sales and leasing across residential and commercial segments.',
    tagline: 'Market Reach · Fast Transactions · Trusted Advisory',
    items: [
      'Terrace House',
      'Semi-Detached House',
      'Bungalow',
      'Condominium & Apartment',
      'Villas',
      'Shop Offices',
      'Factories',
      'Land',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    id: 'home-care',
    title: 'Home Care Services',
    summary:
      'Reliable maintenance and repair services for homeowners and residents.',
    tagline: 'Fast Response · Reliable Service · Everyday Convenience',
    items: [
      'Pipe Burst & Plumbing Repairs',
      'Leakage Repair',
      'Electrical Tripping & Troubleshooting',
      'Painting Works',
      'Lighting & Ceiling Fan Installation',
      'Renovation Works',
      'Air-Conditioning Servicing',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
]

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(null)

  const toggleService = (id: string) => {
    setOpenService((prev) => (prev === id ? null : id))
  }

  return (
    <section id="services" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold mb-4">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
            Guided by our philosophy of integrity, professionalism, and continuous innovation, we
            deliver comprehensive property management solutions across Malaysia.
          </p>
        </ScrollReveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const isOpen = openService === service.id
            return (
              <ScrollReveal key={service.id} delay={(Math.min(i % 3, 4) as 0 | 1 | 2 | 3 | 4)}>
                <div
                  className={`bg-white rounded-sm border transition-all duration-300 h-full flex flex-col ${
                    isOpen
                      ? 'border-gold shadow-lg'
                      : 'border-gray-100 hover:border-gold/40 hover:shadow-md'
                  }`}
                >
                  {/* Card header */}
                  <div className="p-6">
                    <div
                      className={`w-14 h-14 rounded-sm flex items-center justify-center mb-5 transition-colors duration-300 ${
                        isOpen ? 'bg-gold text-primary' : 'bg-primary text-gold'
                      }`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.summary}</p>
                  </div>

                  {/* Expandable items */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? '1200px' : '0' }}
                  >
                    <div className="px-6 pb-2 border-t border-gray-100">
                      <ul className="mt-4 space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600">
                            <svg
                              className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tagline + toggle */}
                  <div className="mt-auto p-6 pt-0">
                    {isOpen && (
                      <div className="mb-4 bg-primary/5 rounded-sm p-3 border border-primary/10">
                        <p className="text-[11px] text-primary/70 font-medium text-center tracking-wide">
                          {service.tagline}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => toggleService(service.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm border ${
                        isOpen
                          ? 'border-gold text-gold hover:bg-gold hover:text-primary'
                          : 'border-primary/20 text-primary hover:border-gold hover:text-gold'
                      }`}
                    >
                      {isOpen ? 'Show Less' : 'Learn More'}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
