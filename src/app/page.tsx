import { fetchDataFromSanity } from '@/utils';
import { ALL_DATA_QUERY, REVALIDATE } from '@/lib/constants';

export const revalidate = REVALIDATE;

export default async function Home() {
  try {
    const data = await fetchDataFromSanity(ALL_DATA_QUERY);

    return (
      <main>
        <h1 className="text-3xl font-bold">Landing Page</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
