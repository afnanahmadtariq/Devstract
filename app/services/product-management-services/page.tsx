import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Product Management Services | Devstract",
  description:
    "Help upload, structure, and optimize product listings across CRMs, eCommerce stores, and business systems.",
};

export default function ProductManagementServices() {
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
                  Product Management Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Help upload, structure, and optimize product listings across CRMs, eCommerce stores, and business systems.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/product.jpg"
                alt="Product Management Services"
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
                Streamlined Product Management
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Efficiently manage your product catalog across multiple platforms. Our product management services ensure that your products are accurately represented, properly categorized, and optimized for maximum visibility and sales.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                From initial data preparation to final optimization, we handle the entire process of uploading and structuring product listings in CRMs, eCommerce stores, and other business systems.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Product Management Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Data Preparation
                </h3>
                <p className="text-[#676767]">
                  Clean, format, and standardize your product data for seamless uploading across platforms.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  CRM Product Upload
                </h3>
                <p className="text-[#676767]">
                  Upload and structure product listings in CRM systems like HubSpot, Zoho, and Pipedrive.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  E-commerce Integration
                </h3>
                <p className="text-[#676767]">
                  Optimize product listings for eCommerce platforms with proper categorization and SEO.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Image Optimization
                </h3>
                <p className="text-[#676767]">
                  Process and optimize product images for web display and fast loading times.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Category Structuring
                </h3>
                <p className="text-[#676767]">
                  Create logical category hierarchies and tagging systems for better product organization.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  SEO Optimization
                </h3>
                <p className="text-[#676767]">
                  Optimize product descriptions and metadata for search engines and platform algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Product Management Process
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Data Assessment
                    </h3>
                    <p className="text-[#676767]">
                      We review your existing product data and identify areas for improvement and standardization.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Data Cleaning & Preparation
                    </h3>
                    <p className="text-[#676767]">
                      Our team cleans, formats, and enriches your product data for optimal platform performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Upload & Integration
                    </h3>
                    <p className="text-[#676767]">
                      We upload products to your chosen platforms and ensure proper integration with existing systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Optimization & Testing
                    </h3>
                    <p className="text-[#676767]">
                      We optimize listings for visibility and test all functionality to ensure everything works perfectly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Ongoing Management
                    </h3>
                    <p className="text-[#676767]">
                      We provide ongoing support for product updates, new listings, and performance monitoring.
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
              Ready to Optimize Your Product Catalog?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Discover how professional product management can boost your sales and efficiency. Let's explore the possibilities together.
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