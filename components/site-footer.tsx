import Link from "next/link"
import { Logo } from "@/components/logo"
import { Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-br from-white via-teal-50 to-blue-50 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 max-w-xs">
              We build next-generation web and mobile solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-teal-500">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-teal-500">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.linkedin.com/company/devstract/?viewAsMember=true" className="text-gray-500 hover:text-teal-500">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web" className="text-gray-600 hover:text-teal-500">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-gray-600 hover:text-teal-500">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux" className="text-gray-600 hover:text-teal-500">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="text-gray-600 hover:text-teal-500">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-teal-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-teal-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-teal-500">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="https://blog.devstract.site" className="text-gray-600 hover:text-teal-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-teal-500">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">contact@devstract.site</li>
              <li className="text-gray-600">Islamabad Capital Territory, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Devstract. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-teal-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-teal-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
