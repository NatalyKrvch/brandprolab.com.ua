import { useCallback, useState } from 'react';

export const useFlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setFlipped(prev => !prev);
  }, []);

  return {
    flipped,
    handleFlip,
  };
};
