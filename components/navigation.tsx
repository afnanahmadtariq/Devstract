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
  const [centerActiveIdx, setCenterActiveIdx] = useState<number>(0)
  const [highlight, setHighlight] = useState<{ left: number; width: number; height: number } | null>(null)
  const centerNavRef = useRef<HTMLDivElement>(null)
  const centerLinkRefs = useRef<(HTMLAnchorElement | null)[]>([])

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

  useEffect(() => {
    if (menuOpen || menuClosing) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen, menuClosing]);

  function handleCloseMenu() {
    setMenuClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setMenuClosing(false)
    }, 300) 
  }

  useEffect(() => {
    if (!mainpage) return
    const update = () => {
      const container = centerNavRef.current
      const link = centerLinkRefs.current[centerActiveIdx]
      if (container && link) {
        const cRect = container.getBoundingClientRect()
        const lRect = link.getBoundingClientRect()
        setHighlight({
          left: lRect.left - cRect.left,
          width: lRect.width,
          height: lRect.height,
        })
      }
    }

    // Defer to next frame to ensure layout is settled
    const raf = requestAnimationFrame(update)
    const ro = new ResizeObserver(() => update())
    if (centerNavRef.current) ro.observe(centerNavRef.current)
    window.addEventListener('resize', update)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [mainpage, centerActiveIdx, showNav])

  return (
    <>
      <nav className={`w-full px-8 py-8 transition-opacity duration-3000 ${mainpage ? (showNav ? 'animate-navbar-down absolute z-10' : 'opacity-0') : ''}`}>
        <div className={`relative flex items-center ${mainpage ? 'justify-between w-full px-4 pt-2' : 'justify-between'}`}>
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
            {/* Navigation Links (Desktop) - only inside left group when NOT on main page */}
            {!mainpage && (
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-black/50 dark:text-white hover:text-black font-normal transition-colors text-base">
                  Home
                </Link>
                <Link href="/#services" className="text-black/50 hover:text-black font-normal transition-colors text-base">
                  Services
                </Link>
                <Link href="/#testimonials" className="text-black/50 hover:text-black font-normal transition-colors text-base">
                  Testimonials
                </Link>
                <Link href="/about-us" className="text-black/50 hover:text-black font-normal transition-colors text-base">
                  About Us
                </Link>
                <Link href="/faqs" className="text-black/50 hover:text-black font-normal transition-colors text-base">
                  FAQs
                </Link>
              </div>
            )}
          </div>

          {/* Centered Navigation Links (Desktop) - only on main page */}
          {mainpage && (
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 hidden md:flex">
              <div
                ref={centerNavRef}
                className={`relative pointer-events-auto flex items-center space-x-1 bg-white/[8%] backdrop-blur shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.13),inset_1px_1px_4px_rgba(255,255,255,0.18)] px-3 py-3 rounded-full`}
                onMouseLeave={() => setCenterActiveIdx(0)}
              >
                {highlight && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ease-out shadow-sm z-0"
                    style={{ left: highlight.left, width: highlight.width, height: highlight.height }}
                    aria-hidden
                  />
                )}
                {[
                  { href: '/', label: 'Home' },
                  { href: '/#services', label: 'Services' },
                  { href: '/#testimonials', label: 'Testimonials' },
                  { href: '/about-us', label: 'About Us' },
                  { href: '/faqs', label: 'FAQs' },
                ].map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    ref={(el) => {
                      centerLinkRefs.current[idx] = el
                    }}
                    onMouseEnter={() => setCenterActiveIdx(idx)}
                    onFocus={() => setCenterActiveIdx(idx)}
                    className={`relative z-10 px-8 py-[6px] rounded-full font-normal transition-colors text-base ${
                      centerActiveIdx === idx ? 'text-black' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

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

          {/* Contact Us Button (Desktop) */
          }
          {disableContact ? (
            <span className="hidden md:inline-flex px-6 py-5 font-syne font-light rounded-full border-0 text-black dark:text-white bg-transparent cursor-default opacity-70 select-none">
              Contact Us
            </span>
          ) : (
            <Link href="/contact-us" passHref legacyBehavior>
              <Button className={`text-white px-6 py-[26px] font-syne font-light rounded-full border-0 hidden md:inline-flex items-center gap-2 ${mainpage ? 'bg-white/[8%] backdrop-blur shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.13),inset_1px_1px_4px_rgba(255,255,255,0.18)] hover:bg-white/[15%]' : 'contact-button'}`}>
                {mainpage && (
                  <Image
                    src="/media/phone.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="filter brightness-0 invert"
                  />
                )}
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
            className={"relative w-[90vw] h-[90vh] bg-white dark:bg-[#18182a] rounded-2xl flex flex-col justify-start shadow-2xl px-12 py-12"
              + (menuClosing ? " animate-slide-out-right" : " animate-slide-in-right")
            }
          >
            {/* Heading */}
            <div>
              <span className="text-[#a1a1a1] dark:text-white text-xs font-normal">MENU</span>
            </div>
            {/* Menu Options */}
            <nav className="flex flex-col gap-6 flex-1">
              {[
                { href: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/about-us", label: "About Us" },
                { href: "/#testimonials", label: "Testimonials" },
                { href: "/faqs", label: "FAQs" },
                { href: "/contact-us", label: "Contact Us" }
              ].map((item, idx) => {
                const isActive = activeMenuIdx === idx;
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between w-full text-left text-2xl font-normal py-2 ${isActive ? '' : 'text-black/50'}`}
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