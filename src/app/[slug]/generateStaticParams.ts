import { fetchApi } from '@/lib/strapi.api';

// Define the expected response structure from Strapi
interface StrapiCollectionResponse<T> {
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

interface ServiceSlugData {
  id: number;
  attributes: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    // Fetch only the 'slug' field for all services
    const response = await fetchApi<StrapiCollectionResponse<ServiceSlugData>>('/api/services', {
      fields: ['slug'], // Ask Strapi to only return the slug field
      pagination: {
        pageSize: 100, // Adjust if you have more than 100 services
      }
    });

    if (!response?.data) {
      console.error("No service data found from Strapi for generateStaticParams.");
      return [];
    }

    // Map the response to the structure Next.js expects
    return response.data.map((service) => ({
      slug: service.attributes.slug,
    }));

  } catch (error) {
    console.error("Error fetching slugs from Strapi:", error);
    // Return empty array on error to prevent build failure,
    // but log the error for debugging.
    return [];
  }
}