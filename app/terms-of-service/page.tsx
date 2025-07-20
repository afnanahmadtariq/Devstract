
"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation contactPage />
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Terms of Service</h1>
          <div className="w-full max-w-3xl bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-8">
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">Use of Site</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              You agree to use the site only for lawful purposes and in accordance with these terms.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">Intellectual Property</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              All content on this site is the property of Devstract and may not be used without permission.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-200">
              If you have any questions about these Terms, please contact us at support@devstract.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
