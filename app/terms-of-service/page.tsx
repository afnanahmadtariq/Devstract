"use client";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LegalLayout from '@/components/legal-layout';

export default function TermsOfServicePage() {
  const title = "Terms of Service";
  const subtitle = "These terms govern your use of Devstract's website and services. By working with us, you agree to the terms below.";
  const content = (
    <>
      <h2>1. Overview</h2>
      <p>These Terms of Service ("Terms") apply to all users of the Devstract website and clients who engage with our software design and development services. By accessing our site or partnering with us, you agree to be bound by these Terms.</p>

      <h2>2. Services</h2>
      <p>Devstract provides UI/UX design, frontend/backend development, product strategy, and related digital services. Specific service terms, timelines, and deliverables are outlined in individual project agreements or proposals.</p>

      <h2>3. User Responsibilities</h2>
      <p>You agree to:</p>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>Provide accurate and complete information during project onboarding</p></li>
        <li><p>Review and approve deliverables in a timely manner</p></li>
        <li><p>Use our website and services in accordance with applicable laws and these Terms</p></li>
        <li><p>You are responsible for maintaining the confidentiality of any credentials or private information related to your projects.</p></li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>Unless otherwise agreed in writing:</p>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>All original designs, code, and assets created by Devstract remain our intellectual property until full payment is received.</p></li>
        <li><p>Upon full payment, ownership of agreed deliverables will transfer to the client.</p></li>
        <li><p>Devstract reserves the right to showcase completed work in its portfolio unless otherwise requested.</p></li>
      </ul>

      <h2>5. Payments</h2>
      <p>Project payments, milestones, and schedules are defined in individual contracts. Late payments may result in delayed delivery or temporary suspension of services.</p>

      <h2>6. Cancellations & Refunds</h2>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>Clients may cancel a project with prior written notice.</p></li>
        <li><p>Refunds, if applicable, are determined based on the stage of the project and the work already completed.</p></li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <p>Devstract is not liable for:</p>
      <ul className="list-square marker:text-[#676767] pl-8">
        <li><p>Any indirect, incidental, or consequential damages</p></li>
        <li><p>Loss of data, revenue, or business opportunities arising from the use of our services</p></li>
        <li><p>Our liability is limited to the total amount paid by the client for the specific project.</p></li>
      </ul>

      <h2>8. Privacy</h2>
      <p>Please refer to our <a href="/privacy-policy"><u>Privacy Policy</u></a> to understand how we collect, use, and protect your data.</p>

      <h2>9. Changes to These Terms</h2>
      <p>We reserve the right to update or modify these Terms at any time. Continued use of our website or services after changes indicates your acceptance of the updated Terms.</p>
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
