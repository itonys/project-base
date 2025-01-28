import { IApiResponse } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<IApiResponse<T>> {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API call failed');
    }

    return {
      success: true,
      data: data as T
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

export const http = {
  get: <T>(url: string, options?: RequestInit) =>
    fetcher<T>(url, { ...options, method: 'GET' }),

  post: <T>(url: string, body: unknown, options?: RequestInit) =>
    fetcher<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body)
    }),

  put: <T>(url: string, body: unknown, options?: RequestInit) =>
    fetcher<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body)
    }),

  delete: <T>(url: string, options?: RequestInit) =>
    fetcher<T>(url, { ...options, method: 'DELETE' })
};
