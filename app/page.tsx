import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CircuitBackground } from "@/components/circuit-background"
import { ArrowRight, Code, Layers, Server, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Build Next-Generation Web and Mobile Solutions
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-lg">
              From cutting-edge web applications to innovative mobile experiences, our expert team delivers custom
              solutions across popular frameworks.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-gray-950 font-medium px-6 py-6">
                Start a Project
              </Button>
              <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500/10 px-6 py-6">
                View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm p-6">
              <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-md ${
                      Math.random() > 0.7 ? "bg-teal-500/20 border border-teal-500/30" : "bg-gray-800/50"
                    }`}
                  ></div>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-teal-500/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">
              We offer comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Code className="h-8 w-8" />}
              title="Web Development"
              description="Across different frameworks, ReJect, Angular, Vue, Node.js Django"
            />
            <ServiceCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile App Development"
              description="iOS, Android, cross platform-Flutter, React Native"
            />
            <ServiceCard
              icon={<Layers className="h-8 w-8" />}
              title="UX/UI Design"
              description="Product design, wireframing, prototyping"
            />
            <ServiceCard
              icon={<Server className="h-8 w-8" />}
              title="Cloud & DevOps"
              description="Deployments, scaling, CI/CD pipelines"
            />
          </div>
        </div>
      </section>

      {/* Featured Frameworks */}
      <section id="frameworks" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Frameworks</h2>
            <p className="text-gray-400 text-lg">We leverage cutting-edge technologies to build robust solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <FrameworkLogo name="React" />
            <FrameworkLogo name="Vue.js" />
            <FrameworkLogo name="Angular" />
            <FrameworkLogo name="Node.js" />
            <FrameworkLogo name="Django" />
            <FrameworkLogo name="Laravel" />
            <FrameworkLogo name="Flutter" />
            <FrameworkLogo name="React Native" />
            <FrameworkLogo name="Next.js" />
            <FrameworkLogo name="Svelte" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Explore some of our recent work that showcases our expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="FinTech Dashboard"
              category="Web Application"
              image="/placeholder.svg?height=600&width=800"
            />
            <ProjectCard
              title="Health & Wellness App"
              category="Mobile Application"
              image="/placeholder.svg?height=600&width=800"
            />
            <ProjectCard
              title="E-commerce Platform"
              category="Web & Mobile"
              image="/placeholder.svg?height=600&width=800"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500/10" asChild>
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Devstract transformed our business with their innovative web solution. Their team was professional, responsive, and delivered beyond our expectations."
              author="Sarah Johnson"
              position="CEO, TechInnovate"
            />
            <TestimonialCard
              quote="Working with Devstract was a game-changer for our mobile app. They understood our vision and executed it flawlessly, resulting in a 200% increase in user engagement."
              author="Michael Chen"
              position="Product Manager, AppWorks"
            />
            <TestimonialCard
              quote="The team at Devstract provided exceptional service from start to finish. Their attention to detail and technical expertise made our complex project a success."
              author="Emily Rodriguez"
              position="CTO, DataFlow Systems"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-400 text-lg mb-8">
                Let's discuss how our software solutions can help you achieve your goals and stay ahead of the
                competition.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-gray-950 font-medium px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-teal-500/50 transition-colors group">
      <div className="w-14 h-14 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="mt-6 flex items-center text-teal-500 font-medium">
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}

function FrameworkLogo({ name }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center justify-center h-20 w-full hover:border-teal-500/50 transition-colors">
      <span className="text-center font-medium">{name}</span>
    </div>
  )
}

function ProjectCard({ title, category, image }) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={800}
        height={600}
        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-teal-400">{category}</p>
        <Button variant="link" className="text-white p-0 mt-2 w-fit hover:text-teal-400 flex items-center">
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author, position }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-teal-500/50 transition-colors">
      <div className="text-teal-500 mb-4">"</div>
      <p className="text-gray-300 mb-6">{quote}</p>
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-gray-400 text-sm">{position}</p>
      </div>
    </div>
  )
}
