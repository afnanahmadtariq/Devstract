import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mobile App Development | Devstract",
  description:
    "Create user-friendly and feature-rich mobile applications to engage your audience. Build native and cross-platform apps that users love.",
};

export default function MobileAppDevelopment() {
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
                  Mobile App Development
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Create user-friendly and feature-rich mobile applications to
                engage your audience
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
                alt="Mobile App Development"
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
                Build Apps Users Love
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Mobile devices are how your customers interact with the world.
                A well-designed mobile app can transform your business by
                providing seamless access to your services, increasing customer
                engagement, and opening new revenue streams.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Our mobile app development team creates high-performance,
                intuitive applications for iOS and Android. Whether you need a
                native app for maximum performance or a cross-platform solution
                for faster time-to-market, we deliver apps that exceed user
                expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Development Approaches */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Mobile Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Native iOS Development
                </h3>
                <p className="text-[#676767]">
                  Build powerful iOS apps using Swift and SwiftUI, leveraging
                  the full capabilities of Apple's ecosystem for optimal
                  performance.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Native Android Development
                </h3>
                <p className="text-[#676767]">
                  Create feature-rich Android apps with Kotlin and Jetpack
                  Compose, optimized for the diverse Android device ecosystem.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Cross-Platform Development
                </h3>
                <p className="text-[#676767]">
                  Deploy to both iOS and Android from a single codebase using
                  React Native or Flutter, reducing development time and costs.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  UI/UX Design
                </h3>
                <p className="text-[#676767]">
                  Design beautiful, intuitive interfaces following platform
                  guidelines while maintaining your unique brand identity.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Backend Integration
                </h3>
                <p className="text-[#676767]">
                  Connect your app to robust backend services, APIs, and
                  databases for seamless data synchronization and real-time
                  updates.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  App Store Optimization
                </h3>
                <p className="text-[#676767]">
                  We handle app store submissions, optimization, and ongoing
                  updates to ensure your app reaches your target audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              What We Deliver
            </h2>
            <div className="bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      High Performance
                    </h3>
                    <p className="text-[#676767]">
                      Apps optimized for speed, responsiveness, and efficient
                      battery usage across all devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Offline Functionality
                    </h3>
                    <p className="text-[#676767]">
                      Smart caching and local storage ensure your app works even
                      without internet connectivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Push Notifications
                    </h3>
                    <p className="text-[#676767]">
                      Keep users engaged with timely, relevant push notifications
                      and in-app messaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Security & Privacy
                    </h3>
                    <p className="text-[#676767]">
                      Implement robust security measures including encryption,
                      secure authentication, and data protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Analytics Integration
                    </h3>
                    <p className="text-[#676767]">
                      Track user behavior, app performance, and key metrics to
                      make data-driven improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Scalable Architecture
                    </h3>
                    <p className="text-[#676767]">
                      Build for growth with architecture that scales seamlessly as
                      your user base expands.
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
                      Discovery & Strategy
                    </h3>
                    <p className="text-[#676767]">
                      We define your app's goals, target audience, core features,
                      and platform strategy through collaborative workshops.
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
                      Our designers create wireframes, mockups, and interactive
                      prototypes that bring your app vision to life.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Development & Integration
                    </h3>
                    <p className="text-[#676767]">
                      Using agile methodology, we build your app in sprints,
                      integrating all necessary features and third-party services.
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
                      Comprehensive testing across devices, OS versions, and
                      scenarios ensures a bug-free, smooth user experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Launch & Support
                    </h3>
                    <p className="text-[#676767]">
                      We handle app store submission, launch marketing support,
                      and provide ongoing maintenance and feature updates.
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Let's create a mobile experience that delights your users and
              drives business growth. Get in touch today.
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
