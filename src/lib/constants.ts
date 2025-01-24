export const ALL_DATA_QUERY = `
{
  "header": *[_type == "header"][0],
  "hero": *[_type == "hero"][0],
  "cases": *[_type == "cases"][0],
  "services": *[_type == "services"][0],
  "testimonials": *[_type == "testimonialsSection"][0],
  "subscribe": *[_type == "subscribeSection"][0],
  "video": *[_type == "videoSection"][0],
  "expertise": *[_type == "expertiseSection"][0],
  "diagnostic": *[_type == "diagnosticSection"][0]
}
`;

export const REVALIDATE = 60;

// Test IDs
export const INTERNAL_LINK_TEST_ID = 'internal-link-test-id';
export const EXTERNAL_LINK_TEST_ID = 'external-link-test-id';
export const FULL_WIDTH_CONTAINER_TEST_ID = 'full-width-container-test-id';
export const LIMITED_WIDTH_CONTAINER_TEST_ID =
  'limited-width-container-test-id';
