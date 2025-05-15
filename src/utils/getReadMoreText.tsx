export const getReadMoreText = (text: string, onClick?: () => void) => {
  const words = text.split(' ');

  if (words.length > 15) {
    return (
      <>
        {words.slice(0, 15).join(' ')}
        <span>...</span>
        <span
          onClick={onClick}
          className="cursor-pointer text-lg text-gray-dark transition-colors duration-200 hover:text-gray-medium"
        >
          {' '}
          Читати більше
        </span>
      </>
    );
  }

  return text;
};
