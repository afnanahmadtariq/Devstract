
"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

import { useState } from "react";

const faqs = [
  {
    question: "What is Devstract?",
    answer: "Devstract is a premier digital solutions agency specializing in AI-powered website enhancements, business automation, custom web/mobile development, and strategic digital growth. We help businesses transform their operations through cutting-edge technology."
  },
  {
    question: "What specific services do you offer?",
    answer: "We offer a comprehensive suite of services including AI-Powered Website Enhancements (search, chatbots), Business Automation Solutions (workflow agents), Custom Web & Mobile App Development, Internal Business Management Tools, System Integrations, and Digital Growth Strategies."
  },
  {
    question: "How can AI automation benefit my business?",
    answer: "AI automation can drastically reduce manual workload by handling repetitive tasks like data entry, customer support inquiries, and inventory management. Our custom agents operate 24/7, ensuring efficiency and consistency while freeing up your team for strategic work."
  },
  {
    question: "Can you build custom ChatGPT-like bots for my company?",
    answer: "Yes! We design personalized AI chatbots trained on your specific business data. These can serve as customer support agents, internal knowledge bases for employees, or lead generation assistants that understand your products and services deeply."
  },
  {
    question: "What is Intelligent Search for websites?",
    answer: "Our Intelligent Search solution upgrades your website's search bar to understand user intent, semantics, and context. It delivers highly accurate results, personalized recommendations, and can even handle voice queries, significantly improving user experience and conversion rates."
  },
  {
    question: "Do you offer WhatsApp Business automation?",
    answer: "Absolutely. We provide complete WhatsApp Business integration and automation, allowing you to send automated notifications, handle customer queries via chat, and even manage orders directly through WhatsApp, meeting your customers where they are."
  },
  {
    question: "Can you integrate our existing software tools?",
    answer: "Yes, we specialize in System Integrations. Whether you use CRM software, ERP systems, payment gateways, or marketing tools, we can connect them to create a unified, automated data flow across your entire organization."
  },
  {
    question: "Do you build internal tools for employee management?",
    answer: "We build custom internal portals, dashboards, and management tools tailored to your organization's workflows. From HR systems to inventory trackers, we create secure, efficient tools that fit your exact operational needs."
  },
  {
    question: "Do you develop mobile applications?",
    answer: "Yes, we develop high-performance mobile applications for both iOS and Android using modern cross-platform frameworks. This ensures a seamless native experience while maintaining cost-efficiency and faster time-to-market."
  },
  {
    question: "Do you help startups with MVP development?",
    answer: "We specialize in helping startups go from idea to launch. Our MVP (Minimum Viable Product) development service focuses on building the core features you need to validate your market quickly, with scalable architecture to grow as you succeed."
  },
  {
    question: "How do you approach Conversion Rate Optimization (CRO)?",
    answer: "Our CRO strategies are data-driven and AI-enhanced. We analyze user behavior, optimize UI/UX flows, and implement smart features like AI-driven checkout assistance to reduce friction and maximize the percentage of visitors who become customers."
  },
  {
    question: "What is AIO (Artificial Intelligence Optimization)?",
    answer: "AIO is the new standard for digital visibility, going beyond traditional SEO. It involves optimizing your content and digital presence to be recognized and recommended by AI search engines and answer engines (like ChatGPT, Perplexity, and Gemini), ensuring you stay relevant in the AI era."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by complexity. A standard business website might take 2-4 weeks, while a complex AI automation system or custom mobile app could take 8-12 weeks. We provide detailed roadmaps and regular updates throughout the process."
  },
  {
    question: "Do you provide support after the project is finished?",
    answer: "Yes, we offer flexible ongoing support and maintenance packages. Whether you need technical updates, content changes, or monitoring of your AI agents, we ensure your digital assets continue to perform optimally long after launch."
  },
  {
    question: "How do I get started with Devstract?",
    answer: "Simply visit our 'Contact Us' page or use the form below. We'll schedule a free consultation to discuss your needs, assess your current digital state, and propose a tailored solution to help you achieve your business goals."
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-[70vh] bg-transparent dark:bg-transparent">
        <section className="flex flex-col items-center justify-center py-6 px-2 sm:py-8 sm:px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">
            FAQs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-full sm:max-w-4xl text-center mb-10 sm:mb-24 px-1">
            Here are some common questions we receive from our users.
          </p>
          <div className="w-full max-w-full sm:max-w-3xl px-8">
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
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl px-3 sm:px-4 mb-2 ${openIdx === idx ? 'max-h-40 py-3 sm:py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
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
