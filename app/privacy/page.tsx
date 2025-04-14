import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Devstract - how we handle and protect your data",
};

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      
      <div className="prose prose-invert prose-lg max-w-none space-y-6">
        <p className="text-gray-300">
          Last Updated: April 15, 2025
        </p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
          <p>
            At Devstract ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you provide to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-white">Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact us through our website</li>
            <li>Request a quote or consultation</li>
            <li>Sign up for our newsletter</li>
            <li>Apply for employment opportunities</li>
            <li>Engage our services</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, company name, job title, and project requirements.
          </p>
          
          <h3 className="text-xl font-semibold text-white">Technical Information</h3>
          <p>
            When you visit our website, we automatically collect certain information about your device and browsing actions, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages viewed and time spent</li>
            <li>Date and time of access</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and respond to your inquiries and requests</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Communicate with you about our services, news, and events</li>
            <li>Monitor and analyze trends and usage to improve user experience</li>
            <li>Protect against, identify, and prevent fraud and other illegal activities</li>
            <li>Fulfill contractual obligations</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Client Project Information</h2>
          <p>
            As a software development agency, we may have access to your data during the development and maintenance of web and mobile applications. We treat all client project information as strictly confidential and implement appropriate security measures to protect it.
          </p>
          <p>
            We process client data solely for the purpose of providing our contracted services and will never use this data for marketing purposes or share it with third parties without explicit consent, except as required by law.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and collect certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">6. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">7. Third-Party Services</h2>
          <p>
            We may use third-party service providers to help us operate our business and administer activities on our behalf, such as sending emails or hosting our website. These third parties may have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We have taken appropriate safeguards to require that your information will remain protected in accordance with this Privacy Policy.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">9. Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access, update, or delete your information</li>
            <li>The right to rectification</li>
            <li>The right to object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">10. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="pl-6">
            Devstract<br />
            Email: conatact@devstract.site<br />
          </p>
        </section>
      </div>
      
      <div className="mt-12 border-t border-gray-800 pt-6">
        <Link 
          href="/" 
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}