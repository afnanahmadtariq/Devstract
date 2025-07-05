"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  title: string
  image: string
  review: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marshall Clark",
      title: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=60&width=60",
      review:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities. Such a fine company with great people experienced",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Founder, EcoSolutions",
      image: "/placeholder.svg?height=60&width=60",
      review:
        "Working with Devstract was a game-changer for our business. They delivered a beautiful, functional website that perfectly captures our brand essence.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director, GrowthCo",
      image: "/placeholder.svg?height=60&width=60",
      review:
        "The team at Devstract is simply outstanding. They took our complex requirements and turned them into an elegant solution.",
    },
    {
      id: 4,
      name: "David Thompson",
      title: "CTO, InnovateLab",
      image: "/placeholder.svg?height=60&width=60",
      review:
        "Devstract's systematic approach from ideation to execution is impressive. They delivered on time, within budget, and the quality exceeded our expectations.",
    },
  ]

  const [cardOrder, setCardOrder] = useState(testimonials.map((t) => t.id))

  const handleCardClick = (clickedId: number) => {
    const clickedIndex = cardOrder.indexOf(clickedId)

    if (clickedIndex === 0) {
      const newOrder = [...cardOrder.slice(1), clickedId]
      setCardOrder(newOrder)
    } else {
      const newOrder = [clickedId, ...cardOrder.filter((id) => id !== clickedId)]
      setCardOrder(newOrder)
    }
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Card Stack */}
          <div className="relative">
            <div className="relative h-96 w-full max-w-md mx-auto lg:mx-0">
              {cardOrder.map((testimonialId, index) => {
                const testimonial = testimonials.find((t) => t.id === testimonialId)!
                const zIndex = cardOrder.length - index
                const translateY = index * 8
                const translateX = index * 4
                const scale = 1 - index * 0.02

                return (
                  <div
                    key={testimonial.id}
                    className="absolute inset-0 cursor-pointer transition-all duration-500 ease-out"
                    style={{
                      zIndex,
                      transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
                    }}
                    onClick={() => handleCardClick(testimonial.id)}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 h-full border border-gray-100">
                      {/* Header with image and name/title */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover bg-yellow-400"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500 font-medium">{testimonial.title}</p>
                        </div>
                      </div>

                      {/* Review text */}
                      <div className="mt-6">
                        <p className="text-gray-700 leading-relaxed text-sm">{testimonial.review}</p>
                      </div>

                      {/* Rating stars */}
                      <div className="flex mt-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Call to Action */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Here From Others</h3>
            <p className="text-base text-gray-600 mb-8 max-w-md">
              Don't just take our word for it. See what our clients have to say about their experience working with us
              and the results we've delivered.
            </p>

            {/* Button on background */}
            <div className="relative">
              <div className="w-full h-32 bg-yellow-400 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full">
                    Check My Eligibility
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
