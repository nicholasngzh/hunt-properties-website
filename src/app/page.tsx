import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Chairman from '@/components/Chairman'
import Culture from '@/components/Culture'
import Services from '@/components/Services'
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
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
