
"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function AboutUsPage() {
  return (
    <>
      <Navigation contactPage />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-8 text-center">About Us</h1>
          <div className="w-full max-w-3xl bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-8">
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              Devstract is dedicated to delivering high-quality web development services. Our team is passionate about technology and innovation, striving to help businesses grow online.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">Our Mission</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              To empower businesses with modern, scalable, and effective web solutions.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">Our Team</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We are a group of experienced developers, designers, and strategists committed to excellence.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
