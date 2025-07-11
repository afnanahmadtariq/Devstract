"use client"

import { useEffect, useState, useRef } from "react"

export default function ScrollTextSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress based on section entering viewport
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      if (sectionTop > windowHeight) {
        // Section hasn't entered viewport yet
        setScrollProgress(0)
      } else if (sectionTop <= 0) {
        // Section is fully in view or has passed
        setScrollProgress(1)
      } else {
        // Section is entering viewport
        const progress = (windowHeight - sectionTop) / windowHeight
        setScrollProgress(Math.min(progress, 1))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const text = "Devstract is a next-gen design and development company focused on crafting innovative digital experiences. We blend cutting-edge technology with creative design to build modern, user-centric solutions that help brands grow, engage, and lead in their industries."

  const getLetterColor = (index: number) => {
    const totalLetters = text.length
    const threshold = Math.floor(scrollProgress * totalLetters)
    // Distinct color transition: gray before threshold, black after
    return index < threshold ? "#2C2C2C" : "#C2C2C2"
  }

  return (
    <section ref={sectionRef} className="py-48 px-6 md:px-24 bg-white">
      <div className="text-center mx-auto">
        <p className="text-md md:text-4xl font-semibold leading-[1.6] md:leading-[1.6]">
          {text.split('').map((char, index) => (
            <span key={index} style={{ color: getLetterColor(index) }}>
              {char}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}