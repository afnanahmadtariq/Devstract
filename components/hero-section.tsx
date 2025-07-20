"use client"

import { Button } from "@/components/ui/button"
import CarouselCards from "@/components/carousel-cards"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [showHero, setShowHero] = useState(false)
  useEffect(() => {
    setShowHero(true)
  }, [])
  return (
    <section
      id="home"
      className={`w-full flex flex-col items-center justify-center text-center py-2 mt-12 sm:mt-24 transition-opacity duration-3000 ${showHero ? 'animate-hero-up' : 'opacity-0'}`}
    >
      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium mb-6 text-white leading-tight max-w-7xl">
        The <span
          className="bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(-8deg, #5A45FF 20%, #CCCEFF 48%, #5A45FF 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
        Next GEN</span> Software Design and 
        <br />
        Development Agency
      </h1>

      {/* Sub-heading */}
      <p className="text-lg sm:text-xl text-white/[0.53] mb-8 max-w-2xl">
        Fast. Efficient. Reliable. Try us and see the difference.
      </p>

      {/* CTA button */}
      <div className="group inline-block mb-12 sm:mb-32">
        <Button
          className="bg-white/[0.03] border border-white/30 hover:border-white/0 text-white hover:bg-white/[0.07] rounded-full px-6 py-6 sm:px-8 sm:py-7 text-sm sm:text-base font-normal inline-flex items-center space-x-2 relative overflow-hidden"
        >
          <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img src="/media/button.svg" alt="button border" className="w-full h-full object-fill rounded-full" style={{ transform: 'scaleY(1.06)' }} />
          </span>
          <img src="/media/small_arrow.svg" alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Start a project</span>
        </Button>
      </div>

      {/* Carousel */}
      <CarouselCards />
    </section>
  )
}

// Add animation styles
if (typeof window !== 'undefined') {
  const styleId = 'hero-up-animation-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      @keyframes hero-up {
        0% {
          transform: translateY(40px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      .animate-hero-up {
        animation: hero-up 3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }
      // .btn-gradient-border:hover {
      //   position: relative;
      //   border: none;
      // }
      // .btn-gradient-border::before:hover {
      //   content: '';
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   height: 100%;
      //   width: 100%;
      //   border-radius: inherit; 
      //   background: #0A0A0A;
      //   z-index: -1;
      // }
      // .btn-gradient-border::after:hover {
      //   content: '';
      //   position: absolute;
      //   // top: 0;
      //   // left: 0;
      //   height: 107%;
      //   width: 102%;
      //   border-radius: inherit; 
      //   background-image: var(--primary-gradient);
      //   z-index: -2;
      // }
    `;
    document.head.appendChild(style);
  }
}
