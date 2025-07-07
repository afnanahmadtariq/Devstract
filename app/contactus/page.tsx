import React from 'react';
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ContactUsPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-16 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-12">
            We’d love to hear from you! Whether you have questions, feedback, or you’re ready to start a project, our team is here to help. Reach out to us anytime — we’re just a message away.
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center items-stretch p-3 gap-3 max-w-7xl border-2 border-[#EBEBEB] rounded-2xl">
            {/* Left Side (empty or add info later) */}
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow p-8 hidden md:block border-2 border-[#EBEBEB]" />
            {/* Right Side (Form) */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow p-8 border-2 border-[#EBEBEB]">
              <div className="mb-6 text-center max-w-sm mx-auto">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Let’s Connect 🚀 We’re just a message away reach out 🤝</p>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4} required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Message" />
                </div>
                <div>
                  <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
