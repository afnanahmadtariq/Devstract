"use client"

import { useEffect, useState, useRef } from "react"

export default function ScrollTextSection() {
  const [isInView, setIsInView] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setAnimationProgress(0); // Reset animation progress when out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [])

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev >= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev + 0.01; // Increment progress by 1% every interval
        });
      }, 30); // Adjust interval speed as needed

      return () => clearInterval(interval);
    }
  }, [isInView]);

  const iconStyle = {
    display: 'inline',
    verticalAlign: 'middle',
    margin: '0 4px',
  };

  const textParts = [
    "Devstract is a next-gen ",
    <img key="gears" src="/media/gears.svg" alt="Gears" style={{ ...iconStyle, width: 'auto', height: '1.35em' }} />,
    "design and development company focused on crafting innovative digital experiences. We blend cutting-edge technology with creative design ",
    <img key="lightbulb" src="/media/light-bulb.svg" alt="Lightbulb" style={{ ...iconStyle, width: 'auto', height: '1.35em' }} />,
    "to build modern, user-centric solutions that help brands grow, engage, and lead in their industries."
  ];

  const flatText = textParts.map(part => typeof part === "string" ? part : "").join("");
  const interpolateColor = (progress: number, startColor: string, endColor: string) => {
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const rgbToHex = (r: number, g: number, b: number) => {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    };

    const startRgb = hexToRgb(startColor);
    const endRgb = hexToRgb(endColor);

    const r = Math.round(startRgb.r + (endRgb.r - startRgb.r) * progress);
    const g = Math.round(startRgb.g + (endRgb.g - startRgb.g) * progress);
    const b = Math.round(startRgb.b + (endRgb.b - startRgb.b) * progress);

    return rgbToHex(r, g, b);
  };

  const getLetterColor = (index: number) => {
    const totalLetters = flatText.length;
    const threshold = animationProgress * totalLetters;
    const progress = Math.min(Math.max((index - (threshold - 10)) / 10, 0), 1); // Smooth transition range
    return interpolateColor(progress, "#2C2C2C", "#C2C2C2");
  };

  return (
    <section ref={sectionRef} className="py-20 sm:py-48 px-6 lg:px-24 bg-white">
      <div className="text-center mx-auto">
        <p className="text-xl sm:text-3xl lg:text-[42px] text-center font-semibold leading-[1.6] md:leading-[1.6]">
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