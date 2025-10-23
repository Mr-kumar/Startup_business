import React from "react";
import Link from "next/link";

// TypeScript interfaces for type safety
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
      // { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Startup Services",
    links: [
      { name: "FSSAI License Registration", href: "/fssai-license-registration" },
      { name: "GST Registration", href: "/gst-registration" },
      { name: "OPC Registration", href: "/opc-registration" },
      { name: "Partnership Firm Registration", href: "/partnership-firm-registration" },
      { name: "Sole Proprietorship", href: "/sole-proprietorship-registration" },
      { name: "MSME Registration", href: "/msme-registration-india" },
      { name: "IEC Code Registration", href: "/iec-code-registration" },
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

// const socialLinks = [
//   {
//     Icon: FaFacebookF,
//     url: "https://facebook.com/yourpage",
//     label: "Facebook",
//   },
//   { Icon: FaTwitter, url: "https://twitter.com/yourhandle", label: "Twitter" },
//   {
//     Icon: FaInstagram,
//     url: "https://instagram.com/yourprofile",
//     label: "Instagram",
//   },
//   {
//     Icon: FaLinkedinIn,
//     url: "https://linkedin.com/company/yourcompany",
//     label: "LinkedIn",
//   },
//   { Icon: FaYoutube, url: "https://youtube.com/yourchannel", label: "YouTube" },
// ];

// const bottomLinks = [
  // { text: "ABOUT US", href: "/about" },
  // { text: "PAY NOW", href: "/pay" },
  // { text: "LEARNING", href: "/learning" },
  // { text: "PRIVACY POLICY", href: "/privacy" },
  // { text: "REFUND POLICY", href: "/refund" },
  // { text: "TERMS & CONDITIONS", href: "/terms" },
  // { text: "SITEMAP", href: "/sitemap" },
  // { text: "CONTACT US", href: "/contact" },
// ];

const policyLinks = [
  { text: "Terms & Conditions", href: "/terms" },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "Refund Policy", href: "/refund" },
  { text: "Confidentiality Policy", href: "/confidentiality" },
  { text: "Disclaimer", href: "/disclaimer" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Brand & Contact */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Ashtronx
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your trusted partner for professional business services, compliance solutions, and legal consulting.
            </p>
            <div className="space-y-2">
              <p className="text-neutral-400 text-sm flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Patna, Bihar
              </p>
              <a href="mailto:ashtronx.ceo@gmail.com" className="text-neutral-400 hover:text-primary-400 text-sm flex items-center transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ashtronx.ceo@gmail.com
              </a>
            </div>
          </div>

          {/* Services Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-bold text-lg text-white relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-400 transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-primary-400 mr-2 transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        {/* <div className="mt-6 flex justify-center space-x-4 text-lg">
          {socialLinks.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              aria-label={label}
            >
              <Icon className="text-white" />
            </a>
          ))}
        </div> */}

        {/* Bottom Links Navigation */}
        {/* <div className="mt-12">
          <nav className="flex flex-wrap gap-4 justify-center text-gray-400 text-sm">
            {bottomLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div> */}

        {/* Divider */}
        <div className="border-t border-neutral-700 my-8"></div>

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
                  className="hover:text-primary-400 transition-colors"
                >
                  {policy.text}
                </Link>
                {idx < policyLinks.length - 1 && (
                  <span className="mx-2 text-neutral-600">•</span>
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

export default Footer;
