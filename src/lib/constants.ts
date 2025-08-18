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

export const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Вікторія Захарова',
  jobTitle: "Кар'єрна консультантка в IT",
  description:
    'Карʼєрна консультантка в IT, допомагає спеціалістам знаходити роботу та досягати нових цілей.',
  image: 'https://brandprolab.com.ua/og-image.jpg',
  url: 'https://brandprolab.com.ua',
  sameAs: [
    'https://www.linkedin.com/in/zakharovaviktoriia/',
    'https://t.me/Zakharovavika',
  ],
};

export const YOUTUBE_REGEX =
  /(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|v\/|shorts\/|live\/))([^&?/]+)/;
export const DASH_LIST_ITEM_SEPARATOR_REGEX = / - /g;
export const LIST_ITEM_PREFIX = '\n– ';

export const REVALIDATE = 3600;

export const MODAL_ROOT_ID = 'modal-root';

export const SCROLL_UP_TO_ID = 'header';

export const MENU_PANEL_ID = 'mobile-menu-panel';
