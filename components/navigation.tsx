"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

interface NavigationProps {
  contactPage?: boolean;
}

export default function Navigation({ contactPage = false }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleCloseMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Handle menu close with animation
  function handleCloseMenu() {
    setMenuClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setMenuClosing(false)
    }, 300) // match animation duration
  }

  return (
    <nav className="w-full px-8 py-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className={contactPage ? "w-14 h-14 flex items-center justify-center" : "w-14 h-14 bg-white/[8%] backdrop-blur rounded-full flex items-center justify-center shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.13),inset_1px_1px_4px_rgba(255,255,255,0.18)]"}>
            <Image
              src="/images/logo.svg"
              alt="Devstract Logo"
              width={32}
              height={32}
              className={
                contactPage
                  ? "cursor-pointer" 
                  : "cursor-pointer filter brightness-0 invert"
              }
              onClick={() => {
                window.location.href = "/"
              }}
            />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#home" className={contactPage ? "text-black dark:text-white hover:text-purple-400 font-medium transition-colors text-sm" : "text-white hover:text-purple-400 font-medium transition-colors text-sm"}>
              Home
            </Link>
            <Link href="/#services" className={contactPage ? "text-black/80 dark:text-white/80 hover:text-purple-400 font-medium transition-colors text-sm" : "text-white/80 hover:text-purple-400 font-medium transition-colors text-sm"}>
              Services
            </Link>
            <Link href="#blog" className={contactPage ? "text-black/80 dark:text-white/80 hover:text-purple-400 font-medium transition-colors text-sm" : "text-white/80 hover:text-purple-400 font-medium transition-colors text-sm"}>
              Blog
            </Link>
            <Link href="/#faqs" className={contactPage ? "text-black/80 dark:text-white/80 hover:text-purple-400 font-medium transition-colors text-sm" : "text-white/80 hover:text-purple-400 font-medium transition-colors text-sm"}>
              FAQs
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={contactPage ? "md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-black/10 dark:bg-white/10" : "md:hidden flex items-center justify-center w-12 h-12 rounded-full filter brightness-0 invert bg-white/10"}
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
        {contactPage ? (
          <span className="hidden md:inline-flex px-6 py-5 font-syne font-light rounded-full border-0 text-black dark:text-white bg-transparent cursor-default opacity-70 select-none">
            Contact Us
          </span>
        ) : (
          <Link href="/contactus" passHref legacyBehavior>
            <Button className="contact-button text-white px-6 py-5 font-syne font-light rounded-full border-0 hidden md:inline-flex">
              Contact Us
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {(menuOpen || menuClosing) && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-end">
          <div
            ref={menuRef}
            className={
              (contactPage
                ? "w-72 max-w-full h-full bg-white dark:bg-[#18182a] flex flex-col justify-between shadow-xl "
                : "w-72 max-w-full h-full bg-[#18182a] flex flex-col justify-between shadow-xl ") +
              (menuClosing ? " animate-slide-out-right" : " animate-slide-in-right")
            }
          >
            <div>
              <div className="flex justify-end p-4">
                <button
                  className={contactPage ? "text-black dark:text-white text-2xl" : "text-white text-2xl"}
                  onClick={handleCloseMenu}
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              <nav className="flex flex-col items-center px-8 space-y-10 mt-8">
                <Link href="/#home" className={contactPage ? "text-black dark:text-white hover:text-purple-400 font-medium transition-colors text-lg" : "text-white hover:text-purple-400 font-medium transition-colors text-lg"} onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/#services" className={contactPage ? "text-black/80 dark:text-white/80 hover:text-purple-400 font-medium transition-colors text-lg" : "text-white/80 hover:text-purple-400 font-medium transition-colors text-lg"} onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
                <Link href="#blog" className={contactPage ? "text-black/80 dark:text-white/80 hover:text-purple-400 font-medium transition-colors text-lg" : "text-white/80 hover:text-purple-400 font-medium transition-colors text-lg"} onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/#faqs" className={contactPage ? "text-black/80 dark:text-white/80 hover:text-purple-400 font-medium transition-colors text-lg" : "text-white/80 hover:text-purple-400 font-medium transition-colors text-lg"} onClick={() => setMenuOpen(false)}>
                  FAQs
                </Link>
              </nav>
            </div>
            <div className="p-8">
              {contactPage ? (
                <span className="w-full px-6 py-5 font-syne font-light rounded-full border-0 text-black dark:text-white bg-transparent cursor-default opacity-70 select-none block text-center">
                  Contact Us
                </span>
              ) : (
                <Link href="/contactus" passHref legacyBehavior>
                  <Button className="contact-button w-full text-white px-6 py-5 font-syne font-light rounded-full border-0">
                    Contact Us
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}