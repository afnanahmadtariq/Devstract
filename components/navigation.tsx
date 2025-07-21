"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

interface NavigationProps {
  mainpage?: boolean;
  disableContact?: boolean;
}

export default function Navigation({ mainpage = false, disableContact = false }: NavigationProps) {
  const [activeMenuIdx, setActiveMenuIdx] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setShowNav(true)
  }, [])

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
    <>
      <nav className={`w-full px-8 py-8 transition-opacity duration-3000 ${showNav ? 'animate-navbar-down' : 'opacity-0'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" passHref>
              <div className={!mainpage ? "w-14 h-14 flex items-center justify-center" : "w-14 h-14 bg-white/[8%] backdrop-blur rounded-full flex items-center justify-center shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.13),inset_1px_1px_4px_rgba(255,255,255,0.18)]"}>
                <Image
                  src="/images/logo.svg"
                  alt="Devstract Logo"
                  width={32}
                  height={32}
                  className={
                    !mainpage
                      ? "cursor-pointer" 
                      : "cursor-pointer filter brightness-0 invert"
                  }
                />
              </div>
            </Link>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#home" className={!mainpage ? "text-black/50 dark:text-white hover:text-black font-normal transition-colors text-base" : "text-white/50 hover:text-white font-normal transition-colors text-base"}>
                Home
              </Link>
              <Link href="/#services" className={!mainpage ? "text-black/50 dark:text-white/80 hover:text-black font-normal transition-colors text-base" : "text-white/50 hover:text-white font-normal transition-colors text-base"}>
                Services
              </Link>
              <Link href="/about-us" className={!mainpage ? "text-black/50 dark:text-white/80 hover:text-black font-normal transition-colors text-base" : "text-white/50 hover:text-white font-normal transition-colors text-base"}>
                About Us
              </Link>
              <Link href="/#testimonials" className={!mainpage ? "text-black/50 dark:text-white/80 hover:text-black font-normal transition-colors text-base" : "text-white/50 hover:text-white font-normal transition-colors text-base"}>
                Testimonials
              </Link>
              <Link href="/faqs" className={!mainpage ? "text-black/50 dark:text-white/80 hover:text-black font-normal transition-colors text-base" : "text-white/50 hover:text-white font-normal transition-colors text-base"}>
                FAQs
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={!mainpage ? "md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-black/5 dark:bg-white/10" : "md:hidden flex items-center justify-center w-12 h-12 rounded-full filter brightness-0 invert bg-white/10"}
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
          {disableContact ? (
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
      </nav>

      {/* Mobile Menu Overlay rendered via Portal */}
      {(menuOpen || menuClosing) && typeof window !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/10 flex items-center justify-center">
          <div
            ref={menuRef}
            className={"relative w-[90vw] h-[90vh] bg-white dark:bg-[#18182a] rounded-2xl flex flex-col justify-start shadow-2xl px-16 py-12"
              + (menuClosing ? " animate-slide-out-right" : " animate-slide-in-right")
            }
          >
            {/* Heading */}
            <div className="mb-8">
              <span className="text-[#838383] dark:text-white text-xs font-normal">MENU</span>
            </div>
            {/* Menu Options */}
            <nav className="flex flex-col gap-6 flex-1">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/about-us", label: "About Us" },
                { href: "/#testimonials", label: "Testimonials" },
                { href: "/contactus", label: "Contact Us" }
              ].map((item, idx) => {
                const isActive = activeMenuIdx === idx;
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between w-full text-left text-2xl font-normal py-2 ${isActive ? '' : 'text-black/50 dark:text-white/80'}`}
                      style={isActive ? {
                        background: "var(--primary-gradient)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent"
                      } : {}}
                      onClick={() => {
                        setActiveMenuIdx(idx);
                        setTimeout(() => {
                          setMenuOpen(false);
                          setActiveMenuIdx(-1);
                        }, 100);
                      }}
                    >
                      <span>{item.label}</span>
                      <span className="ml-2">
                        {isActive ? (
                          <Image src="/media/small_arrow.svg" alt="arrow" width={20} height={20} style={{
                            transform: "rotate(-45deg)",
                            filter: "none",
                            background: "var(--primary-gradient)",
                            WebkitMaskImage: "url('/media/small_arrow.svg')",
                            maskImage: "url('/media/small_arrow.svg')",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat"
                          }} />
                        ) : (
                          <Image src="/media/small_arrow.svg" alt="arrow" width={20} height={20} style={{
                            transform: "rotate(-45deg)",
                            filter: "brightness(0.5) invert(1)"
                          }} />
                        )}
                      </span>
                    </Link>
                    <div
                      className="absolute left-0 right-0 bottom-0 h-px"
                      style={isActive ? {
                        background: "var(--primary-gradient)"
                      } : {
                        background: "#0003"
                      }}
                    ></div>
                  </div>
                )
              })}
            </nav>
            {/* Cross Button at Bottom */}
            <div className="mt-8 mb-4 flex justify-center">
              <button
                onClick={handleCloseMenu}
                aria-label="Close menu"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F2F2F2] border border-[#DBDBDB]"
              >
                <Image src="/media/cross.svg" alt="Close" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}