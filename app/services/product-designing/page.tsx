import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Product Designing | Devstract",
  description:
    "Design innovative and visually appealing products that resonate with your target audience. Create experiences that users love and remember.",
};

export default function ProductDesigning() {
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
                  Product Designing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Design innovative and visually appealing products that resonate
                with your target audience
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/unsplash_6.png"
                alt="Product Designing"
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
                Design That Drives Success
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Great design is more than aesthetics—it's about creating
                meaningful experiences that solve real problems. Our product
                design approach combines user research, strategic thinking, and
                creative excellence to craft products that users love.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                From initial concept to final visual design, we work closely
                with you to understand your vision, validate ideas with users,
                and create interfaces that are both beautiful and functional.
                Every design decision is backed by research and aligned with
                your business goals.
              </p>
            </div>
          </div>
        </section>

        {/* Design Services */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Design Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  User Research
                </h3>
                <p className="text-[#676767]">
                  Deep dive into your users' needs, behaviors, and pain points
                  through interviews, surveys, and usability studies.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  UX/UI Design
                </h3>
                <p className="text-[#676767]">
                  Create intuitive user experiences and stunning visual designs
                  that balance aesthetics with functionality.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Interaction Design
                </h3>
                <p className="text-[#676767]">
                  Design engaging micro-interactions, animations, and transitions
                  that delight users and enhance usability.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Prototyping
                </h3>
                <p className="text-[#676767]">
                  Build interactive prototypes to test ideas, gather feedback,
                  and validate designs before development begins.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Design Systems
                </h3>
                <p className="text-[#676767]">
                  Develop comprehensive design systems and component libraries
                  for consistency and scalability.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Brand Identity
                </h3>
                <p className="text-[#676767]">
                  Create cohesive brand identities including logos, color
                  palettes, typography, and visual guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Design Principles
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      User-Centered
                    </h3>
                    <p className="text-[#676767]">
                      Every design decision is informed by user needs, behaviors,
                      and feedback. We design for real people, not assumptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Simple & Intuitive
                    </h3>
                    <p className="text-[#676767]">
                      Complexity is the enemy of usability. We create clean,
                      intuitive interfaces that anyone can use effortlessly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Accessible to All
                    </h3>
                    <p className="text-[#676767]">
                      Inclusive design ensures your product is usable by everyone,
                      regardless of ability or device.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Visually Engaging
                    </h3>
                    <p className="text-[#676767]">
                      Beautiful design creates emotional connections and makes
                      your product memorable and enjoyable to use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Data-Driven
                    </h3>
                    <p className="text-[#676767]">
                      We validate designs through testing and analytics, ensuring
                      our solutions deliver measurable results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Future-Proof
                    </h3>
                    <p className="text-[#676767]">
                      Scalable design systems and flexible components adapt to
                      evolving needs and technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Design Process
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Discover & Research
                    </h3>
                    <p className="text-[#676767]">
                      We immerse ourselves in your business, users, and market to
                      understand the problem space and identify opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Define & Strategize
                    </h3>
                    <p className="text-[#676767]">
                      We synthesize research findings into clear user personas,
                      journeys, and a design strategy that guides our work.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Ideate & Sketch
                    </h3>
                    <p className="text-[#676767]">
                      Through collaborative workshops and sketching sessions, we
                      explore multiple design solutions and refine the best ideas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Design & Prototype
                    </h3>
                    <p className="text-[#676767]">
                      We create high-fidelity designs and interactive prototypes
                      that bring the vision to life and enable early testing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Test & Iterate
                    </h3>
                    <p className="text-[#676767]">
                      User testing reveals what works and what doesn't. We iterate
                      based on feedback until we achieve the optimal solution.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Deliver & Support
                    </h3>
                    <p className="text-[#676767]">
                      We hand off polished designs with detailed specifications
                      and continue to support the development team through launch.
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
              Ready to Design Something Amazing?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Let's create a product that your users will love. Start your
              design journey with us today.
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
