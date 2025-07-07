import React from 'react';
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ContactUsPage() {
  return (
    <>
      <Navigation contactPage />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-16 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-12">
            We’d love to hear from you! Whether you have questions, feedback, or you’re ready to start a project, our team is here to help. Reach out to us anytime — we’re just a message away.
          </p>
          <div className="w-full bg-[#F7F7F7] flex flex-col md:flex-row justify-center items-stretch p-3 gap-3 max-w-7xl border-2 border-[#EBEBEB] rounded-[36px]">
            {/* Left Side (info and image) */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-12 max-w-md hidden md:flex flex-col items-center justify-center border-2 border-[#EBEBEB]">
              <img src="/media/baloons.svg" alt="Balloons" className="w-64 h-64 mb-6" />
              <p className="text-gray-700 dark:text-gray-200 mt-8 text-base text-left">
                Devstract is a next-gen design and development company focused on crafting innovative digital experiences. We blend cutting-edge technology with creative design to build modern, user-centric solutions that help brands grow, engage, and lead in their industries. Whether it's sleek web design, powerful applications, or seamless user experiences — we bring your ideas to life with precision and passion.
              </p>
            </div>
            {/* Right Side (Form) */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-12 border-2 border-[#EBEBEB]">
              <div className="mb-6 text-center max-w-sm mx-auto">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Let’s Connect 🚀 We’re just a message away reach out 🤝</p>
              </div>
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 text-left">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-full relative block w-full px-3 py-2 border border-[rgba(0,0,0,0.07)] dark:border-[rgba(0,0,0,0.07)] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 text-left">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-full relative block w-full px-3 py-2 border border-[rgba(0,0,0,0.07)] dark:border-[rgba(0,0,0,0.07)] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 text-left">Message</label>
                  <textarea id="message" name="message" rows={4} required className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-[rgba(0,0,0,0.07)] dark:border-[rgba(0,0,0,0.07)] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Message" />
                </div>
                <div>
                  <button type="submit" className="group flex items-center gap-2 px-6 py-2 border border-indigo-600 rounded-full text-sm font-medium text-indigo-600 bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto min-w-[140px] mx-auto transition-colors">
                    Send Message
                    <span className="inline-flex items-center justify-center ml-2 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                      <img src="/media/small_arrow.svg" alt="arrow" className="w-4 h-4 -rotate-45" />
                    </span>
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
