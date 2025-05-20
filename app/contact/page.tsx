"use client"
import type { Metadata } from "next"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { CircuitBackground } from "@/components/circuit-background"

// export const metadata: Metadata = {
//   title: "Contact Us | Devstract",
//   description: "Get in touch with our team to discuss your project requirements or any questions you may have.",
// }

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value

    const mailto = `mailto:contact@devstract.site?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`

    window.location.href = mailto
  }

  return (
    <>
    {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with our team to discuss your project requirements or any questions you may have.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm border border-gray-200 p-8 rounded-xl shadow-md translucent-card">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" required className="bg-white/50 border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-white/50 border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required className="bg-white/50 border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={6} required className="bg-white/50 border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <Button type="submit" size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 p-8 rounded-xl shadow-md translucent-card">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex">
                  <MapPin className="h-6 w-6 text-teal-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Our Office</h3>
                    <p className="text-gray-600">
                      Islamabad
                      <br />
                      44000
                      <br />
                      Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Phone className="h-6 w-6 text-teal-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Phone</h3>
                    <p className="text-gray-600">N/A</p>
                  </div>
                </div>
                <div className="flex">
                  <Mail className="h-6 w-6 text-teal-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      contact@devstract.site
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Clock className="h-6 w-6 text-teal-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM UTC+5
                      <br />
                      Saturday: 10:00 AM - 2:00 PM UTC+5
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-100/70 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay connected with us on social media for the latest updates, insights, and more.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
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
                  <a href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
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
                  <a href="https://www.linkedin.com/company/devstract/?viewAsMember=true" className="text-gray-500 hover:text-teal-500 transition-colors">
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
                  <a href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 p-6 rounded-lg shadow-md translucent-card">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What is your typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a
                complex web application could take 3-6 months. We\'ll provide a detailed timeline during the project
                planning phase.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 p-6 rounded-lg shadow-md translucent-card">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How much does a typical project cost?</h3>
              <p className="text-gray-600">
                Project costs depend on requirements, complexity, and timeline. We offer flexible pricing models
                including fixed-price quotes and hourly rates. Contact us for a personalized estimate based on your
                specific needs.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 p-6 rounded-lg shadow-md translucent-card">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Do you provide ongoing maintenance?</h3>
              <p className="text-gray-600">
                Yes, we offer ongoing maintenance and support packages to ensure your application remains secure,
                up-to-date, and functioning optimally. We can tailor a maintenance plan to suit your specific needs.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 p-6 rounded-lg shadow-md translucent-card">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What is your development process?</h3>
              <p className="text-gray-600">
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
