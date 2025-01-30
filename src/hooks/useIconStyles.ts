import { getIconComponentStyles } from '@/utils';
import { useMemo } from 'react';

export const useIconStyles = (
  size: 's' | 'm' | 'l',
  isIconCentered: boolean,
) => {
  return useMemo(
    () => getIconComponentStyles(size, isIconCentered),
    [size, isIconCentered],
  );
};
