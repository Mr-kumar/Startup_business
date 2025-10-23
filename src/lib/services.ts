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

/**
 * Parse the JSON data field from Strapi response
 * Strapi v5 uses flat structure (no nested attributes)
 */
function parseServiceData(service: StrapiService) {
  if (!service.data) {
    return service;
  }

  const parsedData = typeof service.data === 'string' 
    ? JSON.parse(service.data)
    : service.data;

  return {
    id: service.id,
    slug: service.slug,
    title: service.title || parsedData.title,
    serviceCategory: service.serviceCategory,
    ...parsedData
  };
}

/**
 * Get a single service by slug
 * @param slug - The service slug (e.g., 'gst-registration')
 * @returns Parsed service data or null if not found
 */
export async function getServiceBySlug(slug: string) {
  try {
    const response = await fetchApi<StrapiCollectionResponse<StrapiService>>(
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

    if (response?.data && response.data.length > 0) {
      return parseServiceData(response.data[0]);
    }

    return null;
  } catch (error) {
    console.error(`Error fetching service with slug "${slug}":`, error);
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
