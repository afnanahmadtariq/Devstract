"use client"

import React, { useRef, useState } from 'react';
import { MdOutlineError } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useIsSmallScreen } from '@/hooks/use-small-screen';

export default function ContactUsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [buttonState, setButtonState] = useState<'idle' | 'sending' | 'success' | 'error'>("sending");
  const [result, setResult] = useState<string | null>(null);
  const isSmallScreen = useIsSmallScreen();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonState('sending');
    setResult(null);
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setButtonState('success');
      setResult('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      setButtonState('error');
      setResult('Failed to send message. Please try again.');
    }
  };

  const handleEmailFocus = () => {
    if (buttonState !== 'idle') {
      setButtonState('idle')
      setResult(null)
    }
  }

  return (
    <>
      <Navigation disableContact />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl text-center mb-24">
            We’d love to hear from you! Whether you have questions, feedback, or you’re ready to start a project, our team is here to help. Reach out to us anytime — we’re just a message away.
          </p>
          <div className="w-full bg-[#F7F7F7] flex flex-col md:flex-row justify-center items-stretch p-3 gap-3 max-w-6xl border-2 border-[#EBEBEB] rounded-[36px]">
            {/* Left Side (info and image) */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-8 max-w-md flex flex-col items-center justify-center border-2 border-[#EBEBEB] md:order-none order-2">
              <img src="/media/baloons.svg" alt="Balloons" className="w-48 h-48 md:w-64 md:h-64 mb-6" />
              <div style={{ position: 'relative', width: '100%' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '50%',
                    background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0) 100%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                />
                <p className="text-[#707070] dark:text-gray-200 mt-8 text-base md:text-lg text-left" style={{ position: 'relative', zIndex: 1 }}>
                  Devstract is a next-gen design and development company focused on crafting innovative digital experiences. We blend cutting-edge technology with creative design to build modern, user-centric solutions that help brands grow, engage, and lead in their industries. Whether it's sleek web design, powerful applications, or seamless user experiences — we bring your ideas to life with precision and passion.
                </p>
              </div>
            </div>
            {/* Right Side (Form) */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-[33px] p-8 sm:p-16 border-2 border-[#EBEBEB]">
                <div className="mb-6 text-center max-w-sm mx-auto">
                    <p className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white mb-8 sm:mb-12">Let’s Connect 🚀 We’re just a message away reach out 🤝</p>
                </div>
              <form ref={formRef} onSubmit={handleSubmit} onFocus={handleEmailFocus} className="space-y-6 sm:space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 text-left">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-full relative block w-full px-6 py-3 sm:px-8 sm:py-4 border border-[rgba(0,0,0,0.07)] dark:border-[rgba(0,0,0,0.07)] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:border-indigo-500 focus:z-10 text-sm sm:text-base" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 text-left">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-full relative block w-full px-6 py-3 sm:px-8 sm:py-4 border border-[rgba(0,0,0,0.07)] dark:border-[rgba(0,0,0,0.07)] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:border-indigo-500 focus:z-10 text-sm sm:text-base" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 text-left">Message</label>
                  <textarea id="message" name="message" rows={6} required className="appearance-none rounded-[2rem] relative block w-full px-6 py-5 sm:px-8 sm:py-6 sm:mb-12 border border-[rgba(0,0,0,0.07)] dark:border-[rgba(0,0,0,0.07)] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:border-indigo-500 focus:z-10 text-sm sm:text-base" placeholder="Your Message" />
                </div>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-center items-center w-full">
                  <button 
                    type="submit" 
                    disabled={buttonState === 'sending' || buttonState === 'success' || buttonState === 'error'} 
                    className="group flex items-center justify-between p-1 border border-indigo-600 rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900 w-auto min-w-[215px] min-h-[50px] mx-auto transition-colors"
                  >
                    <span
                      className="px-4 py-2 ml-4 bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)',
                        backgroundPosition: 'center center',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                      }}
                    >
                      {buttonState === 'sending' ? 'Sending' : buttonState === 'success' ? 'Message Sent' : buttonState === 'error' ? 'Sending Failed' : 'Send Message'}
                    </span>
                    {buttonState === 'sending' && (
                      <span className={`text-2xl relative animate-mail-loop ${isSmallScreen ? '' : '-top-1'}`}>📨</span>
                    )}
                    <span
                      className="inline-flex items-center justify-center rounded-full"
                      style={{
                        width: buttonState === 'idle' ? 40 : 35,
                        height: buttonState === 'idle' ? 40 : 35,
                        marginRight: buttonState === 'idle' ? 0 : 3,
                        backgroundImage: buttonState === 'idle' ? 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)' : 'none',
                        backgroundPosition: 'center center',
                        border: buttonState !== 'idle' ? buttonState === 'error' ? '2px solid #D32F2F' : '2px solid #5A44FF' : 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      {/* Arrow animation */}
                      {buttonState === 'idle' && (
                        <img src="/media/small_arrow.svg" alt="arrow" className="w-4 h-4 -rotate-45" />
                      )}
                      {/* Loading spinner */}
                      {buttonState === 'sending' && (
                        <span className="w-5 h-5 flex items-center justify-center">
                          <svg className="animate-spin" width="20" height="20" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="9" stroke="#5A44FF" strokeWidth="2" fill="none" opacity="0.4" />
                            <path d="M10 1a9 9 0 0 1 9 9" stroke="#5A44FF" strokeWidth="2" fill="none" />
                          </svg>
                        </span>
                      )}
                      {/* Success tick animation */}
                      {buttonState === 'success' && (
                        <span className="w-5 h-5 flex items-center justify-center">
                          <GiCheckMark size={50} color="#5A44FF" className="animate-[tick_0.5s_ease]" />
                        </span>
                      )}
                      {/* Error cross animation */}
                      {buttonState === 'error' && (
                        <span className="w-8 h-8 flex items-center justify-center">
                          <MdOutlineError size={50} color="#D32F2F" className="animate-[cross_0.5s_ease]"/>
                        </span>
                      )}
                    </span>
                  </button>
                  <a
                    href="https://calendly.com/afnan-devstract/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-normal w-auto min-w-[215px] mx-auto transition-colors text-white text-center flex items-center justify-center"
                    style={{
                      backgroundImage: 'linear-gradient(345deg, rgba(90,68,255,1.00) 25%,rgba(125,113,255,1.00) 48%,rgba(124,128,255,1.00) 58%,rgba(0,0,153,1.00) 110%)',
                      backgroundPosition: 'center center',
                      backgroundClip: 'padding-box',
                      border: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Book a Call
                  </a>
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
