import clsx from 'clsx';
import { useId } from 'react';

import { PaginationDotsProps } from './types';

const PaginationDots = ({
  total,
  current,
  onDotClick,
  className,
}: PaginationDotsProps) => {
  const uniqueId = useId();

  return (
    <div className={clsx('flex justify-center gap-2', className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={`${uniqueId}-dot-${index}`}
          className={clsx(
            'duration-400 h-2 w-2 rounded-full transition-colors',
            current === index
              ? 'bg-teal-dark'
              : 'border border-teal-dark bg-gray-light',
          )}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
