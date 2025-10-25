/**
 * Service API Helper Functions
 * Provides easy-to-use functions to fetch service data from Strapi
 */

import { fetchApi } from './strapi.api';
import { StrapiCollectionResponse } from './strapi.types';

interface StrapiService {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  serviceCategory: string;
  data: string | any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Comprehensive service data interface for components
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
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  who?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  clauses?: { title: string; description: string }[];
  // List data properties (for categorized lists)
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
  services?: { category: string; documents: string[] }[];
  Productlist?: { category: string; documents: string[] }[];
  // Renewal data
  renewalData?: {
    renewal: { heading: string; content: string[] }[];
    duplicate: { heading: string; content: string[] }[];
  };
  // Legacy properties (for backward compatibility)
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/**
 * Deduplicate array items based on a key or stringified content
 */
function deduplicateArray<T>(arr: T[], key?: keyof T): T[] {
  if (!Array.isArray(arr) || arr.length === 0) return arr;
  
  const seen = new Set<string>();
  return arr.filter(item => {
    const identifier = key && item[key] 
      ? String(item[key]) 
      : JSON.stringify(item);
    
    if (seen.has(identifier)) {
      return false;
    }
    seen.add(identifier);
    return true;
  });
}

/**
 * Parse the JSON data field from Strapi response
 * Strapi v5 uses flat structure (no nested attributes)
 * Also deduplicates any array fields to prevent repetition
 */
function parseServiceData(service: StrapiService): ServiceData {
  if (!service.data) {
    return service as ServiceData;
  }

  const parsedData = typeof service.data === 'string'
    ? JSON.parse(service.data)
    : service.data;

  const baseData = {
    id: service.id,
    slug: service.slug,
    title: service.title || parsedData.title,
    serviceCategory: service.serviceCategory,
    ...parsedData
  } as ServiceData;

  // Deduplicate all array fields to prevent repetition
  const arrayFields = [
    'overview', 'benefits', 'features', 'documents', 'documentsRequired',
    'registrationProcedure', 'feesStructure', 'registrationTimeline',
    'eligibility', 'types', 'faqs', 'whyUs', 'who', 'clauses',
    'Listicles', 'Categories', 'Challenges', 'ClassifiedIndustries',
    'Guidelines', 'Regulations', 'ProductRequire', 'Structure',
    'RoleOfHydrogeologist', 'Need', 'Process', 'Authority',
    'EPR', 'Validity', 'Business', 'services', 'Productlist'
  ] as const;

  arrayFields.forEach(field => {
    if (Array.isArray(baseData[field])) {
      // Deduplicate based on 'question' for FAQs, 'heading' for others, or full object
      const key = field === 'faqs' ? 'question' : 'heading';
      baseData[field] = deduplicateArray(baseData[field] as any[], key as any) as any;
    }
  });

  return baseData;
}

/**
 * Convert navbar slug to title search pattern
 * Example: "trademark-objection" -> "Trademark Objection"
 */
function slugToTitlePattern(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get a single service by slug
 * @param slug - The service slug (e.g., 'gst-registration')
 * @returns Parsed service data or null if not found
 */
export async function getServiceBySlug(slug: string) {
  try {
    console.log(`🔍 Fetching service with slug: "${slug}"`);

    // First, try exact slug match
    let response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
      '/api/services',
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: '*',
      }
    );

    console.log(`📦 Exact slug match result: ${response?.data?.length || 0} services found`);

    if (response?.data && response.data.length > 0) {
      console.log(`✅ Found service: ${response.data[0].title}`);
      return parseServiceData(response.data[0]);
    }

    // If no exact match, try searching by title pattern
    // Convert slug to title: "trademark-objection" -> "Trademark Objection"
    const titlePattern = slugToTitlePattern(slug);
    console.log(`🔄 Trying title pattern: "${titlePattern}"`);

    response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
      '/api/services',
      {
        filters: {
          title: {
            $containsi: titlePattern, // Case-insensitive contains
          },
        },
        populate: '*',
      }
    );

    console.log(`📦 Title pattern match result: ${response?.data?.length || 0} services found`);

    if (response?.data && response.data.length > 0) {
      console.log(`✅ Found service by title: ${response.data[0].title} (slug: ${response.data[0].slug})`);
      // Return the first match
      return parseServiceData(response.data[0]);
    }

    console.log(`❌ No service found for slug: "${slug}"`);
    return null;
  } catch (error) {
    console.error(`❌ Error fetching service with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get all services with pagination
 * @param page - Page number (default: 1)
 * @param pageSize - Items per page (default: 25)
 * @returns Array of parsed service data
 */
export async function getAllServices(page: number = 1, pageSize: number = 25) {
  try {
    const response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
      '/api/services',
      {
        pagination: {
          page,
          pageSize,
        },
        populate: '*',
      }
    );

    if (response?.data) {
      return {
        services: response.data.map(parseServiceData),
        meta: response.meta,
      };
    }

    return { services: [], meta: null };
  } catch (error) {
    console.error('Error fetching all services:', error);
    return { services: [], meta: null };
  }
}

/**
 * Get services by category
 * @param category - 'primary' or 'secondary'
 * @returns Array of parsed service data
 */
export async function getServicesByCategory(category: 'primary' | 'secondary') {
  try {
    const response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
      '/api/services',
      {
        filters: {
          serviceCategory: {
            $eq: category,
          },
        },
        pagination: {
          limit: 500, // Get all services in category
        },
        populate: '*',
      }
    );

    if (response?.data) {
      return response.data.map(parseServiceData);
    }

    return [];
  } catch (error) {
    console.error(`Error fetching services by category "${category}":`, error);
    return [];
  }
}

/**
 * Search services by title
 * @param searchTerm - Search term to match in title
 * @returns Array of matching services
 */
export async function searchServices(searchTerm: string) {
  try {
    const response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
      '/api/services',
      {
        filters: {
          title: {
            $containsi: searchTerm, // Case-insensitive search
          },
        },
        pagination: {
          limit: 50,
        },
        populate: '*',
      }
    );

    if (response?.data) {
      return response.data.map(parseServiceData);
    }

    return [];
  } catch (error) {
    console.error(`Error searching services with term "${searchTerm}":`, error);
    return [];
  }
}

/**
 * Get all service slugs (useful for static generation)
 * @returns Array of slugs
 */
export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
      '/api/services',
      {
        fields: ['slug'], // Only fetch slug field
        pagination: {
          limit: 500, // Get all services
        },
      }
    );

    if (response?.data) {
      return response.data.map(service => service.slug);
    }

    return [];
  } catch (error) {
    console.error('Error fetching service slugs:', error);
    return [];
  }
}

/**
 * Get service count
 * @returns Total number of services
 */
export async function getServiceCount(): Promise<number> {
  try {
    const response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
      '/api/services',
      {
        pagination: {
          limit: 1,
        },
      }
    );

    return response?.meta?.pagination?.total || 0;
  } catch (error) {
    console.error('Error fetching service count:', error);
    return 0;
  }
}
