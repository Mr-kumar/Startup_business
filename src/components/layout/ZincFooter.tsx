import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Startup Services",
    links: [
      { name: "FSSAI License", href: "/fssai-license-registration" },
      { name: "GST Registration", href: "/gst-registration" },
      { name: "OPC Registration", href: "/opc-registration" },
      { name: "Partnership Firm", href: "/partnership-firm-registration" },
      { name: "Sole Proprietorship", href: "/sole-proprietorship-registration" },
      { name: "MSME Registration", href: "/msme-registration-india" },
      { name: "IEC Code", href: "/iec-code-registration" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { name: "GST Return Filing", href: "/gst-return-filing" },
      { name: "NBFC Compliance", href: "/nbfc-compliance" },
      { name: "MCA Compliance", href: "/mca-compliance" },
      { name: "MGT-7 Filing", href: "/mgt-7-compliance" },
      { name: "SPICe+ Form", href: "/spice-plus-compliance" },
      { name: "Change Registered Office", href: "/change-registered-office" },
    ],
  },
  {
    title: "Intellectual Property",
    links: [
      { name: "Trademark Registration", href: "/trademark-registration" },
      { name: "Copyright Registration", href: "/copyright-registration" },
      { name: "Patent Registration", href: "/patent-registration" },
      { name: "Design Registration", href: "/design-registration" },
      { name: "Trademark Rectification", href: "/trademark-rectification" },
      { name: "International Trademark", href: "/international-trademark-registration" },
    ],
  },
];

const policyLinks = [
  { text: "Terms & Conditions", href: "/terms" },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "Refund Policy", href: "/refund" },
  { text: "Confidentiality Policy", href: "/confidentiality" },
  { text: "Disclaimer", href: "/disclaimer" },
];

const ZincFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 pt-16 pb-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Brand & Contact */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Ashtronx
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your trusted partner for professional business services, compliance solutions, and legal consulting.
            </p>
            <div className="space-y-2">
              <p className="text-neutral-400 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-neutral-500" />
                Patna, Bihar
              </p>
              <a 
                href="mailto:ashtronx.ceo@gmail.com" 
                className="text-neutral-400 hover:text-white text-sm flex items-center transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-neutral-500" />
                ashtronx.ceo@gmail.com
              </a>
              <a 
                href="tel:+919911144807" 
                className="text-neutral-400 hover:text-white text-sm flex items-center transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-neutral-500" />
                +91-9911144807
              </a>
            </div>
          </div>

          {/* Services Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-bold text-lg text-white relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-neutral-700"></span>
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-white mr-2 transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Ashtronx</span>. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-400">
            {policyLinks.map((policy, idx) => (
              <span key={policy.text} className="flex items-center">
                <Link
                  href={policy.href}
                  className="hover:text-white transition-colors"
                >
                  {policy.text}
                </Link>
                {idx < policyLinks.length - 1 && (
                  <span className="mx-2 text-neutral-700">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <p className="text-xs text-neutral-500">
            Trusted by 5000+ businesses across India for professional services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ZincFooter;
