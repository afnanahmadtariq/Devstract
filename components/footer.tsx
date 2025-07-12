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

  const footerLinks = {
    Product: ["Overview", "Features", "Solutions", "Tutorials", "Pricing"],
    Information: ["About Us", "Careers", "Press", "News", "Media Kit"],
    Company: ["About", "Blog", "Jobs", "Press", "Partners"],
  }

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
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading}>
                  <h3 className="text-base font-semibold mb-3 text-black">{heading}</h3>
                  <ul className="space-y-1">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Subscribe Card (right column) */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl p-6 md:p-10 bg-black/[0.03] w-full max-w-xs">
                <h3 className="text-base font-semibold mb-4 text-black">Subscribe</h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 pr-12 bg-white border border-gray-200 rounded-full text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
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
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Get the latest updates on our services, industry insights, and exclusive offers delivered to your
                  inbox.
                </p>
              </div>
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
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center flex-1 justify-start md:justify-start w-full md:w-auto">
              <img src="/images/logo.svg" alt="Logo" className="w-10 h-10 mr-3" />
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-center space-x-8 w-full md:w-auto order-2 md:order-none">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                Cookies
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center flex-1 justify-end md:justify-end space-x-4 w-full md:w-auto">
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
