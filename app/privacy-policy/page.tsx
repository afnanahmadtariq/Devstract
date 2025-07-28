
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
      
      <h1>1. Information We Collect</h1>
      <p>We may collect the following types of information:</p>
      <p><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided through forms or communication.</p>
      <p><strong>Usage Data:</strong> Analytics, IP addresses, browser type, pages visited, and other technical data collected via cookies and similar technologies.</p>
      <p><strong>Project Information:</strong> Details about your company, project requirements, and related documentation shared during our collaboration.</p>
      
      <h1>2. How We Use Your Information</h1>
      <p>We use your data to:</p>
      <p>Communicate with you regarding inquiries, projects, or updates</p>
      <p>Improve our website's functionality and user experience</p>
      <p>Deliver and manage our design and development services</p>
      <p>Maintain security and compliance with legal obligations</p>
      
      <h1>3. Sharing Your Data</h1>
      <p>We do not sell, rent, or trade your personal information. Your data may only be shared with:</p>
      <p>Trusted third-party tools or service providers involved in delivering our services (e.g., analytics, hosting)</p>
      <p>Legal authorities if required by law</p>
      
      <h1>4. Cookies and Tracking</h1>
      <p>We use cookies to improve website functionality and gather anonymous analytics. You can manage your cookie preferences through your browser settings.</p>
      
      <h1>5. Data Security</h1>
      <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
      
      <h1>6. Your Rights</h1>
      <p>You have the right to:</p>
      <p>Access, update, or delete your personal information</p>
      <p>Withdraw consent for certain uses of your data</p>
      <p>Contact us with questions or privacy-related requests</p>
    </>
  );
  return (
    <>
      <Navigation/>
      <LegalLayout
        title={title}
        subtitle={subtitle}
        content={content}
      />
      <Footer />
    </>
  );
}
