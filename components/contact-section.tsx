"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

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
    { id: 1, image: "/images/image 3.png", name: "Sarah" },
    { id: 2, image: "/images/image 4.png", name: "Mike" },
    { id: 3, image: "/images/image 6.png", name: "Emma" },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl md:max-w-[85rem] mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden min-h-[700px]"
          style={{
            border: "1px solid #D7D7D7",
            background: "linear-gradient(to bottom, #DBDBDB -10%, #FFFFFF 20%)",
          }}
        >
          {/* "Get in touch" heading behind the image */}
          <div className="absolute inset-x-0 top-[185px] flex flex-col items-center justify-center text-center z-10 pointer-events-none">
            <h2 className="text-6xl md:text-[14rem] font-bold text-[#383838] leading-none whitespace-nowrap">
              Get in <span style={{
                background: "var(--Primary-gradient, linear-gradient(326deg, #5A45FF 25.92%, #7D71FF 65.7%, #7C81FF 81.62%, #009 140.45%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>touch</span>
            </h2>
          </div>
          {/* Bottom-aligned background image in front of heading */}
          <img
            src="/media/mountain.png"
            alt="Contact section background"
            className="absolute bottom-0 left-0 w-full h-1/2 object-cover z-20"
            style={{ pointerEvents: "none" }}
          />
          {/* Top-left team images and description */}
          <div className="absolute top-12 left-12 z-30">
            <div className="flex -space-x-3 mb-6 ml-2">
              {[...teamMembers].reverse().map((member, index) => (
                <div
                  key={member.id}
                  className="relative"
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden" style={{ border: '1px solid #ECECEC' }}>
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-[#828282] max-w-2xl">
              From innovative startups to enterprise solutions, we deliver cutting-edge digital experiences. Contact us
              today to support your journey every step of the way.
            </p>
          </div>

          {/* Top-right circular arrow with text */}
          <div className="absolute top-6 right-8 z-30">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="circle" d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
                </defs>
                <text className="text-[14px] fill-black font-normal font-syne">
                  <textPath href="#circle">Start your Journey Today Tehe</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/media/small_arrow.svg" alt="Submit" className="w-10 h-10 transform -rotate-45" style={{ filter: 'brightness(0)' }} />
              </div>
            </div>
          </div>

          {/* Main content except heading */}
          <div className=" absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-30 pointer-events-none">
            {/* Spacer for heading */}
            <div className="mb-96" />
            <Button className="bg-white hover:bg-gray-100 text-black rounded-full py-7 text-base font-semibold inline-flex pointer-events-auto">
              <span className="m-4">Bring your ideas to life</span>
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 42,
                  height: 42,
                  background: "var(--Blue-gradient, linear-gradient(326deg, #5A45FF 25.92%, #7D71FF 45.7%, #7C81FF 61.62%, #009 100.45%))",
                }}
              >
                <img src="/media/small_arrow.svg" alt="arrow" className="m-0 w-4 h-4 transform -rotate-45" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
