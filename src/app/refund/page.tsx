import React from 'react';

export const metadata = {
  title: 'Refund Policy | DoStartup',
  description: 'Refund and cancellation policy for DoStartup services.',
};

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Refund Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> January 1, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. General Refund Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            At DoStartup Private Limited, we are committed to providing high-quality services. This Refund Policy 
            outlines the circumstances under which refunds may be issued and the process for requesting a refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Eligibility for Refunds</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.1 Full Refund</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You may be eligible for a full refund in the following cases:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Service cancellation requested within 24 hours of payment, before work has commenced</li>
            <li>Duplicate payment made for the same service</li>
            <li>Service not delivered due to our inability to fulfill the order</li>
            <li>Technical error resulting in incorrect charges</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.2 Partial Refund</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Partial refunds may be considered in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Service cancellation after work has commenced but before submission to authorities</li>
            <li>Significant delays caused solely by DoStartup (not government processing times)</li>
            <li>Service quality issues that cannot be resolved</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.3 No Refund</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Refunds will not be provided in the following cases:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>After documents have been submitted to government authorities</li>
            <li>Rejection by government authorities due to incorrect or incomplete information provided by you</li>
            <li>Change of mind after service completion</li>
            <li>Delays caused by government processing times or third-party service providers</li>
            <li>Failure to provide required documentation or information in a timely manner</li>
            <li>Government fees, statutory fees, or third-party charges already paid</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. Government and Third-Party Fees</h2>
          <p className="text-gray-700 leading-relaxed">
            Government fees, statutory charges, and third-party service fees are non-refundable once paid to 
            the respective authorities or service providers. Only DoStartup's professional service fees may be 
            eligible for refund as per this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Refund Request Process</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To request a refund, please follow these steps:
          </p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Send an email to refunds@dostartup.in with the subject line "Refund Request"</li>
            <li className="mb-2">Include your order number, service details, and reason for the refund request</li>
            <li className="mb-2">Provide any supporting documentation if applicable</li>
            <li className="mb-2">Our team will review your request within 5-7 business days</li>
            <li className="mb-2">You will receive a response via email regarding the status of your refund request</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Refund Processing Time</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once a refund is approved:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Refunds will be processed within 7-10 business days</li>
            <li>The refund will be credited to the original payment method</li>
            <li>Bank processing times may vary (typically 5-7 business days)</li>
            <li>You will receive a confirmation email once the refund is processed</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Service Modifications</h2>
          <p className="text-gray-700 leading-relaxed">
            If you wish to modify or upgrade your service instead of requesting a refund, please contact our 
            support team. We will work with you to find a suitable solution, which may include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Changing to a different service package</li>
            <li>Applying the payment towards another service</li>
            <li>Adjusting the scope of work</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">7. Subscription Services</h2>
          <p className="text-gray-700 leading-relaxed">
            For recurring subscription services (if applicable):
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>You may cancel your subscription at any time</li>
            <li>Cancellation will take effect at the end of the current billing period</li>
            <li>No refunds will be provided for partial subscription periods</li>
            <li>You will retain access to the service until the end of the paid period</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">8. Disputes</h2>
          <p className="text-gray-700 leading-relaxed">
            If you disagree with our refund decision, you may escalate the matter by contacting our management 
            team at support@dostartup.in. We will review your case and provide a final decision within 15 business days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">9. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately 
            upon posting on our website. Your continued use of our services constitutes acceptance of the modified policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For questions about our Refund Policy or to request a refund, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-2"><strong>DoStartup Private Limited</strong></p>
            <p className="text-gray-700 mb-2">Email: refunds@dostartup.in</p>
            <p className="text-gray-700 mb-2">Support: support@dostartup.in</p>
            <p className="text-gray-700 mb-2">Phone: [Your Contact Number]</p>
            <p className="text-gray-700">Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
}
