"use client"

import { useState, useEffect, useRef } from "react"

export default function DraggableScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Find the scroll container on mount
  useEffect(() => {
    const container = document.querySelector('.custom-scrollbar') as HTMLElement
    if (container) {
      setScrollContainer(container)
    }
  }, [])

  useEffect(() => {
    if (!scrollContainer) return

    const handleScroll = () => {
      const containerHeight = scrollContainer.clientHeight
      const scrollHeight = scrollContainer.scrollHeight
      const scrollTop = scrollContainer.scrollTop

      // Show indicator when user is scrolling
      if (scrollTop > 100) {
        setIsVisible(true)
        
        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        
        // Hide after 1.5 seconds of no scrolling
        scrollTimeoutRef.current = setTimeout(() => {
          if (!isDragging) {
            setIsVisible(false)
          }
        }, 1500)
      } else {
        setIsVisible(false)
      }

      // Calculate scroll percentage
      const maxScroll = scrollHeight - containerHeight
      const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      setScrollPercentage(Math.min(100, Math.max(0, percentage)))
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [scrollContainer, isDragging])

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setIsVisible(true)
    
    // Clear any pending hide timeout when starting to drag
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    
    // Start hide timer after dragging ends
    scrollTimeoutRef.current = setTimeout(() => {
      setIsVisible(false)
    }, 1500)
  }

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !indicatorRef.current || !scrollContainer) return

    const indicator = indicatorRef.current
    const rect = indicator.getBoundingClientRect()
    
    // Get Y position
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    const relativeY = clientY - rect.top
    
    // Calculate percentage based on indicator height
    const percentage = (relativeY / rect.height) * 100
    const clampedPercentage = Math.min(100, Math.max(0, percentage))

    // Calculate scroll position
    const scrollHeight = scrollContainer.scrollHeight
    const containerHeight = scrollContainer.clientHeight
    const maxScroll = scrollHeight - containerHeight
    const scrollTo = (clampedPercentage / 100) * maxScroll

    // Scroll to position
    scrollContainer.scrollTo({
      top: scrollTo,
      behavior: "auto", // Use auto for smooth dragging experience
    })
  }

  // Add touch event listeners manually to allow preventDefault
  useEffect(() => {
    const thumb = thumbRef.current
    if (!thumb) return

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)
    }

    thumb.addEventListener('touchstart', handleTouchStart, { passive: false })

    return () => {
      thumb.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleMouseMove, { passive: false })
      window.addEventListener("touchend", handleMouseUp)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseup", handleMouseUp)
        window.removeEventListener("touchmove", handleMouseMove)
        window.removeEventListener("touchend", handleMouseUp)
      }
    }
  }, [isDragging, scrollContainer])

  return (
    <div
      ref={indicatorRef}
      className={`fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        height: "40vh",
        minHeight: "200px",
        maxHeight: "400px",
      }}
    >
      {/* Track */}
      <div className="relative h-full w-1 md:w-1.5 bg-gray-200 rounded-full overflow-visible">
        {/* Draggable thumb */}
        <div
          ref={thumbRef}
          className={`absolute left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing ${
            isDragging ? "scale-110" : "scale-100"
          }`}
          style={{
            top: `${scrollPercentage}%`,
            transform: `translate(-50%, -50%) scale(${isDragging ? 1.1 : 1})`,
            touchAction: "none",
            transition: isDragging ? "none" : "transform 0.1s ease-out",
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Mobile-optimized large touch target */}
          <div className="relative">
            {/* Visible thumb */}
            <div
              className={`w-8 h-12 md:w-10 md:h-14 rounded-full shadow-lg transition-all duration-200 ${
                isDragging ? "shadow-xl" : "shadow-lg"
              }`}
              style={{
                backgroundImage: "linear-gradient(323deg, rgba(90,68,255,1.00) 0%, rgba(125,113,255,1.00) 27%, rgba(124,128,255,1.00) 48%, rgba(0,0,153,1.00) 100%)",
                boxShadow: isDragging
                  ? "0 8px 20px rgba(90, 69, 255, 0.5)"
                  : "0 4px 12px rgba(90, 69, 255, 0.3)",
              }}
            >
              {/* Grip lines for better visual affordance */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <div className="w-4 h-0.5 bg-white/40 rounded-full"></div>
                <div className="w-4 h-0.5 bg-white/40 rounded-full"></div>
                <div className="w-4 h-0.5 bg-white/40 rounded-full"></div>
              </div>
            </div>
            
            {/* Extended invisible touch target for easier grabbing on mobile */}
            <div className="absolute inset-0 -m-4 md:hidden" />
          </div>
        </div>
      </div>

      {/* Scroll percentage indicator (optional, shows on drag) */}
      {isDragging && (
        <div
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          style={{
            top: `${scrollPercentage}%`,
          }}
        >
          {Math.round(scrollPercentage)}%
        </div>
      )}
    </div>
  )
}
