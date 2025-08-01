"use client"

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { useRouter } from "next/navigation";

interface Testimonial {
  id: number
  name: string
  title: string
  image: string
  review: string
}

export default function TestimonialsSection() {
  const router = useRouter();
  const isMobile = useIsMobile()
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marshall Clark",
      title: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "TechStart Inc. has seen remarkable growth thanks to their innovative solutions. Their team is professional, and results-driven.",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Founder, EcoSolutions",
      image: "https://plus.unsplash.com/premium_photo-1661577077635-1b1948545206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "EcoSolutions got so much help from them. They care a lot about green and new ideas.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "GrowthCo's marketing strategies have reached new heights. Their creative approach and attention to detail are unmatched.",
    }
  ]

  const [cardOrder, setCardOrder] = useState(testimonials.map((t) => t.id))
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'slide-out' | 'slide-left' | 'slide-in'>('idle')
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleCardClick = (clickedId: number) => {
    const clickedIndex = cardOrder.indexOf(clickedId)
    if (clickedIndex === 0 && !isAnimating) {
      setIsAnimating(true)
      setAnimationPhase('slide-out')
      // After slide-out animation completes, slide the top card to the left and rearrange cards
      setTimeout(() => {
        setAnimationPhase('slide-left')
        // Rearrange cards and start slide-in for last card at the same time as slide-left for behind cards
        const newOrder = [...cardOrder.slice(1), clickedId]
        setCardOrder(newOrder)
        setAnimationPhase('slide-in')
        // After slide-in animation completes, reset to idle
        setTimeout(() => {
          setAnimationPhase('idle')
          setIsAnimating(false)
        }, 200) // faster timeout for slide-in completion
      }, 300) // faster timeout for slide-out
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

  // Intersection Observer for initial animations (desktop only)
  useEffect(() => {
    if (!isMobile && !hasAnimatedIn && sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setHasAnimatedIn(true)
              observer.disconnect()
            }
          })
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      )

      observer.observe(sectionRef.current)
      return () => observer.disconnect()
    }
  }, [isMobile, hasAnimatedIn])

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="mt-24 sm:mt-0 sm:py-24 px-0 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0 items-start">
          {/* Left Column - Card Stack */}
          <div 
            className={`relative z-20 mb-24 lg:mb-0 overflow-x-hidden h-[110%] transition-all duration-1000 ease-out ${
              isMobile 
                ? '' 
                : hasAnimatedIn 
                  ? 'translate-x-0 translate-y-0 opacity-100' 
                  : 'translate-x-[-200px] translate-y-[100px] opacity-0'
            }`}
          >
            <div className="relative h-[280px] sm:h-[320px] md:h-[415px] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[574px] mx-auto md:ml-[30%] lg:ml-40">
              {cardOrder.map((testimonialId, index) => {
                const testimonial = testimonials.find((t) => t.id === testimonialId)!
                let zIndex = cardOrder.length - index
              
                
                // Calculate positions and scales based on animation phase
                let translateX = isMobile ? 0 : index * -40; // Horizontal for larger screens, none for small screens
                let translateY = isMobile ? index * 40 : 0; // Vertical for small screens, none for larger screens
                let scale = 1 - index * 0.1;
                let animationDuration = "duration-250"; // default
                let opacityNow = 1;

                // Animation adjustments
                if (animationPhase === "slide-out" && index === 0) {
                  animationDuration = "duration-300"; // faster slide-out
                  translateX = isMobile ? 0 : 60; // Horizontal for larger screens
                  translateY = isMobile ? -60 : 0; // Vertical for small screens
                  scale = 0.7;
                  opacityNow = 0.2;
                } else if (animationPhase === "slide-out" && index > 0) {
                  animationDuration = "duration-300"; // faster slide-out for other cards
                  translateX = isMobile ? 0 : (index - 1) * -40;
                  translateY = isMobile ? (index - 1) * 40 : 0;
                  scale = 1 - (index - 1) * 0.1;
                } else if (animationPhase === "slide-left" && index === 0) {
                  animationDuration = "duration-200"; // faster slide-left
                  translateX = isMobile ? 0 : -60;
                  translateY = isMobile ? 60 : 0;
                  scale = 0.5;
                  zIndex = 0;
                  opacityNow = 0.2;
                } else if (animationPhase === "slide-left" && index > 0) {
                  animationDuration = "duration-100"; // faster slide-left for behind cards
                  translateX = isMobile ? 0 : (index - 1) * -40;
                  translateY = isMobile ? (index - 1) * 40 : 0;
                  scale = 1 - (index - 1) * 0.1;
                } else if (animationPhase === "slide-in" && index === cardOrder.length - 1) {
                  animationDuration = "duration-50"; // faster slide-in
                  translateX = isMobile ? 0 : -40;
                  translateY = isMobile ? -40 : 0;
                  scale = 1 - index * 0.1;
                  zIndex = 0;
                }

                return (
                  <div
                    key={testimonial.id}
                    className={`absolute transition-all ${animationDuration} ease-in-out ${
                      index === 0 && !isAnimating ? 'cursor-pointer' : 'cursor-default'
                    }
                    [--spacing:25px] sm:[--spacing:32px] md:[--spacing:-49px]
                    [--slide-out:-45px] sm:[--slide-out:-52px] md:[--slide-out:79px]
                    [--slide-left:45px] sm:[--slide-left:52px] md:[--slide-left:-79px]
                    [--slide-in:25px] sm:[--slide-in:27px] md:[--slide-in:-59px]
                    `}
                    style={{
                      zIndex,
                      left: isMobile ? "50%" : 0,
                      top: isMobile ? "0" : "50%",
                      translate: isMobile ? "-50% 0" : "0 -50%",
                      transformOrigin: "center",
                      transition: isAnimating
                        ? "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                        : "all 0.3s ease-in-out",
                      opacity: opacityNow,
                      transform: isMobile
                        ?  
                        // For Mobile: Use fixed spacing and no horizontal translation
                        animationPhase === 'slide-out' && index === 0 
                          ? `translateY(var(--slide-out)) scale(${scale})`
                        : animationPhase === 'slide-left' && index === 0
                          ? `translateY(var(--slide-left)) scale(${scale})`
                        : animationPhase === 'slide-in' && index === cardOrder.length - 1
                          ? `translateY(var(--slide-in)) scale(${scale})`
                        : animationPhase === 'slide-out' && index > 0
                          ? `translateY(calc(${index - 1} * var(--spacing))) scale(${scale})`
                        : animationPhase === 'slide-left' && index > 0
                          ? `translateY(calc(${index - 1} * var(--spacing))) scale(${scale})`
                        : `translateY(calc(${index} * var(--spacing))) scale(${scale})`
                        :  
                        // Use responsive custom properties for different screen sizes
                        animationPhase === 'slide-out' && index === 0 
                          ? `translateX(var(--slide-out)) scale(${scale})`
                        : animationPhase === 'slide-left' && index === 0
                          ? `translateX(var(--slide-left)) scale(${scale})`
                        : animationPhase === 'slide-in' && index === cardOrder.length - 1
                          ? `translateX(var(--slide-in)) scale(${scale})`
                        : animationPhase === 'slide-out' && index > 0
                          ? `translateX(calc(${index - 1} * var(--spacing))) scale(${scale})`
                        : animationPhase === 'slide-left' && index > 0
                          ? `translateX(calc(${index - 1} * var(--spacing))) scale(${scale})`
                        : `translateX(calc(${index} * var(--spacing))) scale(${scale})`,
                    }}
                    onClick={() => handleCardClick(testimonial.id)}
                  >
                    <div 
                      className="rounded-lg sm:rounded-xl border border-[#d7d7d7] overflow-hidden relative w-[280px] sm:w-[350px] md:w-[469px] h-[240px] sm:h-[300px] md:h-[415px]"
                      style={{
                        background: "linear-gradient(179.9deg, rgba(236, 236, 236, 1.00) 0%, rgba(255, 255, 255, 1.00) 100%)",
                        boxShadow: "-4px 4px 7px 0px rgba(0, 0, 0, 0.30)",
                      }}
                    >
                      {/* Black inner border at bottom for active card */}
                      
                      <div
                        className="absolute inset-x-0 bottom-0 h-[5px] sm:h-[8px] bg-black rounded-b-lg sm:rounded-b-xl z-20"
                        style={{
                          transition: 'opacity 1s ease-out',
                          opacity: index === 0 ? 1 : 0,
                        }}
                      />
                      {/* Large image on the left */}
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="rounded-[10px] w-[110px] sm:w-[140px] md:w-[183px] h-[80px] sm:h-[100px] md:h-[135px] absolute left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8 object-cover"
                        style={{
                          background: "linear-gradient(to left, #d9d9d9, #d9d9d9)",
                        }}
                      />
                      
                      {/* Name and title */}
                      <div
                        className="absolute left-[140px] sm:left-[180px] md:left-[235px] top-4 sm:top-6 md:top-8"
                        ref={el => {
                          nameTitleRefs.current[index] = el
                        }}
                      >
                        <h4 className="text-[#2c2c2c] font-syne font-bold text-sm sm:text-xl md:text-2xl max-w-[120px] sm:max-w-[140px] md:max-w-[185px] leading-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-[rgba(44,44,44,0.37)] font-syne text-xs sm:text-sm md:text-base font-medium max-w-[120px] sm:max-w-[140px] md:max-w-[185px]">
                          {testimonial.title}
                        </p>
                      </div>
                      
                      {/* Large quote mark */}
                      <div
                          className="text-[#2c2c2c] font-syne text-4xl sm:text-6xl md:text-8xl font-medium absolute left-[140px] sm:left-[180px] md:left-[235px] w-6 sm:w-7 md:w-9 h-[45px] sm:h-[55px] md:h-[70px] mt-3 sm:mt-3 md:mt-4"
                          style={{
                            top:
                              isMobile
                                ? 4 + (nameTitleHeights[index] ?? 50) + 2 // smaller gap for mobile
                                : 8 + (nameTitleHeights[index] ?? 62) + 10 // default gap for desktop
                          }}
                        >
                          “
                      </div>

                      {/* Review text */}
                      <div className="absolute left-6 sm:left-6 md:left-8 top-28 sm:top-36 md:top-48 w-[240px] sm:w-[300px] md:w-[418px] h-[860px] sm:h-[140px] md:h-[198px] overflow-hidden">
                        <p className="text-[#2c2c2c] font-syne text-lg sm:text-xl md:text-3xl font-medium leading-tight">
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
          <div 
            className={`text-center relative z-10 transition-all duration-1000 ease-out ${
              isMobile 
                ? '' 
                : hasAnimatedIn 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-[200px] opacity-0'
            }`}
          >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10">About Our Company</h3>
              <div className="relative max-w-[17.5rem] sm:max-w-[21.5rem] md:max-w-[27.5rem] mx-auto z-10 flex justify-end">
                <img 
                  src="/media/line.svg" 
                  alt="Line decoration" 
                  className="h-[13px] sm:h-4 md:h-5 w-auto -mt-5"
                />
              </div>
            <p className="text-sm sm:text-xl text-[#676767] leading-tight mb-8 max-w-72 sm:max-w-md mx-auto relative z-10">
              Discover who we are, our values, and how we strive to make a difference in the industry.
            </p>

            {/* Button on background */}
            <div className="relative -top-16">
              <img 
                src="/media/world-map.png" 
                alt="World map background" 
                className="w-auto h-full sm:h-80 object-cover absolute left-1/2 transform -translate-x-1/2 z-0"
              />
              <div className="relative z-10 h-64 flex items-center justify-center">
                <Button
                  className="text-white text-xs sm:text-base font-normal px-6 py-4 sm:px-8 sm:py-6 rounded-full"
                  onClick={() => router.push("/about-us")}
                  style={{
                    background: "linear-gradient(350deg, #5A45FF 20%, #7D71FF 47%, #7C81FF 58%, #000099 120%)",
                    filter: "drop-shadow(0px 0px 68.3px rgba(85, 0, 255, 0.80))"
                  }}
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
