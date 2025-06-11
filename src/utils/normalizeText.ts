export const normalizeText = (input: string): string => {
  return input.trim().replace(/\s+/g, ' ');
};
