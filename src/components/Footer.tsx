import React from "react";


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
    title: "Startup",
    links: [
      { name: "Fssai & Eating License", href: "/footer/fssai-eating-license" },
      { name: "Business Registration", href: "/footer/business-registration" },
      { name: "Secretarial Compliances", href: "/footer/secretarial-compliances" },
      { name: "IT Services", href: "/footer/it-services" },
      { name: "Global Company Formation", href: "/footer/global-company-formation" },
      { name: "Government Licenses", href: "/footer/government-licenses" },
      { name: "Government Registration", href: "/footer/government-registration" },
      { name: "NGO", href: "/footer/ngo" },
      { name: "ISO", href: "/footer/iso" },
    ],
  },
  {
    title: "TAX",
    links: [
      { name: "Tax Filing", href: "/footer/tax-filing" },
      { name: "Service Related", href: "/footer/servicerelated" },
      { name: "Property Related", href: "/footer/property-related" },
      { name: "Legal Services", href: "/footer/legal-services" },
      { name: "Advisory Service", href: "/footer/advisory-service" },
      { name: "Business Templates", href: "/footer/business-document-templates" },
    ],
  },
  {
    title: "ENVIRONMENTAL",
    links: [
      { name: "Pollution NOC", href: "/footer/pollution-noc" },
      {
        name: "E-Waste Management",
        href: "/footer/e-waste",
      },
      {
        name: "Plastic Waste Management",
        href: "/footer/plastic-waste-management",
      },
      { name: "Hazardous Waste Management", href: "/footer/hazardous-waste-management" },
      { name: "Battery Waste Management", href: "/footer/battery-waste-management" },
      { name: "Environmental Licensing", href: "/footer/environmental-licensing" },
      { name: "Environmental Advisory", href: "/footer/environmental-advisory" },
      { name: "EIA", href: "/footer/eia" },
      { name: "Environmental Industry", href: "/footer/environmental-industry" },
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
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </a>
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
              <a
                href={policy.href}
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                {policy.text}
              </a>
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
