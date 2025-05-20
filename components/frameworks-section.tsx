"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const frameworks = [
  { name: "React", logo: "/images/frameworks/react.svg" },
  { name: "Vue.js", logo: "/images/frameworks/vue.svg" },
  { name: "Angular", logo: "/images/frameworks/angular.svg" },
  { name: "Node.js", logo: "/images/frameworks/node.svg" },
  { name: "Django", logo: "/images/frameworks/django.svg" },
  { name: "Laravel", logo: "/images/frameworks/laravel.svg" },
  { name: "Flutter", logo: "/images/frameworks/flutter.svg" },
  { name: "React Native", logo: "/images/frameworks/react-native.svg" },
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
    <section className="py-20 bg-white" id="frameworks">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Frameworks</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies to deliver cutting-edge solutions for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {frameworks.map((framework, index) => (
            <motion.div key={index} variants={itemVariants} className="flex justify-center items-center">
              <div className="framework-logo h-16 flex items-center justify-center bg-white/70 backdrop-blur-sm p-4 rounded-lg w-full border border-gray-200 shadow-md">
                <Image
                  src={framework.logo || "/placeholder.svg"}
                  alt={`${framework.name} logo`}
                  width={80}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FrameworksSection
