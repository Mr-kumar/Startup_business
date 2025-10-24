import React from 'react';

export const metadata = {
  title: 'Confidentiality Policy | Ashtronx',
  description: 'Confidentiality and data protection policy for Ashtronx services.',
};

export default function ConfidentialityPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Confidentiality Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> January 1, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Our Commitment to Confidentiality</h2>
          <p className="text-gray-700 leading-relaxed">
            Ashtronx Private Limited is committed to maintaining the highest standards of confidentiality and 
            protecting the sensitive information entrusted to us by our clients. This Confidentiality Policy 
            outlines how we safeguard your confidential information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Definition of Confidential Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Confidential information includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Business plans, strategies, and financial information</li>
            <li>Personal identification documents and information</li>
            <li>Proprietary business information and trade secrets</li>
            <li>Client lists and customer data</li>
            <li>Technical data and intellectual property</li>
            <li>Any information marked as confidential or that would reasonably be considered confidential</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. How We Protect Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement multiple layers of security to protect your confidential information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Physical Security:</strong> Secure office premises with restricted access</li>
            <li><strong>Digital Security:</strong> Encrypted data storage and secure file transfer protocols</li>
            <li><strong>Access Controls:</strong> Limited access to confidential information on a need-to-know basis</li>
            <li><strong>Employee Training:</strong> Regular training on confidentiality and data protection</li>
            <li><strong>Secure Communication:</strong> Encrypted email and secure client portals</li>
            <li><strong>Document Management:</strong> Secure storage and disposal of physical documents</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Employee and Contractor Obligations</h2>
          <p className="text-gray-700 leading-relaxed">
            All Ashtronx employees, contractors, and partners are bound by strict confidentiality agreements. 
            They are required to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Maintain confidentiality of all client information</li>
            <li>Use confidential information only for authorized purposes</li>
            <li>Not disclose confidential information to unauthorized parties</li>
            <li>Follow all security protocols and procedures</li>
            <li>Report any suspected breaches immediately</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Permitted Disclosures</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may disclose confidential information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>With Your Consent:</strong> When you explicitly authorize disclosure</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
            <li><strong>Service Delivery:</strong> To government authorities as necessary for registration and compliance services</li>
            <li><strong>Professional Advisors:</strong> To our legal, financial, or professional advisors under confidentiality obligations</li>
            <li><strong>Business Transfers:</strong> In connection with a merger or acquisition, subject to confidentiality agreements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain confidential information only for as long as necessary to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide the requested services</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain business records as required by law</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            After the retention period, we securely destroy or anonymize confidential information in accordance 
            with industry best practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">7. Third-Party Service Providers</h2>
          <p className="text-gray-700 leading-relaxed">
            When we engage third-party service providers, we ensure they:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Sign confidentiality agreements</li>
            <li>Implement appropriate security measures</li>
            <li>Use information only for authorized purposes</li>
            <li>Comply with applicable data protection laws</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">8. Your Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To help us maintain confidentiality, we ask that you:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Keep your account credentials secure</li>
            <li>Use secure methods to transmit sensitive information</li>
            <li>Notify us immediately of any suspected security breaches</li>
            <li>Follow our guidelines for sharing documents and information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">9. Breach Notification</h2>
          <p className="text-gray-700 leading-relaxed">
            In the unlikely event of a confidentiality breach, we will:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Investigate the breach immediately</li>
            <li>Take steps to contain and mitigate the breach</li>
            <li>Notify affected clients as required by law</li>
            <li>Report to relevant authorities if necessary</li>
            <li>Implement measures to prevent future breaches</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">10. Professional Standards</h2>
          <p className="text-gray-700 leading-relaxed">
            Our confidentiality practices comply with:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Information Technology Act, 2000</li>
            <li>Professional standards for chartered accountants and company secretaries</li>
            <li>Industry best practices for data protection</li>
            <li>Applicable privacy and data protection regulations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">11. Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Confidentiality Policy to reflect changes in our practices or legal requirements. 
            Material changes will be communicated to clients, and the updated policy will be posted on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">12. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions about our confidentiality practices or wish to report a concern:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-2"><strong>Ashtronx Private Limited</strong></p>
            <p className="text-gray-700 mb-2">Email: privacy@dostartup.in</p>
            <p className="text-gray-700 mb-2">Phone: [Your Contact Number]</p>
            <p className="text-gray-700">Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
}
