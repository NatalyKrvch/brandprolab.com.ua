import 'server-only';

import { unstable_cache } from 'next/cache';

import { ALL_DATA_QUERY, REVALIDATE } from '@/lib/constants';
import { serverClient } from '@/sanity/lib/serverClient';

export const getAllData = unstable_cache(
  async () => serverClient.fetch(ALL_DATA_QUERY),
  ['all-data-key'],
  {
    tags: [
      'all-data',
      'header',
      'hero',
      'cases',
      'services',
      'testimonials',
      'subscribe',
      'video',
      'expertise',
      'diagnostic',
      'footer',
    ],
    revalidate: REVALIDATE,
  },
);
