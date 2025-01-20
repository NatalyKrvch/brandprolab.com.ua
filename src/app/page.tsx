import { ALL_DATA_QUERY } from '@/lib/constants';
import { fetchDataFromSanity } from '@/utils/fetchDataFromSanity';

export async function getStaticProps() {
  try {
    const data = await fetchDataFromSanity(ALL_DATA_QUERY);

    return {
      props: { data },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: { data: null },
    };
  }
}

export default function Home() {
  return <></>;
}
