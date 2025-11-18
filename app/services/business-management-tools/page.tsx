import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Business Management Tools | Devstract",
  description:
    "Customizable POS systems and admin dashboards for tracking sales, inventory, and business KPIs.",
};

export default function BusinessManagementTools() {
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
                  Business Management Tools
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Customizable POS systems and admin dashboards for tracking sales, inventory, and business KPIs.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/unsplash_5.png"
                alt="Business Management Tools"
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
                Powerful Tools for Business Management
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Streamline your business operations with our comprehensive management tools. From point-of-sale systems to advanced analytics dashboards, we provide the technology you need to make informed decisions and grow your business.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Our solutions are designed to be scalable, user-friendly, and customizable to fit your specific business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Management Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  POS (Point of Sale) Systems
                </h3>
                <p className="text-[#676767] mb-4">
                  A customizable POS solution that can be sold as your own software product or a client-branded product.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Billing and payment processing</li>
                  <li>Inventory management</li>
                  <li>Comprehensive reporting</li>
                  <li>Multi-branch support</li>
                  <li>Staff role management</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Admin Dashboards
                </h3>
                <p className="text-[#676767] mb-4">
                  Modern dashboard systems for business owners to track key metrics and make data-driven decisions.
                </p>
                <ul className="text-[#676767] list-disc list-inside space-y-1">
                  <li>Sales and revenue tracking</li>
                  <li>Order management</li>
                  <li>Customer analytics</li>
                  <li>Inventory monitoring</li>
                  <li>Staff activity reports</li>
                  <li>KPI dashboards</li>
                  <li>Custom reports and analytics</li>
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
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Real-Time Insights</h3>
                  <p className="text-[#676767]">Monitor your business performance in real-time</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Increased Efficiency</h3>
                  <p className="text-[#676767]">Automate routine tasks and streamline operations</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Better Decision Making</h3>
                  <p className="text-[#676767]">Data-driven insights for strategic decisions</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Scalability</h3>
                  <p className="text-[#676767]">Grow your business with scalable solutions</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Cost Reduction</h3>
                  <p className="text-[#676767]">Reduce operational costs through automation</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-[#202020]">Customization</h3>
                  <p className="text-[#676767]">Tailored solutions for your specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 lg:px-40 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#202020]">
              Ready to Optimize Your Business?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Discover how our management tools can transform your operations. Let's explore the possibilities together.
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