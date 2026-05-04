'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#chairman', label: "Chairman's Message" },
  { href: '#culture', label: 'Our Culture' },
  { href: '#people', label: 'Our People' },
  { href: '#services', label: 'Services' },
  { href: '#licenses', label: 'Licenses' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))

    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('#mobile-menu') && !target.closest('#hamburger')) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative text-sm font-medium transition-colors duration-200 group pb-1 ${
                      scrolled
                        ? isActive
                          ? 'text-primary'
                          : 'text-gray-600 hover:text-primary'
                        : isActive
                        ? 'text-gold'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Hamburger button */}
          <button
            id="hamburger"
            className="md:hidden p-2 -mr-2 flex flex-col gap-[5px] w-9 items-end"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-primary' : 'bg-white'
              } ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-primary' : 'bg-white'
              } ${menuOpen ? 'opacity-0 w-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-primary' : 'bg-white'
              } ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
          } bg-white`}
        >
          <div className="py-3">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '')
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === id
                      ? 'text-primary bg-primary-50 border-l-2 border-gold'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {label}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
