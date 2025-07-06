"use client"

import { useState, useRef, useLayoutEffect } from "react"
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
      image: "https://plus.unsplash.com/premium_photo-1661577077635-1b1948545206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Get guidance based on where you are and where you're going. Interactive. Such a fine company with great people experienced.",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Founder, EcoSolutions",
      image: "https://plus.unsplash.com/premium_photo-1661577077635-1b1948545206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Get guidance based on where you are and where you're going. Interactive. Such a fine company with great people experienced.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director, GrowthCo",
      image: "https://plus.unsplash.com/premium_photo-1661577077635-1b1948545206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Get guidance based on where you are and where you're going. Interactive. Such a fine company with great people experienced.",
    },
    {
      id: 4,
      name: "David Thompson",
      title: "CTO, InnovateLab",
      image: "https://plus.unsplash.com/premium_photo-1661577077635-1b1948545206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Get guidance based on where you are and where you're going. Interactive. Such a fine company with great people experienced.",
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

  // Store dynamic heights for each testimonial's name/title block
  const nameTitleRefs = useRef<(HTMLDivElement | null)[]>([])
  const [nameTitleHeights, setNameTitleHeights] = useState<number[]>([])

  useLayoutEffect(() => {
    setNameTitleHeights(
      nameTitleRefs.current.map(ref => ref?.offsetHeight ?? 0)
    )
  }, [cardOrder])

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Card Stack */}
          <div className="relative">
            <div className="relative h-[415px] w-full max-w-[574px] mx-auto lg:mx-0">
              {cardOrder.map((testimonialId, index) => {
                const testimonial = testimonials.find((t) => t.id === testimonialId)!
                const zIndex = cardOrder.length - index
                const translateY = index * 25
                const translateX = index * 52
                const scale = 1 - index * 0.05

                return (
                  <div
                    key={testimonial.id}
                    className="absolute cursor-pointer transition-all duration-500 ease-out"
                    style={{
                      zIndex,
                      transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
                      left: 0,
                      top: index === 0 ? 0 : '50%',
                      translate: index === 0 ? '0 0' : '0 -50%',
                    }}
                    onClick={() => handleCardClick(testimonial.id)}
                  >
                    <div 
                      className="rounded-xl border border-[#d7d7d7] w-[469px] h-[415px] overflow-hidden"
                      style={{
                        background: "linear-gradient(179.9deg, rgba(236, 236, 236, 1.00) 0%, rgba(255, 255, 255, 1.00) 100%)",
                        boxShadow: index === 0 ? "-4px 4px 15px 0px rgba(0, 0, 0, 0.07)" : 
                                  index === 1 ? "-4px 4px 7px 0px rgba(0, 0, 0, 0.30)" : "none"
                      }}
                    >
                      {/* Black inner border at bottom for active card */}
                      {index === 0 && (
                        <div className="absolute inset-x-0 bottom-0 h-[8px] bg-black rounded-b-xl z-20"/>
                      )}
                      {/* Large image on the left */}
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="rounded-[10px] w-[183px] h-[135px] absolute left-8 top-8 object-cover"
                        style={{
                          background: "linear-gradient(to left, #d9d9d9, #d9d9d9)",
                        }}
                      />
                      
                      {/* Name and title */}
                      <div
                        className="absolute left-[235px] top-8"
                        ref={el => {
                          nameTitleRefs.current[index] = el
                        }}
                      >
                        <h4 className="text-[#2c2c2c] font-syne font-bold text-2xl max-w-[185px] leading-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-[rgba(44,44,44,0.37)] font-syne text-base font-medium max-w-[185px]">
                          {testimonial.title}
                        </p>
                      </div>

                      {/* Large quote mark */}
                      {index === 0 && (
                        <div
                          className="text-[#2c2c2c] font-syne text-8xl font-medium absolute left-[235px] w-9 h-[70px] mt-4"
                          style={{
                            top: 8 + (nameTitleHeights[0] ?? 62) + 10 // 8px top + name/title height + 10px gap
                          }}
                        >
                          “
                        </div>
                      )}

                      {/* Review text */}
                      <div className="absolute left-8 top-48 w-[418px] h-[198px]">
                        <p className="text-[#2c2c2c] font-syne text-3xl font-medium leading-tight">
                          "{testimonial.review}"
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Call to Action */}
          <div className="text-center relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10">Here From Others</h3>
              <div className="relative max-w-md mx-auto mb-8 z-10">
                <img src="/media/line.svg" alt="Line decoration" className="absolute right-0 top-0 h-5 w-auto -mt-5" />
              </div>
            <p className="text-xl text-[#676767] leading-tight mb-8 max-w-md mx-auto relative z-10">
              Don't just take our word for it. See what our clients have to say about their experience working with us
              and the results we've delivered.
            </p>

            {/* Button on background */}
            <div className="relative">
              <img 
                src="/media/world-map.png" 
                alt="World map background" 
                className="w-full h-80 object-cover absolute -top-16 left-0 z-0"
              />
              <div className="relative z-10 h-64 flex items-center justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full">
                  Check My Eligibility
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
