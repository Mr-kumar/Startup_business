"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, Phone, Mail, Sparkles } from "lucide-react";
import { menuItems } from "@/content/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
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
  const [pinnedMenu, setPinnedMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [dropdownTop, setDropdownTop] = useState<number>(72);

  // Handle scroll event to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // measure header bottom to position dropdown
  useEffect(() => {
    const measure = () => {
      const el = headerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // rect.top is relative to viewport; add current scrollY to get page coord
      setDropdownTop(rect.bottom);
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setPinnedMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // helper: split an array of links into N nearly equal columns
  function splitIntoColumns<T>(arr: T[], columns: number): T[][] {
    const perCol = Math.ceil(arr.length / columns) || 1;
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += perCol) {
      chunks.push(arr.slice(i, i + perCol));
    }
    // ensure exact number of columns for grid consistency
    while (chunks.length < columns) chunks.push([]);
    return chunks.slice(0, columns);
  }

  // Smooth hover handling: use a small delay before closing to avoid blinking
  const closeTimer = useRef<number | null>(null);
  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = (menuTitle: string | null, delay = 150) => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      if (pinnedMenu !== menuTitle) {
        setActiveMenu(null);
      }
      closeTimer.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  useEffect(() => {
    // set CSS variable on header element instead of inline JSX styles
    if (headerRef.current) {
      headerRef.current.style.setProperty("--dropdown-top", `${dropdownTop}px`);
    }
  }, [dropdownTop]);

  return (
    <header
      ref={headerRef}
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top Bar - Modern gradient */}
      <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white text-sm">
        <div className="flex items-center space-x-6">
          <a
            href="tel:+919911144807"
            className="flex items-center hover:text-white/80 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span>+91-9911144807</span>
          </a>
          <a
            href="mailto:ashtronx.ceo@gmail.com"
            className="flex items-center hover:text-white/80 transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            <span>ashtronx.ceo@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles className="h-4 w-4" />
          <span>Trusted by 5000+ Businesses</span>
        </div>
      </div>

      {/* Main Navigation - Ultra Compact */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo - Compact */}
        <Link
          href="/"
          className="flex items-center space-x-2 group"
          onClick={() => {
            setActiveMenu(null);
            setPinnedMenu(null);
            setMobileMenuOpen(false);
          }}
        >
          <div className="relative">
            <div className="w-7 h-7 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-md">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Ashtronx
            </h1>
            <p className="text-xs text-gray-500 -mt-1 hidden sm:block">
              Business Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-0">
          {menuItems.map((item, index) => {
            const hasLinks = (item.subItems ?? []).some(
              (si) => (si.links?.length || 0) > 0
            );
            if (item.href && !hasLinks) {
              return (
                <div key={item.title || `menu-item-${index}`}>
                  <Link
                    href={item.href}
                    className="px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition-all text-sm"
                    onClick={() => {
                      setActiveMenu(null);
                      setPinnedMenu(null);
                    }}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            }
            return (
              <div
                key={item.title || `menu-item-${index}`}
                className="relative group"
                onMouseEnter={() => {
                  clearCloseTimer();
                  setActiveMenu(item.title);
                }}
                onMouseLeave={() => scheduleClose(item.title, 160)}
              >
                <button
                  className={`flex items-center px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition-all text-sm ${
                    activeMenu === item.title || pinnedMenu === item.title
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (pinnedMenu === item.title) {
                      setPinnedMenu(null);
                      setActiveMenu(null);
                    } else {
                      setPinnedMenu(item.title);
                      setActiveMenu(item.title);
                    }
                  }}
                  role="button"
                  aria-label={`${item.title} menu`}
                >
                  <span className="mr-1">{item.title}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      activeMenu === item.title || pinnedMenu === item.title
                        ? "transform rotate-180 text-blue-600"
                        : ""
                    }`}
                  />
                </button>

                {/* Mega Menu */}
                {(activeMenu === item.title || pinnedMenu === item.title) &&
                  hasLinks && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => {
                          setActiveMenu(null);
                          setPinnedMenu(null);
                        }}
                      />
                      <div
                        className="fixed left-1/2 -translate-x-1/2 mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 p-4 transition-all duration-200 opacity-100 w-[900px] max-w-[90vw] dropdown-position"
                        onMouseEnter={() => clearCloseTimer()}
                        onMouseLeave={() => scheduleClose(item.title, 160)}
                      >
                        {(() => {
                          const allLinks = (item.subItems ?? []).flatMap(
                            (s) => s.links
                          );
                          const columns = splitIntoColumns(allLinks, 4);
                          return (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              {columns.map((col, cIdx) => (
                                <ul key={`col-${cIdx}`} className="space-y-1">
                                  {col.map((link, lIdx) => (
                                    <li key={`link-${cIdx}-${lIdx}`}>
                                      <Link
                                        href={link.href}
                                        className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all"
                                        onClick={() => {
                                          setActiveMenu(null);
                                          setPinnedMenu(null);
                                        }}
                                      >
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                    </>
                  )}
              </div>
            );
          })}

          <div className="ml-2 pl-2 border-l border-gray-200">
            <Link
              href="/contact"
              className="px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition-all text-sm"
              onClick={() => {
                setActiveMenu(null);
                setPinnedMenu(null);
              }}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Search and CTA (Desktop) - Compact */}
        <div className="hidden lg:flex items-center space-x-2">
          <button
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 hover:opacity-90 text-white px-3 py-2 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all">
            <Sparkles className="h-4 w-4 mr-1" />
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Using Sheet component for better UX */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <button
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 lg:hidden transition-all"
            aria-label="Open mobile menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[90vw] max-w-[320px] p-0">
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>
              Browse our business services and navigate to different sections of the website.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] py-2 overflow-y-auto mobile-menu-scroll">
            <div className="px-3 py-3 space-y-3 mobile-menu-safe-area">
              <div className="flex items-center justify-between mb-3">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveMenu(null);
                    setPinnedMenu(null);
                  }}
                >
                  <div className="relative">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                      Ashtronx
                    </h2>
                    <p className="text-xs text-gray-500 -mt-1">
                      Business Solutions
                    </p>
                  </div>
                </Link>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-1">
                {menuItems.map((item) => (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger className="py-2 px-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-1">
                      <div className="pl-2 space-y-1 py-1">
                        {(item.subItems ?? []).map((subItem) => (
                          <div key={subItem.title} className="space-y-1">
                            <span className="block text-sm font-semibold text-gray-900 py-1">
                              {subItem.title}
                            </span>
                            <div className="pl-1 space-y-1 mt-1">
                              {subItem.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="block text-sm text-gray-600 hover:text-blue-600 py-1 px-2 rounded-lg hover:bg-gray-50 transition-all"
                                  onClick={() => {
                                    // Close mobile sheet and any pinned desktop menus on navigation
                                    setMobileMenuOpen(false);
                                    setActiveMenu(null);
                                    setPinnedMenu(null);
                                  }}
                                >
                                  {link.name}
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

              <div className="space-y-1 pt-2">
                <Link
                  href="/pricing"
                  className="block py-2 px-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    // Also close desktop dropdown if not pinned
                    if (pinnedMenu) {
                      setActiveMenu(null);
                      setPinnedMenu(null);
                    }
                  }}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 px-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    // Also close desktop dropdown if not pinned
                    if (pinnedMenu) {
                      setActiveMenu(null);
                      setPinnedMenu(null);
                    }
                  }}
                >
                  Contact
                </Link>
              </div>

              <div className="pt-2 border-t border-gray-200 mt-2 space-y-1">
                <Link
                  href="/login"
                  className="block py-2 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 px-2 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white text-center rounded-lg hover:opacity-90 transition-all font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MegaMenuHeader;
