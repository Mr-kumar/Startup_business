"use client";

import React, { useState, useRef, useEffect } from "react";
import NewL from "../../public/NewL.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMainItem, setOpenMainItem] = useState<string | null>(null);
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setOpenMainItem(null);
      setOpenSubItem(null);
    }
  };

  const toggleMainItem = (item: string) => {
    setOpenMainItem(openMainItem === item ? null : item);
    setOpenSubItem(null);
  };

  const toggleSubItem = (item: string) => {
    setOpenSubItem(openSubItem === item ? null : item);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setOpenMainItem(null);
        setOpenSubItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // setScrolled(window.scrollY > 10); // This line was removed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Menu items data structure
  const menuItems = [
    {
      title: "Startup",
      subItems: [
        {
          title: "FSSAI & Eating License",
          links: [
            {
              name: "FSSAI License",
              href: "/startup/fssai-license-registration",
            },
            {
              name: "FSSAI License Renewal",
              href: "/fssai-license-renewal",
            },

            { name: "FSSAI State License", href: "/fssai-state-license" },
            { name: "Eating House License", href: "/eating-house-license" },
            { name: "Central FSSAI License", href: "/fssai-central-license" },
            {
              name: "FSSAI Annual Return",
              href: "/startup/fssai-annual-return",
            },
            {
              name: "FSSAI Product Approval",
              href: "/fssai-product-approval",
            },
            { name: "Food Recycling License", href: "/food-recycling-license" },
            { name: "FPO Mark Certification", href: "/fpo-certification" },
          ],
        },
        //main section of errors-himanshu
        {
          title: "Business Registration",
          links: [
            {
              name: "Company Registration",
              href: "/private-limited-company-registration",
            },
            { name: "LLP Registration", href: "/LLPRegistrationPage" },
            {
              name: "Public Limited Company Registration",
              href: "/PublicLimitedCompanyPage",
            },
            {
              name: "One Person Company Registration",
              href: "/startup/opc-registration",
            },
            {
              name: "Partnership Firm Registration",
              href: "/startup/partnership-firm-registration",
            },
            {
              name: "Sole Proprietorship Registration",
              href: "/startup/sole-proprietorship-registration",
            },
            {
              name: "Nidhi Company Registration",
              href: "/nidhi-company-registration",
            },
            {
              name: "Producer Company Registration",
              href: "/producer-company-registration",
            },
            {
              name: "Sole Proprietorship to Pvt. Ltd. Company",
              href: "/conversion-of-sole-proprietorship",
            },
            {
              name: "Indian Subsidiary Company Registration",
              href: "/indian-subsidiary-company-registration",
            },
            {
              name: "Conversion of LLP to Private Company",
              href: "/llp-to-private-company-conversion",
            },
            {
              name: "Partnership Firm into Pvt. Ltd. Company",
              href: "/convert-partnership-to-privateLtd",
            },
            {
              name: "Carbon Black Manufacturing",
              href: "/carbon-black-manufacturing-business",
            },
            {
              name: "Green Hydrogen Plant",
              href: "/green-hydrogen-plant-setup",
            },
            { name: "Green Ammonia Plant", href: "/green-ammonia" },
            {
              name: "Synthetic Rubber Business",
              href: "/synthetic-rubber-manufacturing-business-complete-guide",
            },
            {
              name: "Paper and Paperboard Packaging Industry",
              href: "/paper-paperboard-packaging-industry-setup-guide",
            },
            {
              name: "Fermentation Industry",
              href: "/fermentation-industry-setup",
            },
            {
              name: "Renewable Energy Business",
              href: "/start-your-renewable-energy-business-india",
            },
            {
              name: "Conversion of Pvt. Ltd. to Public Limited",
              href: "/conversion-of-private-limited-to-public-limited",
            },
          ],
        },
        {
          title: "Secretarial Compliances",
          links: [
            {
              name: "Winding Up of Private Limited Company",
              href: "/winding-up-private-limited-company",
            },
            {
              name: "Closing a Limited Liability Partnership",
              href: "/closing-llp",
            },
            {
              name: "Annual Compliance of a Pvt. Ltd. Company",
              href: "/compliances-private-limited-company",
            },
            {
              name: "Event Based Compliances in a Company",
              href: "/event-based-compliances",
            },
            {
              name: "Change in Object Clause",
              href: "/moa-memorandum-of-association",
            },
            {
              name: "Appointment and Resignation of Directors",
              href: "/director-appointment-resignation",
            },
            {
              name: "Change in Name Clause",
              href: "/company-naming-guidelines",
            },
            { name: "Removal of Director", href: "/director-removal-process" },
            {
              name: "Nidhi Company Compliance",
              href: "/nidhi-company-compliance",
            },
            {
              name: "Section 8 Company Compliance",
              href: "/section8-company-compliance",
            },
            { name: "NBFC Compliance", href: "/startup/nbfc-compliance" },
            {
              name: "Change in Registered Office",
              href: "/startup/change-registered-office",
            },
            {
              name: "Change in Share Capital",
              href: "/change-in-share-capital",
            },
            {
              name: "Revival of Struck Off Companies",
              href: "/change-in-struck-off-companies",
            },
            { name: "MCA Compliance", href: "/startup/mca-compliance" },
            { name: "Change in Directors", href: "/change-in-directors" },
            {
              name: "Change in LLP Agreement",
              href: "/change-in-llp-agreement",
            },
            {
              name: "Liquidation of Company",
              href: "/liquidation-of-a-company",
            },
            { name: "AGR-Return Filing", href: "/agr-return-filing" },
            { name: "Form AOC-4", href: "/form-aoc-4" },
            { name: "Form MGT-7", href: "/startup/mgt-7-compliance" },
            {
              name: "SPICe+ Form",
              href: "/startup/spice-plus-compliance",
            },
            {
              name: "AGILE PRO S ",
              href: "/startup/agile-pro-s-compliance",
            },
          ],
        },
        {
          title: "IT Services",
          links: [{ name: "Web services", href: "/web-development-services" }],
        },
        {
          title: "Global Company Formation",
          description:
            "Company Incorporation Services Across International Jurisdictions",
          links: [
            {
              name: "Company Registration in USA",
              href: "/startup/usa-company-registration",
            },
            {
              name: "Company Registration in Mauritius",
              href: "/startup/mauritius-company-registration",
            },
            {
              name: "Company Registration in Dubai",
              href: "/startup/dubai-company-registration",
            },
            {
              name: "Company Registration in Sri Lanka",
              href: "/startup/sri-lanka-company-registration",
            },
            {
              name: "Company Registration in France",
              href: "/startup/france-company-registration",
            },
            {
              name: "Company Registration in Singapore",
              href: "/startup/singapore-company-registration",
            },
            {
              name: "Company Registration in Hong Kong",
              href: "/startup/hong-kong-company-registration",
            },
          ],
        },
        {
          title: "Government Licenses",
          links: [
            {
              name: "Shop & Establishment License",
              href: "/shop-and-establishment-license",
            },
            {
              name: "CE Certification",
              href: "/startup/ce-certification-compliance",
            },
            { name: "PSARA License", href: "/startup/psara-license" },
            { name: "Trade License", href: "/trade-license" },
            { name: "Music License", href: "/music-license" },
            { name: "Health Trade License", href: "/health-trade-license" },
            { name: "Factory License", href: "/factory-license" },
            { name: "FDA Certification", href: "/fda-certification" },
            { name: "GMP Certification", href: "/gmpCertification" },
            { name: "Liquor License", href: "/liquor-license" },
            { name: "AYUSH License", href: "/ayush-license" },
            {
              name: "WPC Certification",
              href: "/startup/wpc-certification-compliance",
            },
            {
              name: "PESO Certification",
              href: "/startup/peso-certification-compliance",
            },
            { name: "CAPEXIL Certificate", href: "/capexil-registration" },
            {
              name: "TEC Certification",
              href: "/startup/tec-certification-compliance",
            },
            { name: "NASSCOM Membership", href: "/nasscom-membership" },
            { name: "MSO License", href: "/mso-license" },
            { name: "DOT OSP Compliance", href: "/dot-osp-compliance" },
            { name: "IP-1 License in India", href: "/ip-1-license" },
            { name: "HITS Operator", href: "/hits-operator" },
            {
              name: "FIFP Approval for Telecom",
              href: "/fifp-approval-telecom",
            },
            {
              name: "Halal Certification",
              href: "/halal-certification",
            },
            {
              name: "Homologation Certificate in India",
              href: "/homologation-certificate",
            },
            {
              name: "Vehicle Type Approval Certificate in India",
              href: "/vehicle-type-approval-certificate",
            },
            {
              name: "IMEI Number Registration",
              href: "/imei-registration",
            },
            {
              name: "IMEI Certificate for Import of Mobile Handsets",
              href: "/imei-certificate-import-mobile-handsets",
            },
            {
              name: "IMEI Certificate Generation",
              href: "/imei-certificate-generation",
            },
          ],
        },
        {
          title: "Government Registration",
          links: [
            {
              name: "MSME Registration",
              href: "/startup/msme-registration-india",
            },
            {
              name: "IEC Registration",
              href: "/startup/iec-code-registration",
            },
            { name: "EPF Registration", href: "/epf-registration" },
            { name: "RERA Registration", href: "/startup/rera-registration" },
            { name: "NSIC Registration", href: "/startup/nsic-registration" },
            { name: "ESI Registration", href: "/esi-registration" },
            { name: "FIEO Registration", href: "/fieo-registration" },
            { name: "Building NOC", href: "/building-noc" },
            { name: "BOCW Act Registration", href: "/bocw-registration" },
            {
              name: "RERA Registration for Agents",
              href: "/rera-registration-for-agents",
            },
            {
              name: "RERA Registration For Promoters",
              href: "/rera-registration-for-promoters",
            },
            { name: "APEDA Registration", href: "/startup/apeda-registration" },
            { name: "RNI Registration", href: "/startup/rni-registration" },
            {
              name: "Spice Board Registration",
              href: "/spice-board-registration",
            },
            {
              name: "Guest House Registration",
              href: "/guest-house-registration",
            },
            { name: "Barcode Registration", href: "/barcode-registration" },
            {
              name: "World Manufacturer Identifier (WMI) Code",
              href: "/world-manufacturer-identifier-wmi-code",
            },
            {
              name: "Telemarketing Registration in India",
              href: "/telemarketing-registration-india",
            },
            {
              name: "Trusted Telecom Approval",
              href: "/trusted-telecom-approval",
            },
            {
              name: "Get Uplinking or Downlinking Channels Permission in India",
              href: "/uplinking-downlinking-permission",
            },
            {
              name: "Flipkart Seller Registration",
              href: "/flipkart-seller-registration",
            },
            {
              name: "Sanitary Import Permit",
              href: "/sanitary-import-permit",
            },
          ],
        },
        {
          title: "ISO",
          links: [
            { name: "ISO Registration", href: "/iso-registration" },
            { name: "ISO 14001 EMS", href: "/iso-certification-14001-ems" },
            { name: "ISO 22000 FSMS", href: "/iso-22000-certification-fsms" },
            {
              name: "ISO 9001 2015",
              href: "/iso-9001-2015-certification-quality-management-systems",
            },
            {
              name: "ISO 50001 Energy Management",
              href: "/iso-50001-energy-management",
            },
            {
              name: "ISO 45001 certification",
              href: "/startup/iso-45001-certification",
            },
            {
              name: "ISO 20000 Certification",
              href: "/iso-20000-certification",
            },
            {
              name: "ISO 31000 Certification",
              href: "/iso-31000-certification",
            },
            {
              name: "ISO 13485 Certification",
              href: "/iso-13485-certification",
            },
            {
              name: "ISO 21101:2014 Certification",
              href: "/iso-21101-2014-certification",
            },
          ],
        },
        {
          title: "NGO",
          links: [
            { name: "NGO Registration", href: "/ngo-registration-india" },
            { name: "80G and 12A Registration", href: "/12a-80g-registration" },
            {
              name: "Section 8 Company Registration",
              href: "/section8-company-registration",
            },
            {
              name: "Society Registration",
              href: "/society-registration-india",
            },
            { name: "FCRA Registration", href: "/startup/fcra-registration" },
            { name: "12AA Registration", href: "/startup/12aa-registration" },
            { name: "Trust Registration", href: "/startup/trust-registration" },
            { name: "12AB Registration", href: "/12ab-registration-india" },
            {
              name: "Trust Annual Compliance",
              href: "/startup/trust-annual-compliance",
            },
          ],
        },
        {
          title: "Accounting & Book Keeping Services",
          links: [
            { name: "Secretarial Audit", href: "/secretarial_audit" },
            { name: "Due Diligence", href: "/" },
            { name: "Business Plan", href: "/business_plan" },
            { name: "Virtual CFO Services", href: "/virtual_cfo_services" },
            {
              name: "Accounts Payable Service",
              href: "/accounts_payable_services",
            },
            {
              name: "Accounts Receivable Services",
              href: "/accounts_receivable_services",
            },
            { name: "Tax Audit", href: "/tax_audit_services" },
            { name: "Forensic Audit", href: "/forensic_audit_services" },
            { name: "Bookkeeping Services", href: "/bookkeeping_services" },
            { name: "Fundraising Services", href: "/fund_raising_services" },
            { name: "Term sheet", href: "/term_sheet_guide" },
            {
              name: "Manufacturing Audit",
              href: "/manufacturing_audit_services",
            },
            { name: "Technical Audit", href: "/technical_audit_services" },
            {
              name: "Factory Sanitation Audit",
              href: "/factory_sanitation_audit_services",
            },
            { name: "M2M Communications", href: "/m2m_registration_services" },
            { name: "Ethical Audits", href: "/ethical_audit_services" },
            { name: "Insurance Audit", href: "/insurance_audit_services" },
            {
              name: "Fractional CFO Services",
              href: "/fractional_cfo_services",
            },
          ],
        },
      ],
    },
    {
      title: "IPR",
      subItems: [
        {
          title: "Trademark Services",
          description: "Trademark-related Services and Filings",
          links: [
            {
              name: "Trademark Registration",
              href: "/startup/trademark-registration",
            },
            {
              name: "Trademark Objection",
              href: "/trademark-objection-in-india",
            },
            {
              name: "Trademark Assignment",
              href: "/trademark-assignment-in-india",
            },
            {
              name: "Design Registration",
              href: "/startup/design-registration",
            },
            {
              name: "Trademark Rectification",
              href: "/startup/trademark-rectification",
            },
            {
              name: "Intellectual Property Dispute",
              href: "/intellectual-property-dispute",
            },
            {
              name: "International Trademark Registration",
              href: "/startup/international-trademark-registration",
            },
            {
              name: "Trademark Renewal",
              href: "/trademark-renewal",
            },
            {
              name: "Trademark Classes Finder",
              href: "/trademark-class-finder",
            },
            {
              name: "Trademark Hearing",
              href: "/trademark-hearing",
            },
            {
              name: "Trademark Licensing",
              href: "/trademark-licensing",
            },
            {
              name: "Trademark Opposition",
              href: "/trademark-opposition",
            },
            {
              name: "Design Registration Renewal and Restoration",
              href: "/design-registration-renewal-restoration",
            },
            {
              name: "Registration OF Geographical Indication (GI)",
              href: "/startup/gi-registration",
            },
            {
              name: "Wordmark Registration in India",
              href: "/wordmark-registration-india",
            },
            {
              name: "Trademark Hearing",
              href: "/trademark-hearing",
            },
          ],
        },
        {
          title: "Copyright",
          description:
            "Copyright Registrations, Licensing, and Objection Handling",
          links: [
            {
              name: "Copyright Registration",
              href: "/startup/copyright-registration",
            },
            {
              name: "Copyright Disclaimer",
              href: "/startup/copyright-disclaimer",
            },
            {
              name: "Copyright Licensing",
              href: "/startup/copyright-licensing",
            },
            {
              name: "Copyright Objection",
              href: "/startup/copyright-objection",
            },
            {
              name: "Copyright Assignment",
              href: "/startup/copyright-assignment",
            },
          ],
        },
        {
          title: "Patent",
          description: "Patent Filing, Search, and Legal Processes",
          links: [
            {
              name: "Patent Registration",
              href: "/startup/patent-registration",
            },
            {
              name: "Indian Patent Search",
              href: "/startup/indian-patent-search",
            },
            {
              name: "Patent Opposition",
              href: "/overview-of-patent-opposition",
            },
            {
              name: "Patent Revocation",
              href: "/startup/patent-revocation",
            },
          ],
        },
      ],
    },
    {
      title: "Tax",
      subItems: [
        {
          title: "Tax Filing",
          description: "Tax Filing Services",
          links: [
            {
              name: "GST Registration",
              href: "/startup/gst-registration",
            },
            {
              name: "GST Return Filing",
              href: "/startup/gst-return-filing",
            },
            {
              name: "TDS Return Filing",
              href: "/tds-return-filing-online",
            },
            {
              name: "Professional Tax Registration",
              href: "/professional-tax-registration",
            },
            {
              name: "Income Tax Return Filing",
              href: "/income-tax-return-filing",
            },
          ],
        },
        {
          title: "Service Related",
          description: "Service Related Agreements",
          links: [
            {
              name: "Service Level Agreement",
              href: "/service-level-agreement",
            },
            {
              name: "Share Purchase Agreement",
              href: "/share-purchase-agreement",
            },
            {
              name: "Franchise Agreement",
              href: "/franchise-agreement",
            },
            {
              name: "Shareholders Agreement",
              href: "/shareholders-agreement",
            },
          ],
        },
        {
          title: "Property Related",
          description: "Property Related Agreements",
          links: [
            {
              name: "Sale Deed Registration",
              href: "/sale-deed-registration",
            },
            {
              name: "Gift Deed",
              href: "/gift-deed",
            },
            {
              name: "Residential Rental Agreement",
              href: "/residential-rental-agreement",
            },
            {
              name: "Commercial Rental Agreement",
              href: "/commercial-rental-agreement",
            },
            {
              name: "Relinquishment Deed",
              href: "/relinquishment-deed",
            },
          ],
        },
        {
          title: "Legal Services",
          description: "Legal Services and Agreements",
          links: [
            { name: "Legal Notice", href: "/legal-notice" },
            {
              name: "RERA Complaint",
              href: "/rera-complaint-by-dostatup",
            },
            { name: "Cheque Bounce Notice", href: "/cheque-bounce-notice" },
            { name: "Consumer Complaint", href: "/consumer-complaint" },
            {
              name: "Public Interest Litigation",
              href: "/intellectual-property-dispute",
            },
          ],
        },
        {
          title: "Advisory Services",
          description: "Advisory Services by DOStartup",
          links: [
            {
              name: "Professional Advisory Services",
              href: "/startup/gst-registration",
            },
            {
              name: "Legal Advisory Services",
              href: "/legal-advisory-services",
            },
            { name: "GST Advisory Services", href: "/gst-advisory-services" },
            {
              name: "Pharma Consultancy Services in India",
              href: "/pharma-consultancy-services",
            },
          ],
        },
        {
          title: "Business Templates",
          description: "Business Templates",
          links: [
            {
              name: "Premium Business Templates",
              href: "/premium-business-templates",
            },
            {
              name: "Human Resource Templates",
              href: "/human-resource-templates",
            },
          ],
        },
      ],
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-slate-800 border-gray-200 text-white sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ml-14 mr-14">
        {/* Logo and brand link */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => {
            setIsMenuOpen(false);
            setOpenMainItem(null);
            setOpenSubItem(null);
          }}
        >
          <Image
            src={NewL}
            width={80}
            height={80}
            alt="DoStartup Logo"
            className="w-20 md:w-24 h-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-controls="mega-menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div
          id="mega-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-slate-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 px-3 rounded cursor-pointer hover:bg-slate-700 md:hover:bg-transparent md:hover:text-emerald-300 md:p-0"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setOpenMainItem(null);
                      setOpenSubItem(null);
                    }}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMainItem(item.title);
                      }}
                      className="flex items-center cursor-pointer justify-between w-full py-2 px-3 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-emerald-300 md:p-0 md:w-auto"
                    >
                      {item.title}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Desktop Dropdown - First Level */}
                    {openMainItem === item.title && (
                      <div
                        className="fixed inset-0 z-20"
                        onClick={() => {
                          setOpenMainItem(null);
                          setOpenSubItem(null);
                        }}
                      >
                        {/* Menu container */}
                        <div
                          className="fixed inset-x-0 top-16 bg-slate-800 border-b border-gray-700 shadow-lg z-30"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="container mx-auto flex h-[70vh]">
                            {/* First Level - Left Side (Vertical) */}
                            <div className="w-1/4 bg-slate-800 border-r border-gray-700 overflow-y-auto">
                              <ul className="py-4">
                                {item.subItems?.map((subItem, subIndex) => {
                                  const subKey =
                                    item.title + "-" + subItem.title;
                                  return (
                                    <li key={subIndex}>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleSubItem(subKey);
                                        }}
                                        className={`flex justify-between cursor-pointer items-center w-full px-6 py-3 hover:bg-slate-700 hover:text-emerald-300 text-left ${
                                          openSubItem === subKey
                                            ? "bg-slate-700 text-emerald-300"
                                            : ""
                                        }`}
                                      >
                                        {subItem.title}
                                        {subItem.links && (
                                          <svg
                                            className="w-3 h-3 ms-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="m1 1 4 4 4-4"
                                            />
                                          </svg>
                                        )}
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            {/* Second Level - Right Side (Horizontal) */}
                            <div className="w-3/4 bg-slate-800 p-6 overflow-x-auto">
                              {item.subItems?.map((subItem) => {
                                const subKey = item.title + "-" + subItem.title;
                                return (
                                  openSubItem === subKey &&
                                  subItem.links && (
                                    <div
                                      key={subItem.title}
                                      className="flex flex-wrap gap-3"
                                    >
                                      {subItem.links.map((link, linkIndex) => (
                                        <div
                                          key={linkIndex}
                                          className="flex-shrink-0 w-64 hover:bg-slate-900 transition-colors px-2 py-1"
                                        >
                                          <Link
                                            href={link.href}
                                            className="block"
                                            onClick={() => {
                                              setIsMenuOpen(false);
                                              setOpenMainItem(null);
                                              setOpenSubItem(null);
                                            }}
                                          >
                                            <h4 className="font-medium text-emerald-400">
                                              {link.name}
                                            </h4>
                                          </Link>
                                        </div>
                                      ))}
                                    </div>
                                  )
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 mt-16 bg-black bg-opacity-50"
          onClick={() => {
            setIsMenuOpen(false);
            setOpenMainItem(null);
            setOpenSubItem(null);
          }}
        >
          <div
            className="px-4 py-2 border-t border-gray-700 bg-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded hover:bg-slate-700"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenMainItem(null);
                        setOpenSubItem(null);
                      }}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMainItem(item.title);
                        }}
                        className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-slate-700 text-left"
                      >
                        {item.title}
                        <svg
                          className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                            openMainItem === item.title ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {/* Mobile Dropdown - First Level */}
                      {openMainItem === item.title && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems?.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubItem(
                                    `${item.title}-${subItem.title}`
                                  );
                                }}
                                className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-slate-700 text-left"
                              >
                                {subItem.title}
                                {subItem.links && (
                                  <svg
                                    className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                                      openSubItem ===
                                      `${item.title}-${subItem.title}`
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 1 4 4 4-4"
                                    />
                                  </svg>
                                )}
                              </button>

                              {/* Mobile Dropdown - Second Level */}
                              {openSubItem ===
                                `${item.title}-${subItem.title}` &&
                                subItem.links && (
                                  <div className="ml-4 mt-1 space-y-1">
                                    <ul className="max-h-60 overflow-y-auto">
                                      {subItem.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                          <Link
                                            href={link.href}
                                            className="block px-3 py-2 rounded hover:bg-slate-700 text-sm"
                                            onClick={() => {
                                              setIsMenuOpen(false);
                                              setOpenMainItem(null);
                                              setOpenSubItem(null);
                                            }}
                                          >
                                            {link.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
