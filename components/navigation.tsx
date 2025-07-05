import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="w-full px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="w-12 h-12 bg-white/[8%] backdrop-blur rounded-full flex items-center justify-center">
            <Image
              src="/images/logo.svg"
              alt="Devstract Logo"
              width={32}
              height={32}
              className="filter brightness-0 invert"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-white hover:text-yellow-400 font-medium transition-colors text-sm">
              Home
            </Link>
            <Link href="#service" className="text-white/80 hover:text-yellow-400 font-medium transition-colors text-sm">
              Services
            </Link>
            <Link href="#blog" className="text-white/80 hover:text-yellow-400 font-medium transition-colors text-sm">
              Blog
            </Link>
            <Link href="#faqs" className="text-white/80 hover:text-yellow-400 font-medium transition-colors text-sm">
              FAQs
            </Link>
          </div>
        </div>

        {/* Contact Us Button */}
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 font-medium rounded-full border-0">
          Contact Us
        </Button>
      </div>
    </nav>
  )
}
