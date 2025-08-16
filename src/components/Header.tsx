"use client";

import React, { useState, useRef, useEffect } from "react";
import Logo from "@/assets/Logo.png";
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
            { name: "FSSAI License", href: "/startup/fssai-license-registration" },
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
            { name: "Food Recycling License", href: "/food-recycling-license" },
            { name: "FPO Mark Certification", href: "/fpo-certification" },
          ],
        },
        {
          title: "Business Registration",
          links: [
            {
              name: "Company Registration",
              href: "/startup/company-registration",
            },
            { name: "LLP Registration", href: "/private-limited-company-registration" },
            {
              name: "Public Limited Company Registration",
              href: "/private-limited-company-registration",
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
              href: "nidhi-company-registration",
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
              href: "/startup/carbon-black",//not there
            },
            { name: "Green Hydrogen Plant", href: "/startup/green-hydrogen" },// not there
            { name: "Green Ammonia Plant", href: "/startup/green-ammonia" },// not there
            {
              name: "Synthetic Rubber Business",
              href: "/startup/synthetic-rubber",// not there
            },
            {
              name: "Paper and Paperboard Packaging Industry",
              href: "/startup/paper-packaging",// not there
            },
            { name: "Fermentation Industry", href: "/fermentation-industry-setup" },
            {
              name: "Renewable Energy Business", // not there
              href: "/renewable-energy",
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
            { name: "Annual Filing for LLP", href: "/startup/llp-filing" }, //not there
            {
              name: "Event Based Compliances in a Company",
              href: "/event-based-compliances",
            },
            { name: "Change in Object Clause", href: "/moa-memorandum-of-association" },
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
            { name: "SPICe+ Form", href: "/startup/spice-plus-compliance" },
            { name: "AGILE PRO S", href: "/startup/agile-pro-s-compliance" },
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
              name: "PM-WANI Registration",
              href: "/startup/pm-wani-registration",
            },
            {
              name: "Flipkart Seller Registration",
              href: "/flipkart-seller-registration",
            },
            {
              name: "Sanitary Import Permit",
              href: "/sanitary-import-permit",
            },
            { name: "NPOP Certification", href: "/npop-certification" },
            {
              name: "Coconut Board Registration",
              href: "/startup/coconut-board-registration",
            },
            { name: "Drone Registration", href: "/drone-registration" },
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
            {
              name: "ISO 37001:2016 Certification",
              href: "/iso-37001-2016-certification",
            },
            {
              name: "ISO 27001 ISMS Certification",
              href: "/iso-27001-isms-certification",
            },
            {
              name: "ISO 16001 Certification",
              href: "/iso-16001-certification",
            },
            {
              name: "ISO 39001 Certification",
              href: "/iso-39001-certification",
            },
            { name: "ISO 2768-1 Certification", href: "/startup/iso-2768-1" },
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
            { name: "Society Registration", href: "/society-registration-india" },
            { name: "FCRA Registration", href: "/startup/fcra-registration" },
            { name: "12AA Registration", href: "/startup/12aa-registration" },
            { name: "Trust Registration", href: "/startup/trust-registration" },
            { name: "12AB Registration", href: "/12ab-registration-india" },
            {
              name: "Trust Annual Compliance",
              href: "/startup/trust-annual-compliance",
            },
            {
              name: "NGO Darpan Registration",
              href: "/startup/ngo-darpan-registration",
            },
            { name: "NGO CSR-1 Filing", href: "/ngo-csr-1-filing" },
            { name: "NGO CSR Consultancy", href: "/ngo-csr-consultancy" },
            {
              name: "NGO Income Tax Advisory",
              href: "/ngo-income-tax-advisory",
            },
            { name: "NGO Accounting", href: "/ngo-accounting" },
            { name: "NGO Project Report", href: "/ngo-project-report" },
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
              name: "Shareholder’s Agreement",
              href: "/shareholders-agreement",
            },
            {
              name: "Joint Venture Agreement",
              href: "/joint-venture-agreement",
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
            {
              name: "Probate of Will",
              href: "/probate-will",
            },
          ],
        },
        {
          title: "Legal Services",
          description: "Legal Services and Agreements",
          links: [
            { name: "Legal Notice", href: "/legal-notice" },
            { name: "RERA Complaint", href: "/rera-complaint-by-dostatup" },
            { name: "Cheque Bounce Notice", href: "/cheque-bounce-notice" },
            { name: "Consumer Complaint", href: "/consumer-complaint" },
            {
              name: "Public Interest Litigation",
              href: "/public-interest-litigation",
            },
            { name: "Caveat Petition", href: "/caveat-petition" },
            {
              name: "Legal Heir Certificate",
              href: "/startup/legal-heir-certificate",
            },
            {
              name: "Section 8-Demand Notice",
              href: "/section-8-demand-notice",
            },
            {
              name: "Succession Certificate in India",
              href: "/succession-certificate",
            },
            {
              name: "Lease Agreement Drafting",
              href: "/lease-agreement-drafting",
            },
            { name: "Will Drafting", href: "/will-drafting" },
            { name: "Mutual Divorce", href: "/mutual-divorce" },
            { name: "Marriage Registration", href: "/marriage-registration" },
            { name: "Divorce Notice", href: "/divorce-notice" },
            { name: "Property Registration", href: "/property-registration" },
            { name: "Property Valuation", href: "/property-valuation" },
            { name: "Property Verification", href: "/property-verification" },
            {
              name: "Sexual Harassment at Workplace",
              href: "/sexual-harassment-workplace",
            },
            { name: "Lease Registration", href: "/lease-registration" },
            { name: "Will Registration", href: "/will-registration" },
            { name: "Power of Attorney (POA)", href: "/power-of-attorney" },
            {
              name: "Divorce Settlement Agreement",
              href: "/divorce-settlement-agreement",
            },
            { name: "Hindu Marriage Act", href: "/hindu-marriage-act" },
            { name: "Bail Application", href: "/bail-application" },
            { name: "Judicial Separation", href: "/judicial-separation" },
            { name: "Special Leave Petition", href: "/startup/special-leave-petition" }, //ayush-code page
            { name: "Consulting Agreement", href: "/consulting-agreement" },
            { name: "Tenant Eviction Notice", href: "/tenant-eviction-notice" },
            { name: "Vendor Agreement", href: "/vendor-agreement" },
            { name: "License Agreement", href: "/license-agreement" },
            {
              name: "Legal Notice for Defamation",
              href: "/legal-notice-for-defamation",
            },
            {
              name: "Legal Notice for Non-Payment of Salary",
              href: "/legal-notice-for-non-payment-of-salary",
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
      title: "Regulatory",
      subItems: [
        {
          title: "Legal Metrology",
          description: "Legal Metrology Registrations and Licenses",
          links: [
            {
              name: "Legal Metrology Act Registration",
              href: "/legal-metrology-act-registration",
            },
            {
              name: "Model Approval Certificate for Weights and Measures",
              href: "/model-approval-certificate",
            },
            { name: "LMPC Importer License", href: "/lmpc-certificate" },
            {
              name: "Legal Metrology Dealer License",
              href: "/legal-metrology-dealer-licence",
            },
            {
              name: "Legal Metrology Manufacturer License",
              href: "/legal-metrology-manufacturer-licence",
            },
            {
              name: "Legal Metrology Repairer License",
              href: "/legal-metrology-repairer-licence",
            },
            {
              name: "Packaged Commodity Registration",
              href: "/packaged-commodity-registration",
            },
            {
              name: "Legal Metrology License Renewal",
              href: "/legal-metrology-licence-renewal",
            },
            {
              name: "Legal Metrology Compliance & Audit",
              href: "/legal-metrology-compliance-audit",
            },
          ],
        },
        {
          title: "BIS",
          description: "Quality and recognition certificates",
          links: [
            { name: "BIS Registration", href: "/startup/bis-registration" },
            {
              name: "Eco Mark Scheme Certification",
              href: "/eco-mark-scheme-certification",
            },
            {
              name: "ISI Mark Certification",
              href: "/startup/isi-mark-certification",
            },
            { name: "BIS CRS Registration", href: "/bis-crs-registration" },
            {
              name: "BIS LAB Recognition Scheme",
              href: "/bis-lab-recognition-scheme",
            },
            { name: "Hallmark Registration", href: "/hallmark-registration" },
            {
              name: "Assaying and Hallmarking Centre",
              href: "/assaying-and-hallmarking-centre",
            },
            {
              name: "BIS CRS Certification for Power Banks",
              href: "/bis-crs-certification-for-power-banks",
            },
            { name: "AGMARK License", href: "/agmark-registration" },
            {
              name: "BIS Certification for Toys",
              href: "/bis-certification-for-toys",
            },
            { name: "FMCS BIS Certification", href: "/fmcs-bis-certification" },
            {
              name: "Development, Planning & Implementation of CSR Strategy",
              href: "/development-planning-implementation-of-csr-strategy",
            },
          ],
        },
        {
          title: "CDSCO",
          description: "CDSCO Licenses and Registrations",
          links: [
            { name: "Drug License", href: "/drug-license" },
            { name: "Retail Drug License", href: "/retail-drug-license" },
            {
              name: "Manufacturing Drug License",
              href: "/manufacturing-drug-license",
            },
            { name: "Wholesale Drug License", href: "/wholesale-drug-license" },
            {
              name: "Medical Device Registration",
              href: "/cdsco-medical-device-registration",
            },
            { name: "CDSCO Registration", href: "/startup/cdsco-registration" },
            {
              name: "CDSCO Cosmetic Import Registration",
              href: "/cdsco-cosmetic-import-registration",
            },
            {
              name: "CDSCO Medical Device Import License",
              href: "/cdsco-medical-device-import-registration",
            },
            {
              name: "Cosmetic Manufacturing License",
              href: "/cosmetic-manufacturing-license",
            },
            {
              name: "In Vitro Diagnostic Device Manufacturing License",
              href: "/in-vitro-diagnostic-device-manufacturing-license",
            },
            {
              name: "InVitro Diagnostic Device Import License",
              href: "/in-vitro-diagnostic-device-import-license",
            },
            { name: "Drug Export NOC", href: "/drug-export-noc" },
            { name: "Dual-Use NOC", href: "/dual-use-noc" },
            { name: "CDSCO Test License", href: "/cdsco-test-license" },
            { name: "ADC NOC", href: "/adc-noc" },
            {
              name: "CDSCO Drugs Import License",
              href: "/cdsco-drugs-import-license",
            },
          ],
        },
        {
          title: "IRDA",
          description: "IRDA Licenses and Registrations",
          links: [
            {
              name: "Insurance Company License",
              href: "/insurance-company-license",
            },
            {
              name: "Insurance Web Aggregator License",
              href: "/insurance-web-aggregator-license",
            },
            {
              name: "Insurance Broker License",
              href: "/startup/insurance-broker-license",
            },
            {
              name: "Insurance Surveyors and Loss Assessors Registration",
              href: "/insurance-surveyor-loss-assessor-registration",
            },
            {
              name: "Insurance Marketing Firm",
              href: "/insurance-marketing-firm",
            },
            {
              name: "Insurance Self-Network Platform",
              href: "/insurance-self-network-platform",
            },
          ],
        },
        {
          title: "FEMA",
          description: "FEMA",
          links: [
            { name: "FEMA Compliance", href: "/fema-compliance" },
            {
              name: "Liaison Office Registration",
              href: "/liaison-office-registration-india",
            },
            {
              name: "Branch Office Registration",
              href: "/branch-office-registration-india",
            },
            {
              name: "Project Office Registration",
              href: "/project-office-registration",
            },
          ],
        },
      ],
    },
    {
      title: "Environmental",
      subItems: [
        {
          title: "Pollution NOC",
          description: "Pollution NOC",
          links: [
            {
              name: "Fire Department NOC",
              href: "/fire-department-noc-in-india",
            },
            {
              name: "Delhi Pollution Control Committee",
              href: "/delhi-pollution-control-committee-authorization",
            },
            {
              name: "Uttar Pradesh Pollution Control Board",
              href: "/uttar-pradesh-pollution-control-board",
            },
            {
              name: "NOC Pollution Control Board",
              href: "/NOC-Pollution-Control-Board",
            },
            { name: "CGWA-Water Boring", href: "/cgwa-noc-water-boring" },
            {
              name: "E-waste License for Dismantling",
              href: "/e-waste-license-for-dismantling",
            },
            {
              name: "License for charging station in UP",
              href: "/license-for-charging-station-in-up",
            },
            {
              name: "Phase II Soil and Groundwater Investigations",
              href: "/phase-ii-soil-and-groundwater-investigations",
            },
            {
              name: "Consent for Establishment (CFE) from SPCB",
              href: "/consent-for-establishment-cfe-from-spcb",
            },
          ],
        },
        {
          title: "E-Waste Management",
          description:
            "Compliance and Authorization Services under E-Waste Rules",
          links: [
            {
              name: "EPR Registration",
              href: "/startup/epr-registration",
            },
            {
              name: "Refurbisher Authorization and License",
              href: "/refurbisher-authorization",
            },
            {
              name: "PRO Authorization",
              href: "/pro-authorization",
            },
            {
              name: "Plastic Waste Authorization",
              href: "/startup/plastic-waste-authorization",
            },
            {
              name: "E-Waste Recycling Authorization",
              href: "/e-waste-recycling-authorization",
            },
            {
              name: "EPR Authorization for E-waste",
              href: "/epr-authorization-e-waste",
            },
            {
              name: "EPR Post Compliance (E-Waste)",
              href: "/epr-post-compliance",
            },
            {
              name: "Authorization for Export of E-waste",
              href: "/export-e-waste",
            },
            {
              name: "EPR Target Fulfilment",
              href: "/epr-target-fulfilment",
            },
            {
              name: "EPR Authorization For Battery Waste",
              href: "/epr-battery-waste",
            },
            {
              name: "EPR Credits From Plastic Waste Recyclers",
              href: "/plastic-credit-scheme",
            },
            {
              name: "EPR for Importers",
              href: "/epr-certificate-importers",
            },
            {
              name: "EPR Credits",
              href: "/epr-credits-overview",
            },
            {
              name: "E-waste Recycling License",
              href: "/e-waste-recycling-license",
            },
            {
              name: "EPR Registration for Producers and Brand Owners",
              href: "/epr-registration-for-producers-and-brand-owners",
            },
            {
              name: "EPR Fulfillment in E-Waste Management",
              href: "/epr-fullfillment-e-waste-management",
            },
            {
              name: "EPR Compliance",
              href: "/need-for-epr-compliance-in-india",
            },
          ],
        },
        {
          title: "Plastic Waste Management",
          description: "Plastic Waste Management",
          links: [
            {
              name: "EPR Authorization for Plastic waste Management",
              href: "/epr-authorization-for-plastic-waste-management",
            },
            {
              name: "EPR Post Compliance – Plastic Waste",
              href: "/epr-post-compliance-plastic-waste",
            },
            {
              name: "Plastic Waste Recycling Plant & PWM",
              href: "/plastic-waste-recycling-plant-pwm-setup",
            },
            {
              name: "Plastic Waste Processors Authorisation",
              href: "/plastic-waste-processors-authorisation",
            },
            {
              name: "EPR Fulfilment For Plastic Waste Management",
              href: "/epr-fulfilment-plastic-waste-management",
            },
          ],
        },
        {
          title: "Hazardous Waste Management",
          description:
            "Authorizations and Compliance for Hazardous, Biomedical, and Industrial Waste",
          links: [
            {
              name: "Solid Waste Management Authorization",
              href: "/solid-waste-management-authorisation",
            },
            {
              name: "Hazardous Waste Management Authorization",
              href: "/hazardous-waste-management-authorisation-domestic",
            },
            {
              name: "Authorization for Import of Hazardous Waste",
              href: "/authorization-for-import-of-hazardous-waste",
            },
            {
              name: "Authorization for Export of Hazardous Waste",
              href: "/authorization-for-export-of-hazardous-waste",
            },
            {
              name: "Bio Medical Waste Recycling Plant",
              href: "/startup/bio-medical-waste-treatment-plant",
            },
            {
              name: "Hazardous Waste Export Authorisation",
              href: "/hazardous-waste-export-authorisation",
            },
            {
              name: "Land Waste Management",
              href: "/land-waste-management",
            },
            {
              name: "Hazardous Waste Management and Compliance Assurance",
              href: "/hazardous-waste-management-and-compliance-assurance",
            },
            {
              name: "Industrial Waste Management",
              href: "/startup/industrialWasteContent",
            },
          ],
        },
        {
          title: "Battery Waste Management",
          description:
            "Licensing and Registration for Battery Waste Handling and Import",
          links: [
            {
              name: "New Lead Acid Battery Import License",
              href: "/new-lead-acid-battery-import-license",
            },
            {
              name: "Lithium-Ion Battery Import License",
              href: "/lithium-ion-battery-import-license",
            },
            {
              name: "Registration for Lead Acid Battery Recycling",
              href: "/lead-acid-battery-recycling-registration",
            },
            {
              name: "Registration for Scrap Battery Import",
              href: "/scrap-battery-import-registration",
            },
          ],
        },
        {
          title: "Environmental Advisory",
          description:
            "Consulting and Due Diligence Services for Environmental Compliance",
          links: [
            {
              name: "Environment, Social and Governance (ESG) Strategies",
              href: "/esg-strategies",
            },
            {
              name: "Construction and Demolition (C&D) Waste Recycling",
              href: "/startup/cd-waste-recycling",
            },
            {
              name: "Risk Assessment",
              href: "/risk-assessment",
            },
            {
              name: "Supply Chain and Human Rights and Environmental Due Diligence",
              href: "/supply-chain-human-rights-esdd",
            },
            {
              name: "Carbon Credit Trading Scheme",
              href: "/startup/carbon-credit-trading-scheme",
            },
            {
              name: "Environmental Due Diligence Services",
              href: "/environmental-due-diligence",
            },
          ],
        },
        {
          title: "Environmental Industry",
          description: "ESDD Services Across Industrial Sectors",
          links: [
            {
              name: "ESDD in Food Processing Industry",
              href: "/esdd-food-processing",
            },
            {
              name: "ESDD in Tobacco Industry",
              href: "/esdd-tobacco-industry",
            },
            {
              name: "ESDD in Aerospace Industry",
              href: "/esdd-aerospace-industry",
            },
            {
              name: "ESDD in Renewable Energy Industry",
              href: "/esdd-renewable-energy-industry",
            },
            {
              name: "ESDD in Financial & Banking Sector",
              href: "/esdd-financial-banking-sector",
            },
            {
              name: "ESDD in Dairy Industry",
              href: "/esdd-dairy-industry",
            },
            {
              name: "ESDD in the Sugar Industry",
              href: "/esdd-sugar-industry",
            },
            {
              name: "ESDD in Iron and Steel Industry",
              href: "/esdd-iron-steel-industry",
            },
            {
              name: "ESDD in Agricultural Equipment Manufacturing Industry",
              href: "/esdd-agricultural-equipment-industry",
            },
            {
              name: "ESDD in Solar Energy Industry",
              href: "/esdd-solar-energy-sector",
            },
            {
              name: "ESDD in Furniture and Fixtures Industry",
              href: "/esdd-furniture-fixtures",
            },
          ],
        },
        {
          title: "EIA",
          description: "EIA",
          links: [
            {
              name: "State Pollution Control Board (SPCB) - NOC",
              href: "/state-pollution-control-board-spcb-noc",
            },
            {
              name: "Environmental Auditing",
              href: "/environmental-auditing",
            },
            {
              name: "Environmental Clearance",
              href: "/startup/environmental-clearance",
            },
            {
              name: "Environmental Impact Assessment (EIA)",
              href: "/environmental-impact-assessment-eia",
            },
            {
              name: "Hydrogeological survey report",
              href: "/hydrogeological-survey-report",
            },
            {
              name: "Half-Yearly Environmental Compliance",
              href: "/half-yearly-environmental-compliance",
            },
            {
              name: "Social Impact Assessment",
              href: "/startup/social-impact-assessment",
            },
            {
              name: "Wildlife Conservation Plan",
              href: "/wildlife-conservation-plan",
            },
            {
              name: "Environmental Management Plan Report",
              href: "/consent-for-establishment-cfe-from-spcb",
            },
            {
              name: "Consent for Operation (CFO)",
              href: "/consent-for-operation-cfo",
            },
            {
              name: "Extended Producer Responsibility",
              href: "/extended-producer-responsibility",
            },
            {
              name: "Soil Testing",
              href: "/soil-testing",
            },
          ],
        },
        {
          title: "Environmental Licensing",
          description: "Environmental Licensing",
          links: [
            {
              name: "Authorized Vehicle Scrapping Facility (AVSF)",
              href: "/authorized-vehicle-scrapping-facility-avsf",
            },
            {
              name: "TSDF Facility Services",
              href: "/how-to-start-treatment-storage-disposal-facility-tsdf",
            },
            { name: "iCAT Certification", href: "/icat-certification" },
            {
              name: "Environmental Auditing",
              href: "/how-to-start-treatment-storage-disposal-facility-tsdf",
            },
            {
              name: "Carbon Credit Accounting",
              href: "/hydrogeological-survey-report",
            },
            {
              name: "LEED Zero Carbon Certification",
              href: "/leed-zero-carbon-certification",
            },
            {
              name: "LEED Zero Water Certification",
              href: "/leed-zero-water-certification",
            },
            {
              name: "Green Building Certification",
              href: "/green-building-certification",
            },
            { name: "PEFC Certification", href: "/pefc-certification" },
            { name: "FSC Certification", href: "/fsc-certification" },
          ],
        },
      ],
    },
    {
      title: "Contact Us",
      href: "tel:+919999944807",
    },
  ];

  return (
    <nav className="bg-slate-800 border-gray-200 text-white sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
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
            src={Logo}
            width={55}
            height={55}
            alt="DoStartup Logo"
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            DoStartup
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-controls="mega-menu"
          aria-expanded={isMenuOpen}
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
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-controls="mega-menu"
          aria-expanded={isMenuOpen}
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
                                {item.subItems?.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSubItem(
                                          `${item.title}-${subItem.title}`
                                        );
                                      }}
                                      className={`flex justify-between cursor-pointer items-center w-full px-6 py-3 hover:bg-slate-700 hover:text-emerald-300 text-left ${openSubItem ===
                                        `${item.title}-${subItem.title}`
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
                                ))}
                              </ul>
                            </div>

                            {/* Second Level - Right Side (Horizontal) */}
                            <div className="w-3/4 bg-slate-800 p-6 overflow-x-auto">
                              {item.subItems?.map(
                                (subItem) =>
                                  openSubItem ===
                                  `${item.title}-${subItem.title}` &&
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
                              )}
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
                          className={`w-2.5 h-2.5 ms-2.5 transition-transform ${openMainItem === item.title ? "rotate-180" : ""
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
                                    className={`w-2.5 h-2.5 ms-2.5 transition-transform ${openSubItem ===
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
