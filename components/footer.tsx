"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<string | null>(null)
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success' | 'error'>("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus(null)
    setButtonState('loading')
    if (!email) return
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubscribeStatus('Subscribed successfully!')
        setButtonState('success')
        setEmail("")
      } else {
        const data = await res.json()
        setSubscribeStatus(data.error || 'Subscription failed.')
        setButtonState('error')
      }
    } catch {
      setSubscribeStatus('Subscription failed.')
      setButtonState('error')
    }
  }

  // Reset button state when user focuses email input after result
  const handleEmailFocus = () => {
    if (buttonState !== 'idle') {
      setButtonState('idle')
      setSubscribeStatus(null)
    }
  }

  const footerLinks = [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "About us", href: "/about-us" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blog", href: "https://blog.devstract.site", target: "_blank", rel: "noopener noreferrer" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576742266650", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/devstract", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/devstract/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/devstract", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@DevstractStudio", label: "YouTube" },
  ]

  return (
    <footer className="bg-white px-6 md:px-20 lg:px-40 mt-16">
      {/* Top Section */}
      <div className="px-0 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Footer Links Columns (all in one col-span-2) */}
            <div className="lg:col-span-2 flex flex-row items-center gap-8">
              <div className="flex flex-col items-center md:items-start w-full">
                <h2 className="text-sm font-normal text-[#B4B4B4] mb-6 -mt-8">Links</h2>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center md:w-full mb-10 sm:mb-0">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-base font-normal text-black hover:text-purple-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Subscribe Card (right column) */}
            <div className="flex justify-center lg:justify-end">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <label htmlFor="email" className="absolute left-5 -top-3 bg-white px-1 text-sm font-normal text-[#202020]">Subscribe to Newsletter</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleEmailFocus}
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 pr-28 bg-white border border-gray-200 rounded-full text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={buttonState === 'loading' || buttonState === 'success' || buttonState === 'error'}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 border border-black rounded-full transition-colors duration-200 flex items-center justify-center bg-white ${buttonState === 'loading' || buttonState === 'success' || buttonState === 'error' ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                    style={{ width: 32, height: 32 }}
                  >
                    {/* Arrow animation */}
                    {buttonState === 'idle' && (
                      <img
                        src="/media/small_arrow.svg"
                        alt="Submit"
                        className="w-4 h-4 transform -rotate-45 transition-transform duration-500"
                        style={{ filter: 'brightness(0)' }}
                      />
                    )}
                    {/* Loading spinner */}
                    {buttonState === 'loading' && (
                      <span className="w-4 h-4 flex items-center justify-center">
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="7" stroke="#5A44FF" strokeWidth="2" fill="none" opacity="0.2" />
                          <path d="M8 1a7 7 0 0 1 7 7" stroke="#5A44FF" strokeWidth="2" fill="none" />
                        </svg>
                      </span>
                    )}
                    {/* Success tick animation */}
                    {buttonState === 'success' && (
                      <span className="w-4 h-4 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="7" stroke="#5A44FF" strokeWidth="2" fill="none" opacity="0.2" />
                          <path d="M4 8l3 3 5-5" stroke="#5A44FF" strokeWidth="2" fill="none" className="animate-[tick_0.5s_ease]" />
                        </svg>
                      </span>
                    )}
                    {/* Error cross animation */}
                    {buttonState === 'error' && (
                      <span className="w-4 h-4 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="7" stroke="#D32F2F" strokeWidth="2" fill="none" opacity="0.2" />
                          <path d="M5 5l6 6M11 5l-6 6" stroke="#D32F2F" strokeWidth="2" fill="none" className="animate-[cross_0.5s_ease]" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
                {/* Status message below input, only for error */}
                {buttonState === 'error' && subscribeStatus && (
                  <div className="text-xs mt-2 text-center" style={{ color: '#D32F2F' }}>{subscribeStatus}</div>
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
              <a href="/terms-of-service" className="text-[#0A142F] hover:text-black transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="/privacy-policy" className="text-[#0A142F] hover:text-black transition-colors duration-200 text-sm">
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-4 h-4" style={{ color: 'white', fill: 'black' }} />
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
