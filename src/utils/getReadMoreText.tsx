export const getReadMoreText = (
  text: string,
  amountOfWordsToDisplay: number,
  onClick?: () => void,
) => {
  const words = text.split(' ');

  if (words.length > amountOfWordsToDisplay) {
    return (
      <>
        {words.slice(0, amountOfWordsToDisplay).join(' ')}
        <span>...</span>
        <span
          onClick={onClick}
          className="cursor-pointer text-lg text-gray-dark transition-colors duration-200 hover:text-gray-medium"
        >
          Читати більше
        </span>
      </>
    );
  }

  return text;
};
