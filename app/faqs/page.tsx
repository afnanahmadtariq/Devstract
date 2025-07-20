
"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const faqs = [
  {
    question: "What is Devstract?",
    answer: "Devstract is a platform providing web development services and resources."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us at support@devstract.com."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we offer custom web development solutions tailored to your needs."
  }
];

export default function FAQPage() {
  return (
    <>
      <Navigation contactPage />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h1>
          <div className="w-full max-w-3xl bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0">
                <h2 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-400">{faq.question}</h2>
                <p className="text-gray-700 dark:text-gray-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
