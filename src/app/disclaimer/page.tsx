import React from 'react';

export const metadata = {
  title: 'Disclaimer | Ashtronx',
  description: 'Legal disclaimer for Ashtronx services and website.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Disclaimer</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last Updated:</strong> January 1, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. General Information</h2>
          <p className="text-gray-700 leading-relaxed">
            The information provided on the Ashtronx website and through our services is for general informational 
            purposes only. While we strive to provide accurate and up-to-date information, we make no representations 
            or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, 
            or availability of the information, products, services, or related graphics contained on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Professional Advice</h2>
          <p className="text-gray-700 leading-relaxed">
            The content on this website does not constitute professional legal, financial, or business advice. 
            While our team consists of qualified professionals, the information provided should not be relied upon 
            as a substitute for consultation with professional advisors. We recommend that you seek independent 
            professional advice before making any business or legal decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. No Guarantee of Results</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ashtronx does not guarantee:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Approval of any application submitted to government authorities</li>
            <li>Specific timelines for government processing</li>
            <li>Particular business outcomes or results</li>
            <li>Compliance with all future regulatory changes</li>
            <li>Success of any business venture or registration</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            The success of applications depends on various factors including government policies, completeness of 
            documentation, and compliance with applicable laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Third-Party Links and Content</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites or services. These links are provided for your 
            convenience only. We have no control over the content, privacy policies, or practices of third-party 
            sites and assume no responsibility for them. We do not endorse or make any representations about 
            third-party websites or their content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Changes in Laws and Regulations</h2>
          <p className="text-gray-700 leading-relaxed">
            Laws, regulations, and government policies are subject to change. While we make efforts to stay updated 
            with regulatory changes, we cannot guarantee that all information on our website reflects the most current 
            legal requirements. It is your responsibility to verify current regulations and requirements with the 
            relevant authorities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the fullest extent permitted by law, Ashtronx shall not be liable for:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Any loss or damage arising from the use of our website or services</li>
            <li>Errors or omissions in the content provided</li>
            <li>Delays or failures in service delivery due to circumstances beyond our control</li>
            <li>Actions or decisions made based on information from our website</li>
            <li>Technical issues, viruses, or malware that may affect your device</li>
            <li>Loss of data or business interruption</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">7. User Responsibility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a user of our services, you are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Providing accurate and complete information</li>
            <li>Verifying the accuracy of information before making decisions</li>
            <li>Complying with all applicable laws and regulations</li>
            <li>Maintaining the security of your account and credentials</li>
            <li>Understanding the risks associated with business activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">8. Government Authority Decisions</h2>
          <p className="text-gray-700 leading-relaxed">
            Ashtronx acts as a facilitator for various registrations, licenses, and compliance services. Final 
            decisions on applications rest with the relevant government authorities. We cannot influence or guarantee 
            the decisions of government departments, and we are not responsible for rejections, delays, or adverse 
            decisions made by such authorities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">9. Pricing and Service Changes</h2>
          <p className="text-gray-700 leading-relaxed">
            Service fees, government charges, and processing times mentioned on our website are subject to change 
            without notice. We reserve the right to modify our services, pricing, and terms at any time. Current 
            pricing and terms will be confirmed at the time of service engagement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">10. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this website, including text, graphics, logos, and software, is the property of Ashtronx 
            or its licensors. Unauthorized use, reproduction, or distribution of this content is prohibited and may 
            violate copyright, trademark, and other laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">11. Testimonials and Case Studies</h2>
          <p className="text-gray-700 leading-relaxed">
            Any testimonials, case studies, or success stories presented on our website represent individual 
            experiences and do not guarantee similar results for all clients. Results may vary based on individual 
            circumstances, business models, and market conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">12. Website Availability</h2>
          <p className="text-gray-700 leading-relaxed">
            While we strive to maintain continuous website availability, we do not guarantee uninterrupted access. 
            The website may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond 
            our control. We are not liable for any loss or inconvenience caused by website downtime.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">13. Acceptance of Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            By using our website and services, you acknowledge that you have read, understood, and agree to this 
            disclaimer. If you do not agree with any part of this disclaimer, please do not use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">14. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For questions or concerns about this disclaimer:
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
