"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ArrowUp from "@/components/icons/ArrowUp"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down past the hero section
      // Assuming hero section is roughly 100vh, we'll show it after scrolling 80vh
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        backgroundImage: "linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)",
        backgroundPosition: "center center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  )
}
