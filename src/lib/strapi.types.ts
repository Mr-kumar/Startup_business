// src/lib/strapi.types.ts
// Strapi response types

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T | null;
  meta: {};
}

// Unified service attributes matching the unified PageContentType structure
export interface ServiceAttributes {
  // Basic metadata
  title: string;
  slug: string;
  description?: string;
  
  // Overview - supports both formats
  overview?: string | any;
  
  // Features (from secondary)
  features?: any[];
  
  // Benefits - supports both formats
  benefits?: { heading: string; content: string }[] | any[];
  
  // Documents - supports both formats
  documentsRequired?: { heading: string; content: string }[];
  documents?: any;
  
  // Eligibility (from secondary)
  eligibility?: any[];
  eligibilityCriteria?: { heading: string; content: string }[];
  
  // Services - supports both formats
  services?: { category: string; documents: string[] }[] | any[];
  
  // Post registration (from secondary)
  postRegistration?: any;
  
  // FAQ - unified format
  faq?: { question: string; answer: string }[];
  faqs?: { question: string; answer: string }[];
  
  // Types (from secondary)
  types?: any;
  
  // Registration and procedure fields
  registrationProcedure?: any[];
  feesStructure?: any;
  registrationTimeline?: any;
  
  // Additional sections
  whyUs?: any;
  who?: any;
  clauses?: any;
  
  // Category-based fields
  Listicles?: { category: string; documents: string[] }[];
  Categories?: { category: string; documents: string[] }[];
  Challenges?: { category: string; documents: string[] }[];
  ClassifiedIndustries?: { category: string; documents: string[] }[];
  Guidelines?: { category: string; documents: string[] }[];
  Regulations?: { category: string; documents: string[] }[];
  ProductRequire?: { category: string; documents: string[] }[];
  Structure?: { category: string; documents: string[] }[];
  RoleOfHydrogeologist?: { category: string; documents: string[] }[];
  Need?: { category: string; documents: string[] }[];
  Process?: { category: string; documents: string[] }[];
  Authority?: { category: string; documents: string[] }[];
  EPR?: { category: string; documents: string[] }[];
  Validity?: { category: string; documents: string[] }[];
  Business?: { category: string; documents: string[] }[];
  Productlist?: { category: string; documents: string[] }[];
}

export interface ServiceData {
  id: number;
  attributes: ServiceAttributes;
}

// Legacy type aliases for backward compatibility (can be removed later)
export type ServiceAttributesPrimary = ServiceAttributes;
export type ServiceAttributesSecondary = ServiceAttributes;
export type ServiceDataPrimary = ServiceData;
export type ServiceDataSecondary = ServiceData;
