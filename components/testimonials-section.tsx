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
    }
  ]

  const [cardOrder, setCardOrder] = useState(testimonials.map((t) => t.id))
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'slide-out' | 'slide-left' | 'slide-in'>('idle')

  const handleCardClick = (clickedId: number) => {
    const clickedIndex = cardOrder.indexOf(clickedId)
    if (clickedIndex === 0 && !isAnimating) {
      setIsAnimating(true)
      setAnimationPhase('slide-out')
      
      // After slide-out animation completes, slide the top card to the left
      setTimeout(() => {
        setAnimationPhase('slide-left')
        
        // After slide-left animation completes, rearrange cards and slide back
        setTimeout(() => {
          const newOrder = [...cardOrder.slice(1), clickedId]
          setCardOrder(newOrder)
          setAnimationPhase('slide-in')
          
          // After slide-in animation completes, reset to idle
          setTimeout(() => {
            setAnimationPhase('idle')
            setIsAnimating(false)
          }, 500)
        }, 500)
      }, 500)
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
        <div className="grid lg:grid-cols-2 gap-0 items-start">
          {/* Left Column - Card Stack */}
          <div className="relative z-20">
            <div className="relative h-[415px] w-full max-w-[574px] ml-40">
              {cardOrder.map((testimonialId, index) => {
                const testimonial = testimonials.find((t) => t.id === testimonialId)!
                let zIndex = cardOrder.length - index
                
                // Calculate positions and scales based on animation phase
                let translateX = index * -70
                let scale = 1 - index * 0.1
                // Define duration based on animation phase
                let animationDuration = 'duration-500' // default

                // Animation adjustments
                if (animationPhase === 'slide-out' && index === 0) {
                  // Top card slides right and scales down
                  animationDuration = 'duration-500'
                  translateX = 200
                  scale = 0.7
                } else if (animationPhase === 'slide-out' && index > 0) {
                  // Behind cards move left to give space and scale up
                  animationDuration = 'duration-500'
                  translateX = (index - 1) * -70 - 250 // Move left by additional 250px to make space
                  scale = 1 - (index - 1) * 0.1
                } else if (animationPhase === 'slide-left' && index === 0) {
                  // Top card slides left to go behind the stack with lowest z-index
                  animationDuration = 'duration-700'
                  translateX = -150
                  scale = 0.5
                  zIndex = 0 // Put it behind all other cards
                } else if (animationPhase === 'slide-left' && index > 0) {
                  // Behind cards stay in their forward positions
                  animationDuration = 'duration-500'
                  translateX = (index - 1) * -70
                  scale = 1 - (index - 1) * 0.1
                } else if (animationPhase === 'slide-in' && index === cardOrder.length - 1) {
                  // Last card (previously top) slides back from right
                  animationDuration = 'duration-500'
                  translateX = -200
                  scale = 1 - index * 0.1
                  zIndex = 0
                }

                return (
                  <div
                    key={testimonial.id}
                    className={`absolute transition-all ${animationDuration} ease-out ${
                      index === 0 && !isAnimating ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    style={{
                      zIndex,
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      left: 0,
                      top: '50%',
                      translate: '0 -50%',
                      transformOrigin: 'center',
                    }}
                    onClick={() => handleCardClick(testimonial.id)}
                  >
                    <div 
                      className="rounded-xl border border-[#d7d7d7] overflow-hidden relative"
                      style={{
                        background: "linear-gradient(179.9deg, rgba(236, 236, 236, 1.00) 0%, rgba(255, 255, 255, 1.00) 100%)",
                        boxShadow: "-4px 4px 7px 0px rgba(0, 0, 0, 0.30)",
                        width: `469px`,
                        height: `415px`,
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
                      <div
                          className="text-[#2c2c2c] font-syne text-8xl font-medium absolute left-[235px] w-9 h-[70px] mt-4"
                          style={{
                            top: 8 + (nameTitleHeights[index] ?? 62) + 10 // 8px top + name/title height + 10px gap
                          }}
                        >
                          “
                      </div>

                      {/* Review text */}
                      <div className="absolute left-8 top-48 w-[418px] h-[198px] overflow-hidden">
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
            <div className="relative -top-16">
              <img 
                src="/media/world-map.png" 
                alt="World map background" 
                className="w-full h-80 object-cover absolute left-0 z-0"
              />
              <div className="relative z-10 h-64 flex items-center justify-center">
                <Button
                  className="text-white text-base font-medium px-8 py-6 rounded-full"
                  style={{
                    background: "linear-gradient(350deg, #5A45FF 20%, #7D71FF 47%, #7C81FF 58%, #000099 120%)",
                    filter: "drop-shadow(0px 0px 68.3px rgba(85, 0, 255, 0.48))"
                  }}
                >
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
