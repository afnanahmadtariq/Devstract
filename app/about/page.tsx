import type { Metadata } from "next"
import Image from "next/image"
import { CircuitBackground } from "@/components/circuit-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Clock, Heart, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Devstract, our mission, values, and the team behind our innovative software solutions.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About Devstract</h1>
            <p className="text-xl text-gray-600">
              We're a team of passionate developers, designers, and strategists dedicated to building next-generation
              software solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, Devstract began with a simple mission: to help businesses leverage technology to
                achieve their goals. What started as a small team of three developers has grown into a full-service
                software development company with expertise across multiple platforms and technologies.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been defined by continuous learning, adaptation, and a relentless focus on delivering
                exceptional value to our clients. We've worked with startups, mid-sized businesses, and enterprise
                organizations across various industries, helping them navigate the complex digital landscape.
              </p>
              <p className="text-gray-600">
                Today, Devstract stands at the forefront of technological innovation, combining technical expertise with
                strategic thinking to create solutions that not only meet current needs but are also built for future
                growth and scalability.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/20 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
                    alt="Team collaboration"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden mt-8 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
                    alt="Office environment"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden -mt-8 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
                    alt="Coding session"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
                    alt="Team meeting"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Values</h2>
            <p className="text-gray-600">
              At the core of everything we do are the values that guide our decisions, shape our culture, and define our
              approach to client partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <ValueCard
              icon={<Clock className="h-8 w-8" />}
              title="Innovation"
              description="We constantly explore new technologies and approaches to deliver cutting-edge solutions that give our clients a competitive edge."
            />
            <ValueCard
              icon={<Award className="h-8 w-8" />}
              title="Excellence"
              description="We hold ourselves to the highest standards in everything we do, from code quality to client communication and project management."
            />
            <ValueCard
              icon={<Users className="h-8 w-8" />}
              title="Collaboration"
              description="We believe in the power of teamwork, both within our organization and in partnership with our clients, to achieve exceptional results."
            />
            <ValueCard
              icon={<Heart className="h-8 w-8" />}
              title="Integrity"
              description="We operate with transparency, honesty, and ethical practices in all our business relationships and decision-making processes."
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600">
              Our diverse team of experts brings together a wealth of experience and a passion for technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Afnan Ahmad Tariq"
              position="Founder & CEO"
              image="/placeholder-user.jpg"
              bio="Connect on LinkedIn: www.linkedin.com/in/afnanahmadtariq"
              linkedin="https://www.linkedin.com/in/afnanahmadtariq"
            />
            <TeamMember
              name="Muhammad Usman Ahmed"
              position="CTO"
              image="/placeholder-user.jpg"
              bio="Connect on LinkedIn: https://www.linkedin.com/in/muhammad-usman-ahmed-"
              linkedin="https://www.linkedin.com/in/muhammad-usman-ahmed-"
            />
            <TeamMember
              name="Ali Akbar"
              position="COO"
              image="/placeholder-user.jpg"
              bio="Connect on LinkedIn: https://www.linkedin.com/in/aliakbar07"
              linkedin="https://www.linkedin.com/in/aliakbar07"
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Process</h2>
            <p className="text-gray-600">
              We follow a structured yet flexible approach to software development that ensures quality, efficiency, and
              alignment with client objectives.
            </p>
          </div>

          <div className="space-y-12">
            <ProcessStep
              number="01"
              title="Discovery & Planning"
              description="We begin by understanding your business goals, user needs, and technical requirements. This phase includes stakeholder interviews, market research, and defining project scope and timelines."
            />
            <ProcessStep
              number="02"
              title="Design & Prototyping"
              description="Our design team creates wireframes and interactive prototypes to visualize the solution before development begins. This iterative process ensures the final product meets user expectations and business requirements."
            />
            <ProcessStep
              number="03"
              title="Development"
              description="Using agile methodologies, our development team builds your solution in sprints, allowing for regular feedback and adjustments. We maintain high code quality through peer reviews and automated testing."
            />
            <ProcessStep
              number="04"
              title="Testing & Quality Assurance"
              description="Rigorous testing ensures your solution is robust, secure, and performs optimally across all intended platforms and devices. We conduct functional, performance, and security testing."
            />
            <ProcessStep
              number="05"
              title="Deployment & Support"
              description="We handle the deployment process and provide ongoing support and maintenance to ensure your solution continues to perform optimally and evolve with your business needs."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-gray-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Join Our Team</h2>
              <p className="text-gray-600 text-lg mb-8">
                We're always looking for talented individuals who are passionate about technology and innovation.
                Explore our current openings and become part of our growing team.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-6 text-lg">
                View Career Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:border-teal-500/50 transition-colors shadow-md hover:shadow-lg translucent-card">
      <div className="w-14 h-14 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TeamMember({ name, position, image, bio, linkedin }: { name: string; position: string; image: string; bio: string; linkedin?: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden hover:border-teal-500/50 transition-colors group shadow-md hover:shadow-lg translucent-card">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-800">{name}</h3>
        <p className="text-teal-500 mb-4">{position}</p>
        <p className="text-gray-600 text-sm mb-3">{bio}</p>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-500 hover:text-teal-600 flex items-center">
            View LinkedIn Profile <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string; }) {
  return (
    <div className="grid md:grid-cols-5 gap-6 items-start">
      <div className="md:col-span-1">
        <div className="text-5xl font-bold text-teal-500">{number}</div>
      </div>
      <div className="md:col-span-4">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
