"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export default function HeroSection() {
  const [showHero, setShowHero] = useState(false)
  const bg1Ref = useRef<HTMLImageElement | null>(null)
  const bg2Ref = useRef<HTMLImageElement | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const tickingRef = useRef(false)
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setShowHero(true)
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    }
  }, [])

  const applyParallax = () => {
    tickingRef.current = false
    const { x, y } = targetRef.current
    const max1 = 10 
    const max2 = 20 
    const t1x = x * max1
    const t1y = y * max1
    const t2x = x * max2
    const t2y = y * max2

    if (bg1Ref.current) {
      bg1Ref.current.style.transform = `translate3d(${t1x}px, ${t1y}px, 0)`
    }
    if (bg2Ref.current) {
      bg2Ref.current.style.transform = `translate3d(${t2x}px, ${t2y}px, 0)`
    }
  }

  const requestTick = () => {
    if (!tickingRef.current) {
      tickingRef.current = true
      rafIdRef.current = requestAnimationFrame(applyParallax)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    // Normalize to [-1, 1]
    const nx = (x / rect.width) * 2 - 1
    const ny = (y / rect.height) * 2 - 1
    targetRef.current = { x: nx, y: ny }
    requestTick()
  }

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 }
    requestTick()
  }

  return (
    <section
      id="home"
      className={`inset-0 top-0 w-full h-screen flex flex-col items-center justify-center text-center p-8 transition-opacity duration-3000 ${showHero ? 'animate-hero-up' : 'opacity-0'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/media/bg.png"
        alt="Gradient Background"
        className={`absolute inset-4 w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] sm:h-screen rounded-2xl object-cover object-top z-0 pointer-events-none transition-opacity duration-1000 ${showHero ? "opacity-100" : "opacity-0"}`}
        ref={bg1Ref}
        style={{ willChange: "transform", transition: "transform 150ms ease-out, opacity 1000ms ease" }}
        aria-hidden="true"
      />
      {/* Main heading */}
      <h1 className="absolute top-1/3 lg:top-36 text-4xl sm:text-5xl md:text-8xl lg:text-[9rem] font-bold z-10 text-white leading-10">
        Building Beyond <br /> Boundaries
        <span
          aria-hidden="true"
          className="inline-block align-baseline ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full relative"
          style={{
            background: "linear-gradient(350deg, #5A45FF 20%, #7D71FF 47%, #7C81FF 58%, #000099 120%)",
            // Strong outer glow for reliability across browsers
            boxShadow: "0 0 24px rgba(85, 0, 255, 0.5), 0 0 64px rgba(85, 0, 255, 0.55)",
            // Subtle drop-shadow to accent edges
            filter: "drop-shadow(0 0 12px rgba(85, 0, 255, 0.6))"
          }}
        />
      </h1>

      <img
        src="/media/bg-2.png"
        alt="Gradient Background"
        className={`absolute inset-4 w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] sm:h-screen object-cover object-top z-20 pointer-events-none transition-opacity duration-1000 ${showHero ? "opacity-100" : "opacity-0"}`}
        ref={bg2Ref}
        style={{ willChange: "transform", transition: "transform 150ms ease-out, opacity 1000ms ease" }}
        aria-hidden="true"
      />

      
      <h1 className="absolute top-1/3 lg:top-36 text-4xl sm:text-5xl md:text-8xl lg:text-[9rem] font-bold z-30 text-fill-transparent text-stroke-white text-stroke leading-10">
        Building Beyond <br /> Boundaries
        <span
          aria-hidden="true"
          className="inline-block align-baseline ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full relative"
          style={{
            background: "linear-gradient(350deg, #5A45FF 20%, #7D71FF 47%, #7C81FF 58%, #000099 120%)",
            boxShadow: "0 0 24px rgba(85, 0, 255, 0.5), 0 0 64px rgba(85, 0, 255, 0.55)",
            filter: "drop-shadow(0 0 12px rgba(85, 0, 255, 0.6))"
          }}
        />
      </h1>

      {/* CTA button */}
      <div className="group inline-block z-30 mt-[20rem] sm:mt-[28rem]">
        <Button
          className="group bg-white text-black border border-white/30 rounded-full px-6 py-6 sm:px-8 sm:py-7
             text-sm sm:text-base font-normal inline-flex items-center space-x-2 relative overflow-hidden
             transition-all duration-300 ease-out
             hover:bg-transparent hover:text-white hover:border-white/60 hover:backdrop-blur-sm
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
             active:scale-[0.98]"
          onClick={() => window.open('https://calendly.com/afnan-devstract/30min', '_blank')}
        >
          <img src="/media/small_arrow.svg" alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4 filter invert group-hover:invert-0" />
          <span className="pr-2">Work with us</span>
        </Button>
      </div>

    </section>
  )
}