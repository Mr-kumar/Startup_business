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

// Strapi v5 Service data (flat structure, no nested attributes)
export interface StrapiService {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  serviceCategory: string;
  data: string | any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  serviceCategory: string;
  description?: string;
  overview?: { heading: string; content: string }[];
  benefits?: { heading: string; content: string }[];
  features?: any[];
  documents?: any[];
  documentsRequired?: { heading: string; content: string }[];
  registrationProcedure?: { heading: string; content: string }[];
  feesStructure?: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: { category: string; amount: string }[];
  }[];
  registrationTimeline?: {
    heading: string;
    description?: string;
    steps?: { title: string; duration: string; description: string }[];
    totalTime?: string;
  }[];
  eligibility?: any[];
  types?: any[];
  faqs?: { question: string; answer: string }[];
  whyUs?: {
    heading?: string;
    description?: string;
    points?: string[];
  };
  who?: {
    heading?: string;
    description?: string[];
    points?: string[];
  };
  clauses?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Legacy type aliases for backward compatibility (can be removed later)
export type ServiceAttributesPrimary = ServiceData;
export type ServiceAttributesSecondary = ServiceData;
export type ServiceDataPrimary = ServiceData;
export type ServiceDataSecondary = ServiceData;
