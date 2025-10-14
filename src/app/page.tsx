import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/sections/hero'
import MapSection from '@/components/sections/map'
import AccommodationSection from '@/components/sections/accommodation'
import FaqSection from '@/components/sections/faq'
import RsvpSection from '@/components/sections/rsvp'

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <main className="flex-1">
        <Header />
        <HeroSection />
        <MapSection />
        <AccommodationSection />
        <FaqSection />
        <RsvpSection />
        <Footer />
      </main>
    </div>
  )
}
