"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LegalLayout from '@/components/legal-layout';

export default function PrivacyPolicyPage() {
  const title = "Privacy Policy";
  const subtitle = "Your privacy matters to us. Here’s how we collect, use, and protect your information at Devstract.";
  const content = (
    <>
      <p>At Devstract, we are committed to safeguarding your privacy and protecting any personal information you share with us. This Privacy Policy outlines how we collect, use, and handle your data when you visit our website or engage with our services.</p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>Personal Information: Name, email address, phone number, and other contact details provided through forms or communication.</p></li>
        <li><p>Usage Data: Analytics, IP addresses, browser type, pages visited, and other technical data collected via cookies and similar technologies.</p></li>
        <li><p>Project Information: Details about your company, project requirements, and related documentation shared during our collaboration.</p></li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your data to:</p>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>Communicate with you regarding inquiries, projects, or updates</p></li>
        <li><p>Improve our website's functionality and user experience</p></li>
        <li><p>Deliver and manage our design and development services</p></li>
        <li><p>Maintain security and compliance with legal obligations</p></li>
      </ul>

      <h2>3. Sharing Your Data</h2>
      <p>We do not sell, rent, or trade your personal information. Your data may only be shared with:</p>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>Trusted third-party tools or service providers involved in delivering our services (e.g., analytics, hosting)</p></li>
        <li><p>Legal authorities if required by law</p></li>
      </ul>

      <h2>4. Cookies and Tracking</h2>
      <p>We use cookies to improve website functionality and gather anonymous analytics. You can manage your cookie preferences through your browser settings.</p>

      <h2>5. Data Security</h2>
      <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.</p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>Access, update, or delete your personal information</p></li>
        <li><p>Withdraw consent for certain uses of your data</p></li>
        <li><p>Contact us with questions or privacy-related requests</p></li>
      </ul>
    </>
  );
  return (
    <>
      <Navigation />
      <LegalLayout
        title={title}
        subtitle={subtitle}
        content={content}
      />
      <Footer />
    </>
  );
}
