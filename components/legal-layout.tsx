"use client";
import { useRouter } from 'next/navigation';
import { JSX } from 'react';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  content: JSX.Element;
}

export default function LegalLayout({ title, subtitle, content }: LegalLayoutProps) {
  const router = useRouter();
  const teamMembers = [
    { id: 1, image: "/images/image 3.png", name: "Sarah" },
    { id: 2, image: "/images/image 4.png", name: "Mike" },
    { id: 3, image: "/images/image 6.png", name: "Emma" },
    { id: 4, image: "/images/image 6.png", name: "Emma" },
    { id: 5, image: "/images/image 6.png", name: "Emma" },
  ];

  return (
    <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
      <section className="flex flex-col items-center justify-center py-8 px-4">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl text-center mb-24">
          {subtitle}
        </p>
        <div className="w-full bg-[#F7F7F7] flex flex-col justify-center items-stretch p-3 gap-3 max-w-7xl border-2 border-[#EBEBEB] rounded-[36px]">
          {/* Top Portion */}
          <div className="legal-content flex-1 bg-white dark:bg-gray-800 rounded-t-[33px] p-16 hidden md:flex flex-col justify-center border-2 border-[#EBEBEB]">
            {content}
          </div>
          {/* Bottom Portion */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-b-[33px] p-8 sm:p-16 border-2 border-[#EBEBEB]">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex -space-x-3 mb-6 justify-center">
                {[...teamMembers].reverse().map((member, index) => (
                  <div
                    key={member.id}
                    className="relative"
                    style={{
                      zIndex: index + 1,
                    }}
                  >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden" style={{ border: '1px solid #ECECEC' }}>
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-lg font-normal text-[#4D4D4DC9] dark:text-white mb-8 sm:mb-12">
                We'd love to hear from you! Whether you have questions, feedback, or you're ready to start a project, our team is here to help. Reach out to us anytime — we're just a message away.
              </p>
              <button 
                className="group flex items-center gap-2 p-1 border border-indigo-600 rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900 w-auto min-w-[140px] mx-auto transition-colors"
                onClick={() => router.push("/contactus")}
              >
                <span className="px-12 py-2 ml-4">
                  Contact Us
                </span>
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full mr-1"
                  style={{
                    backgroundImage: 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)',
                    backgroundPosition: 'center center',
                  }}
                >
                  <img src="/media/small_arrow.svg" alt="arrow" className="w-4 h-4 -rotate-45" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
