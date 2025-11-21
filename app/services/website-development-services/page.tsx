import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Website Development Services | Devstract",
  description:
    "Fix, enhance, and redesign websites with modern interfaces, focusing on performance and user experience.",
};

export default function WebsiteDevelopmentServices() {
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
                  Website Development Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Fix, enhance, and redesign websites with modern interfaces, focusing on performance and user experience.
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
                alt="Website Development Services"
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
                Professional Website Development
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Whether you need to fix existing issues or completely redesign your website, our team provides comprehensive development services to ensure your online presence is modern, fast, and user-friendly.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                We focus on performance optimization, user experience improvements, and cutting-edge technologies to give your website the competitive edge it needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Website Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Website Fixing & Enhancement
                </h3>
                <p className="text-[#676767] mb-4">
                  Fix broken sections, speed issues, bugs, and UI/UX problems to restore and improve your website's functionality.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Bug fixes and error resolution</li>
                  <li>Performance optimization</li>
                  <li>UI/UX improvements</li>
                  <li>Security updates</li>
                  <li>Mobile responsiveness fixes</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Website Redesign
                </h3>
                <p className="text-[#676767] mb-4">
                  Complete redesign with a modern, clean, fast interface that reflects your brand and engages your audience.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Modern design principles</li>
                  <li>Improved user experience</li>
                  <li>Enhanced performance</li>
                  <li>Mobile-first approach</li>
                  <li>SEO-friendly structure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Development Process
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Analysis & Planning
                    </h3>
                    <p className="text-[#676767]">
                      We analyze your current website, identify issues, and plan the improvements or redesign approach.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Design & Development
                    </h3>
                    <p className="text-[#676767]">
                      Our team creates modern designs and develops the website using the latest technologies and best practices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Testing & Optimization
                    </h3>
                    <p className="text-[#676767]">
                      We thoroughly test the website for functionality, performance, and user experience, then optimize for speed and SEO.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Launch & Support
                    </h3>
                    <p className="text-[#676767]">
                      We launch your improved website and provide ongoing support to ensure everything runs smoothly.
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
              Ready to Improve Your Website?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Discover how we can fix, enhance, or redesign your website. Let's explore the possibilities together.
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