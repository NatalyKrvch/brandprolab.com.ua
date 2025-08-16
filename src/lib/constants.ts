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
  "diagnostic": *[_type == "diagnosticSection"][0],
  "footer": *[_type == "footerSection"][0]
}
`;

export const YOUTUBE_REGEX =
  /(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|v\/|shorts\/|live\/))([^&?/]+)/;
export const DASH_LIST_ITEM_SEPARATOR_REGEX = / - /g;
export const LIST_ITEM_PREFIX = '\n– ';

export const REVALIDATE = 3600;
export const ENDLESS_CAROUSEL_SPEED = 50;
export const SLIDER_RIGHT_SHIFT = 2;
export const SCROLL_TRIGGER_POSITION = 1000;
export const BURGER_ANIMATION_MS = 220;

export const MODAL_ROOT_ID = 'modal-root';

export const SCROLL_UP_TO_ID = 'header';

export const MENU_PANEL_ID = 'mobile-menu-panel';
