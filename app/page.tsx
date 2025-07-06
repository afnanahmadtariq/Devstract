import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ScrollTextSection from "@/components/scroll-text-section"
import DevstractSection from "@/components/devstract-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div
        className="w-full px-2 sm:px-4 md:px-0"
        style={{
          backgroundColor: "#0A0A0A",
          backgroundImage: "url('/media/gradient.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navigation />
        <HeroSection />
      </div>
      <ScrollTextSection />
      <ServicesSection />
      <DevstractSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
