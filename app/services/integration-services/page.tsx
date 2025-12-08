import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Integration Services | Devstract",
  description:
    "Integrate payment gateways, WhatsApp, chatbots, and CRMs into your business systems.",
};

export default function IntegrationServices() {
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
                  Integration Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Integrate payment gateways, WhatsApp, chatbots, and CRMs into your business systems.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/integration.jpg"
                alt="Integration Services"
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
                Seamless System Integration
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Connect your business systems for streamlined operations and enhanced functionality. Our integration services ensure that your various tools and platforms work together seamlessly, providing a unified experience for your team and customers.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                From payment processing to customer communication, we handle the complex technical work so you can focus on growing your business.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Types */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Integration Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Payment Integrations
                </h3>
                <p className="text-[#676767] mb-4">
                  Secure and reliable payment processing for your business applications.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Stripe integration</li>
                  <li>PayPal integration</li>
                  <li>Local payment gateways</li>
                  <li>Subscription systems</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  WhatsApp Integrations
                </h3>
                <p className="text-[#676767] mb-4">
                  WhatsApp Business API integration with automation workflows for enhanced customer communication.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Automated messaging</li>
                  <li>Customer support workflows</li>
                  <li>Order notifications</li>
                  <li>Marketing campaigns</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Chatbot Integrations
                </h3>
                <p className="text-[#676767] mb-4">
                  Embed AI chatbots into your existing systems for intelligent customer interactions.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Website integration</li>
                  <li>CRM system integration</li>
                  <li>POS system integration</li>
                  <li>Mobile app integration</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  CRM Integrations
                </h3>
                <p className="text-[#676767] mb-4">
                  Connect and synchronize data across your CRM systems and other business tools.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>HubSpot integration</li>
                  <li>Zoho CRM integration</li>
                  <li>Pipedrive integration</li>
                  <li>Custom CRM integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Integration Process
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Requirements Analysis
                    </h3>
                    <p className="text-[#676767]">
                      We analyze your current systems and identify the integration requirements and goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      API & System Assessment
                    </h3>
                    <p className="text-[#676767]">
                      We evaluate the APIs and technical capabilities of the systems to be integrated.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Development & Testing
                    </h3>
                    <p className="text-[#676767]">
                      Our team develops the integration solution and thoroughly tests it for reliability and security.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Deployment & Monitoring
                    </h3>
                    <p className="text-[#676767]">
                      We deploy the integration and provide ongoing monitoring and support to ensure optimal performance.
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
              Ready to Connect Your Systems?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Discover how seamless integrations can transform your business operations. Let's explore the possibilities together.
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