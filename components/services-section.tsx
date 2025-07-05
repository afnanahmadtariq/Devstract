"use client"

import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  image: string
}

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const services: Service[] = [
    {
      id: 1,
      title: "AI Automation",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "LLM Fine Tuning",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "MVP design & development",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      const currentScroll = scrollRef.current.scrollLeft
      const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Left-aligned heading and description */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left">My Service</h2>
          <p className="text-base text-gray-600 max-w-2xl text-left">
            Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal
            complexities.
          </p>
        </div>

        {/* Scrollable carousel */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-yellow-400 to-green-500 rounded-2xl p-8 text-black relative overflow-hidden group cursor-pointer"
            >
              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm mb-6 leading-relaxed opacity-90">{service.description}</p>

                {/* Arrow button */}
                <div className="flex justify-start">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-black/20 rounded-full">
                    <ArrowUpRight className="h-4 w-4 text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
