import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CircuitBackground } from "@/components/circuit-background"
import { ArrowRight, Code, Layers, Server, Smartphone } from "lucide-react"
import FrameworksSection from "@/components/frameworks-section"
import { projects } from "@/lib/projects-data"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              We Build Next-Generation Web and Mobile Solutions
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-lg">
              From cutting-edge web applications to innovative mobile experiences, our expert team delivers custom
              solutions across popular frameworks.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-6"
                asChild
              >
                <Link href="/contact">
                  Start a Project
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-500/10 px-6 py-6"
                asChild
              >
                <Link href="/portfolio">
                  View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 border border-gray-200 rounded-xl overflow-hidden bg-white/70 backdrop-blur-sm p-6 shadow-md">
              <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-md ${
                      Math.random() > 0.7 ? "bg-teal-500/20 border border-teal-500/30" : "bg-gray-100"
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
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-gray-600 text-lg">
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
      <FrameworksSection />

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
            <p className="text-gray-600 text-lg">Explore some of our recent work that showcases our expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
              />
            ))}

            <div className="text-center mt-12">
              <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500/10" asChild>
                <Link href="/portfolio">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Devstract transformed our business with their innovative web solution. Their team was professional, responsive, and delivered beyond our expectations.",
                author: "Sarah Johnson",
                position: "CEO, TechInnovate",
              },
              {
                quote: "Working with Devstract was a game-changer for our mobile app. They understood our vision and executed it flawlessly, resulting in a 200% increase in user engagement.",
                author: "Michael Chen",
                position: "Product Manager, AppWorks",
              },
              {
                quote: "The team at Devstract provided exceptional service from start to finish. Their attention to detail and technical expertise made our complex project a success.",
                author: "Emily Rodriguez",
                position: "CTO, DataFlow Systems",
              },
            ].map(
              ({ quote, author, position }: { quote: string; author: string; position: string }, index: number) => (
                <TestimonialCard
                  key={index}
                  quote={quote}
                  author={author}
                  position={position}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-gray-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Ready to Start Your Project?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Let's discuss how our software solutions can help you achieve your goals and stay ahead of the
                competition.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:border-teal-500/50 transition-colors group shadow-md hover:shadow-lg translucent-card">
      <div className="w-14 h-14 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6 flex items-center text-teal-500 font-medium">
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}

function FrameworkLogo({ name }: { name: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 w-full hover:border-teal-500/50 transition-colors shadow-sm hover:shadow-md">
      <span className="text-center font-medium text-gray-700">{name}</span>
    </div>
  )
}

function ProjectCard({ title, category, image }: { title: string; category: string; image: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={800}
        height={600}
        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-teal-400">{category}</p>
        <Button variant="link" className="text-white p-0 mt-2 w-fit hover:text-teal-400 flex items-center">
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author, position }: { quote: string; author: string; position: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:border-teal-500/50 transition-colors shadow-md hover:shadow-lg translucent-card">
      <div className="text-teal-500 mb-4 text-4xl font-serif">"</div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div>
        <h4 className="font-semibold text-gray-800">{author}</h4>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  )
}
