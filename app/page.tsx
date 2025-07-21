"use client"

import React, { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ScrollTextSection from "@/components/scroll-text-section"
import DevstractSection from "@/components/devstract-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"

export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    setImgLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full px-2 sm:px-4 md:px-0" style={{ backgroundColor: "#0A0A0A" }}>
        {/* Gradient SVG as separate img, absolutely positioned */}
        <img
          src="/media/gradient.svg"
          alt="Gradient Background"
          className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-1000 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Navigation mainpage/>
          <HeroSection />
        </div>
      </div>
      <ScrollTextSection />
      <ServicesSection />
      <DevstractSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}
