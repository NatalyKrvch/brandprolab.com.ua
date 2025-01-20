import { client } from '@/sanity/lib/client';

export async function fetchDataFromSanity<T>(query: string): Promise<T> {
  try {
    const data = await client.fetch<T>(query);
    return data;
  } catch (error) {
    console.error(`Error fetching data:`, error);
    throw new Error(`Failed to fetch data.`);
  }
}
