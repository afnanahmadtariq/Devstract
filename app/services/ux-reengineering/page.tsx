import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UX Re-Engineering | Devstract",
  description:
    "Enhance user satisfaction by reimagining and optimizing your product's user experience. Transform your digital product with expert UX redesign.",
};

export default function UXReEngineering() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-[70vh] bg-white">
        {/* Hero Section */}
        <section className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(326deg, #5A45FF 25.92%, #7D71FF 45.7%, #7C81FF 61.62%, #009 100.45%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  UX Re-Engineering
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Enhance user satisfaction by reimagining and optimizing your
                product's user experience
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/unsplash_2.png"
                alt="UX Re-Engineering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#202020]">
                Transform Your User Experience
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Is your product struggling with user engagement, high bounce
                rates, or poor conversion? UX re-engineering is the solution.
                We analyze your existing product, identify pain points, and
                redesign the experience to delight your users.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Our holistic approach combines user research, data analysis, and
                design expertise to create intuitive, accessible, and engaging
                digital experiences that drive business results.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Benefits of UX Re-Engineering
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Increased User Satisfaction
                </h3>
                <p className="text-[#676767]">
                  Create delightful experiences that keep users coming back.
                  Improve satisfaction scores and build brand loyalty.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Higher Conversion Rates
                </h3>
                <p className="text-[#676767]">
                  Optimize user flows and eliminate friction points to boost
                  conversions and achieve your business goals.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Reduced Support Costs
                </h3>
                <p className="text-[#676767]">
                  Intuitive design means fewer user errors and support tickets.
                  Save time and resources with self-explanatory interfaces.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Competitive Advantage
                </h3>
                <p className="text-[#676767]">
                  Stand out in the market with superior user experience. Win
                  customers by making their lives easier.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Data-Driven Insights
                </h3>
                <p className="text-[#676767]">
                  Make informed decisions based on user behavior analytics,
                  heatmaps, and usability testing results.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Accessibility Compliance
                </h3>
                <p className="text-[#676767]">
                  Ensure your product is usable by everyone, meeting WCAG
                  standards and expanding your potential audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our UX Re-Engineering Process
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      UX Audit & Analysis
                    </h3>
                    <p className="text-[#676767]">
                      We conduct a comprehensive audit of your existing product,
                      analyzing user flows, pain points, and opportunities for
                      improvement using analytics and user feedback.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      User Research
                    </h3>
                    <p className="text-[#676767]">
                      Through interviews, surveys, and usability testing, we
                      gain deep insights into your users' needs, behaviors, and
                      expectations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Strategy & Information Architecture
                    </h3>
                    <p className="text-[#676767]">
                      We develop a UX strategy and restructure your information
                      architecture to ensure content is organized logically and
                      intuitively.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Wireframing & Prototyping
                    </h3>
                    <p className="text-[#676767]">
                      We create detailed wireframes and interactive prototypes,
                      allowing you to visualize and test the new experience
                      before development begins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Visual Design & Implementation
                    </h3>
                    <p className="text-[#676767]">
                      Our designers craft beautiful, on-brand interfaces while
                      our developers implement the redesign with pixel-perfect
                      precision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Testing & Optimization
                    </h3>
                    <p className="text-[#676767]">
                      Post-launch, we monitor user behavior, conduct A/B tests,
                      and continuously optimize the experience based on real-world
                      data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 lg:px-40 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#202020]">
              Ready to Transform Your UX?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Let's reimagine your product's user experience together. Schedule
              a UX audit consultation today.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#7567FE] hover:bg-[#6355E5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
