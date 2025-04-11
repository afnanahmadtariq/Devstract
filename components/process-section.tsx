import { FileSearch, Code, Rocket, Palette } from "lucide-react"

const steps = [
  {
    icon: <FileSearch className="h-12 w-12 text-primary" />,
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed roadmap.",
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "Design & Prototyping",
    description: "Our designers create wireframes and interactive prototypes for your approval.",
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Development & Testing",
    description: "We build your solution using the latest technologies and perform rigorous testing.",
  },
  {
    icon: <Rocket className="h-12 w-12 text-primary" />,
    title: "Deployment & Maintenance",
    description: "We launch your project and provide ongoing support and maintenance.",
  },
]

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background" id="process">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Development Process</h2>
        <p className="text-lg text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
          We follow a structured approach to ensure your project is delivered on time, within budget, and exceeds
          expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="service-card h-full flex flex-col items-center text-center">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
