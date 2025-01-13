import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, shouldUseCdn } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: shouldUseCdn === 'true',
});
