export const getSanityConfig = () => ({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-06',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true',
});
