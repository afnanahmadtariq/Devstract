"use client"

import { useEffect, useRef, useState } from "react"
import "./services-section-animations.css"

interface Service {
  id: number
  title: string
  description: string
  image: string
}

export default function ServicesSection() {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the scrollable carousel

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          setTimeout(() => setAnimate(true), 100)
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: "Ai Automation",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_1.png"
    },
    {
      id: 2,
      title: "LLM Fine Tuning",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "/media/unsplash_2.png"
    },
    {
      id: 3,
      title: "MVP design & development",
      description:
        "Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal complexities.",
      image: "/media/unsplash_3.png"
    },
    {
      id: 4,
      title: "AI Integration",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_4.png"
    },
    {
      id: 5,
      title: "UX re-engineering",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_5.png"
    },
    {
      id: 6,
      title: "Product designing",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_6.png"
    },
    {
      id: 7,
      title: "Full-stack Development",
      description:
        "Get guidance based on where you are and where you're going. Interactive.",
      image: "/media/unsplash_7.png"
    },
  ]

  // Enable mouse wheel horizontal scroll for carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      carousel.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };

    carousel.addEventListener("wheel", onWheel, { passive: false });
    return () => carousel.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`py-16 bg-white transition-opacity duration-2000 ${animate ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mx-auto">
        {/* Left-aligned heading and description */}
        <div
          className={`px-4 sm:px-8 lg:px-28 ml-6 mb-12 slide-from-left ${animate ? "show" : ""}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-left">
            Our Services
          </h2>
          <div className="flex items-center">
            <p className="text-sm sm:text-xl text-[#676767] max-w-xl text-left">
              Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal
              complexities.
            </p>
            <div className="hidden sm:flex justify-end ml-6 gap-2 w-full">
              <button
                type="button"
                onClick={() => {
                  if (carouselRef.current) {
                    const card = carouselRef.current.querySelector('.snap-center');
                    const cardWidth = card ? card.clientWidth + 32 : 350; // 32px = mx-2*2
                    carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                  }
                }} // Trigger previous slide
                className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
                aria-label="Scroll left"
              >
                <img
                  src="/media/small_arrow.svg"
                  alt="arrow left"
                  className="w-6 h-6 rotate-180"
                  style={{ filter: "invert(100%)" }}
                />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (carouselRef.current) {
                    const card = carouselRef.current.querySelector('.snap-center');
                    const cardWidth = card ? card.clientWidth + 32 : 350;
                    carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
                  }
                }}// Trigger next slide
                className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
                aria-label="Scroll right"
              >
                <img
                  src="/media/small_arrow.svg"
                  alt="arrow right"
                  className="w-6 h-6"
                  style={{ filter: "invert(100%)" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable carousel with scroll snap */}
        <div id="services-carousel" className="relative group">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto z-0 scroll-smooth snap-x snap-mandatory hide-scrollbar pl-6 sm:pl-32"
            style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
            tabIndex={0}
            aria-label="Services carousel"
          >
            {services.map((service, index) => {
              let cardAnim = "";
              if (index === 0) cardAnim = `slide-from-left${animate ? " show" : ""}`;
              else if (index === 1) cardAnim = `slide-from-right${animate ? " show" : ""}`;
              else if (index === 2) cardAnim = `slide-from-far-right${animate ? " show" : ""}`;
              else cardAnim = animate ? "opacity-100" : "opacity-0";
              return (
                <div
                  key={service.id}
                  className={`flex-shrink-0 z-1 w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] md:w-[526px] md:h-[341px] rounded-lg sm:rounded-2xl p-6 sm:p-10 text-white relative group cursor-pointer bg-cover bg-center mr-4 sm:mr-6 lg:mr-8 transition-all duration-2000 ease-out snap-center ${cardAnim}`}
                  style={{ backgroundImage: `url(${service.image})` }}
                  tabIndex={-1}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent rounded-lg sm:rounded-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-6 font-normal leading-tight text-white/[0.77]">
                      {service.description}
                    </p>
                    {/* Arrow button */}
                    {/* <div className="flex justify-start">
                        <ArrowUpRight className="h-8 w-8 sm:h-16 sm:w-16 text-white" />
                    </div> */}
                  </div>
                </div>
                );
            })}
          </div>
          {/* Scroll buttons for carousel */}
          <div className="flex sm:hidden justify-center mt-8 gap-2">
            <button
              type="button"
              onClick={() => {
                if (carouselRef.current) {
                  const card = carouselRef.current.querySelector('.snap-center');
                  const cardWidth = card ? card.clientWidth + 32 : 350; // 32px = mx-2*2
                  carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                }
              }}
              className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
              aria-label="Scroll left"
            >
              <img
                src="/media/small_arrow.svg"
                alt="arrow left"
                className="w-6 h-6 rotate-180"
                style={{ filter: "invert(100%)" }}
              />
            </button>
            <button
              type="button"
              onClick={() => {
                if (carouselRef.current) {
                  const card = carouselRef.current.querySelector('.snap-center');
                  const cardWidth = card ? card.clientWidth + 32 : 350;
                  carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
              }}
              className="bg-[#FAFAFA] border border-[#E2E2E2] hover:bg-[#F0F0F0] rounded-full px-3 py-3 text-base font-normal inline-flex items-center"
              aria-label="Scroll right"
            >
              <img
                src="/media/small_arrow.svg"
                alt="arrow right"
                className="w-6 h-6"
                style={{ filter: "invert(100%)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
