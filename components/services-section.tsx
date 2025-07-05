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
      title: "Ai Automation",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "https://plus.unsplash.com/premium_photo-1671499727209-8e1770fd3965?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=341&width=526",
    },
    {
      id: 2,
      title: "LLM Fine Tuning",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "https://plus.unsplash.com/premium_photo-1714618812303-f6a703492541?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=341&width=526",
    },
    {
      id: 3,
      title: "MVP design & development",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "https://plus.unsplash.com/premium_photo-1671751033996-93d9688ce4db?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=341&width=526",
    },
    {
      id: 4,
      title: "AI Integration",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "https://images.unsplash.com/photo-1636690498207-d7b393423b9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=341&width=526",
    },
    {
      id: 5,
      title: "UX re-engineering",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "https://plus.unsplash.com/premium_photo-1671411322489-189a1e3e5465?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=341&width=526",
    },
    {
      id: 6,
      title: "Product designing",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "https://images.unsplash.com/photo-1636690581110-a512fed05fd3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=341&width=526",
    },
    {
      id: 7,
      title: "Full-stack Development",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "https://images.unsplash.com/photo-1667000689629-905abd20a5ab?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=341&width=526",
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
    <section className="py-16 bg-white">
      <div className="mx-auto">
        {/* Left-aligned heading and description */}
        <div className="px-32 ml-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left">My Service</h2>
          <p className="text-base text-gray-600 max-w-2xl text-left">
            Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal
            complexities.
          </p>
        </div>

        {/* Scrollable carousel */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex-shrink-0 w-[526px] h-[341px] rounded-2xl p-10 text-white relative overflow-hidden group cursor-pointer bg-cover bg-center ${
                index === 0 ? "ml-32" : ""
              }`}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent rounded-2xl"></div>

              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-5xl font-semibold mb-4">{service.title}</h3>
                <p className="text-xl mb-6 font-light leading-tight text-white/[0.77]">{service.description}</p>

                {/* Arrow button */}
                <div className="flex justify-start">
                    <ArrowUpRight className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
