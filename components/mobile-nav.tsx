"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS } from "@/lib/nav-config" // Import NAV_ITEMS

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/90 backdrop-blur-sm border-b border-border p-4 z-50">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => ( // Use NAV_ITEMS
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium hover:text-primary transition-colors",
                  pathname === item.href ? "text-primary" : "text-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
