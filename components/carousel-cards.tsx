"use client"

interface Card {
  id: number
  title: string
  description: string
  color: string
}

export default function CarouselCards() {
  const cards: Card[] = [
    { id: 1, title: "Web Development", description: "Custom websites & web apps", color: "bg-blue-500" },
    { id: 2, title: "Mobile Apps", description: "iOS & Android applications", color: "bg-purple-500" },
    { id: 3, title: "UI/UX Design", description: "Beautiful user experiences", color: "bg-green-500" },
    { id: 4, title: "E-commerce", description: "Online store solutions", color: "bg-orange-500" },
    { id: 5, title: "Digital Marketing", description: "Grow your online presence", color: "bg-pink-500" },
    { id: 6, title: "SEO Services", description: "Improve search rankings", color: "bg-indigo-500" },
    { id: 7, title: "Brand Identity", description: "Logo & brand design", color: "bg-red-500" },
    { id: 8, title: "Consulting", description: "Strategic tech guidance", color: "bg-teal-500" },
  ]

  // Duplicate list for seamless looping
  const loopCards = [...cards, ...cards]

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll-left">
        {loopCards.map((card, idx) => (
          <div
            key={`${card.id}-${idx}`}
            className={`w-72 h-80 ${card.color} rounded-xl flex-shrink-0 m-4 flex flex-col justify-end shadow-lg`}
          >
            <div className="p-6 text-left">              
              <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-white text-sm opacity-90">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
