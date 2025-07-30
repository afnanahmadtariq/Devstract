
"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

import { useState } from "react";

const faqs = [
  {
    question: "What is Devstract?",
    answer: "Devstract is a platform providing web development services."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us at contact@devstract.site or through our contact form."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we offer custom web development solutions tailored to your needs."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and Tailwind CSS."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on requirements, but most projects are completed within 2-6 weeks."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! We offer website redesign services to improve both aesthetics and functionality."
  },
  {
    question: "Is SEO included in your web development services?",
    answer: "Yes, we follow SEO best practices to ensure your website is optimized for search engines."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "We offer ongoing maintenance and support packages to keep your website running smoothly."
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <Navigation/>
      <main className="flex flex-col min-h-[70vh] bg-transparent dark:bg-transparent">
        <section className="flex flex-col items-center justify-center py-6 px-2 sm:py-8 sm:px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">
            FAQs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-full sm:max-w-4xl text-center mb-10 sm:mb-24 px-1">
            Here are some common questions we receive from our users.
          </p>
          <div className="w-full max-w-full sm:max-w-3xl px-2">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  className="w-full flex items-center justify-between py-4 sm:py-5 focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-left text-base xs:text-lg sm:text-lg font-semibold text-black dark:text-white">{faq.question}</span>
                  <span className={`ml-2 sm:ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <svg width="22" height="22" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl px-2 sm:px-4 mb-2 ${openIdx === idx ? 'max-h-40 py-3 sm:py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  style={{
                    transitionProperty: 'max-height, opacity, padding',
                  }}
                  aria-hidden={openIdx !== idx}
                >
                  <div className="transition-opacity duration-300 text-sm xs:text-base sm:text-base">
                    {faq.answer}
                  </div>
                </div>
                {idx !== faqs.length - 1 && (
                  <hr className="border-t border-gray-300 dark:border-gray-700" />
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
