import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Build Next-Generation Web and Mobile Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From cutting-edge web applications to innovative mobile experiences, our expert team delivers custom
              solutions across popular frameworks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base">
                Start a Project
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                View Our Portfolio
              </Button>
            </div>
          </div>
          <div className="circuit-pattern h-[400px] lg:h-[500px] relative">
            {/* Circuit board pattern background */}
          </div>
        </div>
      </div>

      {/* Background dots/particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
