export default function DevstractSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-8xl mx-auto text-center">
        {/* Process Flow */}
        <div className="mb-8">
          <p className="text-base text-gray-600 tracking-wider">Ideation → Planning → Execution</p>
        </div>

        {/* Main Brand Name */}
        <h1
              className="text-center font-syne font-bold text-8xl md:text-9xl lg:text-[12rem] relative mx-auto leading-tight"
              style={{
                background:
                  "linear-gradient(180deg, rgba(44, 44, 44, 1.00) 0%,rgba(44, 44, 44, 1.00) 53.557692766189575%,rgba(181, 181, 181, 1.00) 53.76939356327057%,rgba(146, 146, 146, 1.00) 100%)",
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
