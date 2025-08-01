"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import "./services-section-animations.css"

interface Service {
  id: number
  title: string
  description: string
  image: string
}

export default function ServicesSection() {
  const [animate, setAnimate] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const CARD_WIDTH = {
    mobile: 316, // 300px + 20px margin
    tablet: 420, // 400px + 20px margin  
    desktop: 546 // 526px + 20px margin
  }

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight && rect.bottom > 0) {
          setTimeout(() => setAnimate(true), 100)
        }
      }
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleScroll()
    handleResize()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const services: Service[] = [
    {
      id: 1,
      title: "Ai Automation",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_1.png"
    },
    {
      id: 2,
      title: "LLM Fine Tuning",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "/media/unsplash_2.png"
    },
    {
      id: 3,
      title: "MVP design & development",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "/media/unsplash_3.png"
    },
    {
      id: 4,
      title: "AI Integration",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_4.png"
    },
    {
      id: 5,
      title: "UX re-engineering",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_5.png"
    },
    {
      id: 6,
      title: "Product designing",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_6.png"
    },
    {
      id: 7,
      title: "Full-stack Development",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_7.png"
    },
  ]

  // Get current card width based on screen size
  const getCurrentCardWidth = () => {
    if (typeof window === 'undefined') return CARD_WIDTH.desktop
    if (window.innerWidth < 640) return CARD_WIDTH.mobile
    if (window.innerWidth < 768) return CARD_WIDTH.tablet
    return CARD_WIDTH.desktop
  }

  // Calculate drag constraints
  const cardWidth = getCurrentCardWidth()
  const maxScroll = (services.length - 1) * cardWidth
  const dragConstraints = { left: -maxScroll, right: 0 }

  // Handle drag end - snap to nearest card
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    
    let newIndex = currentIndex
    
    // Determine direction and calculate new index
    if (Math.abs(offset) > cardWidth / 3 || Math.abs(velocity) > 500) {
      if (offset > 0 && currentIndex > 0) {
        newIndex = currentIndex - 1
      } else if (offset < 0 && currentIndex < services.length - 1) {
        newIndex = currentIndex + 1
      }
    }
    
    setCurrentIndex(newIndex)
  }

  // Navigate to specific card
  const goToSlide = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (direction === 'next' && currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`py-16 bg-white transition-opacity duration-2000 ${animate ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mx-auto">
        {/* Left-aligned heading and description */}
        <div
          className={`px-4 sm:px-8 lg:px-28 ml-6 mb-12 slide-from-left ${animate ? "show" : ""}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-left">
            Our Services
          </h2>
          <div className="flex items-center">
            <p className="text-sm sm:text-xl text-[#676767] max-w-xl text-left">
              Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal
              complexities.
            </p>
            <div className="hidden sm:flex justify-end ml-6 gap-2 w-full">
              <button
                type="button"
                onClick={() => goToSlide('prev')}
                disabled={currentIndex === 0}
                className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
                aria-label="Previous slide"
              >
                <img
                  src="/media/small_arrow.svg"
                  alt="arrow left"
                  className="w-6 h-6 rotate-180"
                  style={{ filter: "invert(100%)" }}
                />
              </button>
              <button
                type="button"
                onClick={() => goToSlide('next')}
                disabled={currentIndex === services.length - 1}
                className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
                aria-label="Next slide"
              >
                <img
                  src="/media/small_arrow.svg"
                  alt="arrow right"
                  className="w-6 h-6"
                  style={{ filter: "invert(100%)" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Framer Motion draggable carousel */}
        <div id="services-carousel" className="relative overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing pl-[30px] sm:pl-12 lg:pl-32"
            drag="x"
            dragConstraints={dragConstraints}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * cardWidth }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.6
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            {services.map((service, index) => {
              let cardAnim = ""
              if (index === 0) cardAnim = `slide-from-left${animate ? " show" : ""}`
              else if (index === 1) cardAnim = `slide-from-right${animate ? " show" : ""}`
              else if (index === 2) cardAnim = `slide-from-far-right${animate ? " show" : ""}`
              else cardAnim = animate ? "opacity-100" : "opacity-0"
              
              return (
                <motion.div
                  key={service.id}
                  className={`flex-shrink-0 w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] md:w-[526px] md:h-[341px] rounded-lg sm:rounded-2xl p-6 sm:p-10 text-white relative group cursor-pointer bg-cover bg-center mr-4 sm:mr-5 transition-opacity duration-2000 ease-out ${cardAnim}`}
                  style={{ backgroundImage: `url(${service.image})` }}
                  tabIndex={-1}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent rounded-lg sm:rounded-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-6 font-normal leading-tight text-white/[0.77]">
                      {service.description}
                    </p>
                    {/* Arrow button */}
                    {/* <div className="flex justify-start">
                        <ArrowUpRight className="h-8 w-8 sm:h-16 sm:w-16 text-white" />
                    </div> */}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
          
          {/* Mobile scroll buttons */}
          <div className="flex sm:hidden justify-center mt-8 gap-2">
            <button
              type="button"
              onClick={() => goToSlide('prev')}
              disabled={currentIndex === 0}
              className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
              aria-label="Previous slide"
            >
              <img
                src="/media/small_arrow.svg"
                alt="arrow left"
                className="w-6 h-6 rotate-180"
                style={{ filter: "invert(100%)" }}
              />
            </button>
            <button
              type="button"
              onClick={() => goToSlide('next')}
              disabled={currentIndex === services.length - 1}
              className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
              aria-label="Next slide"
            >
              <img
                src="/media/small_arrow.svg"
                alt="arrow right"
                className="w-6 h-6"
                style={{ filter: "invert(100%)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
