import { client } from '@/sanity/lib/client';

import { throwError } from './throwError';

export async function fetchDataFromSanity<T>(query: string): Promise<T> {
  try {
    return await client.fetch<T>(query);
  } catch {
    throwError(`Failed to fetch data.`);
  }
}
