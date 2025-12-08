import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Communication & Engagement Systems | Devstract",
  description:
    "Build WhatsApp chatbots and client portals for enhanced customer interaction and business management.",
};

export default function CommunicationEngagementSystems() {
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
                  Communication & Engagement Systems
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Build WhatsApp chatbots and client portals for enhanced customer interaction and business management.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/system.png"
                alt="Communication & Engagement Systems"
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
                Streamline Communication and Engagement
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Enhance your business communication with powerful WhatsApp chatbots and comprehensive client portals. These systems provide seamless interaction channels for customers and efficient management tools for your team.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Our solutions are designed to improve customer satisfaction, streamline operations, and provide valuable insights into your business relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Communication Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  WhatsApp Chatbots
                </h3>
                <p className="text-[#676767] mb-4">
                  We build WhatsApp-based chatbots for efficient customer communication and business operations.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Customer support automation</li>
                  <li>Automated responses</li>
                  <li>Order tracking</li>
                  <li>Lead management</li>
                  <li>Appointment booking</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Client Portals
                </h3>
                <p className="text-[#676767] mb-4">
                  Centralized portal where businesses and clients can interact securely and efficiently.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Invoices and billing</li>
                  <li>Proposals and quotes</li>
                  <li>Secure chat functionality</li>
                  <li>Shared records and documents</li>
                  <li>Task updates and progress tracking</li>
                  <li>Document management</li>
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
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">24/7 Availability</h3>
                  <p className="text-[#676767]">Provide instant support anytime, anywhere</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Improved Efficiency</h3>
                  <p className="text-[#676767]">Automate routine communications and tasks</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Better Customer Experience</h3>
                  <p className="text-[#676767]">Personalized, timely interactions</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Centralized Management</h3>
                  <p className="text-[#676767]">All client interactions in one place</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Data Security</h3>
                  <p className="text-[#676767]">Secure, compliant communication channels</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Scalability</h3>
                  <p className="text-[#676767]">Grow with your business needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 lg:px-40 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#202020]">
              Ready to Transform Communication?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Discover how our communication systems can enhance your business relationships. Let's explore the possibilities together.
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