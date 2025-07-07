"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
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
    <footer className="bg-white">
      {/* Top Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Footer Links Columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-base font-semibold mb-6 text-black">{heading}</h3>
                <ul className="space-y-3">
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

            {/* Subscribe Card */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl p-6 bg-black/[0.03]">
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
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/images/logo.svg" alt="Logo" className="w-12 h-12 mr-3" />
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-8">
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
            <div className="flex items-center space-x-4">
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
