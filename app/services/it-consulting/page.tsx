import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IT Consulting | Devstract",
  description:
    "Receive expert guidance and strategic IT solutions to align technology with business objectives. Transform your IT infrastructure with expert consulting.",
};

export default function ITConsulting() {
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
                  IT Consulting
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Receive expert guidance and strategic IT solutions to align
                technology with business objectives
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/unsplash_4.png"
                alt="IT Consulting"
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
                Strategic IT Guidance
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                In today's digital landscape, technology decisions can make or
                break your business. Our IT consulting services provide the
                strategic guidance you need to make informed decisions about
                your technology investments.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Whether you're planning a digital transformation, modernizing
                legacy systems, or optimizing your IT infrastructure, our
                experienced consultants bring deep technical expertise and
                business acumen to help you achieve your goals efficiently and
                cost-effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Consulting Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Digital Transformation
                </h3>
                <p className="text-[#676767]">
                  Navigate your digital transformation journey with a clear
                  roadmap, technology selection, and change management support.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Technology Strategy
                </h3>
                <p className="text-[#676767]">
                  Develop a comprehensive IT strategy aligned with your business
                  goals, ensuring technology drives competitive advantage.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Infrastructure Assessment
                </h3>
                <p className="text-[#676767]">
                  Evaluate your current IT infrastructure, identify
                  inefficiencies, and recommend optimizations for performance and
                  cost.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Cloud Migration
                </h3>
                <p className="text-[#676767]">
                  Plan and execute seamless cloud migrations with minimal
                  disruption, optimizing costs and improving scalability.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Security & Compliance
                </h3>
                <p className="text-[#676767]">
                  Strengthen your security posture, ensure regulatory compliance,
                  and protect your organization from cyber threats.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Vendor Selection
                </h3>
                <p className="text-[#676767]">
                  Get expert guidance on selecting the right technology vendors
                  and solutions for your specific needs and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Consulting Approach
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Business & IT Assessment
                    </h3>
                    <p className="text-[#676767]">
                      We begin by understanding your business objectives, current
                      IT landscape, pain points, and opportunities for improvement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Analysis & Recommendations
                    </h3>
                    <p className="text-[#676767]">
                      Our experts analyze your systems, processes, and
                      infrastructure to identify gaps and provide actionable
                      recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Strategic Roadmap
                    </h3>
                    <p className="text-[#676767]">
                      We develop a comprehensive roadmap with clear milestones,
                      priorities, and timelines aligned with your business goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Implementation Support
                    </h3>
                    <p className="text-[#676767]">
                      We don't just provide recommendations—we help you implement
                      them, ensuring successful execution and knowledge transfer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Ongoing Partnership
                    </h3>
                    <p className="text-[#676767]">
                      Technology evolves rapidly. We provide ongoing advisory
                      services to help you stay ahead of the curve and adapt to
                      change.
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
              Need Expert IT Guidance?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Let's discuss your technology challenges and explore how we can
              help you achieve your business objectives.
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
