"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const frameworks = [
  { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", color: "#61DAFB", url: "https://react.dev/" },
  { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", color: "#000000", url: "https://nextjs.org/" },
  { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", color: "#303030", url: "https://expressjs.com/" },
  { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", color: "#47A248", url: "https://www.mongodb.com/" },
  { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", color: "#336791", url: "https://www.postgresql.org/" },
  { name: "Firebase", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg", color: "#FFCA28", url: "https://firebase.google.com/" },
  { name: "Flutter", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg", color: "#02569B", url: "https://flutter.dev/" },
]

const FrameworksSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("frameworks")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-teal-50 to-blue-50" id="frameworks">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 tracking-tight drop-shadow-lg">
            Our Core Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We specialize in the most powerful frameworks and platforms to build scalable, modern, and robust digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12"
        >
          {frameworks.map((framework, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center group">
              <a href={framework.url} target="_blank" rel="noopener noreferrer" className="w-full flex flex-col items-center">
                <div
                  className="framework-logo h-20 w-20 flex items-center justify-center bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: `0 4px 24px 0 ${framework.color}33` }}
                >
                  <Image
                    src={framework.logo || "/placeholder.svg"}
                    alt={`${framework.name} logo`}
                    width={64}
                    height={64}
                    className="max-h-16 w-auto drop-shadow-md"
                  />
                </div>
                <span
                  className="mt-4 text-base font-semibold text-gray-700 group-hover:text-teal-600 transition-colors duration-300 text-center"
                  style={{ color: framework.color }}
                >
                  {framework.name}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FrameworksSection
