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
    <footer className="bg-gray-900 text-white pt-8 pb-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors"
                    >
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

        {/* Bottom disclaimer */}
        <div className="mt-6 text-center text-xs text-gray-500 px-4 pb-4">
          By continuing past this page, you agree to our{" "}
          {policyLinks.map((policy, idx) => (
            <span key={policy.text}>
              <Link
                href={policy.href}
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                {policy.text}
              </Link>
              {idx < policyLinks.length - 1 && ", "}
            </span>
          ))}
          .
          <br />© {new Date().getFullYear()} DoStartup Private Limited. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
