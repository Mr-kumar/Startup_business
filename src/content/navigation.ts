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

// This is the menuItems data from Header.tsx - truncated for brevity
// You should copy the complete menuItems array from Header.tsx here
export const menuItems: MenuItem[] = [
  {
    title: "Startup",
    subItems: [
      {
        title: "FSSAI & Eating License",
        links: [
          { name: "FSSAI License", href: "/fssai-license-registration" },
          { name: "FSSAI License Renewal", href: "/fssai-license-renewal" },
          { name: "FSSAI State License", href: "/fssai-state-license" },
          { name: "Eating House License", href: "/eating-house-license" },
          { name: "Central FSSAI License", href: "/fssai-central-license" },
          { name: "FSSAI Annual Return", href: "/fssai-annual-return" },
          { name: "FSSAI Product Approval", href: "/fssai-product-approval" },
          { name: "Food Recycling License", href: "/food-recycling-license" },
          { name: "FPO Mark Certification", href: "/fpo-certification" },
        ],
      },
      {
        title: "Business Registration",
        links: [
          { name: "Company Registration", href: "/private-limited-company-registration" },
          { name: "LLP Registration", href: "/LLPRegistrationPage" },
          { name: "Public Limited Company Registration", href: "/PublicLimitedCompanyPage" },
          { name: "One Person Company Registration", href: "/opc-registration" },
          { name: "Partnership Firm Registration", href: "/partnership-firm-registration" },
          { name: "Sole Proprietorship Registration", href: "/sole-proprietorship-registration" },
          { name: "Nidhi Company Registration", href: "/nidhi-company-registration" },
          { name: "Producer Company Registration", href: "/producer-company-registration" },
          { name: "Sole Proprietorship to Pvt. Ltd. Company", href: "/conversion-of-sole-proprietorship" },
          { name: "Indian Subsidiary Company Registration", href: "/indian-subsidiary-company-registration" },
          { name: "Conversion of LLP to Private Company", href: "/llp-to-private-company-conversion" },
          { name: "Partnership Firm into Pvt. Ltd. Company", href: "/convert-partnership-to-privateLtd" },
          { name: "Carbon Black Manufacturing", href: "/carbon-black-manufacturing-business" },
          { name: "Green Hydrogen Plant", href: "/green-hydrogen-plant-setup" },
          { name: "Green Ammonia Plant", href: "/green-ammonia" },
          { name: "Synthetic Rubber Business", href: "/synthetic-rubber-manufacturing-business-complete-guide" },
          { name: "Paper and Paperboard Packaging Industry", href: "/paper-paperboard-packaging-industry-setup-guide" },
          { name: "Fermentation Industry", href: "/fermentation-industry-setup" },
          { name: "Renewable Energy Business", href: "/start-your-renewable-energy-business-india" },
          { name: "Conversion of Pvt. Ltd. to Public Limited", href: "/conversion-of-private-limited-to-public-limited" },
        ],
      },
      // Add more subItems as needed from your Header.tsx
    ],
  },
  {
    title: "IPR",
    subItems: [
      {
        title: "Trademark Services",
        links: [
          { name: "Trademark Registration", href: "/trademark-registration" },
          { name: "Trademark Objection", href: "/trademark-objection-in-india" },
          { name: "Trademark Assignment", href: "/trademark-assignment-in-india" },
          { name: "Design Registration", href: "/design-registration" },
          { name: "Trademark Rectification", href: "/trademark-rectification" },
          { name: "Intellectual Property Dispute", href: "/intellectual-property-dispute" },
          { name: "International Trademark Registration", href: "/international-trademark-registration" },
          { name: "Trademark Renewal", href: "/trademark-renewal" },
          { name: "Trademark Classes Finder", href: "/trademark-class-finder" },
          { name: "Trademark Hearing", href: "/trademark-hearing" },
          { name: "Trademark Licensing", href: "/trademark-licensing" },
          { name: "Trademark Opposition", href: "/trademark-opposition" },
          { name: "Design Registration Renewal and Restoration", href: "/design-registration-renewal-restoration" },
          { name: "Registration OF Geographical Indication (GI)", href: "/gi-registration" },
          { name: "Wordmark Registration in India", href: "/wordmark-registration-india" },
        ],
      },
      // Add more IPR subItems
    ],
  },
  {
    title: "Tax",
    subItems: [
      {
        title: "Tax Filing",
        links: [
          { name: "GST Registration", href: "/gst-registration" },
          { name: "GST Return Filing", href: "/gst-return-filing" },
          { name: "TDS Return Filing", href: "/tds-return-filing-online" },
          { name: "Professional Tax Registration", href: "/professional-tax-registration" },
          { name: "Income Tax Return Filing", href: "/income-tax-return-filing" },
        ],
      },
      // Add more Tax subItems
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  // Add more main categories as needed
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

