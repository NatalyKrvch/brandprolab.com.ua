export const splitLeadingWords = (
  text: string,
  numberOfLeadingWords: number = 1,
): { leadingWords: string; restWords: string } => {
  const words = text.split(' ');
  const leadingWords = words.slice(0, numberOfLeadingWords).join(' ');
  const restWords = words.slice(numberOfLeadingWords).join(' ');

  return { leadingWords, restWords };
};
