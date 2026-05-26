import TopBar from '@/components/TopBar'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Brands from '@/components/Brands'
import About from '@/components/About'
import B2B from '@/components/B2B'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ClientScripts from '@/components/ClientScripts'

export default function Home() {
  return (
    <>
      <TopBar />
      <Navigation />
      <Hero />
      <Products />
      <Features />
      <Brands />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <ClientScripts />
    </>
  )
}