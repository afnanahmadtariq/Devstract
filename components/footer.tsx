"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<string | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus(null)
    if (!email) return
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubscribeStatus('Subscribed successfully!')
        setEmail("")
      } else {
        const data = await res.json()
        setSubscribeStatus(data.error || 'Subscription failed.')
      }
    } catch {
      setSubscribeStatus('Subscription failed.')
    }
  }

  const footerLinks = ["Home", "About us", "Services", "Testimonials", "FAQs"];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-white px-6 md:px-20 lg:px-40">
      {/* Top Section */}
      <div className="px-0 md:px-6 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Footer Links Columns (all in one col-span-2) */}
            <div className="lg:col-span-2 flex flex-row gap-8 items-center">
              <div className="flex flex-col items-start">
                <h2 className="text-sm font-normal text-[#B4B4B4] mb-2">Links</h2>
                <div className="flex flex-row gap-8 items-center">
                  {footerLinks.map((heading) => (
                    <h3 key={heading} className="text-base font-normal text-black">{heading}</h3>
                  ))}
                </div>
              </div>
            </div>

            {/* Subscribe Card (right column) */}
            <div className="flex justify-center lg:justify-end">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <label htmlFor="email" className="absolute left-4 -top-2 bg-white px-1 text-xs font-medium text-[#202020]">Subscribe to Newsletter</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 pr-28 bg-white border border-gray-200 rounded-full text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 border border-black rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <img src="/media/small_arrow.svg" alt="Submit" className="w-4 h-4 transform -rotate-45" style={{ filter: 'brightness(0)' }} />
                  </button>
                </div>
                {subscribeStatus && (
                  <div className="text-xs mt-2 text-center" style={{ color: subscribeStatus.includes('success') ? '#5A44FF' : '#D32F2F' }}>{subscribeStatus}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <hr className="border-black/[0.06]" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center gap-6 md:gap-0">
            {/* Legal Links */}
            <div className="flex items-center justify-center space-x-8">
              <a href="#" className="text-[#0A142F] hover:text-black transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-[#0A142F] hover:text-black transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center">
              <img src="/images/logo.svg" alt="Logo" className="w-12 h-12 mr-3" />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 border border-black/[0.1] rounded-full flex items-center justify-center transition-colors duration-200 group hover:bg-gray-100"
                  >
                    <IconComponent className="w-4 h-4 text-black" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
