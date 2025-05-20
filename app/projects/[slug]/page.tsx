import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects as allProjects, Project } from "@/lib/projects-data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = allProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Devstract",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Devstract Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjectsData: Project[] = allProjects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="max-w-4xl">
            <span className="text-teal-600 mb-4 block font-semibold">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4 text-teal-500" />
                <span>{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border border-gray-200 mb-16">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">{project.description}</p>
              {/* Add more detailed project content here if available in project data */}
            </div>

            <div>
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-6 mb-8 sticky top-24 shadow-md translucent-card">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Technologies Used</h3>
                <ul className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                {project.website && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Project Links</h3>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-600 hover:text-teal-700 group font-medium"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Visit Website</span>
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                )}

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Interested in a similar project?</h3>
                  <p className="text-gray-600 mb-4">
                    Contact us today to discuss how we can help bring your ideas to life.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjectsData.map((relatedProject, index) => (
              <Link href={`/projects/${relatedProject.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} key={index} className="group block bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-teal-500 transition-all duration-300 translucent-card">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedProject?.image || "/placeholder.svg?height=192&width=384"}
                    alt={relatedProject?.title || ""}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-teal-600 font-medium">{relatedProject?.category}</span>
                  <h3 className="text-lg font-semibold mt-1 text-gray-800 group-hover:text-teal-600 transition-colors">
                    {relatedProject?.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
