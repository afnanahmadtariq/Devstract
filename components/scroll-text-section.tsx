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

  const text = "As an enthusiastic UX/UI designer and developer, I am dedicated to creating engaging and intuitive digital experiences that bridge the gap between functionality and aesthetics. My journey in the tech world is fueled by a passion for innovative design and a commitment to crafting user-centric solutions that drive success."

  const getLetterColor = (index: number) => {
    const totalLetters = text.length
    const letterProgress = (scrollProgress * totalLetters - index) / 20
    const clampedProgress = Math.max(0, Math.min(1, letterProgress))

    // Gray to black transition
    const grayValue = 156 - (156 * clampedProgress) // 156 -> 0 (gray to black)
    return `rgb(${grayValue}, ${grayValue}, ${grayValue})`
  }

  return (
    <section ref={sectionRef} className="py-36 px-6 md:px-24 bg-white">
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
