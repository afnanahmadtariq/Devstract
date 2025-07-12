"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import "./services-section-animations.css"

interface Service {
  id: number
  title: string
  description: string
  image: string
}

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          setTimeout(() => setAnimate(true), 100)
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 550
      const currentScroll = scrollRef.current.scrollLeft
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      let targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount
      let snapped = Math.round(targetScroll / scrollAmount) * scrollAmount

      // Snap to whichever is closer: snapped or maxScroll
      if (Math.abs(targetScroll - snapped) < Math.abs(targetScroll - maxScroll)) {
        scrollRef.current.scrollTo({
          left: snapped,
          behavior: "smooth",
        })
      } else {
        scrollRef.current.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        })
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true)
      setStartX(e.pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollRef.current) {
      const scrollAmount = 550
      const currentScroll = scrollRef.current.scrollLeft
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      let snapped = Math.round(currentScroll / scrollAmount) * scrollAmount

      // Snap to whichever is closer: snapped or maxScroll
      if (Math.abs(currentScroll - snapped) < Math.abs(currentScroll - maxScroll)) {
        scrollRef.current.scrollTo({
          left: snapped,
          behavior: "smooth",
        })
      } else {
        scrollRef.current.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        })
      }
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (scrollRef.current) {
      const scrollAmount = 550
      const currentScroll = scrollRef.current.scrollLeft
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      let snapped = Math.round(currentScroll / scrollAmount) * scrollAmount

      // Snap to whichever is closer: snapped or maxScroll
      if (Math.abs(currentScroll - snapped) < Math.abs(currentScroll - maxScroll)) {
        scrollRef.current.scrollTo({
          left: snapped,
          behavior: "smooth",
        })
      } else {
        scrollRef.current.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <section ref={sectionRef} id="services" className={`py-16 bg-white transition-opacity duration-[2000ms] ${animate ? 'opacity-100' : 'opacity-0'}`}> 
      <div className="mx-auto">
        {/* Left-aligned heading and description */}
        <div className={`px-28 ml-6 mb-12 slide-from-left${animate ? ' show' : ''}`}> 
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-left">Our Services</h2>
          <p className="text-xl text-[#676767] max-w-xl text-left">
            Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal
            complexities.
          </p>
        </div>

        {/* Scrollable carousel with hover buttons */}
        <div className="relative group">
          {/* Left scroll button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200
              bg-white/[0.1] border border-white text-white hover:bg-white/[0.2] rounded-full px-5 py-5 text-base font-normal inline-flex items-center mb-32 ml-6 shadow-lg shadow-black/30"
            style={{ pointerEvents: 'auto' }}
            aria-label="Scroll left"
          >
            <img src="/media/small_arrow.svg" alt="arrow left" className="w-4 h-4 rotate-180" />
          </button>

          {/* Right scroll button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200
              bg-white/[0.1] border border-white text-white hover:bg-white/[0.2] rounded-full px-5 py-5 text-base font-normal inline-flex items-center mb-32 mr-6 shadow-lg shadow-black/30"
            style={{ pointerEvents: 'auto' }}
            aria-label="Scroll right"
          >
            <img src="/media/small_arrow.svg" alt="arrow right" className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {services.map((service, index) => {
              let cardAnim = ''
              if (index === 0) cardAnim = `slide-from-left${animate ? ' show' : ''}`
              else if (index === 1) cardAnim = `slide-from-right${animate ? ' show' : ''}`
              else if (index === 2) cardAnim = `slide-from-far-right${animate ? ' show' : ''}`
              else cardAnim = animate ? 'opacity-100' : 'opacity-0'
              return (
                <div
                  key={service.id}
                  className={`flex-shrink-0 w-[526px] h-[341px] rounded-2xl p-10 text-white relative overflow-hidden group cursor-pointer bg-cover bg-center ${index === 0 ? "ml-32" : ""} transition-all duration-[2000ms] ${cardAnim}`}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent rounded-2xl"></div>

                  {/* Card content */}
                  <div className="relative z-10">
                    <h3 className="text-5xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-xl mb-6 font-light leading-tight text-white/[0.77]">{service.description}</p>

                    {/* Arrow button */}
                    {/* <div className="flex justify-start">
                      <ArrowUpRight className="h-16 w-16 text-white" />
                  </div> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
