'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface SubService {
  title: string
  items: string[]
}

interface Service {
  id: string
  title: string
  summary: string
  commitment: string
  subServices: SubService[]
  icon: React.ReactNode
}

const SERVICES: Service[] = [
  {
    id: 'engineering',
    title: 'Engineering & Facilities Management',
    summary:
      'End-to-end management of building systems and facilities, ensuring safety, efficiency, and long-term asset value.',
    commitment: 'Systematic Management · Energy Efficiency · Operational Reliability · Asset Value Enhancement',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    subServices: [
      {
        title: 'Pre-Management Technical Advisory',
        items: [
          'Review of building systems and equipment planning',
          'Tender specification consultation',
          'Focus on efficient future management',
          'Energy-saving operations planning',
          'Ease of maintenance and user-friendly design',
        ],
      },
      {
        title: 'Project Takeover & Handover',
        items: [
          'Structured takeover planning',
          'Discipline-based inspection standards',
          'Defect identification and rectification follow-up',
          'Systematic commissioning and acceptance',
        ],
      },
      {
        title: 'Facilities & Equipment Management',
        items: [
          'Technical supervision of all building services systems',
          'Preventive maintenance planning',
          'Regular performance inspections',
          'Energy consumption monitoring',
          'Repair, replacement, and lifecycle technical audits',
        ],
      },
      {
        title: 'Technical Training & Standardisation',
        items: [
          'Professional skills training for on-site engineering teams',
          'Standard operating procedures and technical manuals',
          'A structured engineering and equipment management system',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Order Management',
    summary:
      "Structured, professional, and service-oriented security solutions tailored for Malaysia's strata communities, commercial properties, and mixed developments.",
    commitment: 'Secure Living · Professional Compliance · Strata Harmony · Resident-Centric Service',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    subServices: [
      {
        title: 'Safe & Gated Community Protection',
        items: [
          'Guardhouse & access control management',
          'Visitor registration system',
          'Access card / vehicle sticker control',
          '24-hour patrol and surveillance',
          'CCTV monitoring & control room coordination',
        ],
      },
      {
        title: 'Proactive Risk Prevention',
        items: [
          'Identify security vulnerabilities in common areas',
          'Detect suspicious activities early',
          'Advise JMB / MC on preventive measures',
          'Implement risk control procedures',
        ],
      },
      {
        title: 'Traffic & Facility Order Management',
        items: [
          'Internal traffic flow control',
          'Proper use of common property',
          'Enforcement of house rules & by-laws',
          'Crowd control during events and peak hours',
        ],
      },
      {
        title: 'Emergency & Crisis Response',
        items: [
          'Fire and alarm activation response',
          'Break-ins and public disturbance management',
          'Lift entrapment coordination',
          'Flood and other emergency response',
          'Notification to Police, BOMBA, Ambulance',
        ],
      },
      {
        title: 'Community-Focused Service',
        items: [
          'Assist residents, visitors, and parcel handling',
          'Support the elderly and families',
          'Participate in community programmes',
          'Build positive daily interaction with residents',
        ],
      },
    ],
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Greenery Services',
    summary:
      'Professional landscape maintenance, indoor plant services, and nursery cultivation, enhancing the environmental quality and aesthetic value of properties under our management.',
    commitment: 'Green Environment · Professional Care · Sustainable Landscapes · Enhanced Property Value',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    subServices: [
      {
        title: 'Landscape Maintenance',
        items: [
          'Lawn cutting and trimming',
          'Plant shaping and pruning',
          'Irrigation and fertilization',
          'Soil loosening and weed control',
          'Pest and disease management',
          'Professional gardening machinery (mowers, trimmers, cutters)',
        ],
      },
      {
        title: 'Indoor Plant Rental & Maintenance',
        items: [
          'Selection of suitable indoor shade plants',
          'Professional placement and design',
          'Regular watering and fertilization',
          'Leaf cleaning and plant health care',
          'Pest and disease prevention',
        ],
      },
      {
        title: 'Nursery & Plant Supply',
        items: [
          'Dedicated nursery grounds and shaded cultivation areas',
          'Large-scale planting bases for landscape trees and plants',
          'Professional propagation: seeding, grafting, cutting',
          'Wide range of landscape species for internal and external supply',
        ],
      },
    ],
  },
]

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(null)
  const [openSubservice, setOpenSubservice] = useState<string | null>(null)

  const toggleService = (id: string) => {
    setOpenService((prev) => (prev === id ? null : id))
    setOpenSubservice(null)
  }

  const toggleSubservice = (key: string) => {
    setOpenSubservice((prev) => (prev === key ? null : key))
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
              <ScrollReveal key={service.id} delay={(i as 0 | 1 | 2)}>
                <div
                  className={`bg-white rounded-sm border transition-all duration-300 h-full flex flex-col ${
                    isOpen
                      ? 'border-gold shadow-lg'
                      : 'border-gray-100 hover:border-gold/40 hover:shadow-md'
                  }`}
                >
                  {/* Card header */}
                  <div className="p-6">
                    {/* Icon */}
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

                  {/* Expandable sub-services */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? '2000px' : '0' }}
                  >
                    <div className="px-6 pb-2 border-t border-gray-100">
                      <div className="mt-4 space-y-2">
                        {service.subServices.map((sub) => {
                          const subKey = `${service.id}-${sub.title}`
                          const isSubOpen = openSubservice === subKey
                          return (
                            <div key={sub.title} className="border border-gray-100 rounded-sm overflow-hidden">
                              <button
                                onClick={() => toggleSubservice(subKey)}
                                className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-primary hover:bg-primary-50 transition-colors"
                                aria-expanded={isSubOpen}
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rotate-45 bg-gold shrink-0" />
                                  {sub.title}
                                </span>
                                <svg
                                  className={`w-4 h-4 text-gold shrink-0 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              <div
                                className="overflow-hidden transition-all duration-300"
                                style={{ maxHeight: isSubOpen ? '600px' : '0' }}
                              >
                                <ul className="px-4 pb-4 pt-2 space-y-1.5">
                                  {sub.items.map((item) => (
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
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Commitment banner + toggle button */}
                  <div className="mt-auto p-6 pt-0">
                    {isOpen && (
                      <div className="mb-4 bg-primary/5 rounded-sm p-3 border border-primary/10">
                        <p className="text-[11px] text-primary/70 font-medium text-center tracking-wide">
                          {service.commitment}
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
