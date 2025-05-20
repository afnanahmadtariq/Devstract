import React from "react";
import Link from "next/link";
import { ShieldCheck, User, Globe, Lock, Cookie, Users, RefreshCw, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Devstract - how we handle and protect your data",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 py-0">
      <div className="absolute inset-0 pointer-events-none opacity-10 select-none" aria-hidden>
        <div className="w-full h-96 bg-gradient-to-r from-teal-100 to-transparent rounded-b-full blur-2xl" />
      </div>
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center py-16">
        <ShieldCheck className="w-14 h-14 text-teal-600 mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-lg">Last Updated: May 20, 2025</p>
      </div>
      {/* Main Content - now full width, no max-w-4xl constraint */}
      <div className="relative z-10 px-4 md:px-24 lg:px-48 space-y-10 pb-16 w-full">
        {/* Section 1 */}
        <Section icon={<User className="w-7 h-7 text-teal-500" />} title="1. Introduction">
          <p>
            At Devstract ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you provide to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </Section>
        {/* Section 2 */}
        <Section icon={<Users className="w-7 h-7 text-teal-500" />} title="2. Information We Collect">
          <h3 className="font-semibold text-gray-700 mt-2">Personal Information</h3>
          <ul className="list-disc pl-6 mb-2">
            <li>Contact us through our website</li>
            <li>Request a quote or consultation</li>
            <li>Sign up for our newsletter</li>
            <li>Apply for employment opportunities</li>
            <li>Engage our services</li>
          </ul>
          <p>This may include your name, email address, phone number, company name, job title, and project requirements.</p>
          <h3 className="font-semibold text-gray-700 mt-4">Technical Information</h3>
          <ul className="list-disc pl-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages viewed and time spent</li>
            <li>Date and time of access</li>
          </ul>
        </Section>
        {/* Section 3 */}
        <Section icon={<RefreshCw className="w-7 h-7 text-teal-500" />} title="3. How We Use Your Information">
          <ul className="list-disc pl-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and respond to your inquiries and requests</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Communicate with you about our services, news, and events</li>
            <li>Monitor and analyze trends and usage to improve user experience</li>
            <li>Protect against, identify, and prevent fraud and other illegal activities</li>
            <li>Fulfill contractual obligations</li>
          </ul>
        </Section>
        {/* Section 4 */}
        <Section icon={<Lock className="w-7 h-7 text-teal-500" />} title="4. Client Project Information">
          <p>
            As a software development agency, we may have access to your data during the development and maintenance of web and mobile applications. We treat all client project information as strictly confidential and implement appropriate security measures to protect it.
          </p>
          <p>
            We process client data solely for the purpose of providing our contracted services and will never use this data for marketing purposes or share it with third parties without explicit consent, except as required by law.
          </p>
        </Section>
        {/* Section 5 */}
        <Section icon={<Cookie className="w-7 h-7 text-teal-500" />} title="5. Cookies and Similar Technologies">
          <p>
            We use cookies and similar tracking technologies to track activity on our website and collect certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </Section>
        {/* Section 6 */}
        <Section icon={<ShieldCheck className="w-7 h-7 text-teal-500" />} title="6. Data Security">
          <p>
            We have implemented appropriate technical and organizational security measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </Section>
        {/* Section 7 */}
        <Section icon={<Users className="w-7 h-7 text-teal-500" />} title="7. Third-Party Services">
          <p>
            We may use third-party service providers to help us operate our business and administer activities on our behalf, such as sending emails or hosting our website. These third parties may have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </Section>
        {/* Section 8 */}
        <Section icon={<Globe className="w-7 h-7 text-teal-500" />} title="8. International Data Transfers">
          <p>
            Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We have taken appropriate safeguards to require that your information will remain protected in accordance with this Privacy Policy.
          </p>
        </Section>
        {/* Section 9 */}
        <Section icon={<User className="w-7 h-7 text-teal-500" />} title="9. Your Data Protection Rights">
          <ul className="list-disc pl-6">
            <li>The right to access, update, or delete your information</li>
            <li>The right to rectification</li>
            <li>The right to object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>
        </Section>
        {/* Section 10 */}
        <Section icon={<RefreshCw className="w-7 h-7 text-teal-500" />} title="10. Changes to This Privacy Policy">
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>
        </Section>
        {/* Section 11 */}
        <Section icon={<MailIcon className="w-7 h-7 text-teal-500" />} title="11. Contact Us">
          <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
            <p className="font-semibold">Devstract</p>
            <p>Email: <a href="mailto:contact@devstract.site" className="text-teal-700 underline">contact@devstract.site</a></p>
          </div>
        </Section>
        <div className="mt-12 flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-b last:border-b-0 border-gray-100 pb-8 last:pb-0">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
        {icon}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <div className="text-gray-700 space-y-2 text-base">{children}</div>
      </div>
    </section>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}