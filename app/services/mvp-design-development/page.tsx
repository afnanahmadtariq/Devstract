import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MVP Design & Development | Devstract",
  description:
    "Transform your ideas into reality with expert MVP design and development services. Launch your product faster with our proven methodology.",
};

export default function MVPDesignDevelopment() {
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
                  MVP Design & Development
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Transform your ideas into reality with expert MVP design and
                development services
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/unsplash_1.png"
                alt="MVP Design & Development"
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
                What is MVP Development?
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                A Minimum Viable Product (MVP) is the fastest path from idea to
                market. We help startups and enterprises build the core features
                needed to validate their product concept, gather user feedback,
                and iterate quickly based on real-world data.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Our MVP development approach focuses on delivering maximum value
                with minimum complexity, allowing you to test your assumptions,
                save time and resources, and make data-driven decisions about
                your product's future.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Why Choose Our MVP Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Fast Time to Market
                </h3>
                <p className="text-[#676767]">
                  Launch your product in weeks, not months. Get to market
                  quickly and start gathering valuable user feedback.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Cost-Effective Development
                </h3>
                <p className="text-[#676767]">
                  Focus your budget on essential features that matter most to
                  your users. Avoid wasting resources on unnecessary
                  functionality.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  User-Centric Approach
                </h3>
                <p className="text-[#676767]">
                  Build exactly what your users need. Validate assumptions early
                  and iterate based on real feedback.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Scalable Architecture
                </h3>
                <p className="text-[#676767]">
                  We build MVPs with growth in mind. Our architecture ensures
                  your product can scale as your user base expands.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Agile Methodology
                </h3>
                <p className="text-[#676767]">
                  Benefit from iterative development cycles, regular updates,
                  and the flexibility to adapt to changing requirements.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Expert Team
                </h3>
                <p className="text-[#676767]">
                  Work with experienced developers, designers, and product
                  strategists who understand the startup ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our MVP Development Process
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Discovery & Planning
                    </h3>
                    <p className="text-[#676767]">
                      We start by understanding your vision, target audience,
                      and business goals. Together, we define the core features
                      that will make your MVP successful.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Design & Prototyping
                    </h3>
                    <p className="text-[#676767]">
                      Our designers create intuitive user interfaces and
                      interactive prototypes, ensuring a seamless user
                      experience from day one.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Agile Development
                    </h3>
                    <p className="text-[#676767]">
                      We build your MVP using modern technologies and best
                      practices. You'll receive regular updates and can provide
                      feedback throughout the process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Testing & Quality Assurance
                    </h3>
                    <p className="text-[#676767]">
                      Rigorous testing ensures your MVP is stable, secure, and
                      ready for real users. We handle all aspects of QA before
                      launch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Launch & Iteration
                    </h3>
                    <p className="text-[#676767]">
                      We help you launch your MVP and provide ongoing support.
                      Based on user feedback, we'll help you iterate and add new
                      features.
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
              Ready to Build Your MVP?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Let's turn your idea into a successful product. Schedule a
              consultation with our team today.
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
