export default function DevstractSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-8xl mx-auto text-center">
        {/* Process Flow */}
        <div className="mb-8">
          <p className="text-2xl text-[#2C2C2C] tracking-wider flex items-center justify-center gap-8">
            Ideation 
            <img src="/media/arrow.svg" alt="arrow" className="w-34 h-34" />
            Planning 
            <img src="/media/arrow.svg" alt="arrow" className="w-34 h-34" />
            <span
              style={{
                background: "linear-gradient(310deg, #5A45FF 0%, #7D71FF 77%, #7C81FF 98%, #000099 150%)",
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
        <h1
              className="text-center font-syne font-bold text-8xl md:text-9xl lg:text-[12rem] relative mx-auto leading-tight origin-center" 
              style={{
                background:
                  "linear-gradient(180deg, #2C2C2C 0%,#2C2C2C 53.557692766189575%,#d1d1d1 53.76939356327057%,#929292 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
          Devstract</h1>

        {/* Devstract Effect SVG */}
        <div className="flex justify-center">
          <img 
            src="/media/devstract-effect.svg" 
            alt="Devstract Effect" 
            className="w-auto h-auto max-w-full"
          />
        </div>

        {/* Descriptive Text */}
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-gray-600 leading-relaxed font-syne">
            Get audience based on where you are and where you're going. Interactive country-based Q&A simplify legal
            complexities.
          </p>
        </div>
      </div>
    </section>
  )
}
