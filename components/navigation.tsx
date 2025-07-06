"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export default function Navigation() {
  const [rotating, setRotating] = useState(false)

  return (
    <nav className="w-full px-6 py-6">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="w-14 h-14 bg-white/[8%] backdrop-blur rounded-full flex items-center justify-center shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.13),inset_1px_1px_4px_rgba(255,255,255,0.18)]">
            <Image
              src="/images/logo.svg"
              alt="Devstract Logo"
              width={32}
              height={32}
              // className="filter brightness-0 invert"
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

          {/* Navigation Links */}
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

        {/* Contact Us Button */}
        <Button className="contact-button text-white px-6 py-2 font-medium rounded-full border-0">
          Contact Us
        </Button>
      </div>
    </nav>
  )
}