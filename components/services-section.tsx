import { Atom, Smartphone, Palette, Cloud } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <Atom className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Across different frameworks: React, Angular, Vue, Node.js, Django",
    link: "/services/web-development",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile App Development",
    description: "iOS, Android, cross-platform: Flutter, React Native",
    link: "/services/mobile-development",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UX/UI Design",
    description: "Product design, wireframing, prototyping",
    link: "/services/ux-ui-design",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud & DevOps",
    description: "Deployments, scaling, CI/CD pipelines",
    link: "/services/cloud-devops",
  },
]

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card flex flex-col h-full">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <Link
                href={service.link}
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-auto"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
