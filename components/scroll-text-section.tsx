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

  const textParts = [
    "Devstract is a next-gen ",
    <img key="gears" src="/media/gears.svg" alt="Gears" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 4px' }} />, 
    "design and development company focused on crafting innovative digital experiences. We blend cutting-edge technology with creative design ",
    <img key="lightbulb" src="/media/light-bulb.svg" alt="Lightbulb" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 4px' }} />,
    "to build modern, user-centric solutions that help brands grow, engage, and lead in their industries."
  ];

  // Flatten textParts to count total characters (excluding icons)
  const flatText = textParts.map(part => typeof part === "string" ? part : "").join("");
  const getLetterColor = (index: number) => {
    const totalLetters = flatText.length;
    // After scrollProgress > 0.5, threshold starts from 0 and goes to 100%
    const threshold = scrollProgress < 0.5
      ? 0
      : Math.floor(((scrollProgress - 0.5) / 0.5) * totalLetters);
    return index < threshold ? "#2C2C2C" : "#C2C2C2";
  };

  return (
    <section ref={sectionRef} className="py-48 px-6 md:px-24 bg-white">
      <div className="text-center mx-auto">
        <p className="text-md md:text-[42px] font-semibold leading-[1.6] md:leading-[1.6]">
          {(() => {
            let globalCharIndex = 0;
            return textParts.map((part, i) => {
              if (typeof part === "string") {
                return part.split("").map((char, idx) => {
                  const color = getLetterColor(globalCharIndex);
                  const span = <span key={"char-" + i + "-" + idx} style={{ color }}>{char}</span>;
                  globalCharIndex++;
                  return span;
                });
              } else {
                return part;
              }
            }).flat();
          })()}
        </p>
      </div>
    </section>
  )
}