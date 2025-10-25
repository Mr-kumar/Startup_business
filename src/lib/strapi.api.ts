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
        'Accept': 'application/json',
        // Add CORS headers for production
        ...(typeof window === 'undefined' ? {} : {
          'Origin': typeof window !== 'undefined' ? window.location.origin : 'https://startup-business-three.vercel.app',
        }),
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
    const requestUrl = `${STRAPI_URL}${path}${queryString ? `?${queryString}` : ''}`;

    console.log(`🌐 Strapi API Request: ${requestUrl}`);
    console.log(`📋 Headers:`, mergedOptions.headers);

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    console.log(`📊 Response Status: ${response.status} ${response.statusText}`);

    // Handle response
    if (!response.ok) {
      console.error('❌ Strapi API Error:', response.statusText);
      console.error('🔗 Request URL:', requestUrl);
      console.error('📋 Response Headers:', Object.fromEntries(response.headers.entries()));

      // Try to get error details
      const errorText = await response.text();
      console.error('📝 Error Response:', errorText);

      throw new Error(`An error occurred please try again. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`✅ Strapi API Success: Retrieved ${Array.isArray(data?.data) ? data.data.length : 'N/A'} items`);
    return data as T;
  } catch (error) {
    console.error('❌ Error fetching from Strapi:', error);
    console.error('🔗 Attempted URL:', `${STRAPI_URL}${path}`);
    throw new Error('Could not fetch data from API. Please check your connection and Strapi server.');
  }
}
