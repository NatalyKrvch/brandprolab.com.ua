import { useMemo } from 'react';

import { Size } from '@/lib/types';
import { getIconComponentStyles } from '@/utils';

export const useIconStyles = (size: Size, isIconCentered: boolean) => {
  return useMemo(
    () => getIconComponentStyles(size, isIconCentered),
    [size, isIconCentered],
  );
};
