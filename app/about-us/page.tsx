"use client";

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutUsPage() {

  // Refs and scroll logic for animation
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // Animate text up as user scrolls (0px to 1000px scroll)
  const [viewportHeight, setViewportHeight] = useState(800); // fallback for SSR
  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);
  const y = useTransform(scrollY, [0, 1000], [0, -viewportHeight]);

  // Big text slides at a constant rate regardless of text length
  const bigTextRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1200); // fallback for SSR
  useEffect(() => {
    const updateSizes = () => {
      setViewportWidth(window.innerWidth);
      setTextWidth(bigTextRef.current ? bigTextRef.current.offsetWidth : 0);
    };
    updateSizes();
    const resizeObserver = new window.ResizeObserver(updateSizes);
    if (bigTextRef.current) resizeObserver.observe(bigTextRef.current);
    window.addEventListener('resize', updateSizes);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSizes);
    };
  }, []);
  const bigTextX = useTransform(scrollY, [0, 3500], [viewportWidth + textWidth, -textWidth]);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl text-center mb-24">
            We’d love to hear from you! Whether you have questions, feedback, or you’re ready to start a project, our team is here to help. Reach out to us anytime — we’re just a message away.
          </p>
          <div className="w-full bg-[#F7F7F7] flex flex-col justify-center items-stretch p-3 gap-3 max-w-7xl border-2 border-[#EBEBEB] rounded-[36px]">
            {/* Top Portion */}
            <div className="w-full flex flex-row gap-3 min-h-[36rem]">
              {/* Left Side */}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-8 border-2 border-[#EBEBEB]">
                
              </div>
              {/* Right Side*/}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-8 max-w-xl border-2 border-[#EBEBEB]">
                  
              </div>
            </div>
            {/* Bottom Portion */}
            <div className="w-full flex flex-row gap-3 min-h-96">
              {/* Left Side */}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-8 border-2 border-[#EBEBEB]">
                
              </div>
              {/* Middle */}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-8 border-2 border-[#EBEBEB]">
                
              </div>
              {/* Right Side*/}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-8 border-2 border-[#EBEBEB]">
                  
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
