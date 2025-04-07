import { createClient } from 'next-sanity';

import { getSanityConfig } from '../env';

const { apiVersion, dataset, projectId, useCdn } = getSanityConfig();

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
