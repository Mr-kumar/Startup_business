"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Phone, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ColorfulHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        { name: "Private Limited Company", href: "/private-limited-company-registration", desc: "Most popular business structure" },
        { name: "LLP Registration", href: "/LLPRegistrationPage", desc: "Limited liability partnership" },
        { name: "One Person Company", href: "/opc-registration", desc: "Solo entrepreneur solution" },
        { name: "Partnership Firm", href: "/partnership-firm-registration", desc: "Traditional partnership" },
        { name: "Sole Proprietorship", href: "/sole-proprietorship-registration", desc: "Simplest business form" },
        { name: "Section 8 Company", href: "/section8-company-registration", desc: "Non-profit organization" },
      ],
    },
    {
      id: "registrations",
      label: "Registrations",
      items: [
        { name: "GST Registration", href: "/gst-registration", desc: "Goods & Services Tax" },
        { name: "FSSAI License", href: "/fssai-license-registration", desc: "Food business license" },
        { name: "MSME Registration", href: "/msme-registration-india", desc: "Small business benefits" },
        { name: "IEC Code", href: "/iec-code-registration", desc: "Import-export code" },
        { name: "ISO Certification", href: "/iso-registration", desc: "Quality certification" },
        { name: "Trademark Registration", href: "/trademark-registration", desc: "Brand protection" },
      ],
    },
    {
      id: "compliance",
      label: "Compliance",
      items: [
        { name: "GST Return Filing", href: "/gst-return-filing", desc: "Monthly GST returns" },
        { name: "Income Tax Filing", href: "/income-tax-return-filing", desc: "ITR filing services" },
        { name: "MCA Compliance", href: "/mca-compliance", desc: "Company compliance" },
        { name: "Annual Compliance", href: "/compliances-private-limited-company", desc: "Yearly filings" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar - Colorful Gradient */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-2.5 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:ashtronx.ceo@gmail.com" 
              className="flex items-center hover:text-primary-foreground transition-colors group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              ashtronx.ceo@gmail.com
            </a>
            <a 
              href="tel:+919911144807" 
              className="flex items-center hover:text-primary-foreground transition-colors group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              +91-9911144807
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Sparkles className="w-4 h-4 mr-1" />
              Trusted by 5000+ Businesses
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-border"
            : "bg-white border-b border-border"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Ashtronx
                </h1>
                <p className="text-xs text-muted-foreground">Business Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {menuItems.map((menu) => (
                <div key={menu.id} className="relative group">
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span>{menu.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-2xl border border-border py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {menu.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-accent/10 transition-colors group/item"
                      >
                        <div className="font-medium text-sm text-foreground group-hover/item:text-primary transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Button variant="ghost" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Login</Link>
              </Button>
              <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
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
              className="lg:hidden border-t border-border bg-card max-h-[80vh] overflow-y-auto"
            >
              <div className="container mx-auto px-6 py-4 space-y-2">
                {menuItems.map((menu) => (
                  <div key={menu.id}>
                    <div className="font-semibold text-sm text-foreground mb-2">{menu.label}</div>
                    <div className="pl-4 space-y-1">
                      {menu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4 bg-gradient-to-r from-primary via-secondary to-accent" asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default ColorfulHeader;
