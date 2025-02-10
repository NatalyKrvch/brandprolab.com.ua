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
export const ICON_COMPONENT_TEST_ID = 'icon-component-test-id';
export const ICON_COMPONENT_IMAGE_TEST_ID = 'icon-component-image-test-id';
export const LABEL_COMPONENT_TEST_ID = 'label-component-test-id';
export const BUTTON_TEST_ID = 'button-test-id';
export const UNDERLINED_TEXT_TEST_ID = 'underlined-text-test-id';
export const USER_BADGE_TEST_ID = 'user-badge-test-id';
export const USER_BADGE_IMAGE_TEST_ID = 'user-badge-image-test-id';
export const USER_BADGE_NAME_TEST_ID = 'user-badge-name-test-id';
export const TESTIMONIAL_CARD_TEST_ID = 'testimonials-card-test-id';
export const TESTIMONIAL_TEXT_TEST_ID = 'testimonials-text-test-id';
