"use client";

import React, { useEffect, useState } from "react";

const GRID_SIZE = 48;

export function AnimatedGrid() {
  const [cells, setCells] = useState(() =>
    Array.from({ length: GRID_SIZE }, () => Math.random() > 0.7)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCells((prev) =>
        prev.map((cell) => (Math.random() > 0.92 ? !cell : cell))
      );
    }, 170);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="relative z-10 border border-gray-200 rounded-xl overflow-hidden bg-white/70 backdrop-blur-sm p-6 shadow-md">
        <div className="grid grid-cols-12 gap-4">
          {cells.map((active, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md transition-colors duration-300 ${
                active
                  ? "bg-teal-500/20 border border-teal-500/30"
                  : "bg-gray-100"
              }`}
            ></div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-teal-500/20 pointer-events-none"></div>
      </div>
    </div>
  );
}
