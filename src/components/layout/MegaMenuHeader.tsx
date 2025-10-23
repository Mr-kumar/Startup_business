"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MegaMenuHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Organized service categories with subcategories
  const serviceCategories = [
    {
      id: "startup",
      label: "Startup & Registration",
      icon: "🚀",
      subcategories: [
        {
          title: "Company Formation",
          services: [
            { name: "Private Limited Company", href: "/private-limited-company-registration" },
            { name: "LLP Registration", href: "/LLPRegistrationPage" },
            { name: "One Person Company (OPC)", href: "/opc-registration" },
            { name: "Partnership Firm", href: "/partnership-firm-registration" },
            { name: "Sole Proprietorship", href: "/sole-proprietorship-registration" },
            { name: "Section 8 Company (NGO)", href: "/section8-company-registration" },
            { name: "Nidhi Company", href: "/nidhi-company-registration" },
            { name: "Producer Company", href: "/producer-company-registration" },
          ]
        },
        {
          title: "Business Licenses",
          services: [
            { name: "GST Registration", href: "/gst-registration" },
            { name: "FSSAI License", href: "/fssai-license-registration" },
            { name: "MSME Registration", href: "/msme-registration-india" },
            { name: "IEC Code", href: "/iec-code-registration" },
            { name: "Shop & Establishment", href: "/shop-and-establishment-license" },
            { name: "Professional Tax", href: "/professional-tax-registration" },
          ]
        },
        {
          title: "Specialized Registrations",
          services: [
            { name: "ISO Certification", href: "/iso-registration" },
            { name: "NBFC Registration", href: "/nbfc-registration" },
            { name: "PSARA License", href: "/psara-license" },
            { name: "Drug License", href: "/drug-license" },
          ]
        }
      ]
    },
    {
      id: "compliance",
      label: "Compliance & Filing",
      icon: "📊",
      subcategories: [
        {
          title: "GST Services",
          services: [
            { name: "GST Return Filing", href: "/gst-return-filing" },
            { name: "GST Annual Return", href: "/gst-annual-return" },
            { name: "GST Cancellation", href: "/gst-cancellation" },
            { name: "GST Modification", href: "/gst-modification" },
            { name: "GST LUT Filing", href: "/gst-lut-filing" },
            { name: "GST Refund", href: "/gst-refund" },
          ]
        },
        {
          title: "Income Tax",
          services: [
            { name: "Income Tax Return Filing", href: "/income-tax-return-filing" },
            { name: "TDS Return Filing", href: "/tds-return-filing-online" },
            { name: "Tax Planning", href: "/tax-planning" },
            { name: "Tax Audit", href: "/tax_audit_services" },
          ]
        },
        {
          title: "MCA Compliance",
          services: [
            { name: "Annual Compliance", href: "/compliances-private-limited-company" },
            { name: "MCA Compliance", href: "/mca-compliance" },
            { name: "MGT-7 Filing", href: "/mgt-7-compliance" },
            { name: "AOC-4 Filing", href: "/form-aoc-4" },
            { name: "SPICe+ Form", href: "/spice-plus-compliance" },
          ]
        }
      ]
    },
    {
      id: "intellectual",
      label: "Intellectual Property",
      icon: "™️",
      subcategories: [
        {
          title: "Trademark Services",
          services: [
            { name: "Trademark Registration", href: "/trademark-registration" },
            { name: "Trademark Objection", href: "/trademark-objection-in-india" },
            { name: "Trademark Renewal", href: "/trademark-renewal" },
            { name: "Trademark Opposition", href: "/trademark-opposition" },
            { name: "International Trademark", href: "/international-trademark-registration" },
          ]
        },
        {
          title: "IP Protection",
          services: [
            { name: "Copyright Registration", href: "/copyright-registration" },
            { name: "Patent Registration", href: "/patent-registration" },
            { name: "Design Registration", href: "/design-registration" },
          ]
        }
      ]
    },
    {
      id: "changes",
      label: "Changes & Amendments",
      icon: "🔄",
      subcategories: [
        {
          title: "Company Changes",
          services: [
            { name: "Director Change", href: "/change-in-directors" },
            { name: "Name Change", href: "/company-naming-guidelines" },
            { name: "Registered Office Change", href: "/change-registered-office" },
            { name: "Share Transfer", href: "/share-transfer" },
            { name: "Authorized Capital Increase", href: "/increase-authorized-capital" },
          ]
        },
        {
          title: "Closure Services",
          services: [
            { name: "Company Winding Up", href: "/winding-up-private-limited-company" },
            { name: "Strike Off", href: "/change-in-struck-off-companies" },
            { name: "LLP Closure", href: "/llp-closure" },
          ]
        }
      ]
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white py-2.5 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:ashtronx.ceo@gmail.com" 
              className="flex items-center hover:text-white/80 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              ashtronx.ceo@gmail.com
            </a>
            <a 
              href="tel:+919911144807" 
              className="flex items-center hover:text-white/80 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91-9911144807
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 5000+ Businesses</span>
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
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Ashtronx
                </h1>
                <p className="text-xs text-muted-foreground">Business Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(category.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span className="text-lg mr-1">{category.icon}</span>
                    <span className="font-medium">{category.label}</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>

                  {/* Mega Menu Dropdown */}
                  {activeMenu === category.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-border p-6 min-w-[700px] z-50"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {category.subcategories.map((subcategory, idx) => (
                          <div key={idx}>
                            <h3 className="font-bold text-sm text-foreground mb-3 flex items-center">
                              {subcategory.title}
                              <Badge variant="secondary" className="ml-2 text-xs">
                                {subcategory.services.length}
                              </Badge>
                            </h3>
                            <div className="space-y-1">
                              {subcategory.services.map((service, serviceIdx) => (
                                <Link
                                  key={serviceIdx}
                                  href={service.href}
                                  className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Can't find what you're looking for?
                        </p>
                        <Button variant="link" asChild className="text-primary">
                          <Link href="/services" className="flex items-center">
                            View All 406 Services
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  )}
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
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 hover:opacity-90 transition-opacity shadow-lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                <ScrollArea className="h-[calc(100vh-8rem)] mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                        Ashtronx
                      </h2>
                      <p className="text-xs text-muted-foreground">Business Solutions</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {serviceCategories.map((category) => (
                      <AccordionItem key={category.id} value={category.id}>
                        <AccordionTrigger className="text-sm font-semibold">
                          <span className="flex items-center">
                            <span className="text-lg mr-2">{category.icon}</span>
                            {category.label}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pl-4">
                            {category.subcategories.map((subcategory, idx) => (
                              <div key={idx}>
                                <h4 className="font-semibold text-xs text-foreground mb-2">
                                  {subcategory.title}
                                </h4>
                                <div className="space-y-1">
                                  {subcategory.services.map((service, serviceIdx) => (
                                    <Link
                                      key={serviceIdx}
                                      href={service.href}
                                      className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/about">About Us</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/contact">Contact</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/services">
                        All Services
                        <Badge variant="secondary" className="ml-2">406</Badge>
                      </Link>
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 mt-4" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default MegaMenuHeader;
