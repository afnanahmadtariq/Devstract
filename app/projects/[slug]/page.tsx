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
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="max-w-4xl">
            <span className="text-primary mb-4 block">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                <span>{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(45,212,191,0.3)] mb-16">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-10">{project.description}</p>
            </div>

            <div>
              <div className="bg-secondary rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <ul className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                {project.website && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 group"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Visit Website</span>
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Interested in a similar project?</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact us today to discuss how we can help bring your ideas to life.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full">Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjectsData.map((relatedProject, index) => (
              <Link href={`/projects/${relatedProject.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} key={index} className="group">
                <div className="bg-background rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProject?.image || "/placeholder.svg?height=192&width=384"}
                      alt={relatedProject?.title || ""}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary">{relatedProject?.category}</span>
                    <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                      {relatedProject?.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
