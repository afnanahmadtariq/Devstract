
"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation/>
      <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Privacy Policy</h1>
          <div className="w-full max-w-3xl bg-[#F7F7F7] border-2 border-[#EBEBEB] rounded-[36px] p-8">
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              This Privacy Policy describes how we handle your personal information. By using our website, you consent to the collection, use, and disclosure of your information as described in this policy.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">Information We Collect</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              We may collect information you provide directly to us, such as your name, email address, and any other information you choose to provide.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">How We Use Information</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              We use your information to provide, maintain, and improve our services, and to communicate with you.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-700 dark:text-indigo-400">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-200">
              If you have any questions about this Privacy Policy, please contact us at contact@devstract.site.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
