export const getReadMoreText = (text: string, onClick?: () => void) => {
  const words = text.split(' ');

  if (words.length > 12) {
    return (
      <>
        {words.slice(0, 12).join(' ')}
        <span
          onClick={onClick}
          className="cursor-pointer text-gray-dark transition-colors duration-200 hover:text-gray-medium"
        >
          {' '}
          ...читати більше
        </span>
      </>
    );
  }

  return text;
};
