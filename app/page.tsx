import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FrameworksSection from "@/components/frameworks-section"
import PortfolioSection from "@/components/portfolio-section"
import AboutSection from "@/components/about-section"
import ProcessSection from "@/components/process-section"
import BlogSection from "@/components/blog-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FrameworksSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <BlogSection />
      <CtaSection />
    </>
  )
}
