"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-background/95 backdrop-blur-sm shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/devstract-logo.png"
            alt="Devstract Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="text-foreground p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Button className="ml-4">Start a Project</Button>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background z-40 p-4">
          <nav className="flex flex-col gap-6 py-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors text-xl py-2 border-b border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors text-xl py-2 border-b border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-foreground hover:text-primary transition-colors text-xl py-2 border-b border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors text-xl py-2 border-b border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition-colors text-xl py-2 border-b border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Button className="mt-4 w-full" onClick={() => setIsMenuOpen(false)}>
              Start a Project
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
