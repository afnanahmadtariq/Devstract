import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Business Automation Solutions | Devstract",
  description:
    "Design intelligent automation agents tailored to business operations, reducing manual workload and streamlining repetitive processes.",
};

export default function BusinessAutomationSolutions() {
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
                  Business Automation Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Design intelligent automation agents tailored to business operations, reducing manual workload and streamlining repetitive processes.
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
                alt="Business Automation Solutions"
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
                AI Automation Agent for Businesses
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                We design intelligent automation agents tailored to business operations. These agents reduce manual workload and streamline repetitive processes, allowing your team to focus on strategic tasks.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Our automation solutions leverage cutting-edge AI to handle complex workflows, integrate with existing systems, and adapt to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Automation Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Inventory & Order Processing
                </h3>
                <p className="text-[#676767]">
                  Automate inventory tracking, order fulfillment, and supply chain management to reduce errors and improve efficiency.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Customer Support Automation
                </h3>
                <p className="text-[#676767]">
                  Handle customer inquiries, ticket routing, and basic support tasks with intelligent AI agents.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Document & Record Automation
                </h3>
                <p className="text-[#676767]">
                  Automate document processing, data entry, and record management across your organization.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Employee Assistance Bots
                </h3>
                <p className="text-[#676767]">
                  Provide internal support for employees with AI-powered assistants for HR queries, policy lookups, and task automation.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Daily Workflow Automation
                </h3>
                <p className="text-[#676767]">
                  Streamline routine tasks like scheduling, reporting, and data synchronization across departments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Automation Process
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Process Analysis
                    </h3>
                    <p className="text-[#676767]">
                      We analyze your current workflows to identify automation opportunities and prioritize high-impact areas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Agent Design & Development
                    </h3>
                    <p className="text-[#676767]">
                      Our team designs and builds custom automation agents using advanced AI and integration technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Integration & Testing
                    </h3>
                    <p className="text-[#676767]">
                      We integrate the automation agents with your existing systems and thoroughly test for reliability and performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Deployment & Training
                    </h3>
                    <p className="text-[#676767]">
                      We deploy the automation solutions and provide training to ensure smooth adoption by your team.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Monitoring & Optimization
                    </h3>
                    <p className="text-[#676767]">
                      Continuous monitoring and optimization to ensure the automation agents perform optimally and adapt to changing needs.
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Discover how AI automation can transform your operations. Let's explore the possibilities together.
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