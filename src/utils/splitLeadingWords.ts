export const splitLeadingWords = (
  text: string,
  numberOfLeadingWords: number = 1,
): { leadingWords: string; rest: string } => {
  const words = text.split(' ');
  const leadingWords = words.slice(0, numberOfLeadingWords).join(' ');
  const rest = words.slice(numberOfLeadingWords).join(' ');

  return { leadingWords, rest };
};
