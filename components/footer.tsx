import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/devstract-logo.png"
                alt="Devstract Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6">
              We build next-generation web and mobile solutions that help businesses thrive in the digital world.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/devstract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/devstract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/devstract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ux-ui-design"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-devops"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates on the latest technologies and company news.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Devstract. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
