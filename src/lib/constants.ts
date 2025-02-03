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

export const DESKTOP_MEDIA_QUERY = '(min-width: 1224px)';
export const TABLET_MEDIA_QUERY = '(min-width: 600px)';

export const REVALIDATE = 60;

export const ICON_OFFSET_COEFFICIENT = 3;

export const BACKGROUND_CIRCLE_SIZES = {
  s: {
    mobile: 36,
    tablet: 42,
    desktop: 48,
  },
  m: {
    mobile: 48,
    tablet: 56,
    desktop: 64,
  },
  l: {
    mobile: 68,
    tablet: 80,
    desktop: 108,
  },
};
export const ICON_SIZES = {
  s: {
    mobile: 36,
    tablet: 42,
    desktop: 48,
  },
  m: {
    mobile: 52,
    tablet: 60,
    desktop: 64,
  },
  l: {
    mobile: 64,
    tablet: 72,
    desktop: 96,
  },
};

// Test IDs
export const INTERNAL_LINK_TEST_ID = 'internal-link-test-id';
export const EXTERNAL_LINK_TEST_ID = 'external-link-test-id';
export const FULL_WIDTH_CONTAINER_TEST_ID = 'full-width-container-test-id';
export const LIMITED_WIDTH_CONTAINER_TEST_ID =
  'limited-width-container-test-id';
export const ICON_COMPONENT_TEST_ID = 'icon-component-test-id';
export const ICON_COMPONENT_IMAGE_TEST_ID = 'icon-component-image-test-id';
export const LABEL_COMPONENT_TEST_ID = 'label-component-test-id';
