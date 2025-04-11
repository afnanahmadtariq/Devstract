export function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
        <path
          d="M400 100 L500 100 C550 100 550 150 500 150 L300 150 C250 150 250 200 300 200 L700 200"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M100 300 L200 300 C250 300 250 350 200 350 L150 350 C100 350 100 400 150 400 L400 400"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M700 500 L600 500 C550 500 550 450 600 450 L650 450 C700 450 700 400 650 400 L400 400"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="400" cy="100" r="5" fill="#14b8a6" />
        <circle cx="500" cy="150" r="5" fill="#14b8a6" />
        <circle cx="300" cy="200" r="5" fill="#14b8a6" />
        <circle cx="700" cy="200" r="5" fill="#14b8a6" />
        <circle cx="100" cy="300" r="5" fill="#14b8a6" />
        <circle cx="200" cy="350" r="5" fill="#14b8a6" />
        <circle cx="150" cy="400" r="5" fill="#14b8a6" />
        <circle cx="400" cy="400" r="5" fill="#14b8a6" />
        <circle cx="700" cy="500" r="5" fill="#14b8a6" />
        <circle cx="600" cy="450" r="5" fill="#14b8a6" />
        <circle cx="650" cy="400" r="5" fill="#14b8a6" />
      </svg>
    </div>
  )
}
