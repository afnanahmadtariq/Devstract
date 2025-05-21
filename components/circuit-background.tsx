"use client";

import { useEffect, useRef } from "react";

export function CircuitBackground() {
  const pathRefs = [useRef<SVGPathElement>(null), useRef<SVGPathElement>(null), useRef<SVGPathElement>(null)];
  const circleRefs = Array.from({ length: 11 }, () => useRef<SVGCircleElement>(null));

  useEffect(() => {
    let timeoutIds: number[] = [];
    let isUnmounted = false;
    let direction: 'forward' | 'reverse' = 'forward';

    function animatePathsLoop() {
      pathRefs.forEach((ref, i) => {
        const path = ref.current;
        if (path) {
          const length = path.getTotalLength();
          path.style.strokeDasharray = `${length}`;
          path.style.transition = "none";
          // Set initial offset based on direction
          path.style.strokeDashoffset = direction === 'forward' ? `${length}` : '0';
          // Force reflow for SVG element
          path.getBoundingClientRect();
          path.style.transition = "stroke-dashoffset 2s cubic-bezier(0.77,0,0.18,1)";
          timeoutIds.push(
            window.setTimeout(() => {
              if (!isUnmounted) {
                path.style.strokeDashoffset = direction === 'forward' ? '0' : `${length}`;
              }
            }, 300 + i * 500)
          );
        }
      });
      // After all paths are drawn, reverse direction and loop
      timeoutIds.push(
        window.setTimeout(() => {
          if (!isUnmounted) {
            direction = direction === 'forward' ? 'reverse' : 'forward';
            animatePathsLoop();
          }
        }, 300 + pathRefs.length * 500 + 2200) // 2200ms for last path's transition
      );
    }
    animatePathsLoop();

    // Animate circles (pulse effect, already loops)
    circleRefs.forEach((ref, i) => {
      const circle = ref.current;
      if (circle) {
        circle.animate([
          { filter: "drop-shadow(0 0 0px #14b8a6)", opacity: 0.7 },
          { filter: "drop-shadow(0 0 12px #14b8a6)", opacity: 1 },
          { filter: "drop-shadow(0 0 0px #14b8a6)", opacity: 0.7 },
        ], {
          duration: 1800,
          delay: 1200 + i * 120,
          iterations: Infinity,
        });
      }
    });

    return () => {
      isUnmounted = true;
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
        <path
          ref={pathRefs[0]}
          d="M400 100 L500 100 C550 100 550 150 500 150 L300 150 C250 150 250 200 300 200 L700 200"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <path
          ref={pathRefs[1]}
          d="M100 300 L200 300 C250 300 250 350 200 350 L150 350 C100 350 100 400 150 400 L400 400"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <path
          ref={pathRefs[2]}
          d="M700 500 L600 500 C550 500 550 450 600 450 L650 450 C700 450 700 400 650 400 L400 400"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <circle ref={circleRefs[0]} cx="400" cy="100" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[1]} cx="500" cy="150" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[2]} cx="300" cy="200" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[3]} cx="700" cy="200" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[4]} cx="100" cy="300" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[5]} cx="200" cy="350" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[6]} cx="150" cy="400" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[7]} cx="400" cy="400" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[8]} cx="700" cy="500" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[9]} cx="600" cy="450" r="5" fill="#14b8a6" />
        <circle ref={circleRefs[10]} cx="650" cy="400" r="5" fill="#14b8a6" />
      </svg>
    </div>
  );
}
