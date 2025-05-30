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

export enum IconClassType {
  SERVICES = 'services',
  EXPERTISE = 'expertise',
  SOCIAL_MEDIA = 'social-media',
  SOCIAL_MEDIA_MAIN = 'social-media-main',
}
export const REVALIDATE = 60;
export const ENDLESS_CAROUSEL_SPEED = 50;
export const SLIDER_RIGHT_SHIFT = 2;
export const SLIDER_LEFT_SHIFT = -1;
export const AMOUNT_OF_TESTIMONIALS_WORDS = 15;
export const AMOUNT_OF_CASES_WORDS_DESKTOP = 13;
export const AMOUNT_OF_CASES_WORDS_TABLET = 9;
export const AMOUNT_OF_CASES_WORDS_MOBILE = 13;
