import Link from "next/link"
import { Logo } from "@/components/logo"
import { Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 max-w-xs">
              We build next-generation web and mobile solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web" className="text-gray-400 hover:text-teal-400">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-gray-400 hover:text-teal-400">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux" className="text-gray-400 hover:text-teal-400">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="text-gray-400 hover:text-teal-400">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-teal-400">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-teal-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@devstract.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Tech Lane, San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Devstract. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-teal-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
