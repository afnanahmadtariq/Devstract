"use client"

import { useRef} from 'react'

interface Card {
  id: number
  title: string
  description: string
  image: string
}

export default function CarouselCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const cards: Card[] = [
    { id: 1, title: "Lightning Fast Delivery", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card1.svg" },
    { id: 2, title: "Any integration you can imagine", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card2.svg" },
    { id: 3, title: "Solutions that drives revenue", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card3.svg" },
    { id: 4, title: "Security-First Engineering", description: "Fast. Efficient. Reliable. Try us and see the difference.", image: "/media/card4.svg" },
  ]

  // Duplicate list for seamless looping
  const loopCards = [...cards, ...cards]
  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className='flex overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none animate-scroll-left'              
        style={{
          width: `${loopCards.length * 383}px`, // 383px = 361px card width + 22px margin
          scrollBehavior: 'smooth'
        }}
      >
        {loopCards.map((card, idx) => (
          <div
            key={`${card.id}-${idx}`}
            className="w-[259px] h-[280px] sm:w-[324px] sm:h-[350px] md:w-[361px] md:h-[390px] rounded-xl flex-shrink-0 m-2 flex flex-col justify-end shadow-lg relative overflow-hidden border border-white/[0.11]"
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
              <h5 className="text-white font-normal text-sm sm:text-lg mb-1">{card.title}</h5>
              <p className="text-white/[0.32] font-normal text-xs sm:text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
