"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { NAV_ITEMS } from "@/lib/nav-config" // Import NAV_ITEMS

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-8">
      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => ( // Use NAV_ITEMS
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "hover:text-teal-500 transition-colors",
              pathname === item.href ? "text-teal-500" : "text-gray-700",
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      
      {/* The privacy policy typically doesn\'t need to be in the main nav,
          but if you want to add it to a dropdown menu, you can do so here */}
    </div>
  )
}
