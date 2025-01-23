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
