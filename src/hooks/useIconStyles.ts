import { useMemo } from 'react';

import { getIconComponentStyles } from '@/utils';

export const useIconStyles = (
  size: 's' | 'm' | 'l',
  isIconCentered: boolean,
) => {
  return useMemo(
    () => getIconComponentStyles(size, isIconCentered),
    [size, isIconCentered],
  );
};
