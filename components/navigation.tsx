"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export default function Navigation() {
  const [rotating, setRotating] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full px-8 py-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="w-14 h-14 bg-white/[8%] backdrop-blur rounded-full flex items-center justify-center shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.13),inset_1px_1px_4px_rgba(255,255,255,0.18)]">
            <Image
              src="/images/logo.svg"
              alt="Devstract Logo"
              width={32}
              height={32}
              className={`filter brightness-0 invert cursor-pointer transition-transform duration-500 ${rotating ? "rotate-[-360deg]" : ""}`}
              onClick={() => {
                setRotating(true)
                setTimeout(() => {
                  window.location.reload()
                }, 500)
              }}
              style={{ willChange: "transform" }}
            />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-white hover:text-purple-400 font-medium transition-colors text-sm">
              Home
            </Link>
            <Link href="#services" className="text-white/80 hover:text-purple-400 font-medium transition-colors text-sm">
              Services
            </Link>
            <Link href="#blog" className="text-white/80 hover:text-purple-400 font-medium transition-colors text-sm">
              Blog
            </Link>
            <Link href="#faqs" className="text-white/80 hover:text-purple-400 font-medium transition-colors text-sm">
              FAQs
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/10"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="7" x2="19" y2="7" stroke="currentColor" strokeLinecap="round"/>
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeLinecap="round"/>
            <line x1="5" y1="17" x2="19" y2="17" stroke="currentColor" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Contact Us Button (Desktop) */}
        <Button className="contact-button text-white px-6 py-5 font-syne font-light rounded-full border-0 hidden md:inline-flex">
          Contact Us
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-end">
          <div className="w-72 max-w-full h-full bg-[#18182a] flex flex-col justify-between shadow-xl animate-slide-in-right">
            <div>
              <div className="flex justify-end p-4">
                <button
                  className="text-white text-2xl"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              <nav className="flex flex-col items-start px-8 space-y-6 mt-8">
                <Link href="#home" className="text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href="#services" className="text-white/80 text-lg font-medium" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
                <Link href="#blog" className="text-white/80 text-lg font-medium" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="#faqs" className="text-white/80 text-lg font-medium" onClick={() => setMenuOpen(false)}>
                  FAQs
                </Link>
              </nav>
            </div>
            <div className="p-8">
              <Button className="contact-button w-full text-white px-6 py-5 font-syne font-light rounded-full border-0">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Animation for mobile menu */}
      <style jsx global>{`
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </nav>
  )
}