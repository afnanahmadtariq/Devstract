"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-8">
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "hover:text-teal-400 transition-colors",
              pathname === item.href ? "text-teal-400" : "text-white",
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      
      {/* The privacy policy typically doesn't need to be in the main nav,
          but if you want to add it to a dropdown menu, you can do so here */}
    </div>
  )
}
