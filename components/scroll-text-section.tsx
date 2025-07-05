"use client"

import { useEffect, useState } from "react"

export default function ScrollTextSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(Math.min(scrollPercent, 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-24 px-6 bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          As an enthusiastic UX/UI designer and developer, I am dedicated to creating engaging and intuitive digital
          experiences that bridge the gap between functionality and{" "}
          <span className="text-blue-500 font-semibold">aesthetics</span>. My journey in the tech world is fueled by a
          passion for innovative design and a commitment to crafting user-centric solutions that drive success.
        </p>
      </div>
    </section>
  )
}
