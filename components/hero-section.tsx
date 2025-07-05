import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CarouselCards from "@/components/carousel-cards"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900"
    >
      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight max-w-4xl">
        The <span className="text-blue-400">Next GEN</span> Software Design and
        <br />
        Development Agency
      </h1>

      {/* Sub-heading */}
      <p className="text-lg text-white/70 mb-8 max-w-2xl">
        From innovative startups to enterprise solutions, we deliver cutting-edge digital experiences.
      </p>

      {/* CTA button */}
      <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3 text-base font-medium inline-flex items-center space-x-2 mb-16">
        <span>Start a project</span>
        <ArrowRight className="w-4 h-4" />
      </Button>

      {/* Carousel */}
      <CarouselCards />
    </section>
  )
}
