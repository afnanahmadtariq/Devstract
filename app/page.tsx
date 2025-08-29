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

  return (
    <main className="min-h-screen bg-white">
      <Navigation mainpage />
      <HeroSection />
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
