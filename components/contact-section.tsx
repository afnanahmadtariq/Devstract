"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    { id: 1, image: "/placeholder.svg?height=60&width=60", name: "Sarah" },
    { id: 2, image: "/placeholder.svg?height=60&width=60", name: "Mike" },
    { id: 3, image: "/placeholder.svg?height=60&width=60", name: "Emma" },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl md:max-w-[95rem] mx-auto">
        <div 
        className="relative rounded-3xl overflow-hidden min-h-[800px]"
          style={{
            border: "1px solid #D7D7D7",
            background: "linear-gradient(to bottom, #DBDBDB -10%, #FFFFFF 20%)",
          }}
        >
          {/* "Get in touch" heading behind the image */}
          <div className="absolute inset-x-0 top-[150px] flex flex-col items-center justify-center text-center z-10 pointer-events-none">
            <h2 className="text-6xl md:text-[12rem] font-bold text-black mb-8 leading-none">
              Get in <span className="text-purple-600">touch</span>
            </h2>
          </div>
          {/* Bottom-aligned background image in front of heading */}
          <img
            src="/media/mountain.png"
            alt="Contact section background"
            className="absolute bottom-0 left-0 w-full h-2/3 object-cover z-20"
            style={{ pointerEvents: "none" }}
          />
          {/* Top-left team images and description */}
          <div className="absolute top-8 left-8 z-30">
            <div className="flex -space-x-3 mb-3">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="relative"
                  style={{
                    zIndex: teamMembers.length - index,
                  }}
                >
                  <div className="w-12 h-12 bg-yellow-300 rounded-full border-3 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
            <p className="text-sm text-black max-w-xs">
              From innovative startups to enterprise solutions, we deliver cutting-edge digital experiences. Contact us
              today to support your journey every step of the way.
            </p>
          </div>

          {/* Top-right circular arrow with text */}
          <div className="absolute top-8 right-8 z-30">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="circle" d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
                </defs>
                <text className="text-[8px] fill-black font-medium">
                  <textPath href="#circle">START YOUR PROJECT • START YOUR PROJECT •</textPath>
                </text>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>

          {/* Main content except heading */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-30 pointer-events-none">
            {/* Spacer for heading */}
            <div className="mb-24" />
            <Button className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-3 text-base font-semibold inline-flex items-center space-x-2 pointer-events-auto">
              <span>Bring your ideas to life</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
