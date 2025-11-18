import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI-Powered Website Enhancements | Devstract",
  description:
    "Upgrade websites with intelligent search and personalized chatbots for better user engagement and support.",
};

export default function AIPoweredWebsiteEnhancements() {
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
                  AI-Powered Website Enhancements
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Upgrade websites with intelligent search and personalized chatbots for better user engagement and support.
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
                alt="AI-Powered Website Enhancements"
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
                Enhance Your Website with AI
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Transform your website into an intelligent platform that understands users and provides personalized experiences. Our AI-powered enhancements include advanced search capabilities and custom chatbots.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                These features not only improve user satisfaction but also serve as powerful tools for customer support and internal operations.
              </p>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our AI Website Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  AI Search Functionality
                </h3>
                <p className="text-[#676767] mb-4">
                  Upgrade any website with intelligent, context-aware search that understands user intent and provides fast, accurate results.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Semantic search understanding</li>
                  <li>Personalized search results</li>
                  <li>Multi-language support</li>
                  <li>Voice search capabilities</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Personalized AI Chatbots
                </h3>
                <p className="text-[#676767] mb-4">
                  Custom chatbots trained on the business's own data. Acts as a website assistant and can also serve as an internal employee support agent.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Handle queries and bookings</li>
                  <li>Product support and recommendations</li>
                  <li>Internal employee assistance</li>
                  <li>24/7 availability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Key Benefits
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Improved User Experience</h3>
                  <p className="text-[#676767]">Faster, more accurate search results and instant support</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Increased Engagement</h3>
                  <p className="text-[#676767]">Personalized interactions keep users on your site longer</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Cost Reduction</h3>
                  <p className="text-[#676767]">Automate support tasks and reduce manual workload</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Data-Driven Insights</h3>
                  <p className="text-[#676767]">Gain valuable insights from user interactions</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Scalability</h3>
                  <p className="text-[#676767]">Handle increasing user loads without additional staff</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Competitive Advantage</h3>
                  <p className="text-[#676767]">Stay ahead with cutting-edge AI technology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 lg:px-40 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#202020]">
              Ready to Enhance Your Website?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Discover how AI can transform your website experience. Let's explore the possibilities together.
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