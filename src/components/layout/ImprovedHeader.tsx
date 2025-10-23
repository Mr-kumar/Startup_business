"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Phone, Mail } from "lucide-react";

const ImprovedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Organized menu structure like IndiaFilings
  const menuItems = [
    {
      id: "startup",
      label: "Startup",
      items: [
        { name: "Private Limited Company", href: "/private-limited-company-registration" },
        { name: "LLP Registration", href: "/LLPRegistrationPage" },
        { name: "One Person Company", href: "/opc-registration" },
        { name: "Partnership Firm", href: "/partnership-firm-registration" },
        { name: "Sole Proprietorship", href: "/sole-proprietorship-registration" },
        { name: "Nidhi Company", href: "/nidhi-company-registration" },
        { name: "Producer Company", href: "/producer-company-registration" },
        { name: "Section 8 Company", href: "/section8-company-registration" },
      ],
    },
    {
      id: "registrations",
      label: "Registrations",
      items: [
        { name: "GST Registration", href: "/gst-registration" },
        { name: "FSSAI License", href: "/fssai-license-registration" },
        { name: "MSME Registration", href: "/msme-registration-india" },
        { name: "IEC Code", href: "/iec-code-registration" },
        { name: "ISO Certification", href: "/iso-registration" },
        { name: "Trademark Registration", href: "/trademark-registration" },
        { name: "Shop & Establishment", href: "/shop-and-establishment-license" },
        { name: "Professional Tax", href: "/professional-tax-registration" },
      ],
    },
    {
      id: "trademark",
      label: "Trademark",
      items: [
        { name: "Trademark Registration", href: "/trademark-registration" },
        { name: "Trademark Objection", href: "/trademark-objection-in-india" },
        { name: "Trademark Renewal", href: "/trademark-renewal" },
        { name: "Trademark Opposition", href: "/trademark-opposition" },
        { name: "Design Registration", href: "/design-registration" },
        { name: "Copyright Registration", href: "/copyright-registration" },
        { name: "Patent Registration", href: "/patent-registration" },
        { name: "International Trademark", href: "/international-trademark-registration" },
      ],
    },
    {
      id: "gst",
      label: "GST",
      items: [
        { name: "GST Registration", href: "/gst-registration" },
        { name: "GST Return Filing", href: "/gst-return-filing" },
        { name: "GST Annual Return", href: "/gst-annual-return" },
        { name: "GST Cancellation", href: "/gst-cancellation" },
        { name: "GST Modification", href: "/gst-modification" },
        { name: "GST LUT Filing", href: "/gst-lut-filing" },
        { name: "GST Refund", href: "/gst-refund" },
        { name: "GST Advisory", href: "/gst-advisory-services" },
      ],
    },
    {
      id: "income-tax",
      label: "Income Tax",
      items: [
        { name: "Income Tax Return Filing", href: "/income-tax-return-filing" },
        { name: "TDS Return Filing", href: "/tds-return-filing-online" },
        { name: "Tax Planning", href: "/tax-planning" },
        { name: "Tax Audit", href: "/tax_audit_services" },
        { name: "Form 16", href: "/form-16" },
        { name: "Capital Gains", href: "/capital-gains" },
      ],
    },
    {
      id: "mca",
      label: "MCA",
      items: [
        { name: "Company Compliance", href: "/compliances-private-limited-company" },
        { name: "LLP Compliance", href: "/llp-compliance" },
        { name: "Director Change", href: "/change-in-directors" },
        { name: "Name Change", href: "/company-naming-guidelines" },
        { name: "Registered Office Change", href: "/change-registered-office" },
        { name: "Share Transfer", href: "/share-transfer" },
        { name: "Winding Up", href: "/winding-up-private-limited-company" },
        { name: "Strike Off", href: "/change-in-struck-off-companies" },
      ],
    },
    {
      id: "compliance",
      label: "Compliance",
      items: [
        { name: "Annual Compliance", href: "/compliances-private-limited-company" },
        { name: "NBFC Compliance", href: "/nbfc-compliance" },
        { name: "MCA Compliance", href: "/mca-compliance" },
        { name: "MGT-7 Filing", href: "/mgt-7-compliance" },
        { name: "AOC-4 Filing", href: "/form-aoc-4" },
        { name: "SPICe+ Form", href: "/spice-plus-compliance" },
        { name: "Event Based Compliance", href: "/event-based-compliances" },
        { name: "Secretarial Audit", href: "/secretarial_audit" },
      ],
    },
    {
      id: "personal",
      label: "Personal",
      items: [
        { name: "Will Drafting", href: "/will-drafting" },
        { name: "Marriage Registration", href: "/marriage-registration" },
        { name: "Divorce Notice", href: "/divorce-notice" },
        { name: "Legal Heir Certificate", href: "/legal-heir-certificate" },
        { name: "Power of Attorney", href: "/power-of-attorney" },
        { name: "Property Registration", href: "/property-registration" },
        { name: "Rental Agreement", href: "/residential-rental-agreement" },
        { name: "Gift Deed", href: "/gift-deed" },
      ],
    },
    {
      id: "global",
      label: "Global",
      items: [
        { name: "USA Company", href: "/usa-company-registration" },
        { name: "Singapore Company", href: "/singapore-company-registration" },
        { name: "Dubai Company", href: "/dubai-company-registration" },
        { name: "UK Company", href: "/uk-company-registration" },
        { name: "Hong Kong Company", href: "/hong-kong-company-registration" },
        { name: "Mauritius Company", href: "/mauritius-company-registration" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="mailto:ashtronx.ceo@gmail.com" className="flex items-center hover:text-primary-100 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              ashtronx.ceo@gmail.com
            </a>
            <a href="tel:+919911144807" className="flex items-center hover:text-primary-100 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91-9911144807
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-primary-100">📍 Patna, Bihar</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Ashtronx
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((menu) => (
                <div
                  key={menu.id}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(menu.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50">
                    <span>{menu.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === menu.id && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-neutral-100 py-2 z-50">
                      {menu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/about"
                className="px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50"
              >
                Guides
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Search services"
                title="Search"
              >
                <Search className="w-5 h-5 text-neutral-600" />
              </button>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors px-4 py-2"
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-all"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-6 py-4">
              {menuItems.map((menu) => (
                <div key={menu.id} className="mb-4">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === menu.id ? null : menu.id
                      )
                    }
                    className="flex items-center justify-between w-full py-2 text-neutral-800 font-semibold"
                  >
                    <span>{menu.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === menu.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === menu.id && (
                    <div className="pl-4 mt-2 space-y-2">
                      {menu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block py-2 text-sm text-neutral-600 hover:text-primary-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default ImprovedHeader;
