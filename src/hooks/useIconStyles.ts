import { useMemo } from 'react';

import { getIconComponentStyles } from '@/utils';
import { Size } from '@/lib/types';

export const useIconStyles = (size: Size, isIconCentered: boolean) => {
  return useMemo(
    () => getIconComponentStyles(size, isIconCentered),
    [size, isIconCentered],
  );
};
