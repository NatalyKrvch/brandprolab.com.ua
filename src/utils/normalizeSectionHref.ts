export function normalizeSectionHref(link: string): string {
  if (!link) return '#';

  const id = link.trim().replace(/^#/, '').replace(/\s+/g, '-');

  return `#${id}`;
}
