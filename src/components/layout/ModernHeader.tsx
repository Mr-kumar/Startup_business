"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Phone, Mail } from "lucide-react";

const ModernHeader = () => {
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

  const mainServices = [
    {
      title: "Business Registration",
      icon: "🏢",
      links: [
        { name: "Private Limited Company", href: "/private-limited-company-registration" },
        { name: "LLP Registration", href: "/LLPRegistrationPage" },
        { name: "One Person Company", href: "/opc-registration" },
        { name: "Partnership Firm", href: "/partnership-firm-registration" },
        { name: "Sole Proprietorship", href: "/sole-proprietorship-registration" },
      ],
    },
    {
      title: "Compliance & Tax",
      icon: "📊",
      links: [
        { name: "GST Registration", href: "/gst-registration" },
        { name: "GST Return Filing", href: "/gst-return-filing" },
        { name: "Income Tax Filing", href: "/income-tax-return-filing" },
        { name: "TDS Return Filing", href: "/tds-return-filing-online" },
        { name: "MCA Compliance", href: "/mca-compliance" },
      ],
    },
    {
      title: "Intellectual Property",
      icon: "™️",
      links: [
        { name: "Trademark Registration", href: "/trademark-registration" },
        { name: "Copyright Registration", href: "/copyright-registration" },
        { name: "Patent Registration", href: "/patent-registration" },
        { name: "Design Registration", href: "/design-registration" },
      ],
    },
    {
      title: "Licenses & Certifications",
      icon: "📜",
      links: [
        { name: "FSSAI License", href: "/fssai-license-registration" },
        { name: "MSME Registration", href: "/msme-registration-india" },
        { name: "IEC Code", href: "/iec-code-registration" },
        { name: "ISO Certification", href: "/iso-registration" },
        { name: "PSARA License", href: "/psara-license" },
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
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Ashtronx
                </h1>
                <p className="text-xs text-neutral-500">Business Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              >
                Home
              </Link>

              {/* Services Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu Dropdown */}
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-100">
                      <div className="grid grid-cols-4 gap-6">
                        {mainServices.map((category, idx) => (
                          <div key={idx} className="space-y-3">
                            <div className="flex items-center space-x-2 mb-4">
                              <span className="text-2xl">{category.icon}</span>
                              <h3 className="font-bold text-neutral-800">
                                {category.title}
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {category.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link
                                    href={link.href}
                                    className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 transform transition-all inline-block"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
                        <Link
                          href="/services"
                          className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                        >
                          View All 400+ Services
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
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
                className="bg-gradient-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Get Started
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
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="container mx-auto px-6 py-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block w-full bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
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

export default ModernHeader;
