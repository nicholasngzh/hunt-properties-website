import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Chairman from '@/components/Chairman'
import Culture from '@/components/Culture'
import People from '@/components/People'
import Services from '@/components/Services'
import Licenses from '@/components/Licenses'
import Testimonials from '@/components/Testimonials'
import Careers from '@/components/Careers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Chairman />
      <Culture />
      <People />
      <Services />
      <Licenses />
      <Testimonials />
      <Careers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
