import clsx from 'clsx';
import { useMemo } from 'react';

import { PAGINATION_DOT_TEST_ID } from '@/lib/testIDs';
import { generateRandomId } from '@/utils';

import { PaginationDotsProps } from './types';

const PaginationDots = ({
  total,
  current,
  onDotClick,
  className,
}: PaginationDotsProps) => {
  const uniqueId = useMemo(() => generateRandomId(), []);

  return (
    <div
      role="group"
      aria-label="Навігація каруселі"
      className={clsx('flex justify-center gap-2', className)}
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={`${uniqueId}-dot-${index}`}
          data-testid={`${PAGINATION_DOT_TEST_ID}-${index}`}
          aria-label={`Перейти до слайду номер ${index + 1}`}
          className={clsx(
            'duration-400 h-4 w-4 rounded-full transition-colors',
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
