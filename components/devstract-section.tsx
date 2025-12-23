"use client"

import { useEffect, useRef, useState } from "react"

export default function DevstractSection() {
  const [gradientAngle, setGradientAngle] = useState(0)
  const [show, setShow] = useState(false);
  const [processShow, setProcessShow] = useState(false);
  const [textShow, setTextShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          setTimeout(() => setShow(true), 100)
        }
      }
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if text section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          setTextShow(true); // In view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (show) {
      let start: number | null = null
      const duration = 5000
      function animate(ts: number) {
        if (!start) start = ts
        const elapsed = ts - start
        const angle = Math.min(180, (elapsed / duration) * 180)
        setGradientAngle(angle)
        if (elapsed < duration) {
          requestAnimationFrame(animate)
        } else {
          setGradientAngle(180)
          setProcessShow(true) // Animation complete
        }
      }
      requestAnimationFrame(animate)
    }
  }, [show])
  return (
    <section ref={sectionRef} className="sm:py-24 px-6 bg-white">
      <div className="max-w-8xl mx-auto text-center">
        {/* Process Flow */}
        <div className="mb-8">
          <p
            className={`text-sm sm:text-2xl text-[#2C2C2C] tracking-wider flex items-center justify-center gap-2 sm:gap-8 process-flow-animate${processShow ? ' show' : ''}`}
            style={{
              transform: processShow ? 'scaleX(1)' : 'scaleX(0.2)',
              opacity: processShow ? 1 : 0,
              transition: 'transform 2.5s cubic-bezier(0.4,0,0.2,1), opacity 1.5s cubic-bezier(0.4,0,0.2,1)',
              margin: '0 auto',
              transformOrigin: 'left',
            }}
          >
            Ideation
            <img src="/media/arrow.svg" alt="arrow" className="w-12 h-12 sm:w-36 sm:h-36" />
            Planning
            <img src="/media/arrow.svg" alt="arrow" className="w-12 h-12 sm:w-36 sm:h-36" />
            <span
              style={{
                backgroundImage: "linear-gradient(310deg, #5A45FF 0%, #7D71FF 77%, #7C81FF 98%, #000099 150%)",
                backgroundPosition: "center",
                backgroundSize: "100%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Execution
            </span>
          </p>
        </div>

        {/* Main Brand Name */}
        <h2
          className={`text-center font-syne font-bold text-5xl sm:text-8xl md:text-9xl lg:text-[12rem] relative mx-auto leading-tight origin-center devstract-slide${show ? ' show' : ''} ${show ? 'devstract-gradient-animate' : ''}`}
          // @ts-ignore: Allow custom CSS property for gradient angle
          style={{
            backgroundImage: `linear-gradient(${gradientAngle}deg, #2C2C2C 0%,#2C2C2C 53.5%,#d1d1d1 53.7%,#929292 100%)`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            ['--gradient-angle' as any]: `${gradientAngle}deg`,
          }}
        >
          Devstract
        </h2>

        {/* Devstract Effect SVG */}
        <div className="flex justify-center">
          <img
            src="/media/devstract-effect.svg"
            alt="Devstract Effect"
            className="w-auto h-auto max-w-full"
          />
        </div>

        {/* Descriptive Text */}
        <div ref={textRef} className={`max-w-4xl mx-auto transition-all duration-2000 ${textShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm sm:text-2xl text-gray-600 leading-relaxed font-syne">
            Empowering businesses with innovative software solutions tailored to their unique challenges and goals.
          </p>
        </div>
      </div>
    </section>
  )
}
