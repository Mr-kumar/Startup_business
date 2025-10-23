// Navigation data extracted from Header.tsx
export interface NavigationLink {
  name: string;
  href: string;
  category?: string;
  subCategory?: string;
}

export interface MenuItem {
  title: string;
  href?: string;
  subItems?: {
    title: string;
    links: NavigationLink[];
  }[];
}

// Updated menuItems data based on the new structure
export const menuItems: MenuItem[] = [
  {
    title: "Startup",
    subItems: [
      {
        title: "Business Structures",
        links: [
          { name: "Proprietorship", href: "/proprietorship-registration" },
          { name: "Partnership", href: "/partnership-registration" },
          { name: "One Person Company", href: "/opc-registration" },
          { name: "Limited Liability Partnership", href: "/llp-registration" },
          { name: "Private Limited Company", href: "/private-limited-company-registration" },
          { name: "Section 8 Company", href: "/section-8-company-registration" },
          { name: "Trust Registration", href: "/trust-registration" },
          { name: "Public Limited Company", href: "/public-limited-company-registration" },
          { name: "Producer Company", href: "/producer-company-registration" },
          { name: "Indian Subsidiary", href: "/indian-subsidiary-registration" },
        ],
      },
    ],
  },
  {
    title: "Registrations",
    subItems: [
      {
        title: "Business Registrations",
        links: [
          { name: "Startup India", href: "/startup-india-registration" },
          { name: "Trade License", href: "/trade-license" },
          { name: "FSSAI Registration", href: "/fssai-registration" },
          { name: "FSSAI License", href: "/fssai-license" },
          { name: "Halal License & Certification", href: "/halal-license-certification" },
          { name: "ICEGATE Registration", href: "/icegate-registration" },
          { name: "Import Export Code", href: "/import-export-code" },
          { name: "Legal Entity Identifier Code", href: "/legal-entity-identifier-code" },
          { name: "ISO Registration", href: "/iso-registration" },
          { name: "PF Registration", href: "/pf-registration" },
          { name: "ESI Registration", href: "/esi-registration" },
          { name: "Professional Tax Registration", href: "/professional-tax-registration" },
          { name: "RCMC Registration", href: "/rcmc-registration" },
          { name: "TN RERA Registration for Agents", href: "/tn-rera-registration-agents" },
        ],
      },
      {
        title: "Non-Profit Registrations",
        links: [
          { name: "12A and 80G Registration", href: "/12a-80g-registration" },
          { name: "12A Registration", href: "/12a-registration" },
          { name: "80G Registration", href: "/80g-registration" },
        ],
      },
      {
        title: "Other Registrations",
        links: [
          { name: "APEDA Registration", href: "/apeda-registration" },
          { name: "Barcode Registration", href: "/barcode-registration" },
          { name: "BIS Registration", href: "/bis-registration" },
          { name: "Certificate of Incumbency", href: "/certificate-of-incumbency" },
          { name: "Darpan Registration", href: "/darpan-registration" },
          { name: "Digital Signature", href: "/digital-signature" },
          { name: "Shop Act Registration", href: "/shop-act-registration" },
          { name: "Drug License", href: "/drug-license" },
          { name: "Udyam Registration", href: "/udyam-registration" },
          { name: "FCRA Registration", href: "/fcra-registration" },
          { name: "Fire License", href: "/fire-license" },
        ],
      },
    ],
  },
  {
    title: "Trademark",
    subItems: [
      {
        title: "Trademark Services",
        links: [
          { name: "Trademark Registration", href: "/trademark-registration" },
          { name: "Trademark Objection", href: "/trademark-objection" },
          { name: "Trademark Certificate", href: "/trademark-certificate" },
          { name: "Trademark Opposition", href: "/trademark-opposition" },
          { name: "Trademark Hearing", href: "/trademark-hearing" },
          { name: "Trademark Rectification", href: "/trademark-rectification" },
          { name: "TM Infringement Notice", href: "/tm-infringement-notice" },
          { name: "Trademark Renewal", href: "/trademark-renewal" },
          { name: "Trademark Transfer", href: "/trademark-transfer" },
          { name: "Expedited TM Registration", href: "/expedited-tm-registration" },
          { name: "Logo Designing", href: "/logo-designing" },
        ],
      },
      {
        title: "Other IP Services",
        links: [
          { name: "Design Registration", href: "/design-registration" },
          { name: "Design Objection", href: "/design-objection" },
          { name: "Copyright Registration", href: "/copyright-registration" },
          { name: "Copyright Objection", href: "/copyright-objection" },
          { name: "Patent Registration", href: "/patent-registration" },
          { name: "Trademark Protection", href: "/trademark-protection" },
        ],
      },
    ],
  },
  {
    title: "GST",
    subItems: [
      {
        title: "GST Services",
        links: [
          { name: "GST Registration", href: "/gst-registration" },
          { name: "GST Return Filing by Accountant", href: "/gst-return-filing-accountant" },
          { name: "GST NIL Return Filing", href: "/gst-nil-return-filing" },
          { name: "GST E-Invoicing Software", href: "/gst-e-invoicing-software" },
          { name: "GST LUT Form", href: "/gst-lut-form" },
          { name: "GST Notice", href: "/gst-notice" },
          { name: "GST Annual Return Filing (GSTR-9)", href: "/gst-annual-return-filing" },
          { name: "GST Registration for Foreigners", href: "/gst-registration-foreigners" },
          { name: "GST Invoicing & Filing Software", href: "/gst-invoicing-filing-software" },
          { name: "GST Amendment", href: "/gst-amendment" },
          { name: "GST Revocation", href: "/gst-revocation" },
          { name: "GSTR-10", href: "/gstr-10" },
          { name: "GST Software for Accountants", href: "/gst-software-accountants" },
          { name: "Virtual Office + GSTIN", href: "/virtual-office-gstin" },
        ],
      },
    ],
  },
  {
    title: "Income Tax",
    subItems: [
      {
        title: "Income Tax Services",
        links: [
          { name: "Income Tax E-Filing", href: "/income-tax-e-filing" },
          { name: "Business Tax Filing", href: "/business-tax-filing" },
          { name: "ITR-1 Return Filing", href: "/itr-1-return-filing" },
          { name: "ITR-2 Return Filing", href: "/itr-2-return-filing" },
          { name: "ITR-3 Return Filing", href: "/itr-3-return-filing" },
          { name: "ITR-4 Return Filing", href: "/itr-4-return-filing" },
          { name: "ITR-5 Return Filing", href: "/itr-5-return-filing" },
          { name: "ITR-6 Return Filing", href: "/itr-6-return-filing" },
          { name: "ITR-7 Return Filing", href: "/itr-7-return-filing" },
          { name: "15CA - 15CB Filing", href: "/15ca-15cb-filing" },
          { name: "TAN Registration", href: "/tan-registration" },
          { name: "TDS Return Filing", href: "/tds-return-filing" },
          { name: "Income Tax Notice", href: "/income-tax-notice" },
        ],
      },
    ],
  },
  {
    title: "MCA",
    subItems: [
      {
        title: "MCA Compliance",
        links: [
          { name: "Company Compliance", href: "/company-compliance" },
          { name: "LLP Compliance", href: "/llp-compliance" },
          { name: "OPC Compliance", href: "/opc-compliance" },
          { name: "Name Change - Company", href: "/name-change-company" },
          { name: "Registered Office Change", href: "/registered-office-change" },
          { name: "DIN eKYC Filing", href: "/din-ekyc-filing" },
          { name: "DIN Reactivation", href: "/din-reactivation" },
          { name: "Director Change", href: "/director-change" },
          { name: "Remove Director", href: "/remove-director" },
          { name: "ADT-1 Filing", href: "/adt-1-filing" },
          { name: "DPT-3 Filing", href: "/dpt-3-filing" },
          { name: "LLP Form 11 Filing", href: "/llp-form-11-filing" },
          { name: "Dormant Status Filing", href: "/dormant-status-filing" },
          { name: "MOA Amendment", href: "/moa-amendment" },
          { name: "AOA Amendment", href: "/aoa-amendment" },
          { name: "Authorized Capital Increase", href: "/authorized-capital-increase" },
          { name: "Share Transfer", href: "/share-transfer" },
          { name: "Demat of Shares", href: "/demat-of-shares" },
          { name: "Winding Up - LLP", href: "/winding-up-llp" },
          { name: "Winding Up - Company", href: "/winding-up-company" },
          { name: "Commencement (INC-20A)", href: "/commencement-inc-20a" },
        ],
      },
    ],
  },
  {
    title: "Compliance",
    subItems: [
      {
        title: "Regulatory Compliance",
        links: [
          { name: "FDI Filing with RBI", href: "/fdi-filing-rbi" },
          { name: "FLA Return Filing", href: "/fla-return-filing" },
          { name: "FSSAI Renewal", href: "/fssai-renewal" },
          { name: "FSSAI Return Filing", href: "/fssai-return-filing" },
          { name: "Business Plan", href: "/business-plan" },
          { name: "HR & Payroll", href: "/hr-payroll" },
          { name: "PF Return Filing", href: "/pf-return-filing" },
          { name: "ESI Return Filing", href: "/esi-return-filing" },
          { name: "Professional Tax Return Filing", href: "/professional-tax-return-filing" },
          { name: "Partnership Compliance", href: "/partnership-compliance" },
          { name: "Proprietorship Compliance", href: "/proprietorship-compliance" },
          { name: "Bookkeeping", href: "/bookkeeping" },
        ],
      },
    ],
  },
  {
    title: "Personal",
    subItems: [
      {
        title: "Personal Services",
        links: [
          { name: "Will Drafting", href: "/will-drafting" },
          { name: "Asset Transfer", href: "/asset-transfer" },
          { name: "Family Trust", href: "/family-trust" },
        ],
      },
    ],
  },
  {
    title: "Global",
    subItems: [
      {
        title: "Global Business",
        links: [
          { name: "UAE Company", href: "/uae-company" },
          { name: "USA Company", href: "/usa-company" },
          { name: "Singapore Company", href: "/singapore-company" },
          { name: "UK Company", href: "/uk-company" },
          { name: "USA Trademark Registration", href: "/usa-trademark-registration" },
          { name: "International Trademark", href: "/international-trademark" },
          { name: "UAE eCommerce", href: "/uae-ecommerce" },
          { name: "UAE Embassy Attestation", href: "/uae-embassy-attestation" },
        ],
      },
    ],
  },
  {
    title: "Cities",
    subItems: [
      {
        title: "Service Locations",
        links: [
          { name: "Mumbai", href: "/mumbai" },
          { name: "Navi Mumbai", href: "/navi-mumbai" },
          { name: "Chennai", href: "/chennai" },
          { name: "Bengaluru", href: "/bengaluru" },
          { name: "Dubai", href: "/dubai" },
        ],
      },
    ],
  },
  {
    title: "Guides",
    href: "/guides",
  },
];

// Function to extract all navigation links from menuItems
export function getAllNavigationLinks(): NavigationLink[] {
  const allLinks: NavigationLink[] = [];
  
  menuItems.forEach(item => {
    // Add direct links (like Contact Us)
    if (item.href) {
      allLinks.push({
        name: item.title,
        href: item.href,
        category: item.title,
      });
    }
    
    // Add subItems links
    if (item.subItems) {
      item.subItems.forEach(subItem => {
        subItem.links.forEach(link => {
          allLinks.push({
            name: link.name,
            href: link.href,
            category: item.title,
            subCategory: subItem.title,
          });
        });
      });
    }
  });
  
  return allLinks;
}

// Function to search through navigation links
export function searchNavigationLinks(query: string): NavigationLink[] {
  const allLinks = getAllNavigationLinks();
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return [];
  
  return allLinks.filter(link => 
    link.name.toLowerCase().includes(searchTerm) ||
    link.category?.toLowerCase().includes(searchTerm) ||
    link.subCategory?.toLowerCase().includes(searchTerm) ||
    link.href.toLowerCase().includes(searchTerm)
  );
}

