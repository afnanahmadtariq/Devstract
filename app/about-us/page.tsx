
"use client";

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import HeroSection from '@/components/hero-section';

export default function AboutUsPage() {
  return (
    <>
      <Navigation />

      <main className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <HeroSection />

        {/* History & Mission */}
        <section className="py-16 px-4 bg-[#F7F7F7] dark:bg-gray-800 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Our History</h2>
          <p className="max-w-2xl text-gray-700 dark:text-gray-200 text-center mb-6">Founded in 2020 in a university lab, Devstract was born from a passion to architect the digital future of businesses. Since then, we’ve partnered with startups and enterprises worldwide, delivering excellence through technology and innovation.</p>
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 w-64 text-center">
              <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">100+</span>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Projects Delivered</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 w-64 text-center">
              <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">20+</span>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Team Members</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 w-64 text-center">
              <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">6</span>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Countries Served</p>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Global Presence</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#F7F7F7] dark:bg-gray-800 rounded-xl px-6 py-4 text-center shadow">
              <span className="font-bold text-lg">USA</span>
            </div>
            <div className="bg-[#F7F7F7] dark:bg-gray-800 rounded-xl px-6 py-4 text-center shadow">
              <span className="font-bold text-lg">UAE</span>
            </div>
            <div className="bg-[#F7F7F7] dark:bg-gray-800 rounded-xl px-6 py-4 text-center shadow">
              <span className="font-bold text-lg">Canada</span>
            </div>
            <div className="bg-[#F7F7F7] dark:bg-gray-800 rounded-xl px-6 py-4 text-center shadow">
              <span className="font-bold text-lg">UK</span>
            </div>
            <div className="bg-[#F7F7F7] dark:bg-gray-800 rounded-xl px-6 py-4 text-center shadow">
              <span className="font-bold text-lg">Portugal</span>
            </div>
            <div className="bg-[#F7F7F7] dark:bg-gray-800 rounded-xl px-6 py-4 text-center shadow">
              <span className="font-bold text-lg">Pakistan</span>
            </div>
          </div>
        </section>

        {/* Recognitions & Partnerships */}
        <section className="py-16 px-4 bg-[#F7F7F7] dark:bg-gray-800 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Recognitions & Partnerships</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="flex flex-col items-center">
              <img src="/media/award.svg" alt="Award" className="w-16 h-16 mb-2" />
              <span className="text-gray-700 dark:text-gray-200">Top B2B Company 2024</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/media/partner.svg" alt="Partner" className="w-16 h-16 mb-2" />
              <span className="text-gray-700 dark:text-gray-200">Official Partner: AWS, Microsoft</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/media/certificate.svg" alt="Certificate" className="w-16 h-16 mb-2" />
              <span className="text-gray-700 dark:text-gray-200">Certified Excellence</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">They loved these collaborations</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <img src="/media/card1.svg" alt="Client 1" className="w-16 h-16 mb-4" />
              <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">“Devstract helped us reduce missed orders by 80% and improved our product categorization precision to 95%.”</p>
              <span className="font-semibold text-indigo-700 dark:text-indigo-400">Umair Bashir</span>
              <span className="text-sm text-gray-500">Global Director IT</span>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <img src="/media/card2.svg" alt="Client 2" className="w-16 h-16 mb-4" />
              <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">“Customer satisfaction improved by 31% and our sales team’s productivity increased by 23% after working with Devstract.”</p>
              <span className="font-semibold text-indigo-700 dark:text-indigo-400">Nick Drogo</span>
              <span className="text-sm text-gray-500">Division Health Strategy Consultant</span>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <img src="/media/card3.svg" alt="Client 3" className="w-16 h-16 mb-4" />
              <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">“We achieved a 90% global user adoption rate with Devstract’s solutions.”</p>
              <span className="font-semibold text-indigo-700 dark:text-indigo-400">Geraldine Przybylko</span>
              <span className="text-sm text-gray-500">CTO, Replenium</span>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16 px-4 bg-[#F7F7F7] dark:bg-gray-800 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">How Can We Engage?</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <span className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">Dedicated Team</span>
              <p className="text-gray-700 dark:text-gray-200 text-center">Fast-track your projects with our technical and management experts through collaborative efforts.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <span className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">Offshore Development Center</span>
              <p className="text-gray-700 dark:text-gray-200 text-center">Access top talent for stability and scalability with reduced time-to-market.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <span className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">Fixed Price Projects</span>
              <p className="text-gray-700 dark:text-gray-200 text-center">Optimize your projects with minimum risks, assuring quality and on-time/on-budget delivery.</p>
            </div>
          </div>
        </section>

        {/* Team & Culture */}
        <section className="py-16 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Our Team & Culture</h2>
          <p className="max-w-2xl text-gray-700 dark:text-gray-200 text-center mb-6">At our core, we’re built on and motivated by our confidence in our talented team. We foster a culture of inclusivity, innovation, and continuous learning, supporting our clients’ success every day.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/media/baloons.svg" alt="Team Culture" className="w-32 h-32 object-contain" />
            <img src="/media/gears.svg" alt="Teamwork" className="w-32 h-32 object-contain" />
            <img src="/media/gradient.svg" alt="Growth" className="w-32 h-32 object-contain" />
          </div>
        </section>

        {/* Community & CSR */}
        <section className="py-16 px-4 bg-[#F7F7F7] dark:bg-gray-800 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Giving Back to the Community</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80">
              <span className="font-bold text-lg text-indigo-700 dark:text-indigo-400">Education & Health Initiatives</span>
              <p className="text-gray-700 dark:text-gray-200 mt-2">We fund education and healthcare programs to enrich lives and shape futures.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80">
              <span className="font-bold text-lg text-indigo-700 dark:text-indigo-400">Environment & Sustainability</span>
              <p className="text-gray-700 dark:text-gray-200 mt-2">We promote eco-friendly practices, energy efficiency, and recycling in our operations.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80">
              <span className="font-bold text-lg text-indigo-700 dark:text-indigo-400">Social & Employee Welfare</span>
              <p className="text-gray-700 dark:text-gray-200 mt-2">We support inclusivity, mental well-being, and work-life balance for our team.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80">
              <span className="font-bold text-lg text-indigo-700 dark:text-indigo-400">Knowledge Sharing Hub</span>
              <p className="text-gray-700 dark:text-gray-200 mt-2">We share knowledge through webinars, workshops, and community initiatives.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Ready to get started?</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">Contact us to discuss your project or partnership. We’re excited to help you grow!</p>
          <a href="/contactus" className="inline-block bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-indigo-800 transition">Contact Us</a>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
