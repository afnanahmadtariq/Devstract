"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile" // or "@/components/ui/use-mobile"
import { useRouter } from "next/navigation";

function isSmallScreen() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640; // Tailwind's sm breakpoint
  }
  return false;
}

export default function ContactSection() {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = Math.min(Math.max((windowHeight - rect.top) / rect.height, 0), 1);
          setScrollProgress(progress);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    { id: 1, image: "https://plus.unsplash.com/premium_photo-1669704098858-8cd103f4ac2e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Sarah" },
    { id: 2, image: "/images/image 4.png", name: "Mike" },
    { id: 3, image: "/images/image 3.png", name: "Emma" },
  ]

  return (
    <section ref={sectionRef} className="mt-24 mb-12 px-6 bg-white">
      <div className="max-w-7xl md:max-w-[85rem] mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden min-h-[500px] sm:min-h-[700px]"
          style={{
            border: "1px solid #D7D7D7",
            background: "linear-gradient(to bottom, #DBDBDB -10%, #FFFFFF 20%)",
          }}
        >
          {/* "Get in touch" heading behind the image */}
          <div
            className="absolute inset-x-0 top-[210px] sm:top-[280px] md:top-[240px] lg:top-[185px] flex flex-col items-center justify-center text-center z-10 pointer-events-none"
            style={{
              transform: `translateY(${(1 - scrollProgress) * (isMobile ? 120 : 224)}px)`
            }}
          >
            <h2 className="text-6xl sm:text-[7rem] md:text-[10rem] lg:text-[14rem] font-bold text-[#383838] leading-none whitespace-nowrap">
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
          <div
            className="absolute top-4 left-3 sm:top-12 sm:left-12 z-30"
            style={{
              opacity: scrollProgress,
              transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
            }}
          >
            <div className="flex -space-x-3 mb-6 ml-2">
              {[...teamMembers].reverse().map((member, index) => (
                <div
                  key={member.id}
                  className="relative"
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden" style={{ border: '1px solid #ECECEC' }}>
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
            <p className="ml-2 sm:ml-0 text-xs sm:text-lg text-[#828282] max-w-56 sm:max-w-2xl">
              From innovative startups to enterprise solutions, we deliver cutting-edge digital experiences. Contact us
              today to support your journey every step of the way.
            </p>
          </div>

          {/* Top-right circular arrow with text */}
          <div className="absolute top-2 right-2 sm:top-4 md:top-6 sm:right-4 md:right-8 z-30">
            <div className="relative w-16 h-16 sm:w-24 md:w-32 sm:h-24 md:h-32">
              <svg className="w-16 h-16 sm:w-24 md:w-32 sm:h-24 md:h-32 animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="circle" d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
                </defs>
                <text className="text-sm sm:text-sm fill-black font-normal font-syne">
                  <textPath href="#circle">Schedule a Meeting with Us🤝</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/media/small_arrow.svg" alt="Submit" className="w-5 h-5 sm:w-8 md:w-10 sm:h-8 md:h-10 transform -rotate-45" style={{ filter: 'brightness(0)' }} />
              </div>
            </div>
          </div>

          {/* Main content except heading */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-30 pointer-events-none">
            {/* Spacer for heading */}
            <div className="mb-60 sm:mb-96" />
            <Button
              className="bg-white hover:bg-gray-100 text-black rounded-full py-6 sm:py-7 text-xs sm:text-base font-semibold justify-end pointer-events-auto overflow-hidden"
              onClick={() => router.push("/contact-us")}
              style={{
                width: isSmallScreen()
                  ? `${48 + (scrollProgress > 0.91 ? scrollProgress * 170 : 0)}px` // small screen width
                  : `${65 + (scrollProgress > 0.91 ? scrollProgress * 230 : 0)}px`, // larger screen width
                transition: "width 1s ease-out",
              }}
            >
              <span className="m-2 sm:m-3 whitespace-nowrap">
                Bring your ideas to life
              </span>
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  width: isSmallScreen() ? 36 : 42,
                  height: isSmallScreen() ? 36 : 42,
                  background: "var(--Blue-gradient, linear-gradient(326deg, #5A45FF 25.92%, #7D71FF 45.7%, #7C81FF 61.62%, #009 100.45%))",
                  flexShrink: 0,
                  marginRight: isSmallScreen() ? -9 : -5,
                }}
              >
                <img
                  src="/media/small_arrow.svg"
                  alt="arrow"
                  className="w-3 h-3 sm:w-4 sm:h-4 transform -rotate-45"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
