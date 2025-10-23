"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, Phone, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ProfessionalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {menuItems.map((menu) => (
                  <NavigationMenuItem key={menu.id}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      {menu.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-2">
                          {menu.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-accent transition-colors group"
                            >
                              <div className="font-medium text-sm group-hover:text-primary transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 mb-4">
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

                  {menuItems.map((menu) => (
                    <div key={menu.id} className="space-y-2">
                      <h3 className="font-semibold text-sm text-foreground">{menu.label}</h3>
                      <div className="pl-4 space-y-1">
                        {menu.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/about">About</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Contact</Link>
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default ProfessionalHeader;
