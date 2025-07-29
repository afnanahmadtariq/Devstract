"use client";

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import Image from 'next/image';

export default function AboutUsPage() {
  const cards = [
    {
      imgSrc: "/media/robot-arm.svg",
      alt: "AI Integration & Workflow Automation",
      title: "AI Integration & Workflow Automation",
      description: "We embed AI where it matters, from smart features in your app to backend process automation. Unlock efficiency, personalization and scale with intelligent solutions built into your stack."
    },
    {
      imgSrc: "/media/rocket.svg",
      alt: "Full-Stack MVP Execution",
      title: "Full-Stack MVP Execution",
      description: "From idea to working product fast. We design, build, and ship complete MVPs using modern full-stack frameworks so you can validate, iterate, and scale without delay."
    },
    {
      imgSrc: "/media/bulb.svg",
      alt: "Quality",
      title: "Strategy-Driven, CRO\u2011Optimized Design",
      description: "We blend creativity with conversion. Every design decision is grounded in UX research and CRO best practices, so your product doesn't just look good, it performs."
    }
  ];

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl text-center mb-24">
            We’d love to hear from you! Whether you have questions, feedback, or you’re ready to start a project, our team is here to help. Reach out to us anytime — we’re just a message away.
          </p>
          <div className="w-full bg-[#F7F7F7] flex flex-col justify-center items-stretch p-3 gap-3 max-w-7xl border-2 border-[#EBEBEB] rounded-[36px]">
            {/* Top Portion */}
            <div className="w-full flex flex-col lg:flex-row gap-3 min-h-[36rem]">
              {/* Left Side */}
              <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-800 rounded-[33px] p-10 md:p-20 border-2 border-[#EBEBEB]">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-8 md:mb-16"
                  style={{ backgroundImage: 'var(--primary-gradient)'}}
                >
                  <Image
                    src="/images/logo.svg"
                    alt="Devstract Logo"
                    width={40}
                    height={40}
                    className="cursor-pointer filter brightness-0 invert md:width-[52px] md:height-[52px]"
                  />
                </div>
                <div className="relative w-full">
                  <p 
                    className='absolute top-0 left-0 text-6xl md:text-[96px]'
                    style={{ 
                      transform: 'translate(-100%, -30%)',
                      backgroundImage: 'var(--primary-gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    “
                  </p>                  
                </div>
                <div style={{ position: 'relative', width: '100%' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '30%',
                      background: 'linear-gradient(180deg, #fff -40%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  />
                  <p className='text-[#494949] text-left max-w-lg text-base md:text-[22px] font-normal leading-relaxed mt-4'>
                    Devstract is a next-gen design and development company focused on crafting innovative digital experiences. We blend cutting-edge technology with creative design to build modern, user-centric solutions that help brands grow, engage, and lead in their industries. Whether it's sleek web design, powerful applications, or seamless user experiences — we bring your ideas to life  with precision and passion.
                  </p>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '50%',
                      background: 'linear-gradient(0deg, #fff -30%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  />
                </div>
              </div>
              {/* Right Side*/}
              <div className="flex-[1.2] bg-white dark:bg-gray-800 rounded-[33px] py-10 md:py-20 max-w-4xl border-2 border-[#EBEBEB]">
                <div style={{ position: 'relative', width: '100%' }}>
                  <img src="/media/ceo.png" alt="Devstract CEO" className="mx-auto" />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '50%',
                      background: 'linear-gradient(0deg, #fff 0%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  />
                </div>
                <h2 className="text-2xl md:text-[32px] font-bold text-[#494949] dark:text-white text-center mb-4 mt-8">
                  Afnan Ahmad Tariq
                </h2>
                <p className='text-[#BCB9B6] text-center text-base md:text-xl font-normal leading-loose'>
                  CEO Devstract
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:mt-12 py-10">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Why Us
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl text-center">
                We’d love to hear from you! Whether you have questions, feedback, or you’re ready to start a project, our team is here to help. Reach out to us anytime — we’re just a message away.
              </p>
            </div>
            {/* Bottom Portion */}
            <div className="w-full flex flex-col md:flex-row gap-3"> 
              {cards.map((card, index) => (
                <div key={index} className="flex flex-1 flex-col items-center justify-start bg-white dark:bg-gray-800 rounded-[33px] border-2 border-[#EBEBEB]"> 
                  <img src={card.imgSrc} alt={card.alt}/> 
                  <div className='px-7 mb-7 md:px-10 mb-10 items-start w-full'>
                    <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white text-left mb-4">{card.title}</h2> 
                    <p className="text-lg md:text-xl text-[#676767] font-normal text-left">{card.description}</p> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
