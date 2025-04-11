import type { Metadata } from "next"
import { CircuitBackground } from "@/components/circuit-background"
import { Code, Database, FileCode, Layers, Server, Smartphone, Workflow } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive software development services for web, mobile, and cloud solutions.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-400">
              We offer comprehensive software development services tailored to your business needs, from web and mobile
              applications to cloud infrastructure and UX/UI design.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section id="web" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6">
                <Code size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Web Development</h2>
              <p className="text-gray-400 mb-6">
                We build responsive, scalable, and high-performance web applications using modern frameworks and
                technologies. Our web development services are designed to deliver exceptional user experiences while
                meeting your business objectives.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Frontend Development">
                  Expert development using React, Angular, Vue.js, and other modern frameworks.
                </FeatureItem>
                <FeatureItem title="Backend Development">
                  Robust server-side solutions with Node.js, Django, Laravel, and more.
                </FeatureItem>
                <FeatureItem title="E-commerce Solutions">
                  Custom online stores with secure payment gateways and inventory management.
                </FeatureItem>
                <FeatureItem title="Progressive Web Apps">
                  Fast, reliable, and engaging applications that work offline.
                </FeatureItem>
              </div>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">React</div>
                  <p className="text-gray-400 text-sm">Component-based UI development</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">Angular</div>
                  <p className="text-gray-400 text-sm">Full-featured framework</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">Vue.js</div>
                  <p className="text-gray-400 text-sm">Progressive JavaScript framework</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">Node.js</div>
                  <p className="text-gray-400 text-sm">Server-side JavaScript runtime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section id="mobile" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-900 border border-gray-800 rounded-xl p-6 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">iOS</div>
                  <p className="text-gray-400 text-sm">Native Swift development</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">Android</div>
                  <p className="text-gray-400 text-sm">Native Kotlin development</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">Flutter</div>
                  <p className="text-gray-400 text-sm">Cross-platform UI toolkit</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-teal-500 font-bold text-xl mb-2">React Native</div>
                  <p className="text-gray-400 text-sm">JavaScript mobile framework</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6">
                <Smartphone size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Mobile App Development</h2>
              <p className="text-gray-400 mb-6">
                We create engaging, high-performance mobile applications for iOS and Android platforms. Our mobile
                development team specializes in building native and cross-platform solutions that provide seamless user
                experiences across all devices.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Native iOS Development">
                  Custom applications built with Swift for optimal performance on Apple devices.
                </FeatureItem>
                <FeatureItem title="Native Android Development">
                  Tailored solutions using Kotlin for the Android ecosystem.
                </FeatureItem>
                <FeatureItem title="Cross-Platform Development">
                  Efficient development with Flutter and React Native for multiple platforms.
                </FeatureItem>
                <FeatureItem title="App Maintenance & Updates">
                  Ongoing support to ensure your app stays current and performs optimally.
                </FeatureItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX/UI Design */}
      <section id="ui-ux" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6">
                <Layers size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">UX/UI Design</h2>
              <p className="text-gray-400 mb-6">
                We create intuitive, engaging, and user-centered designs that enhance user satisfaction and drive
                business growth. Our design process focuses on understanding user needs and creating interfaces that are
                both beautiful and functional.
              </p>
              <div className="space-y-4">
                <FeatureItem title="User Research">
                  In-depth analysis of user behaviors, needs, and motivations to inform design decisions.
                </FeatureItem>
                <FeatureItem title="Wireframing & Prototyping">
                  Creating interactive models to visualize and test concepts before development.
                </FeatureItem>
                <FeatureItem title="Visual Design">
                  Crafting aesthetically pleasing interfaces that align with your brand identity.
                </FeatureItem>
                <FeatureItem title="Usability Testing">
                  Evaluating designs with real users to ensure optimal user experience.
                </FeatureItem>
              </div>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/10 rounded-full blur-3xl"></div>
              <div className="space-y-4">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="h-4 w-24 bg-teal-500/30 rounded mb-2"></div>
                  <div className="h-8 w-full bg-gray-800 rounded mb-2"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 bg-gray-800 rounded"></div>
                    <div className="h-20 bg-gray-800 rounded"></div>
                    <div className="h-20 bg-gray-800 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="h-4 w-16 bg-teal-500/30 rounded mb-2"></div>
                    <div className="h-24 bg-gray-800 rounded"></div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="h-4 w-20 bg-teal-500/30 rounded mb-2"></div>
                    <div className="h-24 bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & DevOps */}
      <section id="cloud" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-900 border border-gray-800 rounded-xl p-6 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/10 rounded-full blur-3xl"></div>
              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="h-4 w-4 bg-teal-500 rounded-full mr-2"></div>
                    <div className="h-4 w-32 bg-gray-800 rounded"></div>
                  </div>
                  <div className="h-16 bg-gray-800 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-950 border border-gray-800 rounded-lg p-3 flex items-center justify-center">
                    <Server size={24} className="text-teal-500" />
                  </div>
                  <div className="bg-gray-950 border border-gray-800 rounded-lg p-3 flex items-center justify-center">
                    <Database size={24} className="text-teal-500" />
                  </div>
                  <div className="bg-gray-950 border border-gray-800 rounded-lg p-3 flex items-center justify-center">
                    <Workflow size={24} className="text-teal-500" />
                  </div>
                </div>
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="h-4 w-4 bg-teal-500 rounded-full mr-2"></div>
                    <div className="h-4 w-40 bg-gray-800 rounded"></div>
                  </div>
                  <div className="h-16 bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6">
                <Server size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Cloud & DevOps</h2>
              <p className="text-gray-400 mb-6">
                We provide comprehensive cloud infrastructure and DevOps services to ensure your applications are
                scalable, secure, and highly available. Our team specializes in automating deployment processes and
                optimizing infrastructure for performance and cost-efficiency.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Cloud Infrastructure">
                  Setup and management of AWS, Azure, and Google Cloud environments.
                </FeatureItem>
                <FeatureItem title="CI/CD Pipelines">
                  Automated build, test, and deployment workflows for faster delivery.
                </FeatureItem>
                <FeatureItem title="Containerization">
                  Docker and Kubernetes solutions for consistent application deployment.
                </FeatureItem>
                <FeatureItem title="Infrastructure as Code">
                  Terraform and CloudFormation for automated infrastructure provisioning.
                </FeatureItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-400">
              Beyond our core offerings, we provide specialized services to address specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <AdditionalServiceCard
              icon={<FileCode size={24} />}
              title="Custom Software Development"
              description="Tailored solutions designed to address your unique business challenges and requirements."
            />
            <AdditionalServiceCard
              icon={<Database size={24} />}
              title="Database Design & Optimization"
              description="Efficient data storage solutions with optimized performance and security."
            />
            <AdditionalServiceCard
              icon={<Workflow size={24} />}
              title="API Development & Integration"
              description="Connecting your systems with third-party services and platforms for seamless data flow."
            />
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureItem({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{children}</p>
    </div>
  )
}

function AdditionalServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-teal-500/50 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
