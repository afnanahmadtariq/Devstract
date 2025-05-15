import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircuitBackground } from "@/components/circuit-background";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/lib/projects-data"; // Import projects and Project interface

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our featured projects and case studies showcasing our expertise in software development.",
};

const categories = ["All", "Web Development", "Mobile Apps", "UX/UI Design", "E-commerce", "Enterprise Solutions"];

interface CaseStudyProps {
  title: string;
  client: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  reverse?: boolean;
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-400">
              Explore our featured projects and discover how we've helped businesses across industries achieve their
              digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-teal-500 hover:bg-teal-600 text-gray-950"
                    : "border-gray-700 hover:border-teal-500 hover:text-teal-500"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-gray-400">
              Dive deeper into our most impactful projects and learn about our approach, challenges, and results.
            </p>
          </div>

          <div className="space-y-16">
            <CaseStudy
              title="Transforming Financial Services with AI"
              client="Global Investment Firm"
              image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600"
              challenge="The client needed to process vast amounts of financial data to identify investment opportunities faster than competitors."
              solution="We developed an AI-powered analytics platform that processes market data in real-time and provides actionable insights."
              results={[
                "40% reduction in analysis time",
                "28% increase in investment accuracy",
                "Scalable architecture handling 10x data volume",
              ]}
            />

            <CaseStudy
              title="Revolutionizing Healthcare Delivery"
              client="Regional Healthcare Network"
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600"
              challenge="The healthcare provider struggled with fragmented patient data and inefficient appointment scheduling."
              solution="We created an integrated healthcare platform connecting patients, doctors, and administrators in a seamless digital ecosystem."
              results={[
                "65% reduction in administrative overhead",
                "30% improvement in appointment adherence",
                "Unified patient records across 12 facilities",
              ]}
              reverse
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-gray-400 text-lg mb-8">
                Let's discuss how we can help bring your vision to life with our expertise in software development.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-gray-950 font-medium px-8 py-6 text-lg">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return (
    <Link href={`/projects/${projectSlug}`} passHref legacyBehavior>
      <a className="block bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-colors group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-teal-500 text-gray-950 text-xs font-medium px-2 py-1 rounded">
            {project.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="text-teal-500 hover:text-teal-400 flex items-center text-sm font-medium">
            View Project <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </a>
    </Link>
  );
}

function CaseStudy({ title, client, image, challenge, solution, results, reverse = false }: CaseStudyProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:rtl" : ""}`}>
      <div className={reverse ? "md:ltr" : ""}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={1200}
          height={600}
          className="rounded-xl border border-gray-800"
        />
      </div>
      <div className={reverse ? "md:ltr" : ""}>
        <div className="text-teal-500 text-sm font-medium mb-2">{client}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Challenge</h4>
            <p className="text-gray-400">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Our Solution</h4>
            <p className="text-gray-400">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Results</h4>
            <ul className="text-gray-400 space-y-1">
              {results.map((result: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button className="mt-6 bg-teal-500 hover:bg-teal-600 text-gray-950" asChild>
          <Link href="/contact">
            Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
