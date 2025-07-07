"use client"

import { useRef, useState, useEffect } from 'react'

interface Card {
  id: number
  title: string
  description: string
  image: string
}

export default function CarouselCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isAnimationPaused, setIsAnimationPaused] = useState(false)

  const cards: Card[] = [
    { id: 1, title: "Lightning Fast Delivery", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card1.svg" },
    { id: 2, title: "Any integration you can imagine", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card2.svg" },
    { id: 3, title: "Solutions that drives revenue", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card3.svg" },
    { id: 4, title: "Security-First Engineering", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card4.svg" },
  ]

  // Duplicate list for seamless looping
  const loopCards = [...cards, ...cards]

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsAnimationPaused(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Resume animation after a short delay
    setTimeout(() => setIsAnimationPaused(false), 1000)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    // Resume animation after a short delay
    setTimeout(() => setIsAnimationPaused(false), 1000)
  }

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setIsAnimationPaused(true)
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.touches[0].pageX - (scrollContainerRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    // Resume animation after a short delay
    setTimeout(() => setIsAnimationPaused(false), 1000)
  }

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className={`flex overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none ${
          !isAnimationPaused ? 'animate-scroll-left' : ''
        }`}
        style={{
          width: `${loopCards.length * 320}px`, // 320px = 288px card width + 32px margin
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          animationPlayState: isAnimationPaused ? 'paused' : 'running'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {loopCards.map((card, idx) => (
          <div
            key={`${card.id}-${idx}`}
            className="w-72 h-80 rounded-xl flex-shrink-0 m-2 flex flex-col justify-end shadow-lg relative overflow-hidden border border-white/[0.11]"
            style={{
              backgroundColor: '#121212'
            }}
          >
            {/* Image element positioned from top */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute top-0 left-0 w-full h-auto object-cover z-0"
            />
            
            <div className="p-6 text-left relative z-20">              
              <h5 className="text-white font-normal text-md mb-1">{card.title}</h5>
              <p className="text-white/[0.32] text-xs">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
