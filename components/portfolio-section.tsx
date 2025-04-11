import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/images/portfolio/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "/portfolio/e-commerce-platform",
  },
  {
    title: "Health & Fitness App",
    category: "Mobile Development",
    image: "/images/portfolio/project2.jpg",
    technologies: ["Flutter", "Firebase"],
    link: "/portfolio/health-fitness-app",
  },
  {
    title: "Financial Dashboard",
    category: "Web Development",
    image: "/images/portfolio/project3.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "/portfolio/financial-dashboard",
  },
  {
    title: "Social Media Platform",
    category: "Full Stack",
    image: "/images/portfolio/project4.jpg",
    technologies: ["React Native", "GraphQL", "AWS"],
    link: "/portfolio/social-media-platform",
  },
]

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Portfolio</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              All
            </Button>
            <Button variant="outline" size="sm">
              Web
            </Button>
            <Button variant="outline" size="sm">
              Mobile
            </Button>
            <Button variant="outline" size="sm">
              UI/UX
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group">
              <div className="bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium px-3 py-1 rounded-full bg-primary/80">View Project</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm text-primary">{project.category}</span>
                  <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-background px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
