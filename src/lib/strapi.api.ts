// src/lib/strapi.api.ts
import qs from 'qs';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

/**
 * Helper to make GET requests to Strapi API
 * @param path Path to the API endpoint (e.g., '/api/services')
 * @param urlParamsObject Query parameters object
 * @param options Fetch options
 * @returns Parsed JSON response
 */
export async function fetchApi<T>(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
): Promise<T> {
  try {
    // Merge default options
    const mergedOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        // Add Authorization header if needed later for private content
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
    const requestUrl = `${STRAPI_URL}${path}${queryString ? `?${queryString}` : ''}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error('Strapi API Error:', response.statusText);
      throw new Error(`An error occurred please try again. Status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw new Error('Could not fetch data from API. Please check your connection and Strapi server.');
  }
}
