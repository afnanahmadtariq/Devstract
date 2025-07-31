"use client"

import { useEffect, useRef, useState } from "react"
import "./services-section-animations.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Service {
  id: number
  title: string
  description: string
  image: string
}

function checkSmallScreen() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640; // Tailwind's sm breakpoint
  }
  return false;
}

function checkMediumScreen() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768; // Tailwind's md breakpoint
  }
  return false;
}

export default function ServicesSection() {
  const isSmallScreen = checkSmallScreen()
  const isMediumScreen = checkMediumScreen()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<any>(null); // Ref for the slider
  const [slidesToShow, setSlidesToShow] = useState(1);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        const totalWidth = 526 + 30; // idth + gap Include gap in the calculation
        setSlidesToShow(Math.max(1, window.innerWidth / totalWidth));
      } else if (window.innerWidth >= 640) {
        const totalWidth = 400 + 24; // width + gap Include gap in the calculation
        setSlidesToShow(Math.max(1, window.innerWidth / totalWidth));
      }
      else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation
    return () => window.removeEventListener("resize", handleResize);
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

  // Helper function to snap scroll position
  const snapScroll = (customScroll?: number) => {
    if (scrollRef.current) {
      const scrollAmount = isSmallScreen? 312 : isMediumScreen ? 424 : 550;
      const currentScroll = typeof customScroll === 'number' ? customScroll : scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      let snapped = Math.round(currentScroll / scrollAmount) * scrollAmount;
      // Snap to whichever is closer: snapped or maxScroll
      if (Math.abs(currentScroll - snapped) < Math.abs(currentScroll - maxScroll)) {
        scrollRef.current.scrollTo({
          left: snapped,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      }
    }
  };

  // Keep adjusting scroll position on resize or device change
  useEffect(() => {
    snapScroll();
    // Optionally, also listen to window resize for dynamic adjustment
    const handleResize = () => snapScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmallScreen, isMediumScreen]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    touchMove: true,
  };

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
                onClick={() => sliderRef.current?.slickPrev()} // Trigger previous slide
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
                onClick={() => sliderRef.current?.slickNext()} // Trigger next slide
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

        {/* Scrollable carousel with hover buttons */}
        <div id="services-carousel" className="relative group">
          <Slider ref={sliderRef} {...sliderSettings}>
            {services.map((service, index) => {
                let cardAnim = "";
                if (index === 0) cardAnim = `slide-from-left${animate ? " show" : ""}`;
                else if (index === 1) cardAnim = `slide-from-right${animate ? " show" : ""}`;
                else if (index === 2) cardAnim = `slide-from-far-right${animate ? " show" : ""}`;
                else cardAnim = animate ? "opacity-100" : "opacity-0";
                return (
              <div key={service.id}>
                <div
                  className={`flex-shrink-0 w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] md:w-[526px] md:h-[341px] rounded-lg sm:rounded-2xl p-6 sm:p-10 text-white relative group cursor-pointer bg-cover bg-center mx-auto sm:mx-12 lg:mx-32 transition-all duration-2000 ease-out ${cardAnim}`}
                  style={{ backgroundImage: `url(${service.image})` }}
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
              </div>
                );
            })}
          </Slider>
          {/* Buttons below cards for small screens */}
          <div className="flex sm:hidden justify-center mt-8 gap-2">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()} // Trigger previous slide
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
              onClick={() => sliderRef.current?.slickNext()} // Trigger next slide
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
