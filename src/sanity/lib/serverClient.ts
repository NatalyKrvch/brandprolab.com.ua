import 'server-only';

import { createClient } from '@sanity/client';

export const serverClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || '2025-01-06',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
  perspective: 'published',
});
