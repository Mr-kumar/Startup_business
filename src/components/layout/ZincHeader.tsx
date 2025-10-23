"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ZincHeader = () => {
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
      ],
    },
    {
      id: "trademark",
      label: "Trademark",
      items: [
        { name: "Trademark Registration", href: "/trademark-registration" },
        { name: "Copyright Registration", href: "/copyright-registration" },
        { name: "Patent Registration", href: "/patent-registration" },
        { name: "Design Registration", href: "/design-registration" },
      ],
    },
    {
      id: "compliance",
      label: "Compliance",
      items: [
        { name: "GST Return Filing", href: "/gst-return-filing" },
        { name: "Income Tax Filing", href: "/income-tax-return-filing" },
        { name: "MCA Compliance", href: "/mca-compliance" },
        { name: "Annual Compliance", href: "/compliances-private-limited-company" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar - Zinc Theme */}
      <div className="bg-neutral-900 text-neutral-100 py-2.5 hidden md:block border-b border-neutral-800">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:ashtronx.ceo@gmail.com" 
              className="flex items-center hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 mr-2 text-neutral-400 group-hover:text-white transition-colors" />
              ashtronx.ceo@gmail.com
            </a>
            <a 
              href="tel:+919911144807" 
              className="flex items-center hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 mr-2 text-neutral-400 group-hover:text-white transition-colors" />
              +91-9911144807
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-neutral-400">📍 Patna, Bihar</span>
          </div>
        </div>
      </div>

      {/* Main Header - Zinc Theme */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-200"
            : "bg-white border-b border-neutral-100"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-sm">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-900">
                  Ashtronx
                </h1>
                <p className="text-xs text-neutral-500">Business Solutions</p>
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
                  <button className="flex items-center space-x-1 px-4 py-2 text-neutral-700 hover:text-neutral-900 font-medium transition-colors rounded-lg hover:bg-neutral-50">
                    <span>{menu.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === menu.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 z-50"
                      >
                        {menu.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/about"
                className="px-4 py-2 text-neutral-700 hover:text-neutral-900 font-medium transition-colors rounded-lg hover:bg-neutral-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-neutral-700 hover:text-neutral-900 font-medium transition-colors rounded-lg hover:bg-neutral-50"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button 
                className="p-2.5 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Search services"
                title="Search"
              >
                <Search className="w-5 h-5 text-neutral-600" />
              </button>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-neutral-900 font-semibold transition-colors px-4 py-2"
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="bg-neutral-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-neutral-800 transition-all shadow-sm"
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-neutral-200 bg-white max-h-[80vh] overflow-y-auto"
            >
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
                            className="block py-2 text-sm text-neutral-600 hover:text-neutral-900"
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
                  className="block w-full bg-neutral-900 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default ZincHeader;
