"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "../hooks/use-toast"
import { Toaster } from "./ui/toaster"
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { BsInstagram, BsTwitterX } from "react-icons/bs"
import { GiCheckMark } from "react-icons/gi"
import { MdOutlineError } from "react-icons/md"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success' | 'error'>("idle")
  const { toast } = useToast()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setButtonState('loading')
    if (!email) return
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setButtonState('success')
        setEmail("")
        toast({
          title: "Success!",
          description: "You have subscribed successfully.",
          variant: "default",
        })
      } else {
        const data = await res.json()
        setButtonState('error')
        toast({
          title: "Error",
          description: data.error || 'Subscription failed.',
          variant: "destructive",
        })
      }
    } catch {
      setButtonState('error')
      toast({
        title: "Error",
        description: 'Subscription failed.',
        variant: "destructive",
      })
    }
  }

  // Reset button state when user focuses email input after result
  const handleEmailFocus = () => {
    if (buttonState !== 'idle') {
      setButtonState('idle')
    }
  }

  const footerLinks = [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "About us", href: "/about-us" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blog", href: "/blog" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61576742266650", label: "Facebook" },
    { icon: BsTwitterX, href: "https://x.com/devstract", label: "Twitter/X" },
    { icon: BsInstagram, href: "https://www.instagram.com/devstract/", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/devstract", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://www.youtube.com/@DevstractStudio", label: "YouTube" },
  ]

  return (
    <>
      <Toaster />
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
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-base font-normal text-black hover:text-purple-600 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
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
                      className="w-full px-6 py-3 pr-28 bg-white border border-gray-200 rounded-full text-black placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:z-10 text-sm"
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
                        <span className="w-5 h-5 flex items-center justify-center">
                          <GiCheckMark size={50} color="#5A44FF" />
                        </span>
                      )}
                      {/* Error cross animation */}
                      {buttonState === 'error' && (
                        <span className="w-7 h-7 flex items-center justify-center">
                          <MdOutlineError size={50} color="#D32F2F" />
                        </span>
                      )}
                    </button>
                  </div>
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
                <a href="/terms-of-service" className="text-[#0A142F] hover:text-black transition-colors duration-200 text-sm underline-animation">
                  Terms of Service
                </a>
                <a href="/privacy-policy" className="text-[#0A142F] hover:text-black transition-colors duration-200 text-sm underline-animation">
                  Privacy Policy
                </a>
                <a href="/attributions" className="text-[#0A142F] hover:text-black transition-colors duration-200 text-sm underline-animation">
                  Credits
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
                      className="w-9 h-9 border border-black/[0.1] rounded-full flex items-center justify-center transition-colors duration-200 group hover:bg-gray-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-4 h-4" color="black" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
