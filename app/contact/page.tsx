import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { CircuitBackground } from "@/components/circuit-background"

export const metadata: Metadata = {
  title: "Contact Us | Devstract",
  description: "Get in touch with our team to discuss your project requirements or any questions you may have.",
}

export default function ContactPage() {
  return (
    <>
    {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400">
              WeGet in touch with our team to discuss your project requirements or any questions you may have.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={6} required />
                </div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex">
                  <MapPin className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Office</h3>
                    <p className="text-muted-foreground">
                      Islamabad
                      <br />
                      44000
                      <br />
                      Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Phone className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">N/A</p>
                  </div>
                </div>
                <div className="flex">
                  <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      contact@devstract.site
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Clock className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM UTC+5
                      <br />
                      Saturday: 10:00 AM - 2:00 PM UTC+5
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-secondary rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-4">
                  Stay connected with us on social media for the latest updates, insights, and more.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/devstract/?viewAsMember=true" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is your typical project timeline?</h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a
                complex web application could take 3-6 months. We'll provide a detailed timeline during the project
                planning phase.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How much does a typical project cost?</h3>
              <p className="text-muted-foreground">
                Project costs depend on requirements, complexity, and timeline. We offer flexible pricing models
                including fixed-price quotes and hourly rates. Contact us for a personalized estimate based on your
                specific needs.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Do you provide ongoing maintenance?</h3>
              <p className="text-muted-foreground">
                Yes, we offer ongoing maintenance and support packages to ensure your application remains secure,
                up-to-date, and functioning optimally. We can tailor a maintenance plan to suit your specific needs.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is your development process?</h3>
              <p className="text-muted-foreground">
                We follow an agile development methodology with regular client check-ins. Our process includes
                discovery, planning, design, development, testing, deployment, and post-launch support to ensure quality
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
