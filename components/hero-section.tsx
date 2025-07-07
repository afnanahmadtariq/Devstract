import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CarouselCards from "@/components/carousel-cards"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center text-center py-24"
    >
      {/* Main heading */}
      <h1 className="text-5xl md:text-7xl font-medium mb-6 text-white leading-tight max-w-7xl">
        The <span
          className="bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(-8deg, #5A45FF 20%, #CCCEFF 48%, #5A45FF 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
        Next GEN</span> Software Design and 
        <br />
        Development Agency
      </h1>

      {/* Sub-heading */}
      <p className="text-xl text-white/[0.53] mb-8 max-w-2xl">
        Fast. Efficient. Reliable. Try us and see the difference.
      </p>

      {/* CTA button */}
      <Button className="bg-white/[0.03] border border-white/30 text-white hover:bg-white/[0.05] rounded-full px-8 py-6 text-base font-medium inline-flex items-center space-x-2 mb-32">
        <ArrowRight className="w-4 h-4" />
        <span>Start a project</span>
      </Button>

      {/* Carousel */}
      <CarouselCards />
    </section>
  )
}
