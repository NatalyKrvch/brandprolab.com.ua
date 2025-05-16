export const splitFirstWord = (
  text: string,
): { firstWord: string; rest: string } => {
  const [firstWord, ...restWords] = text.split(' ');
  return { firstWord, rest: restWords.join(' ') };
};
