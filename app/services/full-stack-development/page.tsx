import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Full-stack Development | Devstract",
  description:
    "Build robust and scalable web applications with comprehensive full-stack development expertise. End-to-end solutions from database to user interface.",
};

export default function FullStackDevelopment() {
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
                  Full-stack Development
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#676767] max-w-3xl mx-auto">
                Build robust and scalable web applications with comprehensive
                full-stack development expertise
              </p>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="px-6 md:px-20 lg:px-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/media/unsplash_7.png"
                alt="Full-stack Development"
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
                Complete Web Solutions
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed mb-6">
                Full-stack development means taking care of everything—from the
                database and server logic to the user interface and everything
                in between. Our full-stack developers are proficient in both
                frontend and backend technologies, delivering complete,
                production-ready web applications.
              </p>
              <p className="text-[#494949] text-lg leading-relaxed">
                Whether you need a complex enterprise application, a SaaS
                platform, or a modern web app, our team has the expertise to
                build scalable, secure, and high-performance solutions using the
                latest technologies and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#202020]">
              Our Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Frontend Development
                </h3>
                <p className="text-[#676767]">
                  React, Next.js, Vue.js, TypeScript, Tailwind CSS, and modern
                  frontend frameworks for responsive, interactive UIs.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Backend Development
                </h3>
                <p className="text-[#676767]">
                  Node.js, Python, Java, .NET, and robust server-side frameworks
                  for business logic and API development.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Database Management
                </h3>
                <p className="text-[#676767]">
                  PostgreSQL, MongoDB, MySQL, Redis, and other database solutions
                  optimized for your data needs.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Cloud & DevOps
                </h3>
                <p className="text-[#676767]">
                  AWS, Google Cloud, Azure, Docker, Kubernetes, and CI/CD
                  pipelines for reliable deployment and scaling.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  API Development
                </h3>
                <p className="text-[#676767]">
                  RESTful APIs, GraphQL, WebSockets, and microservices
                  architecture for flexible, scalable integrations.
                </p>
              </div>

              <div className="bg-white border-2 border-[#EBEBEB] rounded-[33px] p-8">
                <h3 className="text-xl font-bold mb-4 text-[#202020]">
                  Testing & Quality
                </h3>
                <p className="text-[#676767]">
                  Jest, Cypress, Playwright, unit testing, integration testing,
                  and automated QA for bulletproof code.
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
                      Scalable Architecture
                    </h3>
                    <p className="text-[#676767]">
                      Build applications that grow with your business, handling
                      increased traffic and data without performance degradation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Secure & Compliant
                    </h3>
                    <p className="text-[#676767]">
                      Implement industry-standard security practices, data
                      encryption, and compliance with regulations like GDPR.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Responsive Design
                    </h3>
                    <p className="text-[#676767]">
                      Create seamless experiences across all devices—desktop,
                      tablet, and mobile—with responsive, mobile-first design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Performance Optimized
                    </h3>
                    <p className="text-[#676767]">
                      Fast load times, efficient code, and optimized assets
                      ensure the best possible user experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Third-party Integrations
                    </h3>
                    <p className="text-[#676767]">
                      Seamlessly integrate payment gateways, CRMs, analytics,
                      and other services your business depends on.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7567FE] mt-2"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#202020]">
                      Maintainable Codebase
                    </h3>
                    <p className="text-[#676767]">
                      Clean, well-documented code following best practices makes
                      future updates and maintenance straightforward.
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
                      Requirements Analysis
                    </h3>
                    <p className="text-[#676767]">
                      We thoroughly understand your business requirements,
                      technical constraints, and success criteria before writing
                      any code.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Architecture Design
                    </h3>
                    <p className="text-[#676767]">
                      Our architects design a scalable, secure system architecture
                      that meets your current needs and future growth plans.
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
                      We build your application in iterative sprints, delivering
                      working features regularly and incorporating your feedback.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Continuous Testing
                    </h3>
                    <p className="text-[#676767]">
                      Automated and manual testing throughout development ensures
                      every feature works flawlessly before deployment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Deployment & DevOps
                    </h3>
                    <p className="text-[#676767]">
                      We set up automated deployment pipelines, monitoring, and
                      infrastructure to ensure smooth, reliable operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7567FE] flex items-center justify-center text-white font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#202020]">
                      Maintenance & Support
                    </h3>
                    <p className="text-[#676767]">
                      Post-launch, we provide ongoing maintenance, performance
                      monitoring, and feature enhancements to keep your app running
                      smoothly.
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
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg text-[#676767] mb-8">
              Let's create a powerful, scalable web application that drives your
              business forward. Get in touch to discuss your project.
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
