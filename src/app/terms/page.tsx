import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Ashtronx',
  description: 'Terms and Conditions for using Ashtronx services.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms & Conditions</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> January 1, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using the services provided by Ashtronx Private Limited ("Ashtronx," "we," "us," or "our"), 
            you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Services Provided</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ashtronx provides business registration, compliance, licensing, and related professional services including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Company registration and incorporation services</li>
            <li>GST registration and compliance</li>
            <li>Trademark and intellectual property services</li>
            <li>FSSAI and other government licenses</li>
            <li>Tax filing and accounting services</li>
            <li>Environmental compliance and certifications</li>
            <li>Other business and legal services as listed on our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. User Obligations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a user of our services, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide accurate, complete, and up-to-date information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use our services for any illegal or unauthorized purpose</li>
            <li>Cooperate with us in providing necessary documentation and information</li>
            <li>Pay all fees and charges as agreed upon</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Fees and Payment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Service fees are as quoted on our website or as agreed upon in writing. Payment terms include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Fees must be paid in advance unless otherwise agreed</li>
            <li>Government fees and third-party charges are additional</li>
            <li>All fees are in Indian Rupees (INR) unless specified otherwise</li>
            <li>Late payments may incur additional charges</li>
            <li>Refunds are subject to our Refund Policy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Service Delivery and Timelines</h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to complete services within the estimated timelines. However, actual completion times may vary 
            depending on government processing times, completeness of documentation, and other factors beyond our control. 
            We are not liable for delays caused by government authorities or third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on our website, including text, graphics, logos, and software, is the property of Ashtronx 
            or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or 
            create derivative works without our express written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>We are not liable for any indirect, incidental, or consequential damages</li>
            <li>Our total liability shall not exceed the fees paid for the specific service</li>
            <li>We are not responsible for errors in information provided by you or third parties</li>
            <li>We do not guarantee approval of applications by government authorities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">8. Confidentiality</h2>
          <p className="text-gray-700 leading-relaxed">
            We maintain strict confidentiality of your information in accordance with our Privacy Policy and 
            professional standards. However, we may be required to disclose information to government authorities 
            as part of our service delivery or legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">9. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to terminate or suspend your access to our services at any time for violation 
            of these terms, non-payment, or any other reason at our discretion. You may terminate services by 
            providing written notice, subject to our cancellation and refund policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">10. Dispute Resolution</h2>
          <p className="text-gray-700 leading-relaxed">
            Any disputes arising from these terms or our services shall be resolved through arbitration in 
            accordance with Indian law. The venue for arbitration shall be [Your City], India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">11. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions are governed by the laws of India. Any legal proceedings shall be 
            subject to the exclusive jurisdiction of the courts in [Your City], India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">12. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
            immediately upon posting on our website. Your continued use of our services constitutes acceptance 
            of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">13. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For questions about these Terms and Conditions, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-2"><strong>Ashtronx Private Limited</strong></p>
            <p className="text-gray-700 mb-2">Email: support@dostartup.in</p>
            <p className="text-gray-700 mb-2">Phone: [Your Contact Number]</p>
            <p className="text-gray-700">Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
}
