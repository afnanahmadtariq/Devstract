"use client";

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutUsPage() {

  // Refs and scroll logic for animation
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // Animate text up as user scrolls (0px to 1000px scroll)
  const [viewportHeight, setViewportHeight] = useState(800); // fallback for SSR
  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);
  const y = useTransform(scrollY, [0, 1000], [0, -viewportHeight]);

  // Big text slides at a constant rate regardless of text length
  const bigTextRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1200); // fallback for SSR
  useEffect(() => {
    const updateSizes = () => {
      setViewportWidth(window.innerWidth);
      setTextWidth(bigTextRef.current ? bigTextRef.current.offsetWidth : 0);
    };
    updateSizes();
    const resizeObserver = new window.ResizeObserver(updateSizes);
    if (bigTextRef.current) resizeObserver.observe(bigTextRef.current);
    window.addEventListener('resize', updateSizes);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSizes);
    };
  }, []);
  const bigTextX = useTransform(scrollY, [0, 3500], [viewportWidth + textWidth, -textWidth]);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        {/* Sticky Scroll Section Wrapper */}
        <div style={{ position: 'relative', height: '3500px' }}>
          <section
            ref={mainSectionRef}
            className="sticky top-0 flex flex-col items-center justify-center py-16 px-4 min-h-[100vh] bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 bg-fixed overflow-hidden"
            style={{ position: 'sticky', top: 0 }}
          >
            {/* Animated text/images wrapper */}
            <motion.div style={{ y }} className="flex flex-col items-center w-full">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                We drive growth and shape the digital future.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
                Devstract empowers businesses with innovative, scalable, and effective web solutions, helping them thrive in a digital-first world.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Teamwork" className="w-40 h-40 object-cover rounded-3xl shadow-lg" />
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Office" className="w-40 h-40 object-cover rounded-3xl shadow-lg" />
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Innovation" className="w-40 h-40 object-cover rounded-3xl shadow-lg" />
              </div>
            </motion.div>

            {/* Big text slides in from right, scroll controlled */}
            <div
              className="absolute top-1/2 left-0 w-full flex justify-center pointer-events-none overflow-hidden"
              style={{ zIndex: 10, transform: 'translateY(-50%)' }}
            >
              <motion.span
                ref={bigTextRef}
                className="text-[12vw] font-extrabold text-black dark:text-indigo-800 opacity-80 whitespace-nowrap select-none drop-shadow-lg"
                style={{
                  x: bigTextX,
                  display: 'inline-block',
                }}
              >
                DEVSTRACT IS AMAZING. OH YEAH BABY!!!
              </motion.span>
            </div>
          </section>
        </div>

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
              <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=64&q=80" alt="Award" className="w-16 h-16 mb-2 rounded-full object-cover" />
              <span className="text-gray-700 dark:text-gray-200">Top B2B Company 2024</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=64&q=80" alt="Partner" className="w-16 h-16 mb-2 rounded-full object-cover" />
              <span className="text-gray-700 dark:text-gray-200">Official Partner: AWS, Microsoft</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=64&q=80" alt="Certificate" className="w-16 h-16 mb-2 rounded-full object-cover" />
              <span className="text-gray-700 dark:text-gray-200">Certified Excellence</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">They loved these collaborations</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=64&q=80" alt="Client 1" className="w-16 h-16 mb-4 rounded-full object-cover" />
              <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">“Devstract helped us reduce missed orders by 80% and improved our product categorization precision to 95%.”</p>
              <span className="font-semibold text-indigo-700 dark:text-indigo-400">Umair Bashir</span>
              <span className="text-sm text-gray-500">Global Director IT</span>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80" alt="Client 2" className="w-16 h-16 mb-4 rounded-full object-cover" />
              <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">“Customer satisfaction improved by 31% and our sales team’s productivity increased by 23% after working with Devstract.”</p>
              <span className="font-semibold text-indigo-700 dark:text-indigo-400">Nick Drogo</span>
              <span className="text-sm text-gray-500">Division Health Strategy Consultant</span>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 w-80 flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&q=80" alt="Client 3" className="w-16 h-16 mb-4 rounded-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=300&q=80" alt="Team Culture" className="w-32 h-32 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80" alt="Teamwork" className="w-32 h-32 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80" alt="Growth" className="w-32 h-32 object-cover rounded-xl" />
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
          <a href="/contact-us" className="inline-block bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-indigo-800 transition">Contact Us</a>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
